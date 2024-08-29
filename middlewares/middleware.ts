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

    if (pathname.startsWith('/_next') || pathname.includes('.')) {
        return NextResponse.next();
    }

    const acceptLanguageHeader = req.headers.get('accept-language');
    const locale = getPreferredLocale(acceptLanguageHeader);

    if (!pathname.startsWith(`/${locale}`)) {
        return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
