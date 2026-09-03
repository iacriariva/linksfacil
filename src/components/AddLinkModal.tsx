import React, { useState } from 'react';
import { LinkData } from '@/types';
import { useLinksStore } from '@/store/linksStore';
import { getFavicon, validateUrl, normalizeUrl } from '@/lib/urlUtils';
import { AlertCircle, Globe2, Link2, Loader2, Type, X } from 'lucide-react';

export function AddLinkModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const addLink = useLinksStore((state) => state.addLink);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!url.trim() || !name.trim()) {
      setError('URL e nome são obrigatórios');
      return;
    }

    const normalizedUrl = normalizeUrl(url.trim());

    if (!validateUrl(normalizedUrl)) {
      setError('URL inválida');
      return;
    }

    setLoading(true);

    try {
      const favicon = await getFavicon(normalizedUrl);
      const now = new Date().toISOString();

      const newLink: LinkData = {
        id: Date.now().toString(),
        url: normalizedUrl,
        name: name.trim(),
        favicon,
        createdAt: now,
        updatedAt: now,
      };

      addLink(newLink);
      setUrl('');
      setName('');
      onClose();
    } catch (err) {
      setError('Erro ao adicionar link');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#190523]/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-link-title"
    >
      <div className="modal-enter w-full max-w-lg rounded-t-[32px] bg-white shadow-2xl sm:rounded-[32px]">
        <div className="flex items-start justify-between px-6 pb-5 pt-7 sm:px-8 sm:pt-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-light text-primary">
              <Link2 size={23} />
            </div>
            <div>
              <h2 id="add-link-title" className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                Novo link
              </h2>
              <p className="mt-0.5 text-sm text-gray-500">Salve um novo favorito.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-primary-light hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 px-6 pb-7 sm:px-8 sm:pb-8">
          {error && (
            <div className="flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="link-name"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Nome
            </label>
            <div className="relative">
              <Type className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />
              <input
                id="link-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex.: YouTube"
                disabled={loading}
                autoFocus
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-ink outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 disabled:opacity-50"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="link-url"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Endereço do site
            </label>
            <div className="relative">
              <Globe2 className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={19} />
              <input
                id="link-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="youtube.com"
                disabled={loading}
                inputMode="url"
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-ink outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 rounded-full border border-gray-200 px-5 py-3.5 font-bold text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? 'Adicionando...' : 'Adicionar link'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
