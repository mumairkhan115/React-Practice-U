import type { ThemeConfig } from "antd";

/** Mirrors `rem()` in `src/assets/sass/_variables.scss` (`$html-font-size: 16px`). */
const HTML_FONT_SIZE = 16;
const rem = (px: number) => `${px / HTML_FONT_SIZE}rem`;

const themeTokens = {
  hashed: false,
  token: {
    fontFamily: "Rubik, sans-serif",
    colorPrimary: "#1f9a63",
    colorInfo: "#1f9a63",
  },
  components: {
    Button: {
      primaryShadow: "0",
      defaultShadow: "0",
      dangerShadow: "0",
      colorBorder: "rgb(90,91,93)",
      controlHeight: 41,
      borderColorDisabled: "rgba(0,0,0,0.08)",
    },
    Menu: {
      itemActiveBg: "rgb(239,244,250)",
      itemHoverBg: "rgb(239,244,250)",
      itemSelectedColor: "rgb(31,154,99)",
      colorText: "rgb(110,111,113)",
      subMenuItemSelectedColor: "rgb(110,111,113)",
      itemSelectedBg: "rgb(239,244,250)",
      itemHoverColor: "rgb(31,154,99)",
      borderRadiusLG: rem(0),
    },
    Layout: {
      headerBg: "rgb(255,255,255)",
      siderBg: "rgb(255,255,255)",
      triggerBg: "rgb(255,255,255)",
    },
    Select: {
      activeBorderColor: "rgb(31,154,99)",
      hoverBorderColor: "rgb(31,154,99)",
      optionSelectedBg: "rgba(31,154,99,0.08)",
    },
    Table: {
      rowSelectedBg: "rgb(228,239,232)",
      rowSelectedHoverBg: "rgb(228,239,232)",
      fontWeightStrong: 500,
      cellPaddingBlock: rem(12),
      headerBg: "#ffffff",
      headerSortActiveBg: "rgb(240,244,250)",
      fixedHeaderSortActiveBg: "rgb(240,244,250)",
      bodySortBg: "transparent",
    },
    Modal: {
      fontWeightStrong: 400,
    },
    Pagination: {
      fontWeightStrong: 500,
    },
    Drawer: {
      fontWeightStrong: 500,
    },
    Avatar: {
      colorTextPlaceholder: "rgb(242,243,246)",
      colorTextLightSolid: "rgb(27,28,30)",
      containerSize: rem(40),
    },
    Typography: {
      colorSuccess: "rgb(31,154,99)",
      colorSuccessText: "rgb(31,154,99)",
      fontWeightStrong: 500,
      colorTextDescription: "#6E6F71",
      fontSize: rem(15),
      fontSizeHeading2: rem(30),
      fontSizeHeading5: rem(18),
    },
    Card: {
      colorBorderSecondary: "rgb(233,234,237)",
    },
    Notification: {
      fontSize: rem(13),
      fontSizeLG: rem(13),
    },
  },
} as unknown as ThemeConfig;

export default themeTokens;
