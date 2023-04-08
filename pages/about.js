import {Box, Heading, Image, List, ListItem, Text} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {BaseTitlePage} from "@/components/base/BaseTitlePage";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import { CheckIcon } from "@chakra-ui/icons";
import {BaseBtnCall} from "@/components/base/BaseBtnCall";
import {phoneNumber} from "@/config/defaultOptions";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";

export default function About() {
    return (
        <>
            <Head>
                <title>МСК | О компании</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box px="1rem">
                    <BaseBtnBack/>
                    <Banner imgUrl="./images/about-main.png" label="МСК  - ваш гид в вопросах здоровья"/>
                    <BaseTitlePage title="О нас"/>
                    <Box display="flex" flexDirection="column" gap="4" fontSize="18px">
                        <Heading size="lg">
                            Мы российская ассистанс - компания, оказывающая профессиональную сервисную поддержку в
                            организации медицинских услуг.
                        </Heading>
                        <Text>Являемся национальным провайдером в обеспечении качества и доступности медицинской
                            помощи.</Text>
                        <Text>
                            Наша миссия - достижение максимально возможного уровня медицинской помощи и мер по охране
                            здоровья пациентов. Мы стараемся помочь каждому, кто в нас нуждается - на всех этапах
                            лечения, в
                            зависимости от тяжести заболевания.
                            Мы располагаем собственным парком автомобилей скорой помощи и осуществляем круглосуточную
                            экстренную госпитализацию в крупнейшие профильные медицинские учреждения при угрозе жизни и
                            состояниях, требующих неотложных лечебно-диагностических мероприятий.
                        </Text>
                        <Text>
                            МСК - ваш гид в вопросах здоровья.
                        </Text>
                        <Heading size="lg">Чем мы занимаемся?</Heading>
                        <List spacing="4">
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Круглосуточная госпитализация в профильные лечебные учреждения</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Индивидуальное медицинское сопровождение</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Платная скорая помощь</Heading>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Помощь в выборе стационара</Heading>
                            </ListItem>
                        </List>
                        <Box mt="5" display="flex" flexDirection="column" alignItems="flex-end" gap="2">
                            <Heading size="md">Нам доверяют, и мы очень дорожим этим доверием</Heading>
                            <Heading size="md">Помогаем в решении большинства вопросов, связанных со здоровьем</Heading>
                            <Heading size="md">Обеспечиваем быструю госпитализацию без очередей и проволочек</Heading>
                            <Heading size="md">Гарантируем высокий уровень комфорта для пациентов</Heading>
                            <Heading size="md">Всегда на связи, 24/7/365 без выходных и праздников</Heading>
                            <Heading size="md">Мы следуем правилам: высочайший профессионализм врачей, максимальный
                                комфорт
                                и безопасность для пациентов.</Heading>
                        </Box>
                    </Box>
                    <BaseCallBlock/>
                    <Box py="10" display="flex" justifyContent="space-around">
                        <Heading size="md">Logo MSK</Heading>
                        <Heading size="md">{phoneNumber}</Heading>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}
