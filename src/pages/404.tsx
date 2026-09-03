import React from 'react';
import Head from 'next/head';
import { ArrowLeft, Link2 } from 'lucide-react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-canvas px-5">
        <div className="w-full max-w-lg rounded-[32px] bg-white p-8 text-center shadow-card sm:p-12">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-primary-light text-primary">
            <Link2 size={30} />
          </div>
          <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.18em] text-primary">Erro 404</p>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-ink">Página não encontrada</h1>
          <p className="mb-8 text-gray-500">Este endereço não existe ou foi movido.</p>
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
