import {Box, Heading, List, ListItem, Text, useDisclosure} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {CheckIcon} from "@chakra-ui/icons";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseModal} from "@/components/base/BaseModal";

export default function About() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | О компании</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px={{base: "4px", md: "1rem"}} color="#0d47a1">
                    <Banner imgUrl="./images/doctor8.png" label="МСК  - ваш гид в вопросах здоровья" color="#ff8f00"
                            textShadow="white"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box px="4" data-aos="fade-up">
                        <Heading size="lg">
                            Мы российская ассистанс - компания, оказывающая профессиональную сервисную поддержку в
                            организации медицинских услуг.
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box p="4" borderRadius="lg" fontSize={{base: "20px", xl: "22px"}} fontWeight="semibold"
                         bgColor="#eeeeee" data-aos="fade-up">
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
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap="4"
                        fontSize={{base: "20px", xl: "22px"}}
                        bgColor="#0d47a1"
                        color="white"
                        borderRadius="md"
                        p="4"
                        data-aos="fade-up"
                    >
                        <Box borderBottom="1px solid white" mb="2">
                            <Heading size="lg">Чем мы занимаемся?</Heading>
                        </Box>
                        <List spacing="4" pl="4">
                            <ListItem display="flex" alignItems="center" gap="2">
                                <CheckIcon/>
                                <Heading size="md">Круглосуточная госпитализация в профильные лечебные
                                    учреждения</Heading>
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
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box p="4" borderRadius="lg" fontSize={{base: "20px", xl: "22px"}} fontWeight="semibold"
                         bgColor="#eeeeee" data-aos="fade-up">
                        <Text>Нам доверяют, и мы очень дорожим этим доверием</Text>
                        <Text>Помогаем в решении большинства вопросов, связанных со здоровьем</Text>
                        <Text>Обеспечиваем быструю госпитализацию без очередей и проволочек</Text>
                        <Text>Гарантируем высокий уровень комфорта для пациентов</Text>
                        <Text>Всегда на связи, 24/7/365 без выходных и праздников</Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center"
                         bgColor="#0d47a1"
                         color="white"
                         borderRadius="md"
                         p="4"
                         data-aos="fade-up"
                    >
                        <Heading size="lg">Мы следуем правилам: высочайший профессионализм врачей, максимальный
                            комфорт
                            и безопасность для пациентов.</Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseCallBlock onClick={onOpen}/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                </Box>
            </Layout>
        </>
    )
}
