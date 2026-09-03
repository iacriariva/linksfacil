"use client";

import { useEffect } from 'react';

export function useServiceWorker() {
  useEffect(() => {
    // Registra o Service Worker quando a página é carregada
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('✅ Service Worker registrado:', registration);
        })
        .catch((error) => {
          console.error('❌ Erro ao registrar Service Worker:', error);
        });
    }
  }, []);
}
