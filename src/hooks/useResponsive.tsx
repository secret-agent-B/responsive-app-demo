import { useEffect, useState } from 'react'

import { Responsive } from './Constants'
import { IScreenInfo } from './IScreenInfo'

export const useResponsive = (): IScreenInfo => {
  const userBrowsers: IScreenInfo[] = [
    Responsive.EXTRA_SMALL,
    Responsive.SMALL,
    Responsive.MEDIUM,
    Responsive.LARGE,
  ]

  const getUserBrowserBreakpoint = (): IScreenInfo => {
    // Prevents SSR issues
    if (typeof window !== undefined) {
      for (const userBrowser of userBrowsers) {
        if (window.matchMedia(userBrowser.query).matches) {
          return userBrowser
        }
      }
    }

    return Responsive.LARGE
  }

  // We set the initial breakpoint here also as part of the state declaration
  const [userBrowserBreakpoint, setUserBrowserBreakpoint] =
    useState<IScreenInfo>(getUserBrowserBreakpoint())

  const handleChange = () => {
    console.debug(
      `handleChange triggered for ${debugString(userBrowserBreakpoint.size)}`
    )
    const newBreakpoint = getUserBrowserBreakpoint()

    if (userBrowserBreakpoint.size !== newBreakpoint.size) {
      console.debug(
        `handleChange updating from  ${debugString(
          userBrowserBreakpoint.size
        )} to ${debugString(newBreakpoint.size)}`
      )
      setUserBrowserBreakpoint(newBreakpoint)
    }
  }

  const debugString = (screenSize: string): string => {
    switch (screenSize) {
      case 'x_small':
        return `xs ${Responsive.EXTRA_SMALL.query}`
      case 'small':
        return `sm ${Responsive.SMALL.query}`
      case 'medium':
        return `md ${Responsive.MEDIUM.query}`
      case 'large':
      default:
        return `lg ${Responsive.LARGE.query}`
    }
  }

  useEffect(() => {
    console.debug(
      `useEffect triggered for ${debugString(userBrowserBreakpoint.size)}`
    )

    // Get the reference to the current MatchMediaList, so we can set
    // an event handler later on when it changes
    const matchMedia = window.matchMedia(userBrowserBreakpoint.query)

    handleChange()

    // Update the breakpoint state when matchMedia changes
    console.debug(`adding onChange handler for ${matchMedia.media}`)
    matchMedia.addEventListener('change', handleChange)

    // Clean up
    return () => {
      console.debug(`removing onChange handler for ${matchMedia.media}`)
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [userBrowserBreakpoint])

  return userBrowserBreakpoint
}
