import {Box} from "@chakra-ui/react";

export const Container = ({children}) => {
    // Желтый фон
    // linear(to-r, #fff8e1, #ffecb3)

    // Голубой фон
    // linear(to-r, #bbdefb, #90caf9)

    return (
        <Box
            display="flex"
            flexDirection="column"
            margin=" 0 auto"
            maxW="1440px"
            minH="100vh"
            padding="0"
            // bgGradient="linear(to-r, #bbdefb, #90caf9)"
        >
            {children}
        </Box>
    )
}
