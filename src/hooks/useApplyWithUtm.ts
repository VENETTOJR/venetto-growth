export const useApplyWithUtm = () => {
  const handleApply = () => {
    // Track Facebook Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // Capture all URL parameters (including Facebook UTMs)
    const urlParams = new URLSearchParams(window.location.search);
    
    // Build form URL keeping all parameters
    const formBaseUrl = 'https://forms.victorvenetto.com.br/quiz/sistemacodpro';
    const paramsString = urlParams.toString();
    const formUrl = paramsString ? `${formBaseUrl}?${paramsString}` : formBaseUrl;
    
    // Redirect with UTMs (same tab for better tracking)
    window.location.href = formUrl;
  };

  return handleApply;
};
