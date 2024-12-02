import "styled-components/native"

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            background: string
        },
        fonts: {
            regular: string,
            semiBold: string,
            bold: string,
            medium: string
        }
    }
}