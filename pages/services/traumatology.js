import {Box, Heading, List, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Traumatology() {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Травматология и ортопедия</Heading>
                    <Banner imgUrl="../images/traumatology.png" label="Травматология и ортопедия"/>
                    <Box mt="10" display="flex" flexDirection="column" gap="4">
                        <Heading fontSize="20px">
                            Организация диагностики и лечения в травматологии,ортопедии, при костной патологии и
                            реабилитации
                        </Heading>
                        <Heading fontSize="20px">
                            Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение.
                        </Heading>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <Box display="flex" flexDirection="column" gap="5">
                        <Heading fontSize="20px">Мы оказываем содействие в организации специализированной травматолого-
                            ортопедической помощи.</Heading>
                        <Heading fontSize="20px">Наша миссия - обеспечить пациентам лучшую медицинскую помощь и доступ к
                            новейшим мировым медицинским технологиям.</Heading>
                        <Heading fontSize="20px">Травматология и ортопедия – одно из ключевых направлений нашей
                            деятельности в сопровождении пациентов</Heading>
                    </Box>
                    <Box my="16" fontSize="20px" display="flex" flexDirection="column" gap="5">
                        <Text>Мы имеем огромный опыт в организации лечения пациентов с травмами и заболеваниями
                            опорно-двигательного аппарата.
                        </Text>
                        <Text>А также организуем лечение и помогаем пациентам с весьма сложной патологией
                            опорно-двигательной системы, делаем то, что раньше казалось невозможным. А в определенных
                            случаях, с помощью средств современной ортопедической хирургии - практически полностью можно
                            восстановить нарушенную функцию конечности.
                        </Text>
                        <Text>Анализируя опыт зарубежных и отечественных коллег, мы можем предложить пациентам
                            эндопротезирование коленного и тазобедренного сустава, или других суставов, в том числе при
                            весьма сложной и запущенной патологии.
                        </Text>
                    </Box>
                    <List spacing="5">
                        <ListItem>
                            <Heading fontSize={{base: "18px", md: "22px", lg: "24px"}}>Консультации и экспертное мнение
                                травматологов</Heading>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize={{base: "18px", md: "22px", lg: "24px"}}>Лучший выбор оперирующих
                                хирургов</Heading>
                        </ListItem>
                        <ListItem>
                            <Heading fontSize={{base: "18px", md: "22px", lg: "24px"}}>Госпитализация в ведущие
                                специализированные медицинские центры</Heading>
                        </ListItem>
                    </List>
                    <Box my="10">
                        <Heading mb="5" fontSize={{base: "18px", md: "22px", lg: "24px"}}>Наша команда оказывает
                            информационную
                            поддержку и содействие в получении плановой помощи в травматологии и ортопедии по
                            направлениям:
                        </Heading>
                        <UnorderedList spacing="5" fontSize={{base: "18px", md: "22px", lg: "24px"}} fontWeight="bold">
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
                    <BaseOurValues/>
                </Box>
            </Layout>
        </>
    )
}
