import {Box, Text} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {BaseTitlePage} from "@/components/base/BaseTitlePage";
import {Layout} from "@/components/Layout";
import Head from "next/head";

export default function Contacts() {
    return (
        <>
            <Head>
                <title>МСК | Контакты</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box width="100%" display="flex" flexDirection="column" gap="1rem" px="1rem">
                    <BaseBtnBack/>
                    <BaseTitlePage title="Контакты"/>
                    <Text><b>Адрес:</b> xxx</Text>
                    <Text><b>Телефон:</b> xxx</Text>
                    <Text><b>Email:</b> xxx</Text>
                </Box>
            </Layout>
        </>
    )
}
