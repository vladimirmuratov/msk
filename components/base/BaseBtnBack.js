import { useRouter } from "next/router";
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export const BaseBtnBack = () => {
    const router = useRouter()

    const styles = {
        padding: 0,
        visibility: router.pathname === "/" ? "hidden" : "visible",
    }

    const hoverStyles = {
        backgroundColor: "inherit"
    }

    return (
        <Button
            style={styles}
            _hover={hoverStyles}
            leftIcon={<ArrowBackIcon/>}
            onClick={() => router.back()}
            // onClick={() => window.history.back()}
            variant="ghost"
            mt={{base: router.pathname === "/" ? "-52px" : "0"}}
        >
            Назад
        </Button>
    )
}
