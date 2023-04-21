import Head from "next/head";
import {Layout} from "@/components/Layout";
import {Box, Button, Divider, Heading, Image, Text} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {hospitalsOptions} from "@/config/hospitalsOptions";
import {BaseHospitalCard} from "@/components/base/BaseHospitalCard";
import {HospitalsBlock} from "@/components/HospitalsBlock";
import {phoneNumber} from "@/config/defaultOptions";
import {Banner} from "@/components/Banner";
import {BasePhonesBlock} from "@/components/base/BasePhonesBlock";
import {DirectionsHospitalization} from "@/components/DirectionsHospitalization";
import {HospitalizationSteps} from "@/components/base/HospitalizationSteps";
import {BaseHospitalizationStep} from "@/components/base/BaseHospitalizationStep";
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
                    <BaseBtnBack/>
                    <Box mt={{base: "10", md: "0"}}>
                        <BasePhonesBlock/>
                    </Box>
                    <Box my="10">
                        <Banner imgUrl="/images/hospitals.jpg"
                                label="Госпитализация в стационары ведомственной и кремлевской медицины"/>
                    </Box>
                    <Box px={{base: "2", md: "0"}} fontSize={{base: "20px", xl: "22px"}}>
                        <Text>
                            <span
                                style={{fontWeight: "bold"}}>Центр госпитализации и сопровождения пациентов МСК</span> является
                            официальным и
                            аккредитованным партнером федеральных медицинских учреждений Москвы, ведомственных
                            организаций здравоохранения, лечебных учреждений Управления делами Президента РФ.
                        </Text>
                        <Text>
                            Государственные и отраслевые конгломерации всегда имели и имеют собственные системы
                            здравоохранения, закрытые для большинства обычных людей. Медицинские учреждения
                            ведомственной и кремлевской медицины создавались как некая показательная система
                            здравоохранения с реализацией лучшего, что есть в мировой медицине – клинических практик,
                            методов лечения, передового опыта.
                        </Text>
                        <Text>
                            Эталоном ведомственной медицины издавна считалось Четвертое главное управление при Минздраве
                            СССР - комплекс поликлиник, больниц, санаториев, домов отдыха, где традиционно получали
                            медицинскую помощь государственные чиновники разных уровней, госслужащие, политические
                            деятели, выдающиеся деятели науки искусства.
                        </Text>
                        <Text>
                            Верность традициям российской клинической медицины и современные технологии, высочайший
                            уровень медицинской помощи и трогательная забота о пациенте по праву определяют больницы, с
                            которыми работает Центр госпитализации и сопровождения пациентов МСК как флагманов
                            здравоохранения не только в России, но и за ее пределами.
                        </Text>
                        <Text fontWeight="bold">
                            В периметр работы Центра госпитализации и сопровождения пациентов МСК сегодня входят более
                            30 многопрофильных учреждений полного цикла медицинской помощи с круглосуточным стационаром,
                            поликлиникой, диагностическими и реабилитационными подразделениями, которые являются
                            визитной карточкой российского здравоохранения.
                        </Text>
                        <Text>
                            Уникальные компетенции врачебного корпуса, уровень медицинского обслуживания наравне с
                            европейским, самое передовое оборудование, замкнутый цикл медицинской помощи – возможности
                            для пациентов Центра госпитализации и сопровождения пациентов МСК в стационарах партнерских
                            больниц.
                        </Text>
                        <Text>
                            Сегодня для всех, кто ценит качество, комфорт, сервис Центр госпитализации и сопровождения
                            пациентов МСК организует госпитализацию в лучшие медицинские учреждения страны.
                        </Text>
                    </Box>
                    <Box textAlign="center">
                        <Heading>Выберите направление госпитализации</Heading>
                        <DirectionsHospitalization options={directionsOfHospitalizationOptions}/>
                    </Box>
                    <Box my="12" textAlign="center">
                        <Heading mb="10">
                            Порядок госпитализации в медицинские учреждения ведомственной и кремлевской медицины
                            через Центр госпитализации и сопровождения пациентов МСК
                        </Heading>
                        <HospitalizationSteps/>
                    </Box>
                    <Box textAlign="center">
                        <Heading>
                            Партнерская сеть
                            Центра госпитализации и сопровождения пациентов МСК
                        </Heading>
                        <HospitalsBlock isLocal={true}/>
                    </Box>
                    <BaseCallBlock btnLabel="Оставить заявку"/>
                </Box>
            </Layout>
        </>
    )
}
