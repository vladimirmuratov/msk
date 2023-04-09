import {Box, Heading, Image, List, ListItem, Text, useDisclosure} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {phoneNumber} from "@/config/defaultOptions";
import {CheckIcon} from "@chakra-ui/icons";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseAccordion} from "@/components/base/BaseAccordion";
import {CollaborationsBlock} from "@/components/CollaborationsBlock";
import {BaseModal} from "@/components/base/BaseModal";

export default function Index() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
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
                {/*---------- ВАРИАНТ С КАРТОЧКАМИ НА ГЛАВНОЙ СТРАНИЦЕ ---------------*/}
                    {/*<Grid
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
                    </Grid>*/}
            </Layout>
        </>
    )
}
