import {Box, Heading, Icon, Text} from "@chakra-ui/react";

export const BaseGridItem = ({icon, value, description}) => {
    return(
        <Box
            bgColor="#0d47a1"
            color="white"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            p="5"
            height="full"
        >
            <Icon as={icon} boxSize="2em"/>
            <Heading>{value}</Heading>
            <Text m="0">{description}</Text>
        </Box>
    )
}
