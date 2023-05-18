import Head from "next/head";
import {Layout} from "@/components/Layout";
import {Box, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {HospitalsBlock} from "@/components/HospitalsBlock";
import {Banner} from "@/components/Banner";
import {DirectionsHospitalization} from "@/components/DirectionsHospitalization";
import {HospitalizationSteps} from "@/components/base/HospitalizationSteps";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {directionsOfHospitalizationOptions} from "@/config/directionsOfHospitalizationOptions";

export default function Hospitals() {
    return (
        <>
            <Head>
                <title>МСК | Стационары</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <Layout>
                <Box px={{base: "1px", md: "5"}} flexGrow="1">
                    <Box my="10">
                        <Banner imgUrl="/images/bad.png"
                                label="Госпитализация в стационары ведомственной и кремлевской медицины"
                                color="#ff8f00"
                                textShadow="white"
                        />
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box>
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
                                    <Image src="/images/doctor4.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4">
                                        <Text>
                                         <span style={{fontWeight: "bold"}}>
                                             Центр госпитализации и сопровождения пациентов МСК
                                         </span>
                                            является официальным и аккредитованным партнером федеральных медицинских
                                            учреждений Москвы,
                                            ведомственных
                                            организаций здравоохранения, лечебных учреждений Управления делами
                                            Президента
                                            РФ.
                                        </Text>
                                        <Text>
                                            Государственные и отраслевые конгломерации всегда имели и имеют собственные
                                            системы
                                            здравоохранения, закрытые для большинства обычных людей.
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
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
                                    <Box p="4">
                                        <Text>
                                            Медицинские учреждения
                                            ведомственной и кремлевской медицины создавались как некая показательная
                                            система
                                            здравоохранения с реализацией лучшего, что есть в мировой медицине –
                                            клинических
                                            практик,
                                            методов лечения, передового опыта.
                                        </Text>
                                        <Text>
                                            Эталоном ведомственной медицины издавна считалось Четвертое главное
                                            управление
                                            при Минздраве
                                            СССР - комплекс поликлиник, больниц, санаториев, домов отдыха, где
                                            традиционно
                                            получали
                                            медицинскую помощь государственные чиновники разных уровней, госслужащие,
                                            политические
                                            деятели, выдающиеся деятели науки искусства.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/doctor5.png" h="full"/>
                                </GridItem>
                            </Grid>
                        </Box>
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
                                    <Image src="/images/doctor6.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4">
                                        <Text>
                                            Верность традициям российской клинической медицины и современные технологии,
                                            высочайший
                                            уровень медицинской помощи и трогательная забота о пациенте по праву
                                            определяют
                                            больницы, с
                                            которыми работает Центр госпитализации и сопровождения пациентов МСК как
                                            флагманов
                                            здравоохранения не только в России, но и за ее пределами.
                                        </Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        fontSize={{base: "20px", xl: "22px"}}
                        bgColor="#eeeeee"
                        my="10"
                        p="4"
                        color="blackAlpha.900"
                        borderRadius="md"
                        data-aos="fade-up"
                    >
                        <Text>
                            В периметр работы Центра госпитализации и сопровождения пациентов МСК сегодня входят более
                            30 многопрофильных учреждений полного цикла медицинской помощи с круглосуточным стационаром,
                            поликлиникой, диагностическими и реабилитационными подразделениями, которые являются
                            визитной карточкой российского здравоохранения.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box p="4" borderRadius="md" data-aos="fade-up" bgColor="#0d47a1" color="white">
                        <Text fontWeight="bold" fontSize={{md: "20px"}} letterSpacing="wide">
                            Уникальные компетенции врачебного корпуса, уровень медицинского обслуживания наравне с
                            европейским, самое передовое оборудование, замкнутый цикл медицинской помощи – возможности
                            для пациентов Центра госпитализации и сопровождения пациентов МСК в стационарах партнерских
                            больниц.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box color="#0d47a1" data-aos="fade-up">
                        <Heading size="lg" textAlign="center">
                            Сегодня для всех, кто ценит качество, комфорт, сервис Центр госпитализации и сопровождения
                            пациентов МСК организует госпитализацию в лучшие медицинские учреждения страны.
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center" color="#0d47a1" data-aos="fade-up">
                        <Heading>Выберите направление госпитализации</Heading>
                        <DirectionsHospitalization options={directionsOfHospitalizationOptions}/>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center" data-aos="fade-up">
                        <Heading mb="10">
                            Порядок госпитализации в медицинские учреждения ведомственной и кремлевской медицины
                            через Центр госпитализации и сопровождения пациентов МСК
                        </Heading>
                        <HospitalizationSteps/>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center" data-aos="fade-up">
                        <Heading>
                            Партнерская сеть
                            Центра госпитализации и сопровождения пациентов МСК
                        </Heading>
                        <HospitalsBlock isLocal={true}/>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseCallBlock btnLabel="Оставить заявку"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                </Box>
            </Layout>
        </>
    )
}
