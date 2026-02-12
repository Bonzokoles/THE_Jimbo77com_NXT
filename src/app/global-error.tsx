'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="pl">
            <body className="bg-zinc-950 text-white">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                        <h2 className="text-2xl font-bold">Coś poszło nie tak</h2>
                        <p className="text-zinc-400">{error.message || 'Błąd aplikacji.'}</p>
                        <button
                            onClick={() => reset()}
                            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
                        >
                            Spróbuj ponownie
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
