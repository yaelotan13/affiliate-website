import { colors } from '@material-ui/core';

const white = '#ffffff';
const black = '#000000';

export default {
  black,
  primaryColor: "#D04460",
  secondaryLightGrey: "#DADFD3",
  textColor: "#4F4F4F",
  darkGreen: "#4A4F40",
  brightGreen: "#596F49",
  lightGreen: "#D8DCD0",
  superLightGreen: "#F2F4F1",
  white: "#FFFDFD",
  primary: {
    contrastText: white,
    dark: colors.lightBlue[900],
    main: colors.lightBlue[500],
    light: colors.lightBlue[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[100]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    light: colors.lightBlue[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
