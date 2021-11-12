import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
    palette: {
        main: {
            blue: "#4A56E2",        // main BLUE
            green: "#24CCA7",       // main GREEN
            red: "#FF6596",         // main RED
            white: "#FFFFFF",       // WHITE
            black: "#000000",       // BLACK 
            background: "#E7EAF2",  // background GREY
        },
        neutral: {
            grey4: "#BDBDBD",
            grey5: "#E0E0E0",
            pink: "#FFD8D0",
            purple: "#C5BAFF",
        },
    },
    typography: {
        fontFamily: [
        'Poppins',
        'circe',
        'sans-serif',
        ].join(','),
        // custom: {
        //     fontSize: 20,
        //     fontWeight: 700,
        //     fontFamily: 'Poppins',
        // }
     },
});

export default muiTheme;