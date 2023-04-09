import {Box, Heading, List, ListItem, Text, useDisclosure} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseModal} from "@/components/base/BaseModal";

export default function Service() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Госпитализация</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px="1rem">
                    <BaseBtnBack/>
                    <Banner imgUrl="./images/services-main.png" label="Мы готовы взять на себя заботу о Вашем здоровье прямо сейчас"/>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <List spacing="4" mb="8">
                        <ListItem>
                            <Heading size="lg">ОПЫТ</Heading>
                        </ListItem>
                        <ListItem>
                            <Heading size="lg">ЭКСПЕРТИЗА</Heading>
                        </ListItem>
                        <ListItem>
                            <Heading size="lg">РЕШЕНИЯ</Heading>
                        </ListItem>
                    </List>
                    <Box mb="10">
                        <Text fontSize="18px" fontWeight="bold">
                            Подбираем оптимальный план лечения по поставленному диагнозу, учитывая ваши требования и
                            возможности.
                            Мы напрямую работаем с ведущими медицинскими учреждениями России. Одно из преимуществ нашей
                            компании – индивидуальный подход к каждому пациенту. Вас будет сопровождать персональный
                            врач-куратор на всех этапах лечения: от подбора клиники и госпитализации до выписки.
                        </Text>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}
