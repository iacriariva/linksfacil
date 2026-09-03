import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { LinkCard } from '@/components/LinkCard';
import { AddLinkModal } from '@/components/AddLinkModal';
import { EditLinkModal } from '@/components/EditLinkModal';
import { useLinksStore } from '@/store/linksStore';
import { LinkData } from '@/types';
import { Plus } from 'lucide-react';

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
        <meta name="theme-color" content="#3B82F6" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="container mx-auto px-4 py-8">
          {/* Button */}
          <div className="mb-8">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium shadow-lg hover:shadow-xl"
            >
              <Plus size={20} />
              Adicionar Link
            </button>
          </div>

          {/* Links Grid */}
          {mounted ? (
            links.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {links.map((link) => (
                  <LinkCard
                    key={link.id}
                    link={link}
                    onEdit={handleEditClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔗</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Nenhum link adicionado
                </h2>
                <p className="text-gray-600 mb-6">
                  Comece adicionando seus primeiros links para gerenciá-los aqui
                </p>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
                >
                  Adicionar Primeiro Link
                </button>
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <div className="animate-pulse text-gray-400">Carregando...</div>
            </div>
          )}
        </main>

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
