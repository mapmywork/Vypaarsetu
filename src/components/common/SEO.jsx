import { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    const defaultTitle = `${siteConfig.name} | Business Registration & Compliance Assistance`;
    document.title = title ? `${title} | ${siteConfig.name}` : defaultTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || siteConfig.description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);

  return null;
}
