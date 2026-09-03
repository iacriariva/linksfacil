import React, { useState } from 'react';
import { LinkData } from '@/types';
import { useLinksStore } from '@/store/linksStore';
import { Edit2, Trash2, ExternalLink } from 'lucide-react';

interface LinkCardProps {
  link: LinkData;
  onEdit: (link: LinkData) => void;
}

export function LinkCard({ link, onEdit }: LinkCardProps) {
  const deleteLink = useLinksStore((state) => state.deleteLink);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm(`Tem certeza que deseja deletar "${link.name}"?`)) {
      setDeleting(true);
      try {
        deleteLink(link.id);
      } finally {
        setDeleting(false);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex items-center gap-4 group">
      {/* Favicon */}
      <div className="flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={link.favicon}
          alt={link.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-md object-cover bg-gray-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect fill="%23e5e7eb" width="48" height="48"/%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="%239ca3af" font-family="system-ui"%3E?%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{link.name}</h3>
        <p className="text-sm text-gray-500 truncate">{link.url}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition"
          title="Acessar"
        >
          <ExternalLink size={18} />
        </a>
        <button
          onClick={() => onEdit(link)}
          className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg transition"
          title="Editar"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          title="Deletar"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
