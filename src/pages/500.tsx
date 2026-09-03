import React from 'react';
import Head from 'next/head';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Erro interno do servidor</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-canvas px-5">
        <div className="w-full max-w-lg rounded-[32px] bg-white p-8 text-center shadow-card sm:p-12">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-primary-light text-primary">
            <RefreshCw size={28} />
          </div>
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.18em] text-primary">Erro 500</p>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-ink">Algo não saiu como esperado</h1>
          <p className="mb-8 text-gray-500">Tente voltar ao início e carregar novamente.</p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-white transition hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20"
          >
            <ArrowLeft size={18} />
            Voltar ao início
          </a>
        </div>
      </div>
    </>
  );
}
