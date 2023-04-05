import {Box} from "@chakra-ui/react";

export const Content = ({children}) => {
    return (
        <Box flexGrow="1">
            <Box flexGrow="1" display="flex" justifyContent="center" alignItems="center">
                {children}
            </Box>
        </Box>
    )
}
