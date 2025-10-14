import React from "react";

export function lazyWithRetry(importer, retries = 3, intervalMs = 1000) {
  const load = () =>
    importer().catch((error) => {
      const message = (error && (error.message || String(error))) || "";
      const isChunkError = /ChunkLoadError|Loading chunk [0-9]+ failed/i.test(message);

      if (!isChunkError) throw error;

      if (retries <= 1) {
        if (typeof window !== "undefined") {
          // Final attempt: reload to get fresh chunk map
          window.location.reload();
        }
        throw error;
      }

      return new Promise((resolve) => setTimeout(resolve, intervalMs)).then(() =>
        lazyWithRetry(importer, retries - 1, intervalMs)()
      );
    });

  return React.lazy(load);
} 