import { google } from "googleapis";

// Tab names (same as MOGAZA)
const TABS = {
  PRODUCTOS: "Productos",
  RECETAS: "Recetas",
} as const;

// Minimal types — only the fields we expose publicly
export interface ProductoPublico {
  id: string;
  nombre: string;
  categoria: string;
}

export interface RecetaPublica {
  id: string;
  nombre: string;
  producto_id: string;
  notas: string;
}

function getSheetsClient() {
  const rawKey = process.env.GOOGLE_PRIVATE_KEY || "";
  const privateKey = rawKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    // Read-only scope — this project never writes to the sheet
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  return google.sheets({ version: "v4", auth });
}

function getSheetId(): string {
  return process.env.GOOGLE_SHEET_ID || "";
}

async function readTab(tab: string): Promise<string[][]> {
  if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    return [];
  }

  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: getSheetId(),
    range: `${tab}!A:Z`,
  });

  return (res.data.values as string[][] | null | undefined) ?? [];
}

function parseRows<T>(rows: string[][], fields: string[]): T[] {
  if (rows.length < 2) return [];
  const headers = rows[0];
  const fieldSet = new Set(fields);

  return rows.slice(1).map((row) => {
    const obj: Record<string, string> = {};
    for (const field of fields) {
      const idx = headers.indexOf(field);
      obj[field] = idx >= 0 ? (row[idx] ?? "") : "";
    }
    return obj as T;
  });
}

export async function getProductoById(id: string): Promise<ProductoPublico | null> {
  const rows = await readTab(TABS.PRODUCTOS);
  const productos = parseRows<ProductoPublico>(rows, ["id", "nombre", "categoria"]);
  return productos.find((p) => p.id === id) ?? null;
}

export async function getRecetaByProductoId(productoId: string): Promise<RecetaPublica | null> {
  const rows = await readTab(TABS.RECETAS);
  const recetas = parseRows<RecetaPublica>(rows, ["id", "nombre", "producto_id", "notas"]);
  return recetas.find((r) => r.producto_id === productoId) ?? null;
}
