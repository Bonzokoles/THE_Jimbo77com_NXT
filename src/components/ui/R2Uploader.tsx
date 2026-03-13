"use client";

import { useState, useCallback } from "react";

interface UploadProgress {
  name: string;
  progress: number;
  url?: string;
  error?: string;
}

export function R2Uploader() {
  const [uploads, setUploads] = useState<UploadProgress[]>([]);

  const handleFiles = useCallback(async (files: FileList) => {
    for (const file of Array.from(files)) {
      const entry: UploadProgress = { name: file.name, progress: 0 };
      setUploads((prev) => [...prev, entry]);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/r2/upload");
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) {
            const pct = Math.round((e.loaded / e.total) * 100);
            setUploads((prev) => prev.map((u) => u.name === file.name ? { ...u, progress: pct } : u));
          }
        };
        xhr.onload = () => {
          if (xhr.status === 200) {
            const res = JSON.parse(xhr.responseText);
            setUploads((prev) => prev.map((u) => u.name === file.name ? { ...u, progress: 100, url: res.url } : u));
          } else {
            setUploads((prev) => prev.map((u) => u.name === file.name ? { ...u, error: xhr.responseText } : u));
          }
        };
        xhr.onerror = () => {
          setUploads((prev) => prev.map((u) => u.name === file.name ? { ...u, error: "Upload failed" } : u));
        };
        xhr.send(formData);
      } catch (err) {
        setUploads((prev) => prev.map((u) => u.name === file.name ? { ...u, error: String(err) } : u));
      }
    }
  }, []);

  return (
    <section aria-label="Upload pliku do R2" className="p-4 border border-border/40 rounded-xl bg-secondary/10">
      <label htmlFor="r2-upload" className="block mb-2 text-xs font-mono uppercase tracking-widest text-muted-foreground cursor-pointer">
        Wybierz plik (max 10MB)
      </label>
      <input
        id="r2-upload"
        type="file"
        multiple
        aria-label="Wybierz plik do uploadu"
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
        className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all"
      />
      {uploads.length > 0 && (
        <ul className="mt-4 space-y-2" role="list" aria-label="Status uploadu">
          {uploads.map((u) => (
            <li key={u.name} className="text-xs font-mono">
              <div className="flex justify-between mb-1">
                <span className="truncate max-w-[200px]">{u.name}</span>
                <span>{u.error ? "Błąd" : u.progress === 100 ? "" : `${u.progress}%`}</span>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-1.5" role="progressbar" aria-valuenow={u.progress} aria-valuemin={0} aria-valuemax={100}>
                <div
                  className={`h-1.5 rounded-full transition-all ${u.error ? "bg-red-500" : "bg-primary"}`}
                  style={{ width: `${u.error ? 100 : u.progress}%` }}
                />
              </div>
              {u.error && <p className="text-red-400 mt-1">{u.error}</p>}
              {u.url && <p className="text-green-400 mt-1">URL: {u.url}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
