import {Box, Heading, Icon, List, ListIcon, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseModal} from "@/components/base/BaseModal";
import {WarningIcon, CheckCircleIcon} from "@chakra-ui/icons";

export default function Ambulance() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Скорая помощь</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px={{base: "0", md: "1rem"}} flexGrow="1">
                    <Banner imgUrl="../images/ambulance2.png" label="Когда важна каждая минута" color="#ff8f00"/>
                    <Box borderBottom="1px solid gray" mb="10"/>
                    <Box
                        color="#0d47a1"
                        display="flex"
                        flexDir="column"
                        gap="4"
                        px={{base: "4", md: "0"}}
                        data-aos="fade-up"
                    >
                        <Heading alignSelf={{base: "start", md: "start"}}>
                            ВЫЗОВ СКОРОЙ ПОМОЩИ
                        </Heading>
                        <Heading alignSelf={{base: "start", md: "center"}}>
                            ЭКСТРЕННАЯ И НЕОТЛОЖНАЯ МЕДИЦИНСКАЯ ПОМОЩЬ
                        </Heading>
                        <Heading alignSelf={{base: "start", md: "end"}} mb="0">
                            ГОСПИТАЛИЗАЦИЯ С ИНСУЛЬТОМ
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10"/>
                    <Box px={{base: "4", md: "0"}}>
                        <BaseCallBlock onClick={onOpen} btnLabel="Заключить договор"/>
                    </Box>
                    <Box borderBottom="1px solid gray" mb="10"/>
                    <Box bgColor="#0d47a1" color="white" p="4" borderRadius={{md: "md"}} data-aos="fade-up">
                        <Box textAlign="center" borderBottom="1px solid white">
                            <Heading>Оказание скорой медицинской помощи</Heading>
                        </Box>
                        <Box fontSize={{base: "20px", xl: "22px"}} mt="10" display="flex" flexDirection="column"
                             gap="4">
                            <Text>
                                Компания МСК оказывает срочную помощь при инсульте или наличии подозрений на инсульт, а
                                также при других неотложных состояниях.
                            </Text>
                            <Text>
                                Наши врачи помогают вам и вашим близким 24 часа в сутки 7 дней в неделю, без праздников
                                и
                                выходных.
                            </Text>
                            <Text>
                                Мы располагаем собственным парком реанимобилей, оснащенных реанимационным оборудованием,
                                дефибрилляторами, электрокардиографами, аппаратом искусственной вентиляции легких.
                            </Text>
                            <Text>
                                Выездные бригады СМП оснащены радио- и мобильной связью.
                            </Text>
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box data-aos="fade-up">
                        <List spacing="4" fontSize={{base: "18px", xl: "22px"}} fontWeight="bold">
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500'/>
                                Оказание медицинской помощи 24/7 без праздников и выходных.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500'/>
                                Оперативный приезд бригады скорой помощи.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500'/>
                                Высококвалифицированные специалисты имеют практический опыт оказания помощи в
                                самых сложных ситуациях.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500'/>
                                Помощь в условиях реанимобиля для поддержания жизнедеятельности пациента до
                                приезда в стационар.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500'/>
                                Современное оборудование и наличие всех необходимых лекарств.
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckCircleIcon} color='green.500'/>
                                Комфортная транспортировка - гидравлические кушетки, мягкие ремни, сидения для
                                сопровождающих.
                            </ListItem>
                        </List>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box bgColor="#0d47a1" color="white" py="4" borderRadius={{md: "md"}} data-aos="fade-up">
                        <Box mb="4" borderBottom="1px solid white" textAlign="center">
                            <Heading mb="4">Стоимость</Heading>
                        </Box>
                        <List spacing="4" fontSize={{base: "20px", xl: "22px"}} pr="4">
                            <ListItem>
                                Стоимость выезда платной скорой помощи зависит от удаленности пункта назначения и
                                определена прейскурантом. Каждая услуга имеет отдельную стоимость, оплата вызова может
                                существенно отличаться в зависимости от набора выполненных манипуляций.
                            </ListItem>
                            <ListItem>
                                Обращаясь к нам, Вы получаете гарантию квалифицированной помощи и поддержки врачей,
                                которые смогут поставить точный диагноз и назначить все необходимые препараты и
                                процедуры, чтобы ускорить процесс восстановления.
                            </ListItem>
                        </List>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box bgColor="#cfd8dc" p="4" borderRadius={{md: "md"}} data-aos="fade-up">
                        <Box mb="4" borderBottom="1px solid gray" textAlign="center">
                            <Heading mb="5">Когда необходима экстренная госпитализация:</Heading>
                        </Box>
                        <List pl="0" spacing="4" fontSize={{base: "20px", xl: "22px"}}>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text m="0">при инфаркте миокарда</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text m="0">при инсульте</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text m="0">при тяжелых травмах (в том числе, черепно-мозговых)</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text m="0">при остром кровотечении, которое невозможно остановить в домашних
                                    условиях</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text m="0">при тяжелых обострениях хронических заболеваний</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text m="0">при тяжелых и/или опасных инфекциях</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text m="0">при заболеваниях, требующих хирургического лечения в экстренном порядке и
                                    т.п.</Text>
                            </ListItem>
                        </List>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box
                        bgColor="#0d47a1"
                        color="white"
                        p="4"
                        fontSize={{base: "20px", xl: "22px"}}
                        display="flex"
                        flexDirection="column"
                        gap="4"
                        borderRadius={{md: "md"}}
                        data-aos="fade-up"
                    >
                        <Box mb="4" borderBottom="1px solid white" textAlign="center">
                            <Heading>Как проводится экстренная госпитализация</Heading>
                        </Box>
                        <Text>
                            Прибыв к пациенту, бригада скорой помощи МСК осматривает и опрашивает его, при необходимости
                            оказывает неотложную помощь и готовит к транспортировке.
                        </Text>
                        <Text>
                            Если человеку требуется операция, проводится госпитализация в стационар с отделением
                            хирургии. Мы сотрудничаем с ведущими государственными и коммерческими больницами.
                        </Text>
                        <Text>
                            Если состояние пациента является жизнеугрожающим, бригада скорой помощи МСК доставит его в
                            ближайший стационар, а после стабилизации может транспортировать в профильное учреждение,
                            располагающее отделениями кардиологии, неврологии или других специальных направлений для
                            оказания дальнейшей помощи и необходимого лечения.
                        </Text>
                        <Text>В случае возникновения экстренных ситуаций обращайтесь за помощью в компанию МСК.</Text>
                        <Text>
                            Бригады скорой помощи госпитализируют Вас или Вашего родственника в соответствии с
                            показаниями для получения специализированного лечения.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box>
                        <Heading mb="4">Фотогалерея</Heading>
                        <Box border="1px solid black" h="100">

                        </Box>
                    </Box>
                    <Box my="10">
                        <Heading mb="4">Лицензии</Heading>
                        <Box border="1px solid black" h="100">

                        </Box>
                    </Box>
                </Box>
            </Layout>
        </>
    )
}
