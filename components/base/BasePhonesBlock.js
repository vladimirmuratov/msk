import {Box, Button, Grid, GridItem, Text} from "@chakra-ui/react";
import {phoneNumber} from "@/config/defaultOptions";

export const BasePhonesBlock = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            alignItems={{base: "center", md: "flex-end"}}
            color="red.500"
            fontWeight="bold"
        >
            {/*<Box my="4">
                <Text mb="0">{phoneNumber} - госпитализация 24 ч</Text>
                <Text mb="0">{phoneNumber} - скорая помощь 24 ч</Text>
            </Box>*/}
            <Grid gridTemplateColumns="repeat(3, auto)" gap="1" my="4">
                <GridItem>
                    <Text mb="0">{phoneNumber}</Text>
                    <Text mb="0">{phoneNumber}</Text>
                </GridItem>
                <GridItem>
                    <Text mb="0">- госпитализация</Text>
                    <Text mb="0">- скорая помощь</Text>
                </GridItem>
                <GridItem>
                    <Text mb="0">24 ч</Text>
                    <Text mb="0">24 ч</Text>
                </GridItem>
            </Grid>
            <Box display="flex" gap={{base: "1", md: "3"}}>
                <Button size={{base: "sm", md: "md"}} colorScheme='blue'>Заказать звонок</Button>
                <Button size={{base: "sm", md: "md"}} colorScheme='blue'>Заказать услугу</Button>
            </Box>
        </Box>
    )
}
