import Head from "next/head";
import {Layout} from "@/components/Layout";
import {Box, Heading, Icon, List, ListItem, Text, UnorderedList, useDisclosure} from "@chakra-ui/react";
import {BaseModal} from "@/components/base/BaseModal";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
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
                <Box px="1rem" flexGrow="1">
                    <BaseBtnBack/>
                    <Heading my="10" size={{base: "lg"}}>Реабилитация после инсульта</Heading>
                    <Banner imgUrl="../images/rehabilitation.png" label="Полноценная жизнь после инсульта"/>
                    <Box mt="10" display="flex" flexDirection="column" gap="4">
                        <Heading size="lg">
                            Содействие в получении специализированной помощи по реабилитации после инсульта в лучших
                            сосудистых и реабилитационных центрах
                        </Heading>
                        <Heading size="lg">
                            Комплексное восстановительное лечение пациентов, перенесших инсульт
                        </Heading>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Получить консультацию"/>
                    <Box textAlign="center">
                        <Heading>
                            Индивидуальная программа реабилитации после инсульта
                        </Heading>
                    </Box>
                    <Box mt="10">
                        <Text fontSize={{base: "18px", md: "20px", lg: "22px"}}>
                            Инсульт - острое нарушение мозгового кровообращения, в результате которого быстро
                            развиваются стойкие признаки нарушения функций головного мозга или наступает смерть
                            человека.
                        </Text>
                    </Box>
                    <Box mt="8" textAlign="center">
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
                                    >
                                        <Text>{title}</Text>
                                        <Text>{description}</Text>
                                    </Box>
                                ))
                                : ''
                            }
                        </Box>
                        <List mt="4" spacing="4" fontSize={{base: "20px", xl: "22px"}}>
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
                    <Box my="5" textAlign="center">
                        <Heading size="lg">
                            Ранее начало восстановительного лечения позволяет вернуть больший объем утраченных функций
                            за более короткий срок!
                        </Heading>
                    </Box>
                    <Box>
                        <Text fontSize={{base: "18px", md: "20px", lg: "22px"}}>
                            Последствия инсульта зависят от того, какая область головного мозга и в каком объеме
                            пострадала при нарушении мозгового кровообращения. Последствия инсульта могут быть
                            незначительными и быстропроходящими или множественными и тяжелыми, затрудняющими возвращение
                            человека к нормальной жизни
                        </Text>
                    </Box>
                    <Box my="10" textAlign="center">
                        <Heading size="lg">Последствия инсульта</Heading>
                        <List mt="4" spacing="4" fontSize={{base: "20px", xl: "22px"}}>
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
                    <Box>
                        <Heading mb="5">Индивидуальная программа реабилитации после инсульта позволяет:</Heading>
                        <UnorderedList spacing="2" fontSize={{base: "20px", lg: "22px"}} fontWeight="bold">
                            <ListItem>Активизировать двигательные функции, вернуть утраченные навыки ходьбы</ListItem>
                            <ListItem>Снизить повышенный мышечный тонус</ListItem>
                            <ListItem>Восстановить глотательную функцию</ListItem>
                            <ListItem>Восстановить навыки самообслуживания</ListItem>
                            <ListItem>Адаптировать пациента к привычной жизни</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box my="10">
                        <Heading>
                            Индивидуальная программа реабилитации учитывает все особенности текущего состояния пациента
                            и направлена на комплексное восстановление после инсульта
                            Программа рассчитана на 21 день
                        </Heading>
                    </Box>
                    <Box>
                        <Heading mb="5">В программу входит:</Heading>
                        <UnorderedList spacing="2" fontSize={{base: "20px", lg: "22px"}} fontWeight="bold">
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
                    <Box my="10" textAlign="center">
                        <Heading mb="5">Стоимость</Heading>
                        <Text fontSize={{base: "20px", lg: "22px"}} fontWeight="bold">
                            Базовая программа реабилитации 21 день - {rehabilitationAmount.toLocaleString()} руб
                        </Text>
                    </Box>
                    <Box>
                        <Text mb="3" fontSize={{base: "20px", lg: "22px"}}>
                            Программа позволяет предотвратить тяжелые последствия инсульта и адаптировать пациента к
                            привычной жизни.
                        </Text>
                        <Text fontSize={{base: "20px", lg: "22px"}}>
                            Перенесенный ишемический инсульт и транзиторная ишемическая атака повышают риск развития
                            повторного инсульта почти в 10 раз. Не откладывайте реабилитацию!
                        </Text>
                    </Box>
                    <BaseCallBlock onClick={onOpen} btnLabel="Получить консультацию"/>
                </Box>
            </Layout>
        </>
    )
}
