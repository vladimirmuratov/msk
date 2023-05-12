import Head from "next/head";
import {Box, Grid, GridItem, Heading, Image, Text, useDisclosure} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import {BaseModal} from "@/components/base/BaseModal";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {HospitalsBlock} from "@/components/HospitalsBlock";

export default function Utility() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Услуги</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px="1rem">
                    <Banner imgUrl="/images/services-main.png"
                            label="Услуги" color="#ff8f00" textShadow="#fff"/>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <Box
                        fontSize={{base: "18px", xl: "22px"}}
                        bgColor="#0d47a1"
                        color="white"
                        mb="12"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                            <GridItem>
                                <Image src="/images/doctor2.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box p="4">
                                    <Text>
                            <span
                                style={{fontWeight: "bold"}}>Центр госпитализации и сопровождения пациентов МСК</span> предоставляет
                                        полный спектр услуг по
                                        медицинскому ассистансу с максимальной экономией времени и высоким уровнем
                                        комфорта.
                                    </Text>
                                    <Text mb="0">
                                        <span style={{fontWeight: "bold"}}>С 2013 года Центр госпитализации и сопровождения пациентов  МСК</span>
                                        развивает направление полного цикла медицинской координации и на сегодняшний
                                        день
                                        является
                                        флагманом федерального уровня в ведении пациентов даже с самыми сложными
                                        случаями.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="8"/>
                    <Box color="#0d47a1" data-aos="fade-up">
                        <Heading>
                            Контроль качества и стоимости медицинской помощи,
                        </Heading>
                        <Heading>
                            медицинская экспертиза,
                        </Heading>
                        <Heading>
                            сервис и забота о пациенте в периметре одной компании -
                        </Heading>
                        <Heading mb="0">
                            основные принципы нашей работы и гарантии эффективного лечения для пациента.
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        fontSize={{base: "20px", xl: "22px"}}
                        bgColor="#cfd8dc"
                        my="10"
                        p="4"
                        color="blackAlpha.900"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Text>
                            Ежегодно тысячи людей полагаются на помощь Центра госпитализации и сопровождения пациентов
                            МСК, доверяя нам свое здоровье.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="8"/>
                    <Box color="#0d47a1" data-aos="fade-up">
                        <Heading>
                            Время – самый ценный ресурс, который получают пациенты,
                        </Heading>
                        <Heading mb="0">
                            обратившись в Центр госпитализации и сопровождения пациентов МСК.
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="12"/>
                    <Box fontSize={{base: "18px", xl: "22px"}} bgColor="#0d47a1" color="white" borderRadius="md"
                         data-aos="fade-up">
                        <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                            <GridItem>
                                <Box p="4" height="full" display="flex" justifyContent="center" alignItems="center">
                                    <Text fontSize={{base: "20px", md: "24px", lg: "26px"}} lineHeight="10">
                                        Собственный автопарк скорой помощи и наличие партнерской сети стационаров
                                        позволяет нам четко следовать принципу «терапевтического окна» или «золотого
                                        часа»!
                                    </Text>
                                </Box>
                            </GridItem>
                            <GridItem>
                                <Image src="/images/ambulance2.png" h="full"/>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        fontSize={{base: "20px", xl: "22px"}}
                        bgColor="#cfd8dc"
                        p="4"
                        color="blackAlpha.900"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Text>
                            Помните, что диагностика и лечение неотложных состояний, в частности, пациентов с инсультом,
                            зависит от сроков госпитализации пациента в стационар!
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        fontSize={{base: "18px", xl: "22px"}}
                        bgColor="#0d47a1"
                        color="white"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)"}}>
                            <GridItem>
                                <Image src="/images/doctor3.png" h="full"/>
                            </GridItem>
                            <GridItem>
                                <Box p="4" height="full" display="flex" justifyContent="center" alignItems="center">
                                    <Text fontSize={{base: "20px", md: "24px", lg: "26px"}} lineHeight="10">
                                        Система преемственности и персонифицированный подход, реализованные в Центре
                                        госпитализации
                                        и сопровождения пациентов МСК, значительно повышает результативность оказания
                                        скорой
                                        медицинской помощи.
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="12" mb="8"/>
                    <Box fontSize={{base: "20px", xl: "22px"}}
                         bgColor="#cfd8dc"
                         p="4"
                         color="blackAlpha.900"
                         borderRadius="md"
                         data-aos="fade-up">
                        <Text>
                            Мы имеем широкую провайдерскую сеть медицинских партнеров, в которую входят
                            системообразующие медицинские учреждения ведомственной и кремлевской медицины
                            Соответствующее всем мировым требования
                        </Text>
                        <Text>
                            Главным требованием Центра госпитализации и сопровождения пациентов МСК к медицинским
                            партнерам является их прозрачность и медицинская помощь высочайшего уровня.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" my="10"/>
                    <Box
                        color="#0d47a1"
                        display="flex"
                        flexDir="column"
                        gap="4"
                        data-aos="fade-up"
                    >
                        <Heading alignSelf={{base: "start", md: "start"}}>
                            БЫСТРОЕ ОБСЛУЖИВАНИЕ
                        </Heading>
                        <Heading alignSelf={{base: "start", md: "center"}}>
                            ВЫСОЧАЙШЕЕ КАЧЕСТВО
                        </Heading>
                        <Heading alignSelf={{base: "start", md: "end"}} mb="0">
                            ПРОЗРАЧНАЯ СТОИМОСТЬ ЛЕЧЕНИЯ
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" my="10"/>
                    <Box
                        my="10"
                        p="5"
                        bgColor="#0d47a1"
                        color="white"
                        fontSize={{base: "20px", xl: "22px"}}
                        fontWeight="bold"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Box
                            mb="5"
                            borderBottom="1px solid white"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Heading size="lg" mb="5">
                                Медицинское сопровождение по системе «Все включено»:
                            </Heading>
                        </Box>
                        <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}>
                            <GridItem>
                                <Text>Организация стационарного лечения</Text>
                                <Text>Организация ухода в стационаре</Text>
                                <Text>Закрепление персонального менеджера на период стационарного лечения</Text>
                                <Text>Составление плана и сметы стационарного лечения</Text>
                                <Text>Контроль лечебного процесса при стационарном лечении</Text>
                                <Text> Организация второго медицинского мнения</Text>
                                <Text>Организация VIP- сопровождения при госпитализации</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Круглосуточная скорая помощь</Text>
                                <Text>Обеспечение медицинского наблюдения после выписки</Text>
                                <Text>Оперативная связь с лечащим врачом</Text>
                                <Text>Информирование пациента и родственников о тактике лечения</Text>
                                <Text>Транспортировка тяжелобольных и маломобильных пациентов</Text>
                                <Text>Сервисные, бытовые и иные виды услуг</Text>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="8"/>
                    <Box data-aos="fade-up">
                        <Heading size="lg">Партнерская сеть Центра госпитализации и сопровождения пациентов
                            МСК</Heading>
                        <HospitalsBlock isLocal={true}/>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}
