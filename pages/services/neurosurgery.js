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

export default function Neurosurgery() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Нейрохирургия</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px={{base: "4px", md: "1rem"}} flexGrow="1">
                    <Banner imgUrl="../images/neurosurgery2.png" label="Нейрохирургия" color="#ff8f00"
                            textShadow="#fff"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box mt="10" display="flex" flexDirection="column" gap="4" color="#0d47a1" data-aos="fade-up">
                        <Heading size="lg">
                            Организация лечения широкого спектра нейрохирургической патологии.
                        </Heading>
                        <Heading size="lg">
                            Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение.
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
                                    <Image src="/images/neurosurgery3.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4">
                                        <Text>
                                            Мы оказываем содействие пациентам в организации исследования и лечения
                                            широкого спектра
                                            нейрохирургической патологии центральной и периферической нервной системы.
                                        </Text>
                                        <Text>
                                            Мы работаем на принципах тесного сотрудничества <span
                                            style={{fontWeight: "bold"}}>
                                                нейрохирургов, неврологов,
                                                нейроофтальмологов, отоневрологов, эндокринологов, психиатров из ведущих центров
                                                нейрохирургии.
                                            </span>
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
                                            Это определяет спектр и наши широчайшие возможности в организации проведения
                                            диагностики и
                                            лечения пациентов с <span style={{fontWeight: "bold"}}>такой патологией, как опухоли головного и спинного мозга, дегенеративные
                                            заболевания позвоночника, сосудистые патологии, хронические болевые синдромы</span> и
                                            др.
                                        </Text>
                                        <Text>
                                            Наши специалисты помогут организовать консультацию с нейрохирургами для
                                            определения
                                            показаний для хирургического и адъювантного лечения пациентов с
                                            нейрохирургической
                                            патологией.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/doctor5.png" h="full"/>
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
                                    <Box h="full" p="4" display="flex" flexDir="column" justifyContent="space-evenly">
                                        <Heading size="lg">Госпитализация в ведущие центры нейрохирургии</Heading>
                                        <Heading size="lg">Подбор профильных врачей с бузупречной репутацией</Heading>
                                        <Heading size="lg">Помощи в выборе стационара</Heading>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                        <Box p="4" borderRadius="md" display="flex" flexDirection="column" bgColor="#0d47a1"
                             color="white" data-aos="fade-up">
                            <Box borderBottom="1px solid white" mb="4" ml="4">
                                <Heading size="lg">
                                    Наша команда оказывает содействие в организации медицинской помощи пациентам с
                                    заболеваниями:
                                </Heading>
                            </Box>
                            <UnorderedList ml="0" spacing="2" fontSize={{md: "20px"}}>
                                <ListItem>
                                    <Text fontWeight="bold">Опухоли головного и спинного мозга</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">
                                        Патология сосудов головного и спинного мозга (аневризмы,
                                        стенозы и окклюзии магистральных сосудов головы и шеи и др)
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">
                                        Дегенеративные заболевания позвоночника (грыжи,
                                        стенозы)
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Хронические болевые синдромы</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">
                                        Высокотехнологичное хирургическое лечение
                                        фармакорезистентной эпилепсии
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseOurValues/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                </Box>
            </Layout>
        </>
    )
}
