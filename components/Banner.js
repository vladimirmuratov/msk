import {Box, Heading, Image} from "@chakra-ui/react";

export const Banner = ({imgUrl, label}) => {
    return(
        <Box
            mt="10"
            position="relative"
        >
            <Image
                src={imgUrl}
                alt="pic"
                width="full"
            />
            <Heading
                textShadow='1px 1px #ff0000'
                position="absolute"
                top="50%"
                left="50%"
                color="white"
                // whiteSpace="nowrap"
                size={{base: "md", md: "xl"}}
                style={{transform: "translate(-50%, -50%)"}}
            >
                {label}
            </Heading>
        </Box>
    )
}