import {Box, Heading, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Neurology() {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Неврология</Heading>
                    <Banner imgUrl="../images/neurology.png" label="Неврология"/>
                    <Box mt="10">
                        <Heading size="lg">
                            Организация лечения неврологических заболеваний.
                            Наши специалисты всегда помогут Вам найти врача и подобрать для вас оптимальне решение
                        </Heading>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <Box fontSize="18px" display="flex" flexDirection="column" gap="4">
                        <Text>
                            Мы поддерживаем и сопровождаем пациентов с неврологическими заболеваниями.
                        </Text>
                        <Text>
                            Мы работаем на принципах тесного <span style={{fontWeight: "bold"}}>сотрудничества неврологов, нейрохирургов, логопедов,
                            сосудистых хирургов, отоневрологов, психиатров и психологов</span> из ведущих
                            неврологических
                            центров страны.
                        </Text>
                        <Text>
                            Это определяет спектр и наши широчайшие возможности в организации <span
                            style={{fontWeight: "bold"}}>проведения диагностики и
                            лечения пациентов с различной неврологической патологией: сосудистыми заболеваниями
                            головного и спинного мозга, поражениями периферической нервной системы, эпилепсией,
                            паркинсонизмом, миастениями , вертеброгенными заболеваниями</span> и др.
                        </Text>
                        <Text>
                            При общем высочайшем уровне компетенции специалистов ведущих клиник в области урологии
                            обычно каждый из них специализируется на одной или нескольких проблемных областях и потому
                            является в ней уникальным.
                        </Text>
                    </Box>
                    <Box my="10" display="flex" flexDirection="column" alignItems="flex-end" gap="4">
                        <Heading size="md">Госпитализация в ведущие клиники неврологии</Heading>
                        <Heading size="md">Помощь в подборе врача-невролога</Heading>
                    </Box>
                    <Box>
                        <Heading size="lg" mb="4">
                            Наша команда оказывает содействие в организации медицинской помощи пациентам с
                            заболеваниями:
                        </Heading>
                        <UnorderedList spacing="2" fontSize="18px" fontWeight="bold">
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
                    <BaseOurValues/>
                </Box>
            </Layout>
        </>
    )
}
