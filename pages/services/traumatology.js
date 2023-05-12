import {
    Box,
    Grid,
    GridItem,
    Heading,
    Image,
    List,
    ListItem,
    Text,
    UnorderedList,
    useDisclosure
} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Traumatology() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Травмотология и ортопедия</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px={{md: "1rem"}} flexGrow="1">
                    <Banner imgUrl="../images/traumatology.png" label="Травматология и ортопедия" color="#ff8f00"
                            textShadow="#fff"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box px={{base: "4px", md: "0"}} display="flex" flexDirection="column" gap="4" color="#0d47a1"
                         data-aos="fade-up">
                        <Heading size="lg">
                            Организация диагностики и лечения в травматологии,ортопедии, при костной патологии и
                            реабилитации
                        </Heading>
                        <Heading size="lg">
                            Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение.
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box px={{base: "4px", md: "0"}}>
                        <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box>
                        <Box
                            fontSize={{base: "18px", xl: "22px"}}
                            bgColor="#0d47a1"
                            color="white"
                            mb="12"
                            borderRadius="md"
                            data-aos="fade-up"
                        >
                            <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                                <GridItem>
                                    <Image src="/images/doctor7.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4">
                                        <Text>Мы оказываем содействие в организации специализированной травматолого-
                                            ортопедической помощи.</Text>
                                        <Text>Наша миссия - обеспечить пациентам лучшую медицинскую помощь и доступ к
                                            новейшим мировым медицинским технологиям.</Text>
                                        <Text>Травматология и ортопедия – одно из ключевых направлений нашей
                                            деятельности в сопровождении пациентов</Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box
                            fontSize={{base: "18px", xl: "22px"}}
                            bgColor="#0d47a1"
                            color="white"
                            mb="12"
                            borderRadius="md"
                            data-aos="fade-up"
                        >
                            <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                                <GridItem>
                                    <Box p="4">
                                        <Text>Мы имеем огромный опыт в организации лечения пациентов с травмами и
                                            заболеваниями
                                            опорно-двигательного аппарата.
                                        </Text>
                                        <Text>А также организуем лечение и помогаем пациентам с весьма сложной
                                            патологией
                                            опорно-двигательной системы, делаем то, что раньше казалось невозможным. А в
                                            определенных
                                            случаях, с помощью средств современной ортопедической хирургии - практически
                                            полностью можно
                                            восстановить нарушенную функцию конечности.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/doctor8.png" h="full"/>
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box
                            fontSize={{base: "18px", xl: "22px"}}
                            bgColor="#0d47a1"
                            color="white"
                            mb="12"
                            borderRadius="md"
                            data-aos="fade-up"
                        >
                            <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                                <GridItem>
                                    <Image src="/images/doctor6.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box h="full" p="4">
                                        <Text>Анализируя опыт зарубежных и отечественных коллег, мы можем предложить
                                            пациентам
                                            эндопротезирование коленного и тазобедренного сустава, или других суставов,
                                            в
                                            том числе при
                                            весьма сложной и запущенной патологии.
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="5"
                        bgColor="#e8f5e9"
                        p="4"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Heading fontSize="20px">Мы оказываем содействие в организации специализированной травматолого-
                            ортопедической помощи.</Heading>
                        <Heading fontSize="20px">Наша миссия - обеспечить пациентам лучшую медицинскую помощь и доступ к
                            новейшим мировым медицинским технологиям.</Heading>
                        <Heading fontSize="20px">Травматология и ортопедия – одно из ключевых направлений нашей
                            деятельности в сопровождении пациентов</Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        fontSize="20px"
                        display="flex"
                        flexDirection="column"
                        gap="5"
                        bgColor="#0d47a1"
                        color="white"
                        borderRadius="md"
                        p="4"
                        data-aos="fade-up"
                    >
                        <Text>Мы имеем огромный опыт в организации лечения пациентов с травмами и заболеваниями
                            опорно-двигательного аппарата.
                        </Text>
                        <Text>А также организуем лечение и помогаем пациентам с весьма сложной патологией
                            опорно-двигательной системы, делаем то, что раньше казалось невозможным. А в определенных
                            случаях, с помощью средств современной ортопедической хирургии - практически полностью можно
                            восстановить нарушенную функцию конечности.
                        </Text>
                        <Text m="0">Анализируя опыт зарубежных и отечественных коллег, мы можем предложить пациентам
                            эндопротезирование коленного и тазобедренного сустава, или других суставов, в том числе при
                            весьма сложной и запущенной патологии.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <List spacing="5" data-aos="fade-up" color="#0d47a1">
                        <ListItem>
                            <Heading fontSize={{base: "18px", md: "22px", lg: "24px"}}>
                                Консультации и экспертное мнение
                                травматологов
                            </Heading>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize={{base: "18px", md: "22px", lg: "24px"}}>
                                Лучший выбор оперирующих
                                хирургов
                            </Heading>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize={{base: "18px", md: "22px", lg: "24px"}}>
                                Госпитализация в ведущие
                                специализированные медицинские центры
                            </Heading>
                        </ListItem>
                    </List>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box bgColor="#0d47a1" color="white" p="4" borderRadius="md" data-aos="fade-up">
                        <Box mb="5" borderBottom="1px solid white" textAlign="center">
                            <Heading fontSize={{base: "20px", md: "24px", lg: "26px"}}>Наша команда оказывает
                                информационную
                                поддержку и содействие в получении плановой помощи в травматологии и ортопедии по
                                направлениям:
                            </Heading>
                        </Box>
                        <UnorderedList ml="0" spacing="5" fontSize={{base: "18px", md: "22px", lg: "24px"}}
                                       fontWeight="bold">
                            <ListItem>Эндопротезирование суставов</ListItem>
                            <ListItem>Микрохирургия и травма кисти</ListItem>
                            <ListItem>Лечение травм и их последствий</ListItem>
                            <ListItem>Костная патология</ListItem>
                            <ListItem>Эндоскопическая хирургия суставов</ListItem>
                            <ListItem>Нейроортопедия и вертебрология</ListItem>
                            <ListItem>Онкологическая ортопедия</ListItem>
                            <ListItem>Инфекционные осложнения</ListItem>
                            <ListItem>Реабилитация</ListItem>
                            <ListItem>Функциональная диагностика опорно-двигательной системы</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseOurValues/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                </Box>
            </Layout>
        </>
    )
}
