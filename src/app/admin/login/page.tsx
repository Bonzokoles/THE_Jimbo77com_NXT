"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin/r2");
      } else {
        const data = await res.json() as { error?: string };
        setErrorMsg(data.error ?? "Błąd logowania");
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Błąd połączenia");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm p-8 border border-border rounded-xl bg-card shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-xl font-black uppercase tracking-tight">Panel Admina</h1>
          <p className="text-muted-foreground text-xs mt-1 font-mono">R2 Asset Manager</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-widest mb-2 text-muted-foreground">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-3 py-2 bg-background border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder=""
            />
          </div>

          {status === "error" && (
            <p role="alert" className="text-destructive text-xs font-mono">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Logowanie..." : "Zaloguj"}
          </button>
        </form>
      </div>
    </main>
  );
}