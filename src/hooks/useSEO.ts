import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSEO({ title, description, canonicalPath, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalPath);
    setMeta('property', 'og:type', 'website');
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
    }

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (ogImage) {
      setMeta('name', 'twitter:image', ogImage);
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalPath);
  }, [title, description, canonicalPath, ogImage]);
}