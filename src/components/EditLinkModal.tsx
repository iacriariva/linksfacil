import React, { useEffect, useState } from 'react';
import { LinkData } from '@/types';
import { useLinksStore } from '@/store/linksStore';
import { getFavicon, validateUrl, normalizeUrl } from '@/lib/urlUtils';
import { X } from 'lucide-react';

interface EditLinkModalProps {
  isOpen: boolean;
  link: LinkData | null;
  onClose: () => void;
}

export function EditLinkModal({
  isOpen,
  link,
  onClose,
}: EditLinkModalProps) {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const updateLink = useLinksStore((state) => state.updateLink);

  useEffect(() => {
    if (link) {
      setUrl(link.url);
      setName(link.name);
      setError('');
    }
  }, [link, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!link) return;

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

      updateLink(link.id, {
        url: normalizedUrl,
        name: name.trim(),
        favicon,
        updatedAt: new Date().toISOString(),
      });

      onClose();
    } catch (err) {
      setError('Erro ao atualizar link');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !link) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            Editar Link
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
              htmlFor="edit-link-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome
            </label>

            <input
              id="edit-link-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="edit-link-url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL
            </label>

            <input
              id="edit-link-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
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
              {loading ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}