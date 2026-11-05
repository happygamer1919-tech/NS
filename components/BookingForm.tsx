"use client";

import { useActionState } from "react";
import { submitBooking } from "@/app/marcar/actions";
import { site } from "@/lib/content";

const field = "mt-1 block h-12 w-full rounded-xl border border-line bg-white px-4 text-base";

/** Adapter B UI. The server action calls webhookAdapter.submit, which is stubbed (no network). */
export function BookingForm() {
  const [state, action, pending] = useActionState(submitBooking, null);
  return (
    <form action={action} className="grid max-w-xl gap-5" noValidate>
      <label className="block">
        <span className="font-medium">Nome</span>
        <input name="name" autoComplete="name" required className={field} />
      </label>
      <label className="block">
        <span className="font-medium">Telemóvel (WhatsApp)</span>
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+351 9xx xxx xxx" className={field} />
      </label>
      <label className="block">
        <span className="font-medium">Serviço</span>
        <select name="serviceId" required className={field} defaultValue="">
          <option value="" disabled>Escolha</option>
          {site.services.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
      </label>
      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="font-medium">Dia</span>
          <input name="preferredDate" type="date" required className={field} />
        </label>
        <label className="block">
          <span className="font-medium">Hora</span>
          <select name="preferredTime" className={field} defaultValue="">
            <option value="">Qualquer</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
          </select>
        </label>
      </div>
      <label className="block">
        <span className="font-medium">Nota (opcional)</span>
        <textarea name="notes" rows={3} className="mt-1 block w-full rounded-xl border border-line bg-white p-4 text-base" />
      </label>
      <label className="flex items-start gap-3">
        <input type="checkbox" name="marketingConsent" className="mt-1 h-5 w-5 accent-clay" />
        <span className="text-sm">{site.booking.consentLabel}</span>
      </label>
      <p className="text-xs text-muted">
        Os seus dados são usados só para gerir a marcação. Veja a <a href="/privacidade" className="underline">Política de Privacidade</a>.
      </p>
      <button type="submit" disabled={pending} className="h-12 rounded-full bg-clay font-semibold text-white disabled:opacity-60">
        {pending ? "A enviar..." : "Pedir marcação"}
      </button>
      {state && (
        <p role="status" className={`rounded-xl p-4 ${state.ok ? "bg-linen" : "bg-[#fde8e4] text-[#7a2216]"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
