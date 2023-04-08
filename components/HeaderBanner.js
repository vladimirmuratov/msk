import {Box, Text} from "@chakra-ui/react";
import {phoneNumber} from "@/config/defaultOptions";

export const HeaderBanner = () => {
    return(
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="#1a237e"
            color="white"
            px="4"
            py="2"
        >
            <Text fontSize={{base: "10px", md: "12px", lg: "14px", xl: "16px"}}>Горячая линия  экстренной госпитализации</Text>
            <Text fontSize={{base: "10px", md: "12px", lg: "14px", xl: "16px"}} color="#82b1ff">{phoneNumber}</Text>
        </Box>
    )
}
