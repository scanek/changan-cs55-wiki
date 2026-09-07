/**
 * Helper to resolve static asset URLs properly across both local dev and GitHub Pages subpaths.
 */
export const getAssetUrl = (path: string | undefined | null): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip leading slash or dot-slash
  const cleanPath = path.replace(/^(\.\/|\/)/, '');
  const base = ((import.meta as any).env?.BASE_URL as string) || './';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
