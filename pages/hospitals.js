import Head from "next/head";
import {Layout} from "@/components/Layout";
import {Box, Heading, Text} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {hospitalsOptions} from "@/config/hospitalsOptions";
import {BaseHospitalCard} from "@/components/base/BaseHospitalCard";

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
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Box my="10">
                        <Heading mb="5">Стационары для госпитализации</Heading>
                        <Text>
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                            является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
                            безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
                            для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять
                            веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили
                            публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время,
                            программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem
                            Ipsum.
                        </Text>
                    </Box>
                    <Box mb="10">
                        {hospitalsOptions.map((item) => (
                            <BaseHospitalCard key={item.id} {...item} />
                        ))}
                    </Box>
                </Box>
            </Layout>
        </>
    )
}
