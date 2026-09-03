import React from 'react';
import { Link2, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#4C0677] via-[#820AD1] to-[#9D29E8] text-white">
      <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-fuchsia-300/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-primary shadow-lg shadow-purple-950/20">
            <Link2 size={23} strokeWidth={2.6} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">
              LinksFácil
            </h1>
            <p className="hidden text-sm text-white/70 sm:block">
              Seus favoritos, do seu jeito.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm sm:text-sm">
          <Sparkles size={15} />
          Simples e rápido
        </div>
      </div>
    </header>
  );
}
