"use client";

import { CreditCard, Lock } from "lucide-react";
import { useState } from "react";

export default function PaymentSection() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-5 h-5 text-primary" />
        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
          Payment Terminal
        </h3>
        <div className="flex items-center gap-1 ml-auto">
          <Lock className="w-3 h-3 text-green-500" />
          <span className="font-mono text-[10px] text-green-500 uppercase">
            Encrypted
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted block mb-2">
            Cardholder Designation
          </label>
          <input
            type="text"
            placeholder="FULL NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-on-surface font-mono uppercase placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50"
          />
        </div>

        <div>
          <label className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted block mb-2">
            Card Sequence
          </label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-on-surface font-mono placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted block mb-2">
              Expiration
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-on-surface font-mono placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-wider text-on-surface-muted block mb-2">
              Security Code
            </label>
            <input
              type="text"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-on-surface font-mono placeholder:text-on-surface-dim focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
