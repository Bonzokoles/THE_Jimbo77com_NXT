"use client";

import { useEffect, useState } from "react";
import { Trash2, RefreshCw, Upload } from "lucide-react";
import { R2Uploader } from "@/components/ui/R2Uploader";

interface R2File {
  key: string;
  size: number;
  uploaded: string;
  url: string;
}

export default function R2AdminPage() {
  const [files, setFiles] = useState<R2File[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/r2/list");
      const data = await res.json();
      setFiles(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchFiles(); }, []);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-background" aria-label="Panel admina R2">
      <div className="container mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">R2 Asset Manager</h1>
          <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">
            Zarządzaj assetami w Cloudflare R2 Bucket
          </p>
        </header>

        <section aria-label="Upload nowego pliku" className="mb-10">
          <h2 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
            <Upload className="w-4 h-4" aria-hidden="true" /> Upload
          </h2>
          <R2Uploader />
          <button
            onClick={fetchFiles}
            className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            aria-label="Odśwież listę plików"
          >
            <RefreshCw className="w-3 h-3" aria-hidden="true" /> Odśwież listę
          </button>
        </section>

        <section aria-label="Lista plików w R2">
          <h2 className="text-sm font-black uppercase tracking-widest mb-4">Pliki w R2 ({files.length})</h2>
          {loading ? (
            <div className="space-y-2" aria-busy="true" aria-live="polite">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 animate-pulse bg-secondary/20 rounded-lg" aria-hidden="true" />
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-border/40">
              <table className="w-full text-xs font-mono" aria-label="Tabela plików R2">
                <thead>
                  <tr className="border-b border-border/40 bg-secondary/10">
                    <th scope="col" className="text-left px-4 py-3 uppercase tracking-widest text-muted-foreground">Plik</th>
                    <th scope="col" className="text-left px-4 py-3 uppercase tracking-widest text-muted-foreground">Rozmiar</th>
                    <th scope="col" className="text-left px-4 py-3 uppercase tracking-widest text-muted-foreground">Data</th>
                    <th scope="col" className="text-left px-4 py-3 uppercase tracking-widest text-muted-foreground">URL</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((f) => (
                    <tr key={f.key} className="border-b border-border/20 hover:bg-secondary/10 transition-colors">
                      <td className="px-4 py-3 max-w-[200px] truncate">{f.key}</td>
                      <td className="px-4 py-3">{formatSize(f.size)}</td>
                      <td className="px-4 py-3">{new Date(f.uploaded).toLocaleDateString("pl-PL")}</td>
                      <td className="px-4 py-3">
                        <a
                          href={f.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                          aria-label={`Otwórz plik ${f.key}`}
                        >
                          Otwórz
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {files.length === 0 && (
                <p className="text-center py-8 text-muted-foreground text-xs font-mono">Brak plików w R2</p>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
