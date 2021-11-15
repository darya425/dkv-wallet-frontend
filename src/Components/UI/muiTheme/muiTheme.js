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
    breakpoints: {
        values: {
        mobile: 320,
        tablet: 768,
        desktop: 1280,
        },
    },
    typography: {
        fontFamily: [
        'Poppins',
        'circe',
        'sans-serif',
        ].join(','),        
    },
});

export default muiTheme;