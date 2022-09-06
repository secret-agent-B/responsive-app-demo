import { useEffect, useState } from 'react'

export interface UserBrowser {
    cssMediaQuery: string,
}

export const useResponsive = (query: string): UserBrowser => {
    const largeScreen = { cssMediaQuery: '(min-width: 993px)' } // lg
    const userBrowsers: UserBrowser[] = [
        { cssMediaQuery: '(max-width: 576px)' }, // xs
        { cssMediaQuery: '(max-width: 768px)' }, // sm
        { cssMediaQuery: '(max-width: 992px)' }, // md
        largeScreen
    ]

    const getUserBrowser = (): UserBrowser => {
        // Prevents SSR issues
        if (typeof window !== 'undefined') {
            for (const userBrowser of userBrowsers) {
                if (window.matchMedia(userBrowser.cssMediaQuery).matches) {
                    return userBrowser
                }
            }
        }

        return largeScreen
    }

    const [userBrowser, setUserBrowser] = useState<UserBrowser>(getUserBrowser())

    function handleChange() {
        setUserBrowser(getUserBrowser())
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(userBrowser.cssMediaQuery)
        matchMedia.addEventListener('change', handleChange)
        return () => {
            matchMedia.removeEventListener('change', handleChange)
        }
    }, [userBrowser.cssMediaQuery])

    return userBrowser
}