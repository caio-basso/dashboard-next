import {extendTheme, ThemeConfig} from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    fonts: {
        heading: "Roboto",
        body: "Roboto",
        mono: "Menlo, monospace",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
})

export default theme