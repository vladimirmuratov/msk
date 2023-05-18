import {Box, Grid, GridItem, Heading, Image, List, ListItem, Text, useDisclosure} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseModal} from "@/components/base/BaseModal";

export default function Service() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Сервис</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px="1rem">
                    <Banner
                        imgUrl="./images/services-main.png"
                        label="Наша забота о Вашем здоровье"
                        color="#ff8f00"
                        textShadow="white"
                    />
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        fontSize={{base: "18px", xl: "22px"}}
                        bgColor="#0d47a1"
                        color="white" mb="12"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                            <GridItem>
                                <Image src="/images/service.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box
                                    p="4"
                                    display="flex"
                                    flexDir="column"
                                    justifyContent="space-between"
                                    gap="4"
                                    h="full"
                                >
                                    <Heading alignSelf={{base: "start", md: "start"}}>
                                        ОПЫТ
                                    </Heading>
                                    <Heading alignSelf={{base: "start", md: "center"}}>
                                        ЭКСПЕРТИЗА
                                    </Heading>
                                    <Heading alignSelf={{base: "start", md: "end"}} mb="0">
                                        РЕШЕНИЯ
                                    </Heading>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box fontSize={{base: "20px", xl: "22px"}}
                         bgColor="#eeeeee"
                         p="4"
                         borderRadius="md"
                         data-aos="fade-up"
                    >
                        <Text fontSize="18px" fontWeight="semibold">
                            Подбираем оптимальный план лечения по поставленному диагнозу, учитывая ваши требования и
                            возможности.
                            Мы напрямую работаем с ведущими медицинскими учреждениями России. Одно из преимуществ нашей
                            компании – индивидуальный подход к каждому пациенту. Вас будет сопровождать персональный
                            врач-куратор на всех этапах лечения: от подбора клиники и госпитализации до выписки.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                </Box>
            </Layout>
        </>
    )
}
