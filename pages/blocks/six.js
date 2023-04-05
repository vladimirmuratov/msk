import {Box, Text} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {BaseTitlePage} from "@/components/base/BaseTitlePage";
import {Layout} from "@/components/Layout";
import Head from "next/head";

export default function Six() {
    return (
        <>
            <Head>
                <title>МСК | Услуга 6</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <BaseTitlePage title="Услуга 6"/>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consequatur dolor
                        doloremque ea
                        eaque neque non, sunt tenetur totam.
                    </Text>
                </Box>
            </Layout>
        </>
    )
}
