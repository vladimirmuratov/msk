import {useState} from "react";
import {Box} from "@chakra-ui/react";
import {Container} from "@/components/Container";
import {Content} from "@/components/Content";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {MobileMenu} from "@/components/MobileMenu";

export const Layout = ({children}) => {
    const [isMobileMenuOpen, setMobileMenu] = useState(false)

    const handelOpen = () => setMobileMenu(true)

    const handelClose = () => setMobileMenu(false)

    return (
        <Box>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={handelClose}/>
            <Container>
                <Header onOpen={handelOpen}/>
                <Content>
                    {children}
                </Content>
                <Footer/>
            </Container>
        </Box>
    )
}
