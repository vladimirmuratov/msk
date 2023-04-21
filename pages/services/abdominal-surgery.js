import Head from "next/head";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import {Box, Heading} from "@chakra-ui/react";

export default function AbdominalSurgery() {
    return (
        <>
            <Head>
                <title>МСК | Абдоминальная хирургия</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Абдоминальная хирургия</Heading>
                </Box>
            </Layout>
        </>
    )
}
