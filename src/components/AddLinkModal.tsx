import React, { useState } from 'react';
import { LinkData } from '@/types';
import { useLinksStore } from '@/store/linksStore';
import { getFavicon, validateUrl, normalizeUrl } from '@/lib/urlUtils';
import { X } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            Adicionar Link
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="link-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>

            <input
              id="link-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex.: YouTube"
              disabled={loading}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="link-url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL
            </label>

            <input
              id="link-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Ex.: youtube.com ou https://youtube.com"
              disabled={loading}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Adicionando...' : 'Adicionar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}