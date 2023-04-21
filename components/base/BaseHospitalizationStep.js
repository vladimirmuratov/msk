import {Box, Divider, Image, Text} from "@chakra-ui/react";

export const BaseHospitalizationStep = ({imgUrl, label, children}) => {
    return (
        <>
            <Box display="flex" flexDir={{base: "column", md: "row"}} alignItems={{base: "center", md: "start"}}
                 justifyContent="space-between" gap="5" fontSize={{base: "20px", xl: "22px"}}>
                <Box height="50px" width="50px" flexShrink="0">
                    <Image src={imgUrl}/>
                </Box>
                <Box textAlign={{base: "center", md: "start"}}>
                    <Text fontWeight="bold">{label}</Text>
                    {children}
                </Box>
            </Box>
            <Divider/>
        </>
    )
}
