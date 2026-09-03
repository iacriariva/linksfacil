import { create } from 'zustand';
import { LinkData } from '@/types';

const STORAGE_KEY = 'linksfacil_links';

interface LinksStore {
  links: LinkData[];
  addLink: (link: LinkData) => void;
  updateLink: (id: string, link: Partial<LinkData>) => void;
  deleteLink: (id: string) => void;
  loadLinks: () => void;
  saveLinks: (links: LinkData[]) => void;
}

export const useLinksStore = create<LinksStore>((set, get) => ({
  links: [],

  addLink: (link) => {
    const current = get().links;
    const updated = [...current, link];
    set({ links: updated });
    get().saveLinks(updated);
  },

  updateLink: (id, updatedData) => {
    const current = get().links;
    const updated = current.map((link) =>
      link.id === id ? { ...link, ...updatedData } : link
    );
    set({ links: updated });
    get().saveLinks(updated);
  },

  deleteLink: (id) => {
    const current = get().links;
    const updated = current.filter((link) => link.id !== id);
    set({ links: updated });
    get().saveLinks(updated);
  },

  loadLinks: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          set({ links: JSON.parse(stored) });
        } catch (e) {
          console.error('Error loading links:', e);
        }
      }
    }
  },

  saveLinks: (links) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
    }
  },
}));
