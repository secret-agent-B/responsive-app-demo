/**
 * The object that encapsulates the user screen size information
 * necessary to make adjustments to the UI to accommodate different
 * screen sizes.
 */
export interface IScreenInfo {
  query: string
  cssSelector: string
  size: 'x_small' | 'small' | 'medium' | 'large'
}
