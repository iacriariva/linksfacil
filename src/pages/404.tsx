import React from 'react';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Página não encontrada</p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium inline-block"
          >
            Voltar para Início
          </a>
        </div>
      </div>
    </>
  );
}
