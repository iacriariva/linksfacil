export async function getFavicon(url: string): Promise<string> {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;

    // Tenta diferentes formatos de favicon
    const faviconUrls = [
      `https://www.google.com/s2/favicons?sz=64&domain=${domain}`,
      `https://${domain}/favicon.ico`,
      `https://www.favicon-generator.org/api/favicon/${domain}`,
    ];

    // Retorna a primeira URL (Google é mais confiável)
    return faviconUrls[0];
  } catch (error) {
    console.error('Error generating favicon URL:', error);
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%23ddd" width="64" height="64"/%3E%3C/svg%3E';
  }
}

export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function normalizeUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
}
