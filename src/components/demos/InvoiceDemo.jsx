import { useState } from "react";
import { DemoFrame } from "./DemoFrame";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-fg-muted">{label}</span>
      {children}
    </label>
  );
}

const INPUT =
  "w-full rounded-md border border-hairline bg-raised px-3.5 py-2.5 text-base text-fg outline-none transition-colors duration-fast focus:border-accent";

export default function InvoiceDemo() {
  const [client, setClient] = useState("Sample Client Co.");
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(85);
  const total = Math.max(0, hours) * Math.max(0, rate);
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <DemoFrame title="Invoice generator">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <Field label="Client">
            <input className={INPUT} value={client} maxLength={40} onChange={(event) => setClient(event.target.value)} />
          </Field>
          <Field label="Hours">
            <input
              className={INPUT}
              type="number"
              inputMode="decimal"
              min="0"
              max="999"
              value={hours}
              onChange={(event) => setHours(Number(event.target.value))}
            />
          </Field>
          <Field label="Hourly rate (USD)">
            <input
              className={INPUT}
              type="number"
              inputMode="decimal"
              min="0"
              max="9999"
              value={rate}
              onChange={(event) => setRate(Number(event.target.value))}
            />
          </Field>
        </div>

        <div className="surface-light rounded-md p-6 text-sm shadow-float" aria-live="polite">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-title font-semibold text-ink">Invoice</p>
              <p className="mt-1 text-ink-muted">{today}</p>
            </div>
            <p className="inline-flex items-center gap-1.5 rounded-pill bg-ink/5 px-3 py-1 text-micro text-ink-muted">
              <svg aria-hidden="true" viewBox="0 0 12 12" className="size-3 text-accent-fill" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 6.5l2.2 2.2 4.8-5" />
              </svg>
              Generated in 0.2 s
            </p>
          </div>
          <dl className="mt-8 space-y-3">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-muted">Bill to</dt>
              <dd className="truncate font-medium text-ink">{client || "Client name"}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-hairline pt-3">
              <dt className="text-ink-muted">Consulting, {hours || 0} hrs at {money.format(rate || 0)}</dt>
              <dd className="tabular text-ink">{money.format(total)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-hairline-strong pt-3 text-base">
              <dt className="font-semibold text-ink">Total due</dt>
              <dd className="tabular font-semibold text-ink">{money.format(total)}</dd>
            </div>
          </dl>
        </div>
      </div>
    </DemoFrame>
  );
}
