import {Box, Heading, IconButton} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Link from "next/link";
import {linksOptions} from "@/config/linksOptions";
import {HeaderLinksBlock} from "@/components/HeaderLinksBlock";
import {HeaderBanner} from "@/components/HeaderBanner";

export const Header = ({onOpen}) => {

    return (
        <>
            <HeaderBanner/>
            <Box
                position="sticky"
                top="0"
                zIndex="1"
                padding="0.5rem 1rem"
                backgroundColor="rgba(157, 148, 209, 1)"
                boxShadow="base"
                bgGradient="linear(to-r, blue.600, blue.300)"
                color='white'
            >
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Link href="/" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Logo</Link>
                    <HeaderLinksBlock links={linksOptions}/>
                    <IconButton
                        onClick={onOpen}
                        aria-label="mobile-menu"
                        icon={<HamburgerIcon h="24px" w="24px"/>}
                        backgroundColor="inherit"
                        visibility={{base: "visible", md: "hidden"}}
                    />
                </Box>
            </Box>
        </>

    )
}
