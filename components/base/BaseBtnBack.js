import { useRouter } from "next/router";
import {Button} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export const BaseBtnBack = () => {
    const router = useRouter()

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
            onClick={() => router.back()}
            // onClick={() => window.history.back()}
            variant="ghost"
            position="absolute"
        >
            Назад
        </Button>
    )
}
