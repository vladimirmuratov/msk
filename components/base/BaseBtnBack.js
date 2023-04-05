import Router from "next/router";
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export const BaseBtnBack = () => {

    const styles = {
        padding: 0,
    }

    const hoverStyles = {
        backgroundColor: "inherit"
    }

    return (
        <Button
            style={styles}
            _hover={hoverStyles}
            leftIcon={<ArrowBackIcon/>}
            onClick={() => Router.push('/')}
            variant="ghost"
            position="absolute"
        >
            Назад
        </Button>
    )
}
