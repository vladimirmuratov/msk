import {useState} from "react";
import {Box} from "@chakra-ui/react";
import {Container} from "@/components/Container";
import {Content} from "@/components/Content";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {MobileMenu} from "@/components/MobileMenu";
import {useEffect} from "react";
import {BasePhonesBlock} from "@/components/base/BasePhonesBlock";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";
import {useRouter} from "next/router";

export const Layout = ({children}) => {
    const [isMobileMenuOpen, setMobileMenu] = useState(false)

    const handelOpen = () => setMobileMenu(true)

    const handelClose = () => setMobileMenu(false)

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            history.scrollRestoration = 'manual';
        }
    }, [])

    return (
        <Box>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={handelClose}/>
            <Container>
                <Header onOpen={handelOpen}/>
                <Box
                    display="flex"
                    flexDir={{base: "column", md: "row"}}
                    justifyContent="space-between"
                    alignItems="center"
                    px={{base: "2", md: "4"}}
                    mt={{base: "4", md: "0"}}
                >
                    <BaseBtnBack/>
                    <BasePhonesBlock/>
                </Box>
                <Content>
                    {children}
                </Content>
                <Footer/>
            </Container>
        </Box>
    )
}
