import {Box, Heading, Image} from "@chakra-ui/react";

export const Banner = ({imgUrl, label, color = "white", textShadow = "#000"}) => {
    return(
        <Box
            mt="10"
            position="relative"
            textAlign="center"
        >
            <Image
                src={imgUrl}
                alt="pic"
                width="full"
            />
            <Heading
                textShadow={`2px 2px ${textShadow}`}
                position="absolute"
                top="45%"
                left="50%"
                color={color}
                // whiteSpace="nowrap"
                size={{base: "2xl", md: "3xl", lg: "4xl"}}
                style={{
                    transform: "translate(-50%, -50%)",
                    letterSpacing: "2px"
                }}
            >
                {label}
            </Heading>
        </Box>
    )
}
