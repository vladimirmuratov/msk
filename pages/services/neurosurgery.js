import {Box, Heading, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Neurosurgery() {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Нейрохирургия</Heading>
                    <Banner imgUrl="../images/neurosurgery.png" label="Нейрохирургия"/>
                    <Box mt="10" display="flex" flexDirection="column" gap="4">
                        <Heading size="lg">
                            Организация лечения широкого спектра нейрохирургической патологии.
                        </Heading>
                        <Heading size="lg">
                            Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение.
                        </Heading>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <Box fontSize="18px" display="flex" flexDirection="column" gap="4">
                        <Text>
                            Мы оказываем содействие пациентам в организации исследования и лечения широкого спектра
                            нейрохирургической патологии центральной и периферической нервной системы.
                        </Text>
                        <Text>
                            Мы работаем на принципах тесного сотрудничества <span style={{fontWeight: "bold"}}>нейрохирургов, неврологов,
                            нейроофтальмологов, отоневрологов, эндокринологов, психиатров из ведущих центров
                            нейрохирургии.</span>
                        </Text>
                        <Text>
                            Это определяет спектр и наши широчайшие возможности в организации проведения диагностики и
                            лечения пациентов с <span style={{fontWeight: "bold"}}>такой патологией, как опухоли головного и спинного мозга, дегенеративные
                            заболевания позвоночника, сосудистые патологии, хронические болевые синдромы</span> и др.
                        </Text>
                        <Text>
                            Наши специалисты помогут организовать консультацию с нейрохирургами для определения
                            показаний для хирургического и адъювантного лечения пациентов с нейрохирургической
                            патологией.
                        </Text>
                        <Box display="flex" justifyContent="flex-end">
                            <UnorderedList spacing="2">
                                <ListItem>
                                    <Text fontWeight="bold">Госпитализация в ведущие центры нейрохирургии</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Подбор профильных врачей с бузупречной репутацией</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Помощи в выборе стационара</Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                        <Box my="10" display="flex" flexDirection="column">
                            <Text>Наша команда оказывает содействие в организации медицинской помощи пациентам с
                                заболеваниями:</Text>
                            <UnorderedList spacing="2">
                                <ListItem>
                                    <Text fontWeight="bold">Опухоли головного и спинного мозга</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Патология сосудов головного и спинного мозга (аневризмы,
                                        стенозы и окклюзии магистральных сосудов головы и шеи и др)
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Дегенеративные заболевания позвоночника (грыжи,
                                        стенозы)</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Хронические болевые синдромы</Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight="bold">Высокотехнологичное хирургическое лечение
                                        фармакорезистентной эпилепсии
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </Box>
                    </Box>
                    <BaseOurValues/>
                </Box>
            </Layout>
        </>
    )
}
