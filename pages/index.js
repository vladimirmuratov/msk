import {Box, Button, Grid, GridItem, Heading, Icon, Image, List, ListItem, Text, useDisclosure} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {phoneNumber} from "@/config/defaultOptions";
import {CheckIcon} from "@chakra-ui/icons";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseAccordion} from "@/components/base/BaseAccordion";
import {CollaborationsBlock} from "@/components/CollaborationsBlock";
import {BaseModal} from "@/components/base/BaseModal";
import {BaseBtnCall} from "@/components/base/BaseBtnCall";
import {BaseCarousel} from "@/components/base/BaseCarousel";
import {BiClinic} from "react-icons/bi";
import {FaBed} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";
import {MdLocalHospital} from "react-icons/md";
import {CiMedicalCross} from "react-icons/ci";
import {BaseGridItem} from "@/components/base/BaseGridItem";
import Link from "next/link";
import {directionsOfHospitalizationOptions} from "@/config/directionsOfHospitalizationOptions";
import {BaseDirectionOfHospitalizationCard} from "@/components/base/BaseDirectionOfHospitalizationCard";
import {HospitalsBlock} from "@/components/HospitalsBlock";
import {useEffect} from "react";
import {BasePhonesBlock} from "@/components/base/BasePhonesBlock";
import {DirectionsHospitalization} from "@/components/DirectionsHospitalization";
import {carouselOptions} from "@/config/carouselOptions";

export default function Index() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    /*return (
        <>
            <Head>
                <title>МСК | Главная</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box py="5px" px="4">
                    <Banner imgUrl="./images/hospitalization-main.png" label="Госпитализация в стационар"/>
                    <Box>
                        <Heading size="lg">Горячая линия экстренной госпитализации</Heading>
                        <Heading size="lg">{phoneNumber}</Heading>
                        <Heading size="lg">24/7/365 без выходных и праздников</Heading>
                    </Box>
                    <Box display="flex" flexDirection="column" gap="4" fontSize="18px" mt="8">
                        <Heading size="lg">
                            Госпитализация в любой стационар без очередей и проволочек
                        </Heading>
                        <List spacing="4">
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Экстренная госпитализация при угрозе жизни и неотложных
                                    состояниях</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Многопрофильность направлений</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Специализированная медицинская помощь</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Высокотехнологичная помощь</Heading>
                            </ListItem>
                        </List>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <List spacing="4">
                        <Heading size="lg">БЕСПЛАТНО</Heading>
                        <Heading size="lg">БЫСТРО</Heading>
                        <Heading size="lg">КАЧЕСТВЕННО</Heading>
                    </List>
                    <Box my="8">
                        <Heading size="md" lineHeight="1.5">
                            Мы предлагаем госпитализацию не только в стационары, где есть свободные
                            места, но и в лучшие клиники и федеральные медицинские центры по вашему выбору
                        </Heading>
                    </Box>
                    <List spacing="4" mb="8">
                        <ListItem display="flex" alignItems="center" gap="2">
                            <CheckIcon/>
                            <Heading size="md">Плановая или экстренная госпитализация по полису ОМС</Heading>
                        </ListItem>
                        <ListItem display="flex" alignItems="center" gap="2">
                            <CheckIcon/>
                            <Heading size="md">Хирургическое лечение на коммерческой основе</Heading>
                        </ListItem>
                    </List>
                    <Box mb="8">
                        <Heading size="md">
                            Вам необходима организация плановой или экстренной госпитализации, но вы не знаете куда
                            обратиться? Просто позвоните и мы ответим на все интересующие вопросы.
                        </Heading>
                    </Box>
                    <Box textAlign="right" mb="8">
                        <Heading size="lg">{phoneNumber}</Heading>
                    </Box>
                    <Box mb="8">
                        <Heading size="md" mb="4">В программу входит:</Heading>
                        <List spacing="4" mb="8">
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Госпитализация в стационар для дообследования или оперативного
                                    лечения</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Полное сопровождение пациента до момента выздоровления</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Подбор профильного оперирующего хирурга</Heading>
                            </ListItem>
                        </List>
                    </Box>
                    <Box mb="10">
                        <Text fontSize="18px">
                            При необходимости мы можем дистанционно согласовать условия госпитализации на основании
                            данных обследований и анализов, а также рекомендации профильных специалистов.
                        </Text>
                    </Box>
                    <Box mb="10" display="flex" justifyContent="flex-end">
                        <Image src="./images/hospitalization-girl.png"/>
                    </Box>
                    <Box mb="8" textAlign="center">
                        <Heading mb="4">Направления госпитализации</Heading>
                        <BaseAccordion/>
                    </Box>
                    <Box mb="8" textAlign="center">
                        <Heading size="lg">Позвоните нам и наша команда с радостью начнет помогать вам уже
                            сейчас</Heading>
                    </Box>
                    <Box mb="8" textAlign="center">
                        <Heading size="lg">{phoneNumber}</Heading>
                    </Box>
                    <Box my="10" textAlign="center">
                        <Heading size="lg" mb="10">Наши партнёры:</Heading>
                        <CollaborationsBlock/>
                    </Box>
                </Box>
                {/!*---------- ВАРИАНТ С КАРТОЧКАМИ НА ГЛАВНОЙ СТРАНИЦЕ ---------------*!/}
                    {/!*<Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(3, 1fr)',
                        }}
                        gap={{base: "5px", md: "0.5rem"}}
                    >
                        {cardsOptions.length
                            ? cardsOptions.map((item) => (
                                <GridItem key={item.id}>
                                    <BaseCard navigate={router} {...item}/>
                                </GridItem>
                            ))
                            : null
                        }
                    </Grid>*!/}
            </Layout>
        </>
    )*/

    return (
        <>
            <Head>
                <title>МСК | Главная</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box
                    flexGrow="1"
                    display="flex"
                    flexDir="column"
                    px={{md: "5"}}
                >
                    {/*<BasePhonesBlock/>*/}
                    <Box width="full">
                        <BaseCarousel data={carouselOptions}/>
                    </Box>
                    <Box
                        px={{base: "3", md: "0"}}
                        my="5"
                        display="flex"
                        flexDir="column"
                        gap="3"
                        fontSize={{base: "20px", xl: "22px"}}
                    >
                        <Heading>О нас</Heading>
                        <Text>
                            <Text as="span" fontWeight="bold">МСК- Госпитализация</Text> – федеральная сервисная
                            компания, оказывающая полный спектр услуг по
                            госпитализации в крупнейшие медицинские центры, скорой медицинской помощи и сопровождению
                            пациентов.
                        </Text>
                        <Text>
                            <Text as="span" fontWeight="bold">МСК- Госпитализация</Text> – официальный партнер и
                            аккредитованный Центр госпитализации и
                            сопровождения пациентов федеральных медицинских учреждений Москвы, ведомственных организаций
                            здравоохранения, лечебных учреждений Управления делами Президента РФ.
                        </Text>
                        <Text>
                            Мы являемся экспертами в организации многопрофильного стационарного лечения и уже более 10
                            лет помогаем людям в получении экстренной и плановой медицинской помощи в ведущих
                            медицинских учреждениях Москвы.
                        </Text>
                        <Link href="/about" style={{color: "#1976d2", textDecoration: "underline"}}>Подробнее</Link>
                    </Box>
                    <Box px={{base: "3", md: "0"}} fontSize={{base: "20px", xl: "22px"}} textAlign="center">
                        <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap="5">
                            <GridItem>
                                <BaseGridItem icon={CiMedicalCross} value="20+"
                                              description="профилей стационарного лечения"/>
                            </GridItem>
                            <GridItem>
                                <BaseGridItem icon={FaBed} value="300+"
                                              description="коечный фонд ведомственной и кремлевской медицины"/>
                            </GridItem>
                            <GridItem>
                                <BaseGridItem icon={AiOutlineUserAdd} value="15500+"
                                              description="вылеченных пациентов"/>
                            </GridItem>
                            <GridItem>
                                <BaseGridItem icon={MdLocalHospital} value="726" description="докторов"/>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box
                        id="hospitals"
                        scrollMarginTop="16"
                        my="10"
                        px={{base: "3", md: "0"}}
                        display="flex"
                        flexDir="column"
                        gap="3"
                        fontSize={{base: "20px", xl: "22px"}}
                    >
                        <Heading>Стационары</Heading>
                        <Text fontWeight="bold">
                            Наша команда гарантирует госпитализацию на платной основе в стационары ведомственных больниц
                            и медицинских учреждений для «спецконтингента» без очереди и лишней бюрократии, а пациенты
                            получают возможность пройти лечение у лучших врачей по самым дефицитным направлениям
                            медицинской помощи и доступ к высококачественному медицинскому обслуживанию.
                        </Text>
                        <Link href="/hospitals"
                              style={{color: "#1976d2", textDecoration: "underline"}}>Подробнее</Link>
                        <Text>
                            Являясь официальным партнером системообразующих медицинских учреждений ведомственной и
                            кремлевской медицины, <span style={{fontWeight: "bold"}}>Центр госпитализации и сопровождения пациентов МСК</span> решает
                            даже самые
                            сложные клинические задачи комплексно и гарантирует высокое качество, оперативность и
                            индивидуальный подход.
                        </Text>
                    </Box>
                    <DirectionsHospitalization options={directionsOfHospitalizationOptions} label="Направления госпитализации"/>
                    <Box px={{base: "3", md: "0"}}>
                        <HospitalsBlock isLocal={true}/>
                    </Box>
                    <Box
                        id="service"
                        scrollMarginTop="16"
                        fontSize={{base: "20px", xl: "22px"}}
                        px={{base: "3", md: "0"}}
                    >
                        <Heading>Сервис</Heading>
                        <Text fontWeight="bold">
                            Индивидуальное сопровождение пациента на всех этапах лечения
                        </Text>
                        <Text>
                            <span
                                style={{fontWeight: "bold"}}>Центр госпитализации и сопровождения пациентов МСК</span> оказывает
                            всесторонюю помощь и поддержку
                            на всех этапах лечения – от госпитализации до момента выздоровления и полного
                            восстановления. Наши пациенты получают индивидуальный план лечения, который подходит
                            пациенту лучше всего и является обоснованным.
                        </Text>
                        <Text>
                            И никогда не остаются наедине со своей проблемой. Мы всегда рядом с нашим пациентом, пока
                            ему это необходимо.
                        </Text>
                        <Text>
                            Центр госпитализации и сопровождения пациентов МСК предоставляет полный спектр медицинского
                            консьержа - трансфер маломобильных пациентов, услуги сиделки, курьера, вызова такси и др.
                        </Text>
                        <Link href="/service"
                              style={{color: "#1976d2", textDecoration: "underline"}}>Подробнее</Link>
                    </Box>
                    <Box
                        id="ambulance"
                        scrollMarginTop="16"
                        my="10"
                        fontSize={{base: "20px", xl: "22px"}}
                        px={{base: "3", md: "0"}}
                    >
                        <Heading>Скорая помощь</Heading>
                        <Text>
                            <span
                                style={{fontWeight: "bold"}}>Центр госпитализации и сопровождения пациентов МСК</span> располагает
                            собственным парком
                            автомобилей скорой помощи и осуществляем круглосуточную экстренную госпитализацию в
                            крупнейшие профильные медицинские учреждения при угрозе жизни и состояниях, требующих
                            неотложных лечебно-диагностических мероприятий.
                        </Text>
                    </Box>
                    <Box textAlign="center" fontSize={{base: "20px", xl: "22px"}} px={{base: "3", md: "0"}}>
                        <Text fontWeight="bold">
                            Госпитализация в системообразующие медицинские учреждения ведомственной и кремлевской
                            медицины
                        </Text>
                        <Text fontWeight="bold">
                            <Link
                                href="/ambulance"
                                style={{color: "#1976d2", textDecoration: "underline"}}
                            >
                                Скорая помощь
                            </Link>
                        </Text>
                        <Text fontWeight="bold">
                            Услуги медицинского консьержа – сиделки, индивидуальное сопровождение
                        </Text>
                        <BaseCallBlock btnLabel="Заказать услугу"/>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}
