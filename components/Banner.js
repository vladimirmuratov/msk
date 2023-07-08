import {Box, Heading} from "@chakra-ui/react";
// import {Image} from "@chakra-ui/react";
import Image from "next/image";

export const Banner = ({imgUrl, label, color = "white", textShadow = "#000"}) => {
    return (
        <Box
            mt="10"
            position="relative"
            textAlign="center"
        >
            {/*<Image
                src={imgUrl}
                alt="pic"
                width="full"
            />*/}
            <Image
                src={imgUrl}
                priority={true}
                alt="pic"
                width="0"
                height="0"
                sizes="100vw"
                style={{width: "100%", height: "auto"}}
            />
            <Heading
                textShadow={`2px 2px ${textShadow}`}
                position="absolute"
                top="50%"
                left="50%"
                color={color}
                // whiteSpace="nowrap"
                size={{base: "lg", md: "3xl", lg: "4xl"}}
                style={{
                    transform: "translate(-50%, -50%)",
                    letterSpacing: "3px"
                }}
            >
                {label}
            </Heading>
        </Box>
    )
}
