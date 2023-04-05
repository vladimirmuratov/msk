import {Card, CardBody, CardHeader, CardFooter, Heading, Text} from '@chakra-ui/react';
import {ArrowRightIcon} from '@chakra-ui/icons';

export const BaseCard = ({id, label, text, path, navigate}) => {
    const styles = {
        transition: "all 0.3s",
        cursor: "pointer",
        textShadow: " 1px 1px 2px white",
        backgroundImage: `url(./images/pic${id}.jpg)`,
        backgroundSize: "cover"
    }
    const hoverStyles = {
        marginTop: "-5px",
        boxShadow: "0 5px 5px #bdbdbd",
    }

    return (
        <Card
            style={styles}
            _hover={hoverStyles}
            onClick={() => navigate.push(path)}
             h={{
                 base: "200px",
                 md: "235px",
                 lg: "275px"
             }}
             w={{
                 base: "315px",
                 md: "360px",
                 lg: "325px"
             }}
        >
            <CardHeader color="gray.700">
                <Heading size={{base: "lg", md: "xl"}} textTransform="capitalize">{label}</Heading>
            </CardHeader>
            <CardBody color="gray.600" fontSize={{md: "1.2rem"}} letterSpacing="1px" fontWeight="bold">
                <Text>{text}</Text>
            </CardBody>
            <CardFooter>
                <Text fontWeight="semibold" letterSpacing="0.5px">Подробнее&nbsp;<ArrowRightIcon boxSize="0.5rem"/></Text>
            </CardFooter>
        </Card>
    )
}
