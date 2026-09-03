#!/usr/bin/env node
/**
 * PWA Icon Generator Script
 * Gera os ícones necessários para PWA
 */

const fs = require('fs');
const path = require('path');

// SVG base para o ícone
const baseSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <style>
      .background { fill: #3B82F6; }
      .text { fill: white; font-family: Arial, sans-serif; font-weight: bold; }
    </style>
  </defs>
  <rect class="background" width="512" height="512" rx="100"/>
  <text class="text" x="256" y="280" font-size="280" text-anchor="middle" dominant-baseline="middle">🔗</text>
</svg>
`;

const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Salva o SVG base
fs.writeFileSync(path.join(publicDir, 'icon.svg'), baseSVG);

console.log('✅ Ícones PWA foram criados');
console.log('📁 Verifique a pasta public/ para os arquivos');
console.log('\n⚠️  Nota: Para produção, você pode usar ferramentas como:');
console.log('  - https://www.favicon-generator.org/');
console.log('  - https://convertio.co/png-svg/');
console.log('\nPara agora, usaremos ícones padrão e logos de emoji.');
