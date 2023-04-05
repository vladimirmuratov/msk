import {Box} from "@chakra-ui/react";
import {BaseNavLink} from "@/components/base/BaseNavLink";
import { useRouter } from "next/router";

export const HeaderLinksBlock = ({links}) => {
    const router = useRouter()
    const activeStyles = {
        color: "#bdbdbd",
        textDecoration: "underline"
    }

    return (
        <Box
            display={{base: 'none', md: 'flex'}}
            gap="1rem"
            fontSize={{md: '1rem', lg: '1.2rem'}}
            fontWeight="semibold"
            letterSpacing={1.2}
        >
            <BaseNavLink linksOptions={links} activeStyles={activeStyles} router={router}/>
        </Box>
    )
}
