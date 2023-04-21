import Head from "next/head";
import {Box, Heading} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";

export default function Utility() {
    return (
        <>
            <Head>
                <title>МСК | Сервис</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box px="1rem" w="full">
                    <Heading>Услуги</Heading>
                </Box>
            </Layout>
        </>
    )
}
