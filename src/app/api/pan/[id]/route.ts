import { NextResponse } from "next/server";
import { getProductoById, getRecetaByProductoId } from "@/lib/sheets";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const producto = await getProductoById(id);
  if (!producto) {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }

  // Get recipe notes (optional — not all products have a recipe)
  const receta = await getRecetaByProductoId(id);

  // Return ONLY non-sensitive fields — no prices, no costs, no client data
  return NextResponse.json({
    nombre: producto.nombre,
    categoria: producto.categoria,
    notas: receta?.notas ?? "",
  });
}
