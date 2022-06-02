import { createEffect, createSignal } from 'solid-js';
import createCookieStore from '@solid-primitives/cookies-store';

type DarkModeData = {
    isDark(): boolean;
    setDark(isDark: boolean): void;
};

type DarkModeStore = {
    dark: string;
};

export const createDarkMode = (): DarkModeData => {
    const [store, setStore] = createCookieStore<DarkModeStore>();
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const isDark = () =>
        store.dark === 'true' ? true :
            store.dark === 'false' ? false :
                userMedia.matches;

    createEffect(() => {
        if (isDark())
            document.documentElement.classList.add('dark');
        else
            document.documentElement.classList.remove('dark');
    });

    return {
        isDark,
        setDark(isDark: boolean) { setStore('dark', isDark ? 'true' : 'false'); },
    };
};