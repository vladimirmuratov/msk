import {Box} from "@chakra-ui/react";

export const BaseBtnCall = ({onClick, btnLabel}) => {
    return (
        <Box
            onClick={onClick}
            backgroundColor="red.500"
            color="white"
            py="4"
            width={{base: "full", md: "40%", lg: "30%"}}
            fontSize="2xl"
            textAlign="center"
            cursor="pointer"
            boxShadow="xl"
            _hover={{boxShadow: "2xl"}}
            _pressed={{boxShadow: "xl"}}
            transition="0.3s"
        >
            {btnLabel}
        </Box>
    )
}
