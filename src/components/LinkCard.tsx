import React, { useState } from 'react';
import { LinkData } from '@/types';
import { useLinksStore } from '@/store/linksStore';
import { Edit3, Trash2, ArrowUpRight } from 'lucide-react';
import { extractDomain } from '@/lib/urlUtils';

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
    <article className="group relative flex min-h-[168px] flex-col rounded-[28px] border border-black/[0.04] bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-6">
      <div className="mb-7 flex items-start justify-between gap-4">
      {/* Favicon */}
        <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-primary-light ring-1 ring-primary/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={link.favicon}
          alt={link.name}
          width={48}
          height={48}
            className="h-8 w-8 rounded-lg object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect rx="12" fill="%23F3E7FA" width="48" height="48"/%3E%3Ctext x="50%25" y="54%25" dominant-baseline="middle" text-anchor="middle" font-size="23" font-weight="700" fill="%23820AD1" font-family="system-ui"%3E?%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onEdit(link)}
            className="grid h-10 w-10 place-items-center rounded-full text-gray-500 transition hover:bg-primary-light hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            title="Editar link"
            aria-label={`Editar ${link.name}`}
          >
            <Edit3 size={18} />
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="grid h-10 w-10 place-items-center rounded-full text-gray-500 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:cursor-not-allowed disabled:opacity-50"
            title="Excluir link"
            aria-label={`Excluir ${link.name}`}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-auto min-w-0">
        <h3 className="truncate text-lg font-bold tracking-[-0.02em] text-ink">
          {link.name}
        </h3>
        <p className="mt-1 truncate text-sm text-gray-500">
          {extractDomain(link.url)}
        </p>
      </div>

      <div className="mt-5 border-t border-gray-100 pt-4">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl text-sm font-bold text-primary outline-none transition hover:text-primary-dark focus:ring-2 focus:ring-primary/30"
          title="Abrir link"
        >
          Acessar site
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-light transition group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight size={17} />
          </span>
        </a>
      </div>
    </article>
  );
}
