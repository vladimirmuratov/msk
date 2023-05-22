import {Box, Heading} from "@chakra-ui/react";
import {phoneNumber} from "@/config/defaultOptions";
import {BaseBtnCall} from "@/components/base/BaseBtnCall";

export const BaseCallBlock = ({onClick, btnLabel='Заказать консультацию'}) => {
return(
    <Box my="20" data-aos="zoom-in">
        <Box textAlign="center" mb="5">
            <Heading m="0">{phoneNumber}</Heading>
        </Box>
        <Box display="flex" justifyContent="center">
            <BaseBtnCall onClick={onClick} btnLabel={btnLabel}/>
        </Box>
    </Box>
)
}
