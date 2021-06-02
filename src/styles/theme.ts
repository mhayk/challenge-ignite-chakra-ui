import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "50": "#F5F8FA",
            "100": "#DADADA",
            "200": "#47585B"
        },
        orange: {
            "50": "#FFBA08"
        }
    },
    textStyles: {
        h1: {
            fontSize: ["20px", "36px"],
            fontWeight: "bold",
            lineHeight: "30px",
            color: "gray.50"
        },
        h2: {
            fontSize: "14px",
            fontWeight: "400",
            color: "gray.100"
        }
    },
    fonts: {
        body: "Poppins, sans-serif",
    }
})