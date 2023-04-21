import {Box, Button, Text} from "@chakra-ui/react";
import {phoneNumber} from "@/config/defaultOptions";

export const BasePhonesBlock = () => {
    return (
        <Box display="flex" flexDir="column" alignItems={{base: "center", md: "flex-end"}}>
            <Text mb="0">{phoneNumber} - госпитализация 24 ч</Text>
            <Text>{phoneNumber} - скорая помощь 24 ч</Text>
            <Box display="flex" gap={{base: "1", md: "3"}} mt="3">
                <Button colorScheme='blue'>Заказать звонок</Button>
                <Button colorScheme='blue'>Заказать услугу</Button>
            </Box>
        </Box>
    )
}
