import {Box, Grid, GridItem, Heading, Image, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Neurology() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Неврология</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px={{base: "4px", md: "1rem"}} flexGrow="1">
                    <Banner imgUrl="/images/neurology.png" label="Неврология" color="#ff8f00" textShadow="#fff"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box color="#0d47a1" data-aos="fade-up">
                        <Heading size="lg">
                            Организация лечения неврологических заболеваний.
                        </Heading>
                        <Heading size="lg">
                            Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
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
                                        <Text>
                                            Мы поддерживаем и сопровождаем пациентов с неврологическими заболеваниями.
                                        </Text>
                                        <Text>
                                            Мы работаем на принципах тесного <span style={{fontWeight: "bold"}}>сотрудничества неврологов, нейрохирургов, логопедов,
                                            сосудистых хирургов, отоневрологов, психиатров и психологов</span> из
                                            ведущих
                                            неврологических
                                            центров страны.
                                        </Text>
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
                                        <Text>
                                            Это определяет спектр и наши широчайшие возможности в организации <span
                                            style={{fontWeight: "bold"}}>проведения диагностики и
                                            лечения пациентов с различной неврологической патологией: сосудистыми заболеваниями
                                            головного и спинного мозга, поражениями периферической нервной системы, эпилепсией,
                                            паркинсонизмом, миастениями , вертеброгенными заболеваниями</span> и др.
                                        </Text>
                                        <Text>
                                            При общем высочайшем уровне компетенции специалистов ведущих клиник в
                                            области урологии
                                            обычно каждый из них специализируется на одной или нескольких проблемных
                                            областях и потому
                                            является в ней уникальным.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/doctor11.png" h="full"/>
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
                                    <Image src="/images/doctor10.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box
                                        h="full"
                                        p="4"
                                        display="flex"
                                        flexDir="column"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Heading size="lg">Госпитализация в ведущие клиники неврологии</Heading>
                                        <Heading size="lg">Помощь в подборе врача-невролога</Heading>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box p="4" borderRadius="md" bgColor="#0d47a1" color="white" data-aos="fade-up">
                        <Box borderBottom="1px solid white" mb="4" ml="4">
                            <Heading size="lg" mb="4">
                                Наша команда оказывает содействие в организации медицинской помощи пациентам с
                                заболеваниями:
                            </Heading>
                        </Box>
                        <UnorderedList ml="0" spacing="2" fontSize="18px" fontWeight="bold">
                            <ListItem>Экстрапирамидной нервной системы</ListItem>
                            <ListItem>Периферической нервной системы</ListItem>
                            <ListItem>Обморочными состояниями</ListItem>
                            <ListItem>Головной болью</ListItem>
                            <ListItem>Вегетативной дистонией</ListItem>
                            <ListItem>Воспалительными и демиелинизирующими заболеваниями ЦНС</ListItem>
                            <ListItem>Вертебро-неврологическими заболеваниями</ListItem>
                            <ListItem>Сосудистыми заболеваниями головного мозга</ListItem>
                            <ListItem>Эпилепсией и пароксизмальными состояниями</ListItem>
                            <ListItem>Болевыми синдромами</ListItem>
                            <ListItem>Посттравматическими поражениями центральной и периферической нервной
                                системы</ListItem>
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
