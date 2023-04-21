import {Box, Heading, Icon, List, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {BaseModal} from "@/components/base/BaseModal";
import {WarningIcon} from "@chakra-ui/icons";

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
                <Box px={{base: "1", md: "1rem"}} flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Скорая помощь</Heading>
                    <Banner imgUrl="../images/ambulance.png" label="Когда важна каждая минута"/>
                    <Box mt="10" display="flex" flexDirection="column" gap="4">
                        <Heading size="lg">Вызов скорой помощи</Heading>
                        <Heading size="lg">Экстренная и неотложная медицинская помощь</Heading>
                        <Heading size="lg">Госпитализация с инсультом</Heading>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Заключить договор"/>
                    <Box textAlign="center">
                        <Heading>Оказание скорой медицинской помощи</Heading>
                    </Box>
                    <Box fontSize={{base: "20px", xl: "22px"}} my="10" display="flex" flexDirection="column" gap="4">
                        <Text>
                            Компания МСК оказывает срочную помощь при инсульте или наличии подозрений на инсульт, а
                            также при других неотложных состояниях.
                        </Text>
                        <Text>
                            Наши врачи помогают вам и вашим близким 24 часа в сутки 7 дней в неделю, без праздников и
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
                    <Box>
                        <UnorderedList spacing="4" fontSize={{base: "18px", xl: "22px"}} fontWeight="bold">
                            <ListItem>Оказание медицинской помощи 24/7 без праздников и выходных.</ListItem>
                            <ListItem>Оперативный приезд бригады скорой помощи.</ListItem>
                            <ListItem>Высококвалифицированные специалисты имеют практический опыт оказания помощи в
                                самых сложных ситуациях.</ListItem>
                            <ListItem>Помощь в условиях реанимобиля для поддержания жизнедеятельности пациента до
                                приезда в стационар.</ListItem>
                            <ListItem>Современное оборудование и наличие всех необходимых лекарств.</ListItem>
                            <ListItem>Комфортная транспортировка - гидравлические кушетки, мягкие ремни, сидения для
                                сопровождающих.</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box my="10">
                        <UnorderedList spacing="4" fontSize={{base: "20px", xl: "22px"}}>
                            <Heading>Стоимость</Heading>
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
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading mb="5">Когда необходима экстренная госпитализация:</Heading>
                        <List spacing="4" fontSize={{base: "20px", xl: "22px"}}>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text>при инфаркте миокарда</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text>при инсульте</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text>при тяжелых травмах (в том числе, черепно-мозговых)</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text>при остром кровотечении, которое невозможно остановить в домашних условиях</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text>при тяжелых обострениях хронических заболеваний</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text>при тяжелых и/или опасных инфекциях</Text>
                            </ListItem>
                            <ListItem display="flex" alignItems="center" gap="4">
                                <Icon as={WarningIcon} color="red"/>
                                <Text>при заболеваниях, требующих хирургического лечения в экстренном порядке и
                                    т.п.</Text>
                            </ListItem>
                        </List>
                    </Box>
                    <Box my="10" fontSize={{base: "20px", xl: "22px"}} display="flex" flexDirection="column" gap="4">
                        <Heading>Как проводится экстренная госпитализация</Heading>
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
