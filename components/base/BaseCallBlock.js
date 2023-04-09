import {Box, Heading} from "@chakra-ui/react";
import {phoneNumber} from "@/config/defaultOptions";
import {BaseBtnCall} from "@/components/base/BaseBtnCall";

export const BaseCallBlock = ({onClick, btnLabel='Заказать консультацию'}) => {
return(
    <Box>
        <Box textAlign="center" py="8">
            <Heading>{phoneNumber}</Heading>
        </Box>
        <Box pb="10" display="flex" justifyContent="center">
            <BaseBtnCall onClick={onClick} btnLabel={btnLabel}/>
        </Box>
    </Box>
)
}