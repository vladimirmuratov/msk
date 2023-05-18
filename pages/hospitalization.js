import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    Image,
    List,
    ListItem,
    Text
} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {CheckIcon} from "@chakra-ui/icons";
import {phoneNumber} from "@/config/defaultOptions";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";

export default function Hospitalization() {
    return (
        <>
            <Head>
                <title>МСК | Госпитализация</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box px="1rem">
                    <BaseBtnBack/>
                    <Banner imgUrl="./images/hospitalization-main.png" label="Госпитализация в стационар" color="#ff8f00" textShadow="white"/>
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
                    <BaseCallBlock/>
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
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Кардиология
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Мы работаем в самом тесном взаимодействии с кардиохирургическими службами и
                                    отделениями сосудистой хирургии ведущих специализированных медицинских центров.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Терапия
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Мы имеем огромный опыт в организации лечения пациентов с различными нозологическими
                                    формами: сердечно-сосудистой, бронхолегочной, эндокринной, нервной,
                                    опорно-двигательной, мочевыделительной систем, желудочно- кишечного тракта,
                                    аллергическими заболеваниями.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Травматология и ортопедия
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Мы имеем огромный опыт в организации лечения пациентов с травмами и заболеваниями
                                    опорно-двигательного аппарата.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Нейрохирургия
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Мы оказываем содействие пациентам в организации исследования и лечения широкого
                                    спектра нейрохирургической патологии центральной и периферической нервной системы.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Неврология
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Мы работаем на принципах тесного сотрудничества неврологов, нейрохирургов,
                                    логопедов, сосудистых хирургов, отоневрологов, психиатров и психологов из ведущих
                                    неврологических центров страны.
                                    Это определяет спектр и наши широчайшие возможности в организации проведения
                                    диагностики и лечения пациентов с различной неврологической патологией: сосудистыми
                                    заболеваниями головного и спинного мозга, поражениями периферической нервной
                                    системы, эпилепсией, паркинсонизмом, миастениями , вертеброгенными заболеваниями и
                                    др.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box mb="8" textAlign="center">
                        <Heading size="lg">Позвоните нам и наша команда с радостью начнет помогать вам уже
                            сейчас</Heading>
                    </Box>
                    <Box mb="8" textAlign="center">
                        <Heading size="lg">{phoneNumber}</Heading>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}
