import {Box, Heading, Text} from "@chakra-ui/react";

export const BaseOurValues = () => {

    return (
        <Box bgImg="../images/bgValues.png" bgSize="100% 100%" p="4" color="blackAlpha.900" data-aos="fade-up">
            <Box my="10" textAlign="center" fontSize="20px" textShadow="1px 1px 2px white">
                <Heading mb="5">Наши ценности</Heading>
                <Box display="flex" flexDirection="column" gap="2" fontWeight="bold">
                    <Text>Обладаем экспертными знаниями и отвечаем за качество нашей работы</Text>
                    <Text>С искренней заботой относимся к каждому, кто в нас нуждается</Text>
                    <Text>Соблюдаем интересы пациентов, выстраиваем отношения взаимного доверия и
                        уважения</Text>
                    <Text>Неукоснительно соблюдаем профессиональные стандарты</Text>
                </Box>
            </Box>
        </Box>
    )
}
