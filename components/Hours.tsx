import { site } from "@/lib/content";

export function Hours({ compact = false }: { compact?: boolean }) {
  return (
    <table className={compact ? "w-full text-sm" : "w-full"}>
      <caption className="sr-only">Horário</caption>
      <tbody>
        {site.hours.map((h) => (
          <tr key={h.day} className="border-b border-line/70 last:border-0">
            <th scope="row" className="py-1.5 text-left font-normal">{h.day}</th>
            <td className="py-1.5 text-right tabular-nums">
              {h.open ? `${h.open} às ${h.close}` : <span className="text-muted">Fechado</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
