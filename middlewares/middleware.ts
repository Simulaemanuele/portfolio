import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['it', 'en'] as const;
type Locale = typeof locales[number];

function getPreferredLocale(acceptLanguageHeader: string | null): Locale {
    if (!acceptLanguageHeader) return 'it';

    const acceptedLanguages = acceptLanguageHeader.split(',').map(lang => lang.split(';')[0]);

    for (const lang of acceptedLanguages) {
        if (locales.includes(lang as Locale)) {
            return lang as Locale;
        }
    }

    return 'it';
}

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Ignora le richieste a percorsi specifici
    if (pathname.startsWith('/_next') || pathname.includes('.')) {
        return NextResponse.next();
    }

    const acceptLanguageHeader = req.headers.get('accept-language');
    const locale = getPreferredLocale(acceptLanguageHeader);

    // Reindirizza l'utente alla versione localizzata se necessario
    if (!pathname.startsWith(`/${locale}`)) {
        const url = new URL(`/${locale}${pathname}`, req.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// Configurazione del middleware per applicarlo a tutte le route
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
