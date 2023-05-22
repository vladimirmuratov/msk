import {
    Box,
    Grid,
    GridItem,
    Heading,
    Image,
    List,
    ListItem,
    Text,
    UnorderedList,
    useDisclosure
} from "@chakra-ui/react";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseOurValues} from "@/components/base/BaseOurValues";
import {BaseModal} from "@/components/base/BaseModal";

export default function Cardiology() {
    const {isOpen, onOpen, onClose} = useDisclosure()

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
                <Box px={{base: "4px", md: "1rem"}} flexGrow="1">
                    <Banner
                        imgUrl="/images/cardiology.png"
                        label="Кардиология и сердечно - сосудистые заболевания"
                        color="#ff8f00"
                        textShadow="#fff"
                    />
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseCallBlock onClick={onOpen} btnLabel="Оставить заявку"/>
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
                                    <Image src="/images/doctor7.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4">
                                        <Text>
                                            <span style={{fontWeight: "bold"}}>МСК</span> объединяет усилия различных
                                            специалистов с
                                            целью максимально точной и своевременной
                                            диагностики, выбора наиболее эффективной тактики лечения пациентов с
                                            сердечно - сосудистыми
                                            заболеваниями.
                                        </Text>
                                        <Text>
                                            Мы работаем в самом тесном взаимодействии с кардиохирургическими службами и
                                            отделениями
                                            сосудистой хирургии ведущих специализированных медицинских центров.
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
                                            Благодаря такому взаимодействию пациенты, которые к нам обращаются, проходят
                                            все этапы – от
                                            первичной диагностики и интенсивной терапии до высокотехнологической помощи
                                            и реабилитации в
                                            рамках одного учреждения под наблюдением специалистов.
                                        </Text>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/doctor11.png" h="full"/>
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
                                    <Image src="/images/doctor10.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box h="full" p="4" display="flex" alignItems="center" justifyContent="center">
                                        <Heading size="lg" lineHeight="50px">
                                            Кардиология – одно из ключевых направлений нашей деятельности в
                                            сопровождении пациентов.
                                        </Heading>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        bgColor="#e8f5e9"
                        p="4"
                        borderRadius="md"
                        fontSize="18px"
                        fontWeight="semibold"
                        display="flex"
                        flexDirection="column"
                        gap="4"
                        data-aos="fade-up"
                    >
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
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box bgColor="#0d47a1" color="white" p="4" borderRadius="md" data-aos="fade-up">
                        <Box ml="4" mb="4" borderBottom="1px solid white">
                            <Heading size="lg">
                                Мы оказываем информационную поддержку и содействие в получении своевременной и
                                качественной
                                медицинской помощи пациентам с сердечно - сосудистыми заболеваниями:
                            </Heading>
                        </Box>
                        <UnorderedList ml="0" spacing={{base: "2", md: "4"}} fontSize="20" fontWeight="bold">
                            <ListItem>Артериальная гипертония</ListItem>
                            <ListItem>Ишемическая болезнь сердца</ListItem>
                            <ListItem>Нарушения ритма сердца</ListItem>
                            <ListItem>Кардиомиопатии</ListItem>
                            <ListItem>Хроническая сердечная недостаточность</ListItem>
                            <ListItem>Нарушения мозгового кровообращения</ListItem>
                            <ListItem>Аневризмы</ListItem>
                            <ListItem>Патологии сосудов</ListItem>
                            <ListItem>Болезни сердца при других заболеваниях</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseOurValues/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                </Box>
            </Layout>
        </>
    )
}
