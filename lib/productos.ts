import type { Producto } from "./tipos";

/**
 * ================================================================
 *  PRODUCTOS DE ECOGLOW — Champú tinte para canas (5 tonos).
 *
 *  Destacado (sale primero, sello "El más pedido"): Negro Natural.
 *  Escasez: solo en los tonos con poco stock (los de 5 y 3 unidades).
 *  El Negro (28 disp.) va sin sello: no es escaso y así la urgencia
 *  de los demás se ve creíble.
 *  Precio $70.000 (antes $110.000) · Bono: la guía · Garantía: contra entrega.
 * ================================================================
 */
const EXTRAS = [
  "Listo para usar, sin mezclas",
  "No mancha la piel",
  "Rinde para varias aplicaciones",
];

export const PRODUCTOS: Producto[] = [
  {
    slug: "negro-natural",
    nombre: "Champú Tinte Negro Natural",
    categoria: "Champú tinte",
    imagen: "/productos/natural-black.jpg",
    paraQuien:
      "Para mujeres y hombres que quieren cubrir sus canas de forma práctica.",
    beneficio:
      "Luce un negro natural y un cabello suave, brillante y sin canas.",
    caracteristicas: [
      "Te ahorras el tiempo y el dinero de ir al salón",
      "Lo aplicas en casa, en 3 pasos sencillos",
      "Resultado real y visible en solo 20 minutos",
    ],
    extras: EXTRAS,
    precio: "$70.000",
    precioAntes: "$110.000",
    facilidades: "Te llega a casa a toda Colombia",
    bono: "La guía de aplicación paso a paso",
    garantia: "Pagas contra entrega: solo pagas cuando el pedido llega a tus manos",
    prueba: '"Estoy fascinada con este champú, lo amo." — Gloria Baena',
    destacado: true, // el principal. Sale primero, con el sello "El más pedido".
  },
  {
    slug: "castano-oscuro",
    nombre: "Champú Tinte Castaño Oscuro",
    categoria: "Champú tinte",
    imagen: "/productos/dark-brown.jpg",
    paraQuien:
      "Para mujeres y hombres que quieren cubrir sus canas de forma práctica.",
    beneficio:
      "Luce un castaño oscuro natural y un cabello suave, brillante y sin canas.",
    caracteristicas: [
      "Te ahorras el tiempo y el dinero de ir al salón",
      "Lo aplicas en casa, en 3 pasos sencillos",
      "Resultado real y visible en solo 20 minutos",
    ],
    extras: EXTRAS,
    precio: "$70.000",
    precioAntes: "$110.000",
    facilidades: "Te llega a casa a toda Colombia",
    bono: "La guía de aplicación paso a paso",
    garantia: "Pagas contra entrega: solo pagas cuando el pedido llega a tus manos",
    escasez: { tipo: "unidades", valor: "5 unidades" },
  },
  {
    slug: "chocolate-oscuro",
    nombre: "Champú Tinte Chocolate Oscuro",
    categoria: "Champú tinte",
    imagen: "/productos/dark-chocolate.jpg",
    paraQuien:
      "Para mujeres y hombres que quieren cubrir sus canas de forma práctica.",
    beneficio:
      "Luce un chocolate oscuro intenso y un cabello suave, brillante y sin canas.",
    caracteristicas: [
      "Te ahorras el tiempo y el dinero de ir al salón",
      "Lo aplicas en casa, en 3 pasos sencillos",
      "Resultado real y visible en solo 30 minutos",
    ],
    extras: EXTRAS,
    precio: "$70.000",
    precioAntes: "$110.000",
    facilidades: "Te llega a casa a toda Colombia",
    bono: "La guía de aplicación paso a paso",
    garantia: "Pagas contra entrega: solo pagas cuando el pedido llega a tus manos",
    escasez: { tipo: "unidades", valor: "3 unidades" },
  },
  {
    slug: "castano-claro",
    nombre: "Champú Tinte Castaño Claro",
    categoria: "Champú tinte",
    imagen: "/productos/light-brown.jpg",
    paraQuien:
      "Para mujeres y hombres que quieren cubrir sus canas de forma práctica.",
    beneficio:
      "Luce un castaño claro natural y un cabello suave, brillante y sin canas.",
    caracteristicas: [
      "Te ahorras el tiempo y el dinero de ir al salón",
      "Lo aplicas en casa, en 3 pasos sencillos",
      "Resultado real y visible en solo 20 minutos",
    ],
    extras: EXTRAS,
    precio: "$70.000",
    precioAntes: "$110.000",
    facilidades: "Te llega a casa a toda Colombia",
    bono: "La guía de aplicación paso a paso",
    garantia: "Pagas contra entrega: solo pagas cuando el pedido llega a tus manos",
    escasez: { tipo: "unidades", valor: "5 unidades" },
  },
  {
    slug: "castano-dorado",
    nombre: "Champú Tinte Castaño Dorado",
    categoria: "Champú tinte",
    imagen: "/productos/golden-brown.jpg",
    paraQuien:
      "Para mujeres y hombres que quieren cubrir sus canas de forma práctica.",
    beneficio:
      "Luce un castaño dorado natural y un cabello suave, brillante y sin canas.",
    caracteristicas: [
      "Te ahorras el tiempo y el dinero de ir al salón",
      "Lo aplicas en casa, en 3 pasos sencillos",
      "Resultado real y visible en solo 20 minutos",
    ],
    extras: EXTRAS,
    precio: "$70.000",
    precioAntes: "$110.000",
    facilidades: "Te llega a casa a toda Colombia",
    bono: "La guía de aplicación paso a paso",
    garantia: "Pagas contra entrega: solo pagas cuando el pedido llega a tus manos",
    escasez: { tipo: "unidades", valor: "5 unidades" },
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
