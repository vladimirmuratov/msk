import {Box, Grid, GridItem} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import cardsOptions from "@/config/cardsOptions";
import {BaseCard} from "@/components/base/BaseCard";
import Router from "next/router";
import Head from "next/head";

export default function Index() {
    const router = Router

    return (
        <>
            <Head>
                <title>МСК | Главная</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box py="5px">
                    <Grid
                        templateColumns={{
                            base: 'repeat(1, 1fr)',
                            md: 'repeat(2, 1fr)',
                            lg: 'repeat(3, 1fr)',
                        }}
                        gap={{base: "5px", md: "0.5rem"}}
                    >
                        {cardsOptions.length
                            ? cardsOptions.map((item) => (
                                <GridItem key={item.id}>
                                    <BaseCard navigate={router} {...item}/>
                                </GridItem>
                            ))
                            : null
                        }
                    </Grid>
                </Box>
            </Layout>
        </>
    )
}
