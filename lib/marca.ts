import type { CSSProperties } from "react";
import type { Marca } from "./tipos";

/**
 * Convierte los colores de la marca en variables CSS que el catálogo usa
 * en todos lados (--marca y --marca-2). Se aplica en el <html> del layout,
 * así el alumno solo cambia dos colores en config y todo se repinta.
 */
export function estiloMarca(marca: Marca): CSSProperties {
  return {
    ["--marca" as string]: marca.primario,
    ["--marca-2" as string]: marca.secundario,
  };
}

/** Clase de tema para el <body> según el fondo elegido en la marca. */
export function claseTema(marca: Marca): string {
  return marca.fondo === "oscuro" ? "tema-oscuro" : "tema-claro";
}

/** Usuario de Instagram limpio (sin @ ni URL) a partir de `marca.enlace`. */
export function usuarioInstagram(enlace: string): string {
  return enlace.replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/^@/, "");
}

/** Link directo al perfil de Instagram a partir de `marca.enlace`. */
export function urlInstagram(enlace: string): string {
  return `https://instagram.com/${usuarioInstagram(enlace)}`;
}
