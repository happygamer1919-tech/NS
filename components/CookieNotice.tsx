"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "vm-cookie-notice-v1";

/**
 * Informative notice only: the site sets no tracking or advertising cookies.
 * The external booking page (if embedded) may set strictly necessary cookies.
 */
export function CookieNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      setShow(localStorage.getItem(KEY) !== "ok");
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  return (
    <div role="region" aria-label="Aviso de cookies" className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-md rounded-2xl border border-line bg-porcelain p-4 text-sm shadow-xl md:bottom-24 md:left-6 md:right-auto">
      <p>
        Este site não usa cookies de publicidade nem de estatística. A agenda online, quando aberta, pode usar cookies necessários.{" "}
        <Link href="/privacidade#cookies" className="underline underline-offset-4">Saber mais</Link>
      </p>
      <button
        type="button"
        onClick={() => {
          try { localStorage.setItem(KEY, "ok"); } catch {}
          setShow(false);
        }}
        className="mt-3 h-11 rounded-full bg-ink px-5 font-semibold text-porcelain"
      >
        Entendi
      </button>
    </div>
  );
}
