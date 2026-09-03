import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { LinkCard } from '@/components/LinkCard';
import { AddLinkModal } from '@/components/AddLinkModal';
import { EditLinkModal } from '@/components/EditLinkModal';
import { useLinksStore } from '@/store/linksStore';
import { LinkData } from '@/types';
import { Plus, Link2, ShieldCheck, Smartphone } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<LinkData | null>(null);
  const links = useLinksStore((state) => state.links);
  const loadLinks = useLinksStore((state) => state.loadLinks);

  useEffect(() => {
    loadLinks();
    setMounted(true);
  }, [loadLinks]);

  const handleEditClick = (link: LinkData) => {
    setEditingLink(link);
    setIsEditModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>LinksFácil - Gerenciador de Links</title>
        <meta name="description" content="Gerenciador de links rápido e fácil com favicons" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#820AD1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="min-h-screen bg-canvas">
        <Header />

        <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
          <section className="mb-10 flex flex-col gap-7 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                <Link2 size={14} />
                Minha coleção
              </span>
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl">
                Tudo que importa,
                <span className="block text-primary">a um toque.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Organize seus sites favoritos em um espaço simples, rápido e só seu.
              </p>
            </div>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/20 sm:w-auto"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition group-hover:rotate-90">
                <Plus size={18} strokeWidth={2.5} />
              </span>
              Adicionar Link
            </button>
          </section>

          <section className="mb-8 grid grid-cols-3 gap-2 rounded-2xl border border-black/[0.04] bg-white p-3 shadow-sm sm:max-w-xl sm:gap-4 sm:p-4">
            <div className="flex items-center gap-2 rounded-xl px-2 py-2 sm:px-3">
              <ShieldCheck className="hidden text-primary sm:block" size={20} />
              <div>
                <strong className="block text-sm text-ink">Privado</strong>
                <span className="hidden text-xs text-gray-500 sm:block">Salvo no aparelho</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-x border-gray-100 px-3 py-2 sm:px-4">
              <Smartphone className="hidden text-primary sm:block" size={20} />
              <div>
                <strong className="block text-sm text-ink">PWA</strong>
                <span className="hidden text-xs text-gray-500 sm:block">Instalável</span>
              </div>
            </div>
            <div className="px-2 py-2 sm:px-3">
              <strong className="block text-sm text-ink">{links.length}</strong>
              <span className="text-xs text-gray-500">{links.length === 1 ? 'link salvo' : 'links salvos'}</span>
            </div>
          </section>

          {/* Links Grid */}
          {mounted ? (
            links.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {links.map((link) => (
                  <LinkCard
                    key={link.id}
                    link={link}
                    onEdit={handleEditClick}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[32px] border border-dashed border-primary/25 bg-white px-6 py-16 text-center sm:py-20">
                <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-primary-light text-primary">
                  <Link2 size={36} strokeWidth={2} />
                </div>
                <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-ink">
                  Sua coleção começa aqui
                </h2>
                <p className="mx-auto mb-7 max-w-md text-gray-500">
                  Adicione o primeiro endereço e deixe seus sites favoritos sempre por perto.
                </p>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-bold text-white transition hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
                >
                  <Plus size={18} />
                  Adicionar Primeiro Link
                </button>
              </div>
            )
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-[260px] animate-pulse rounded-[28px] bg-white" />
              ))}
            </div>
          )}
        </main>

        <footer className="mx-auto max-w-6xl px-5 pb-8 text-center text-xs text-gray-400 sm:px-8 sm:text-left">
          LinksFácil · seus links ficam salvos neste dispositivo
        </footer>

        {/* Modals */}
        <AddLinkModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
        <EditLinkModal
          isOpen={isEditModalOpen}
          link={editingLink}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingLink(null);
          }}
        />
      </div>
    </>
  );
}
