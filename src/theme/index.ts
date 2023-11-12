import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = {
  sm: "23.5em",
  md: "60em",
  lg: "90em",
  xl: "120em",
};

const theme = extendTheme({
  colors: {
    primary: {
      0: "#f85756",
      100: "#f98e8e",
      200: "#21AB68",
      400: "#19804E",
      600: "#105634",
      800: "#081B1A",
    },
    secondary: "#FFC547",
    error: "#D6432F",
    success: "#36C78A",
    waring: "#FF7456",
    neutral: {
      header: "#171D33",
      body: "#30384B",
      subhead: "#8A97AB",
      subbody: "#B2BAC8",
      lineDisable: "#D7DDE5",
      bg: "#ECF1F4",
      border: "#ECEDEF",
    },
    gradient:
      "linear-gradient(180deg, #F08EFC 0%, rgba(240, 142, 252, 0.00) 100%), linear-gradient(180deg, rgba(238, 81, 102, 0.00) 0%, rgba(238, 81, 102, 0.48) 100%)",
  },
  components: {
    Button: {
      variants: {
        "gradient-button": {
          bg: "linear-gradient(180deg, #F08EFC 0%, rgba(240, 142, 252, 0.00) 100%), linear-gradient(180deg, rgba(238, 81, 102, 0.00) 0%, rgba(238, 81, 102, 0.48) 100%)",
          color: "white",
          _hover: {
            bg: "linear-gradient(180deg, #D862F5 0%, rgba(216, 130, 243, 0.00) 100%), linear-gradient(180deg, rgba(238, 81, 102, 0.00) 0%, rgba(238, 81, 102, 0.65) 100%)",
          },
        },
        "gradient-outline": {
          bg: "none",
          color: "#B2BAC8",
        },
      },
    },
    Box: {
      varaints: {
        "gradient-box": {
          bg: "#ECF1F4",
          width: "200px",
          height: "200px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          border: "1px solid blue",
          cursor: "pointer",
          _hover: {
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            border: "1px solid linear(to-l, #7928CA, #FF0080)",
          },
        },
      },
    },
  },
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
  breakpoints,

  styles: {
    global: (props: any) => ({
      body: {
        overflowX: "hidden",
        bg: mode("#ffffff", "#262e40")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
        lineHeight: "base",
        backgroundPosition: "0 -30vh",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
      },
      /**
       * Text Color Section
       */
      ".super-title": {
        fontSize: "96px",
        lineHeight: "114px",
        fontWeight: 600,
      },
      ".h1-bold": {
        fontSize: "48px",
        lineHeight: "57px",
        fontWeight: 600,
      },
      ".h2-bold": {
        fontSize: "32px",
        lineHeight: "38px",
        fontWeight: 700,
      },
      ".h3-bold": {
        fontSize: "24px",
        lineHeight: "28px",
        fontWeight: 700,
      },
      ".h5-bold": {
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: 700,
      },
      ".h6-semibold": {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: 600,
      },
      ".body1": {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
      },
      ".body2": {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
      },
      ".subtitle": {
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "14px",
      },
      ".caption": {
        fontWeight: 400,
        fontSize: "11px",
        lineHeight: "13px",
      },
      ".overline": {
        fontWeight: 700,
        fontSize: "12px",
        lineHeight: "14px",
      },
      ".link": {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
        textDecorationLine: "underline",
      },
      ".header-menu": {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
      ".button": {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "24px",
      },
      ".small-button": {
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "24px",
      },
      ".btn-menu": {
        width: "100%",
      },
    }),
  },
});

export default theme;
