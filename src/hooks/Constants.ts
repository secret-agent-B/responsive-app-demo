import { IScreenInfo } from './IScreenInfo'

/**
 * Constants for user browser sizes that we use as breakpoints
 */
export namespace Responsive {
  /**
   * The values here defines screen size range (width) for extra small, small, medium, or large
   */
  const breakpoints = {
    extraSmall: '(max-width: 375px)',
    small: '(min-width: 376px) and (max-width: 425px)',
    medium: '(min-width: 426px) and (max-width: 768px)',
    large: '(min-width: 769px)',
  }

  /**
   * Screen size that has a width of less than 375px. (e.g. portrait mobile phones)
   */
  export const EXTRA_SMALL: IScreenInfo = {
    cssSelector: `@media screen ${breakpoints.extraSmall}`,
    query: breakpoints.extraSmall,
    size: 'x_small',
  }

  /**
   * Screen size that has a width of 376px to 425px. (e.g. landscape mobile phones)
   */
  export const SMALL: IScreenInfo = {
    cssSelector: `@media screen ${breakpoints.small}`,
    query: breakpoints.small,
    size: 'small',
  }
  /**
   * Screen size that has a width of 426px to 768px. (e.g. tablets)
   */
  export const MEDIUM: IScreenInfo = {
    cssSelector: `@media screen ${breakpoints.medium}`,
    query: breakpoints.medium,
    size: 'medium',
  }
  /**
   * Screen size that has a width of over 769px. (e.g. laptop or desktop monitors)
   */
  export const LARGE: IScreenInfo = {
    cssSelector: `@media screen ${breakpoints.large}`,
    query: breakpoints.large,
    size: 'large',
  }
}
