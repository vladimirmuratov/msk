import {Box, Text} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {BaseTitlePage} from "@/components/base/BaseTitlePage";
import {Layout} from "@/components/Layout";
import {CollaborationsBlock} from "@/components/CollaborationsBlock";
import Head from "next/head";

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
                    <BaseTitlePage title="Госпитализация"/>
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
                    <CollaborationsBlock/>
                </Box>
            </Layout>
        </>
    )
}
