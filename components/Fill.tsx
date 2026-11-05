import { Fragment } from "react";

/**
 * Renders a content string and highlights every [PREENCHER...] marker,
 * so missing facts are visible on the preview and never look final.
 */
export function Fill({ text }: { text: string }) {
  const parts = text.split(/(\[PREENCHER[^\]]*\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[PREENCHER") ? (
          <mark key={i} className="fill" title="Conteúdo por confirmar">
            {p}
          </mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}
