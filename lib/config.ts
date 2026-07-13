import type { Config } from "./tipos";
// Configuración de EcoGlow — Catálogo Vivo.
export const CONFIG: Config = {
  marca: {
    negocio: "EcoGlow",
    descripcion: "Champú tinte para canas",
    logo: "/logo.png",
    primario: "#0a2b32",   // verde petróleo → textos y acentos legibles
    secundario: "#c7f34a", // lima → resaltes
    fondo: "claro",
    whatsappPrincipal: "573214990297",
    ciudad: "Pitalito, Huila",
    enlace: "ecoglow.colombia",
  },
  vendedores: [
    { slug: "tienda", nombre: "EcoGlow", whatsapp: "573214990297" },
  ],
  categorias: ["Champú tinte"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};
