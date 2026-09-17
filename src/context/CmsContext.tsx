import React, { createContext, useContext, useState, useEffect } from 'react';

const API_BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000')
  .replace(/\/api\/?$/, '')
  .replace(/\/+$/, '');

interface CmsContextType {
  cmsContent: any;
  loading: boolean;
  refreshCms: () => Promise<void>;
}

const CmsContext = createContext<CmsContextType>({
  cmsContent: null,
  loading: true,
  refreshCms: async () => {},
});

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cmsContent, setCmsContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/cms/landing-page`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setCmsContent(json.data);
        }
      }
    } catch (err) {
      console.warn('Could not fetch dynamic CMS content from backend, using default landing page constants.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <CmsContext.Provider value={{ cmsContent, loading, refreshCms: fetchContent }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => useContext(CmsContext);
