import {Box, Heading, Image, Text} from "@chakra-ui/react";
import {phoneNumber} from "@/config/defaultOptions";

export const BaseOurValues = () => {
    return(
        <Box>
            <Box mt="10" display="flex" justifyContent={{base: "center", md: "flex-end"}}>
                <Image src="../images/doctor1.png" alt="pic" htmlWidth="250px" htmlHeight="250px"/>
            </Box>
            <Box my="10" textAlign="center" fontSize="20px">
                <Heading mb="5">Наши ценности</Heading>
                <Box display="flex" flexDirection="column" gap="2">
                    <Text>Обладаем экспертными знаниями и отвечаем за качество нашей работы</Text>
                    <Text>С искренней заботой относимся к каждому, кто в нас нуждается</Text>
                    <Text>Соблюдаем интересы пациентов, выстраиваем отношения взаимного доверия и
                        уважения</Text>
                    <Text>Неукоснительно соблюдаем профессиональные стандарты</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" gap="4">
                <Heading size={{base: "md", md: "lg"}}>Горячая линия</Heading>
                <Heading size={{base: "md", md: "lg"}}>{phoneNumber}</Heading>
            </Box>
            <Box my="10" textAlign="center">
                <Heading size={{base: "md", md: "lg"}}>Вы можете задать вопросы и получить консультацию бесплатно</Heading>
            </Box>
        </Box>
    )
}
