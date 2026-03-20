// Simple Service Worker to enable installation
self.addEventListener('fetch', (event) => {
    // We leave this empty for now so it just passes through
    // but its existence is what triggers the 'Install' prompt!
});

