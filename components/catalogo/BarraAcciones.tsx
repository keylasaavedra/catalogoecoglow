"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { CONFIG } from "@/lib/config";
import { construirMensaje, linkWhatsApp, resolverVendedor } from "@/lib/whatsapp";

/** Barra bajo el encabezado: compartir, descargar en PDF y contactar por WhatsApp. */
export function BarraAcciones({ vendedorSlug }: { vendedorSlug?: string | null }) {
  const [copiado, setCopiado] = useState(false);

  const vendedor = resolverVendedor(CONFIG, vendedorSlug);
  const numero = vendedor ? vendedor.whatsapp : CONFIG.marca.whatsappPrincipal;
  const mensajeContacto = construirMensaje(
    "{saludo}vi tu catálogo y quiero más información.",
    "",
    vendedor?.nombre.split(" ")[0]
  );
  const linkContacto = linkWhatsApp(numero, mensajeContacto);

  async function compartir() {
    const url = typeof window !== "undefined" ? window.location.href.split("?")[0] : "";
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
        return;
      } catch {
        /* el usuario canceló: seguimos y copiamos */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* sin portapapeles disponible */
    }
  }

  return (
    <div className="mx-auto mb-4 flex max-w-6xl flex-wrap items-center justify-center gap-3 px-5 no-print">
      <button onClick={compartir} className="btn-marca">
        <Icon name={copiado ? "lucide:check" : "lucide:share-2"} size={18} />
        {copiado ? "¡Liga copiada!" : "Compartir catálogo"}
      </button>
      <button onClick={() => window.print()} className="btn-ghost">
        <Icon name="lucide:download" size={18} /> Descargar en PDF
      </button>
      <a href={linkContacto} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <Icon name="logos:whatsapp-icon" size={18} /> Contáctanos
      </a>
    </div>
  );
}
