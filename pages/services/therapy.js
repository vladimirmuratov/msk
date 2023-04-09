import {Box, Heading, List, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {CheckIcon} from "@chakra-ui/icons";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Therapy() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Терапия</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Терапия</Heading>
                    <Banner imgUrl="../images/therapy.png" label="Терапия"/>
                    <Box mt="10" display="flex" flexDirection="column" gap="4">
                        <Heading size="md">
                            Высококвалифицированные врачи общей практики
                        </Heading>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <Box>
                        <Heading fontSize="22px" mb="5">
                            Мы оказываем содействие в организации медицинской помощи пациентам с внутренними болезнями,
                            которые нуждаются в длительном лечении, уходе, проведении сложных диагностических процедур
                            по основным направлениям:
                        </Heading>
                        <UnorderedList spacing="2" fontSize="22px">
                            <ListItem>
                                <Text>Организация диагностики и лечения терапевтической патологии</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Содействие в получении специализированной, в том числе высокотехнологичной
                                    медицинской помощи</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Подбор терапии и сопровождение больных после оказания высокотехнологичной
                                    медицинской помощи </Text>
                            </ListItem>
                            <ListItem>
                                <Text>Организация профилактики и лечения наследственных аллергических заболеваний, в том
                                    числе жизнеугрожающих состояний</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Организация предоперационных клинико-лабораторных обследований перед планируемым
                                    оперативным лечением в отделениях хирургического профиля</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Организация обследований и лечения в режиме «дневной стационар», в том числе и
                                    обследование пациентов по программам Сheck Up</Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box my="10">
                        <Heading size="lg">
                            Терапия – одно из ключевых направлений нашей деятельности в сопровождении пациентов
                        </Heading>
                    </Box>
                    <Box fontSize="22px" display="flex" flexDirection="column" gap="4">
                        <Text>Мы имеем огромный опыт в организации лечения пациентов с различными нозологическими
                            формами: сердечно-сосудистой, бронхолегочной, эндокринной, нервной, опорно-двигательной,
                            мочевыделительной систем, желудочно- кишечного тракта, аллергическими заболеваниями.
                        </Text>
                        <Text>В диагностике заболеваний используется широкий спектр лабораторных исследований, включая
                            генетическое, а также диагностических возможностей стационара, включая рентгенологическую,
                            мультиспиральную компьютерную, магнитно-резонансную томографию, эндоскопические методы
                            исследования, весь спектр ультразвуковых и ангиографических технологий в круглосуточном
                            режиме.</Text>
                    </Box>
                    <Box my="10" display="flex" justifyContent="flex-end">
                        <List spacing="2">
                            <ListItem>
                                <Box display="flex" alignItems="center" gap="2">
                                    <CheckIcon/>
                                    <Heading fontSize={{base: "18px", md: "22px", lg: "24px", xl: "26px"}}>Высококвалифицированные врачи общей практики</Heading>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box display="flex" alignItems="center" gap="2">
                                    <CheckIcon/>
                                    <Heading fontSize={{base: "18px", md: "22px", lg: "24px", xl: "26px"}}>Специализированная помощь пациентам терапевтического
                                        профиля</Heading>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box display="flex" alignItems="center" gap="2">
                                    <CheckIcon/>
                                    <Heading fontSize={{base: "18px", md: "22px", lg: "24px", xl: "26px"}}>Госпитализация в терапевтические отделения</Heading>
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Heading mb="5" fontSize="24px">Наша команда оказывает содействие в госпитализации в
                            терапевтические
                            отделения пациентам со следующей патологией:
                        </Heading>
                        <UnorderedList spacing="2">
                            <ListItem>
                                <Text fontSize="22px">Заболевания гастроэнтерологического профиля (язвенная болезнь
                                    желудка и 12-перстной кишки, ГЭРБ, колит, цирроз печени, хронический гепатит
                                    неинфекционной этиологии и др)
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="22px">Анемии, заболевания опорно-двигательной системы (ревматоидный
                                    полиартрит, подагра и др)
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="22px">Бронхо-лёгочной системы (бронхиальная астма, хронический
                                    обструктивный бронхит, бронхоэктатическая болезнь, пневмонии)
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="22px">Сахарный диабет</Text>
                            </ListItem>
                            <ListItem>
                                <Text fontSize="22px">Заболевания сердечно-сосудистой системы (гипертоническая болезнь,
                                    ИБС, хроническая сердечная недостаточность, стабильная стенокардия, постинфарктный
                                    кардиосклероз)
                                </Text>
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <BaseOurValues/>
                </Box>
            </Layout>
        </>
    )
}
