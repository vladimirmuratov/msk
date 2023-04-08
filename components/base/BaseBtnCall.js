import {Box} from "@chakra-ui/react";

export const BaseBtnCall = () => {
    return (
        <Box
            backgroundColor="red.500"
            color="white"
            py="4"
            width={{base: "full", md: "40%", lg: "30%"}}
            fontSize="2xl"
            textAlign="center"
            cursor="pointer"
            _hover={{boxShadow: "2xl"}}
            transition="0.3s"
        >
            Заказать консультацию
        </Box>
    )
}
