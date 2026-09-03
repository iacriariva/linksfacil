// Integrar o hook em _app.tsx
// Este é um exemplo de como usar o hook

import { useServiceWorker } from '@/hooks/useServiceWorker';

export function MyComponent() {
  useServiceWorker();
  
  return (
    <div>
      {/* Seu conteúdo aqui */}
    </div>
  );
}
