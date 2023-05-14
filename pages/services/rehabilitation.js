import Head from "next/head";
import {Layout} from "@/components/Layout";
import {
    Box,
    Grid,
    GridItem,
    Heading,
    Icon,
    Image,
    List,
    ListItem,
    Text,
    UnorderedList,
    useDisclosure
} from "@chakra-ui/react";
import {BaseModal} from "@/components/base/BaseModal";
import {Banner} from "@/components/Banner";
import {BaseCallBlock} from "@/components/base/BaseCallBlock";
import {rehabilitationOptions} from "@/config/rehabilitationOptions";
import {WarningIcon} from "@chakra-ui/icons";
import {rehabilitationAmount} from "@/config/defaultOptions";

export default function Rehabilitation() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <>
            <Head>
                <title>МСК | Реабилитация</title>
                <meta charSet="utf-8"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
            </Head>
            <BaseModal isOpen={isOpen} onClose={onClose}/>
            <Layout>
                <Box px={{base: "1px", md: "5"}} flexGrow="1">
                    <Banner imgUrl="../images/rehabilitation.png" label="Полноценная жизнь после инсульта"
                            color="#ff8f00" textShadow="#fff"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseCallBlock onClick={onOpen} btnLabel="Получить консультацию"/>
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
                                    <Image src="/images/neurosurgery2.png" h="full"/>
                                </GridItem>
                                <GridItem>
                                    <Box p="4" h="full" display="flex" justifyContent="center" alignItems="center">
                                        <Heading size="lg" letterSpacing="wide">
                                            Содействие в получении специализированной помощи по реабилитации после
                                            инсульта в лучших
                                            сосудистых и реабилитационных центрах
                                        </Heading>
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
                                    <Box p="4" h="full" display="flex" justifyContent="center" alignItems="center">
                                        <Heading size="lg" letterSpacing="wide">
                                            Комплексное восстановительное лечение пациентов, перенесших инсульт
                                        </Heading>
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <Image src="/images/doctor7.png" h="full"/>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box p="4" borderRadius="md" display="flex" flexDirection="column" bgColor="#0d47a1"
                         color="white" data-aos="fade-up">
                        <Box borderBottom="1px solid white" mb="6" textAlign="center">
                            <Heading size="lg" letterSpacing="wide">
                                Индивидуальная программа реабилитации после инсульта
                            </Heading>
                        </Box>
                        <Text fontSize={{base: "18px", md: "20px", lg: "22px"}}>
                            Инсульт - острое нарушение мозгового кровообращения, в результате которого быстро
                            развиваются стойкие признаки нарушения функций головного мозга или наступает смерть
                            человека.
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center" data-aos="fade-up">
                        <Heading mb="10">Периоды инсульта</Heading>
                        <Box
                            display="flex"
                            flexDirection={{base: "column", md: "row"}}
                            justifyContent="center"
                            gap={{base: "2", lg: "4"}}
                            flexWrap="wrap"
                        >
                            {rehabilitationOptions.length
                                ? rehabilitationOptions.map(({id, title, description}) => (
                                    <Box
                                        key={id}
                                        bgColor="#3949ab"
                                        color="white"
                                        p="4"
                                        fontSize="18px"
                                        borderRadius="md"
                                    >
                                        <Text>{title}</Text>
                                        <Text>{description}</Text>
                                    </Box>
                                ))
                                : ''
                            }
                        </Box>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box bgColor="#ffcdd2" color="#ef5350" p="4" borderRadius="md" data-aos="fade-up">
                        <List pl="0" spacing="4" fontSize={{base: "20px", xl: "22px"}} fontWeight="bold">
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Летальность от инсульта достигает 40–50%</Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Инвалидность развивается у 70–75% пациентов, перенесших инсульт</Text>
                            </ListItem>
                        </List>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center" bgColor="#0d47a1" color="white" p="4" borderRadius="md" data-aos="fade-up">
                        <Heading size="lg" lineHeight="10">
                            Ранее начало восстановительного лечения позволяет вернуть больший объем утраченных функций
                            за более короткий срок!
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box p={{base: "3", md: "4"}} borderRadius="md" bgColor="#eeeeee" data-aos="fade-up">
                        <Text fontSize={{base: "18px", md: "20px", lg: "22px"}} fontWeight="semibold">
                            Последствия инсульта зависят от того, какая область головного мозга и в каком объеме
                            пострадала при нарушении мозгового кровообращения. Последствия инсульта могут быть
                            незначительными и быстропроходящими или множественными и тяжелыми, затрудняющими возвращение
                            человека к нормальной жизни
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center" bgColor="#ffcdd2" p={{base: "4", md: "6"}} borderRadius="md"
                         data-aos="fade-up">
                        <Heading size="lg" mb="4">Последствия инсульта</Heading>
                        <List mt="4" pl="2" spacing="4" fontSize={{base: "20px", xl: "22px"}} fontWeight="semibold">
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>
                                    Двигательные нарушения – парез ( снижение мышечной силы), паралич ( полное
                                    отсутствие движений)
                                </Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Нарушение речи</Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Нарушения глотания</Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Нарушения чувствительности</Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Постинсультная боль</Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Нарушения выделения мочи и стула</Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Венозная недостаточность</Text>
                            </ListItem>
                            <ListItem display="flex" gap="4" textAlign="start">
                                <Icon as={WarningIcon} color="red" mt="2"/>
                                <Text>Нарушение психических функций, утомляемость, депрессия</Text>
                            </ListItem>
                        </List>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box bgColor="#0d47a1" color="white" p="4" borderRadius="md" data-aos="fade-up">
                        <Box ml="3">
                            <Heading mb="5">Индивидуальная программа реабилитации после инсульта позволяет:</Heading>
                        </Box>
                        <UnorderedList ml="0" spacing="2" fontSize={{base: "20px", lg: "22px"}} fontWeight="bold">
                            <ListItem>Активизировать двигательные функции, вернуть утраченные навыки ходьбы</ListItem>
                            <ListItem>Снизить повышенный мышечный тонус</ListItem>
                            <ListItem>Восстановить глотательную функцию</ListItem>
                            <ListItem>Восстановить навыки самообслуживания</ListItem>
                            <ListItem>Адаптировать пациента к привычной жизни</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box color="#0d47a1" px={{base: "4", md: "6"}} data-aos="fade-up">
                        <Heading>
                            Индивидуальная программа реабилитации учитывает все особенности текущего состояния пациента
                            и направлена на комплексное восстановление после инсульта
                            Программа рассчитана на 21 день
                        </Heading>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box bgColor="#0d47a1" color="white" p="4" borderRadius="md" data-aos="fade-up">
                        <Box ml="3">
                            <Heading mb="5">В программу входит:</Heading>
                        </Box>
                        <UnorderedList ml="0" spacing="2" fontSize={{base: "20px", lg: "22px"}} fontWeight="bold">
                            <ListItem>Госпитализация пациентов, перенесших инсульт, в реабилитационные центры</ListItem>
                            <ListItem>Консультация и формирование плана лечения</ListItem>
                            <ListItem>
                                Наблюдение специалистами мультидисциплинарной бригады - неврологом, кардиологом,
                                реабилитологом, логопедом и др.
                            </ListItem>
                            <ListItem>Спектр лечебных мероприятий в зависимости от состояния пациента</ListItem>
                            <ListItem>Подбор лекарственной терапии, контроль и оценка ее эффективности</ListItem>
                            <ListItem>Дополнительные лечебные мероприятия по вторичной профилактики инсульта</ListItem>
                            <ListItem>
                                Применение самых эффективные методов восстановительного лечения, как
                                инновационных, так и проверенных десятилетиями
                            </ListItem>
                            <ListItem>Сопровождение пациента от момента госпитализации до выписки домой</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box textAlign="center" color="#0d47a1" data-aos="fade-up">
                        <Heading mb="5">Стоимость</Heading>
                        <Text fontSize={{base: "20px", lg: "22px"}} fontWeight="bold">
                            Базовая программа реабилитации 21 день - {rehabilitationAmount.toLocaleString()} руб
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <Box p={{base: "3", md: "4"}} borderRadius="md" bgColor="#eeeeee"
                         fontSize={{base: "20px", lg: "22px"}} fontWeight="semibold" data-aos="fade-up">
                        <Text mb="3">
                            Программа позволяет предотвратить тяжелые последствия инсульта и адаптировать пациента к
                            привычной жизни.
                        </Text>
                        <Text>
                            Перенесенный ишемический инсульт и транзиторная ишемическая атака повышают риск развития
                            повторного инсульта почти в 10 раз. Не откладывайте реабилитацию!
                        </Text>
                    </Box>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                    <BaseCallBlock onClick={onOpen} btnLabel="Получить консультацию"/>
                    <Box borderBottom="1px solid gray" mt="10" mb="10"/>
                </Box>
            </Layout>
        </>
    )
}
