import {Box, Image, Text} from "@chakra-ui/react";
import {phoneNumber} from "@/config/defaultOptions";
import Link from "next/link";

export const BaseHospitalCard = ({url, path, img, label, isLocal = false}) => {
    return(
        <Link href={isLocal ? path : url} target={!isLocal ? "_blank" : ""}>
            <Box
                display="flex"
                flexDir={{base: "column", md: "row"}}
                alignItems="center"
                gap="5"
                border="1px solid #616161"
                borderRadius="5"
                p="5"
                cursor="pointer"
                _hover={{boxShadow: "2xl", bgColor: "#e3f2fd"}}
                style={{transition: "0.3s"}}
                height="full"
            >
                <Image alt='logo' src={img} height="50px" width="50px"/>
                <Box>
                    <Text>{label}</Text>
                    <Text>Подробнее</Text>
                </Box>
            </Box>
        </Link>
    )
}
