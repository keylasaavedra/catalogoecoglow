"use client";

import { useState } from "react";
import { ProductoCard } from "./ProductoCard";
import { CONFIG } from "@/lib/config";
import { PRODUCTOS } from "@/lib/productos";
import { linkWhatsApp } from "@/lib/whatsapp";

/** Cuántos productos se muestran por categoría antes de "ver más" (Iyengar). */
const TOPE_POR_CATEGORIA = 6;

interface CatalogoGridProps {
  vendedorSlug?: string | null;
}

export function CatalogoGrid({ vendedorSlug }: CatalogoGridProps) {
  const [filtro, setFiltro] = useState<string>("Todas");
  const [expandidas, setExpandidas] = useState<Record<string, boolean>>({});

  // Une el orden de config con cualquier categoría real de los productos,
  // para que nunca quede un producto huérfano (catálogo vacío).
  const categoriasReales = Array.from(
    new Set([...CONFIG.categorias, ...PRODUCTOS.map((p) => p.categoria)])
  );
  const categorias = ["Todas", ...categoriasReales];
  const visibles = filtro === "Todas" ? categoriasReales : [filtro];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      {/* Filtro por categoría (se oculta si solo hay una categoría) */}
      {categoriasReales.length > 1 && (
      <div className="mb-10 flex flex-wrap justify-center gap-2 no-print">
        {categorias.map((cat) => {
          const activa = filtro === cat;
          return (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className="rounded-full border px-4 py-2 text-sm font-medium transition"
              style={
                activa
                  ? { background: "var(--marca)", color: "#fff", borderColor: "var(--marca)" }
                  : { borderColor: "var(--line-strong)", color: "var(--ink-soft)" }
              }
            >
              {cat}
            </button>
          );
        })}
      </div>
      )}

      {/* Secciones por categoría */}
      <div className="flex flex-col gap-14">
        {visibles.map((cat) => {
          const items = PRODUCTOS.filter((p) => p.categoria === cat).sort(
            (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
          );
          if (items.length === 0) return null;
          const abierta = expandidas[cat];
          const mostrados = abierta ? items : items.slice(0, TOPE_POR_CATEGORIA);

          return (
            <div key={cat}>
              <div className="mb-5 flex items-end justify-between gap-4">
                <h2 className="font-display text-3xl font-semibold">{cat}</h2>
                <span className="text-sm text-ink-mute">{items.length} opciones</span>
              </div>

              <div className="print-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mostrados.map((p) => (
                  <ProductoCard key={p.slug} producto={p} vendedorSlug={vendedorSlug} />
                ))}
              </div>

              {items.length > TOPE_POR_CATEGORIA && (
                <div className="mt-6 text-center no-print">
                  <button
                    onClick={() => setExpandidas((e) => ({ ...e, [cat]: !abierta }))}
                    className="btn-ghost"
                  >
                    {abierta ? "Ver menos" : `Ver las ${items.length}`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ¿Otro tono? Consulta de disponibilidad (tonos por encargo / otras marcas). */}
      <div
        className="mx-auto mt-16 max-w-md rounded-2xl border px-6 py-8 text-center no-print"
        style={{ borderColor: "var(--line-strong, rgba(23,32,29,.12))", background: "var(--surface, #fff)" }}
      >
        <p className="font-display text-xl font-semibold">¿Buscas otro tono?</p>
        <p className="mt-2 text-sm text-ink-soft">
          Manejamos más colores. Escríbenos y con gusto te confirmamos disponibilidad.
        </p>
        <a
          href={linkWhatsApp(
            CONFIG.marca.whatsappPrincipal,
            "Hola, vi el catálogo y quiero consultar si tienen otro tono disponible."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-marca btn-wa mt-5 inline-flex items-center justify-center gap-2"
        >
          Consultar disponibilidad
        </a>
      </div>
    </section>
  );
}
