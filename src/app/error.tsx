'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('[App Error]', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
            <div className="text-center space-y-4 p-8">
                <h2 className="text-2xl font-bold">Coś poszło nie tak</h2>
                <p className="text-zinc-400 max-w-md">{error.message || 'Wystąpił nieoczekiwany błąd.'}</p>
                <button
                    onClick={() => reset()}
                    className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
                >
                    Spróbuj ponownie
                </button>
            </div>
        </div>
    );
}
