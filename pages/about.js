import {Box, Text} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {BaseTitlePage} from "@/components/base/BaseTitlePage";
import {Layout} from "@/components/Layout";
import Head from "next/head";

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
                    <BaseTitlePage title="О компании"/>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores cumque explicabo
                        fugiat
                        incidunt, libero maiores, nesciunt nihil obcaecati possimus, provident repellendus suscipit.
                        Alias
                        culpa
                        impedit officia recusandae voluptas? A ab est, ipsa molestiae quis repudiandae voluptates!
                        Deserunt
                        dolores, fugit minima quis sequi tenetur totam? Accusamus accusantium assumenda ducimus sit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores cumque explicabo
                        fugiat
                        incidunt, libero maiores, nesciunt nihil obcaecati possimus, provident repellendus suscipit.
                        Alias
                        culpa
                        impedit officia recusandae voluptas? A ab est, ipsa molestiae quis repudiandae voluptates!
                        Deserunt
                        dolores, fugit minima quis sequi tenetur totam? Accusamus accusantium assumenda ducimus sit.
                    </Text>
                </Box>
            </Layout>
        </>
    )
}
