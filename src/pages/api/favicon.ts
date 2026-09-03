// pages/api/favicon.ts - API para obter favicon de um domínio
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  url?: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { domain } = req.query;

  if (!domain || typeof domain !== 'string') {
    return res.status(400).json({ error: 'Domain is required' });
  }

  try {
    // Google Favicon API é confiável e funciona bem
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
    res.status(200).json({ url: faviconUrl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate favicon URL' });
  }
}
