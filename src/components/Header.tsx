import React from 'react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">🔗 LinksFácil</h1>
        <p className="text-blue-100 mt-2">Gerenciador de links rápido e fácil</p>
      </div>
    </header>
  );
}
