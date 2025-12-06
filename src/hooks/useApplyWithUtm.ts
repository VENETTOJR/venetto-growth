export const useApplyWithUtm = () => {
  const handleApply = () => {
    // Track Facebook Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    // Capture all URL parameters (including Facebook UTMs)
    const urlParams = new URLSearchParams(window.location.search);
    
    // Build InLead URL keeping all parameters
    const inleadBaseUrl = 'https://inlead.digital/sistema-cod-afterpay/';
    const paramsString = urlParams.toString();
    const inleadUrl = paramsString ? `${inleadBaseUrl}?${paramsString}` : inleadBaseUrl;
    
    // Open with UTMs
    window.open(inleadUrl, "_blank");
  };

  return handleApply;
};
