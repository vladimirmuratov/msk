import {useState} from "react";
import {Box, Grid, GridItem} from "@chakra-ui/react";
import {Container} from "@/components/Container";
import {Content} from "@/components/Content";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {MobileMenu} from "@/components/MobileMenu";
import {BasePhonesBlock} from "@/components/base/BasePhonesBlock";
import {BaseBtnBack} from "@/components/base/BaseBtnBack";

export const Layout = ({children}) => {
    const [isMobileMenuOpen, setMobileMenu] = useState(false)

    const handelOpen = () => setMobileMenu(true)

    const handelClose = () => setMobileMenu(false)

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
                {/*<Grid
                    px={{base: "2", md: "4"}}
                    gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
                    // justifyItems={{base: "center", md: "start"}}
                    alignItems="center"
                >
                    <GridItem justifySelf={{base: "center", md: "start"}}>
                        <BaseBtnBack/>
                    </GridItem>
                    <GridItem>
                        <BasePhonesBlock/>
                    </GridItem>
                </Grid>*/}
                <Content>
                    {children}
                </Content>
                <Footer/>
            </Container>
        </Box>
    )
}
