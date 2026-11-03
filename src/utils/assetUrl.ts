/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Detects the application base path prefix (e.g., '/my-repo' on GitHub Pages,
 * or '' on custom domains and root deployments).
 */
export function getBasePrefix(): string {
  // If Vite's BASE_URL is configured (e.g., '/my-repo/' or './')
  const envBase = import.meta.env.BASE_URL;
  if (envBase && envBase !== '/' && envBase !== './') {
    return envBase.endsWith('/') ? envBase.slice(0, -1) : envBase;
  }

  // Runtime detection on GitHub Pages (e.g., https://username.github.io/my-repo/...)
  if (typeof window !== 'undefined' && window.location.hostname.endsWith('github.io')) {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const appRoutes = ['bn', 'en', 'about', 'courses', 'teachers', 'free-trial', 'admission', 'contact'];
    if (segments.length > 0 && !appRoutes.includes(segments[0])) {
      return '/' + segments[0];
    }
  }

  return '';
}

/**
 * Resolves static asset paths correctly across all hosting environments:
 * - Local development (http://localhost:3000)
 * - Cloud Run / AI Studio preview
 * - Custom domain root (https://almuinulquran.com)
 * - GitHub Pages project subfolder (https://username.github.io/repo-name/)
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Normalize path by stripping leading slashes or /src/
  let cleanPath = path;
  if (cleanPath.startsWith('/src/')) {
    cleanPath = cleanPath.slice(5); // e.g. "assets/images/..."
  } else if (cleanPath.startsWith('src/')) {
    cleanPath = cleanPath.slice(4);
  } else if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  } else if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.slice(2);
  }

  const prefix = getBasePrefix();
  if (prefix) {
    return `${prefix}/${cleanPath}`;
  }

  const base = import.meta.env.BASE_URL || './';
  if (base === './') {
    return `./${cleanPath}`;
  }

  if (base.endsWith('/')) {
    return `${base}${cleanPath}`;
  }
  return `${base}/${cleanPath}`;
}

