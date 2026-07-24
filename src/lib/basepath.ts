// Get basePath for asset references in static export
export const getBasePath = () => {
  if (typeof window === "undefined") {
    // Server-side
    return "/Sentinel_App";
  }
  // Client-side: basePath should be available in the URL or we use the config value
  return "/Sentinel_App";
};
