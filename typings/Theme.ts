export default interface Theme {
  palette: ThemePalette;
  expressiveness: ThemeExpressiveness;
  layout: ThemeLayout;
  font: ThemeFont;
  type: 'light' | 'dark';
}

export interface ThemePalette {
  accents_1: string;
  accents_2: string;
  accents_3: string;
  accents_4: string;
  accents_5: string;
  accents_6: string;
  accents_7: string;
  accents_8: string;
  background: string;
  foreground: string;
  selection: string;
  secondary: string;
  code: string;
  border: string;
  success: string;
  successLight: string;
  successDark: string;
  error: string;
  errorLight: string;
  errorDark: string;
  warning: string;
  warningLight: string;
  warningDark: string;
  cyan: string;
  purple: string;
  alert: string;
}
export interface ThemeExpressiveness {
  linkColor: string;
  linkStyle: string;
  linkHoverStyle: string;
  dropdownBoxShadow: string;
  dropdownTriangleStroke: string;
  scrollerStart: string;
  scrollerEnd: string;
  shadowSmall: string;
  shadowMedium: string;
  shadowLarge: string;
  portalOpacity: number;
}
export interface ThemeLayout {
  gap: string;
  gapNegative: string;
  gapHalf: string;
  gapHalfNegative: string;
  gapQuarter: string;
  gapQuarterNegative: string;
  pageMargin: string;
  pageWidth: string;
  pageWidthWithMargin: string;
  breakpointMobile: string;
  breakpointTablet: string;
  radius: string;
}
export interface ThemeFont {
  sans: string;
  mono: string;
}
