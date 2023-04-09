import {Box, Heading, List, ListItem, Text, useDisclosure} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Cardiology() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Кардиология</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Кардиология и сердечно - сосудистые заболевания</Heading>
                    <Banner imgUrl="../images/cardiology.png" label="Кардиология и сердечно -сосудистые заболевания"/>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
                    <Box fontSize="18px" display="flex" flexDirection="column" gap="4">
                        <Text>
                            <span style={{fontWeight: "bold"}}>МСК</span> объединяет усилия различных специалистов с
                            целью максимально точной и своевременной
                            диагностики, выбора наиболее эффективной тактики лечения пациентов с сердечно - сосудистыми
                            заболеваниями.
                        </Text>
                        <Text>
                            Мы работаем в самом тесном взаимодействии с кардиохирургическими службами и отделениями
                            сосудистой хирургии ведущих специализированных медицинских центров.
                        </Text>
                        <Text>
                            Благодаря такому взаимодействию пациенты, которые к нам обращаются, проходят все этапы – от
                            первичной диагностики и интенсивной терапии до высокотехнологической помощи и реабилитации в
                            рамках одного учреждения под наблюдением специалистов.
                        </Text>
                    </Box>
                    <Box my="10">
                        <Heading size="lg">
                            Кардиология – одно из ключевых направлений нашей деятельности в сопровождении пациентов.
                        </Heading>
                    </Box>
                    <Box fontSize="18px" display="flex" flexDirection="column" gap="4">
                        <Text>
                            Мы имеем огромный опыт по организации лечения заболеваний сердца и сосудов, ведения
                            пациентов до и после кардиохирургических вмешательств, контроля нескольких хронических
                            заболеваний, связанных между собой, кардиореабилитации.
                        </Text>
                        <Text>
                            Это позволяет нам быстро организовывать консультации у лучших специалистов разных профилей,
                            если у пациента в анамнезе несколько заболеваний, и подходить к организации лечения
                            комплексно.
                        </Text>
                    </Box>
                    <Box my="10">
                        <Heading size="lg">
                            Мы оказываем информационную поддержку и содействие в получении своевременной и качественной
                            медицинской помощи пациентам с сердечно - сосудистыми заболеваниями:
                        </Heading>
                    </Box>
                    <List spacing={{base: "2", md: "4"}} my="10" fontSize="20" fontWeight="bold">
                        <ListItem>Артериальная гипертония</ListItem>
                        <ListItem>Ишемическая болезнь сердца</ListItem>
                        <ListItem>Нарушения ритма сердца</ListItem>
                        <ListItem>Кардиомиопатии</ListItem>
                        <ListItem>Хроническая сердечная недостаточность</ListItem>
                        <ListItem>Нарушения мозгового кровообращения</ListItem>
                        <ListItem>Аневризмы</ListItem>
                        <ListItem>Патологии сосудов</ListItem>
                        <ListItem>Болезни сердца при других заболеваниях</ListItem>
                    </List>
                    <BaseOurValues/>
                </Box>
            </Layout>
        </>
    )
}
