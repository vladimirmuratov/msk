import {Box, Text} from "@chakra-ui/react";
import {RiCopyrightLine} from "react-icons/ri";

export const Footer = () => {
    return (
        <Box
            as="footer"
            position="sticky"
            bottom="0"
            backgroundColor="#e0f2f1"
            h={{lg: "4rem"}}
            padding="0.5rem 1rem"
            display="flex"
            alignItems="center"
            bgGradient="linear(to-r, blue.600, blue.300)"
            color="white"
        >
            <Box fontSize="14px" display={{base: "flex", md: "none"}} alignItems={{base: "center"}}>
                <Text mb="0">Copyright</Text>
                <RiCopyrightLine size="14px"/>
                <Text mb="0" ml="5px">{new Date().getFullYear()}</Text>
            </Box>
            <Text display={{base: "none", md: "block"}} fontSize="10px">
                Все материалы данного сайта являются объектами авторского права (в том числе дизайн). Запрещается
                копирование, распространение (в том числе путем копирования на другие сайты и ресурсы в Интернете) или
                любое иное использование информации и объектов без предварительного письменного согласия
                правообладателя. Указание ссылки на источник информации является обязательным.
            </Text>
        </Box>
    )
}
