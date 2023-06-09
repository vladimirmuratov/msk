import "@/styles/globals.css";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "@/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function App({Component, pageProps}) {

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, [])

    useEffect(() => {
        AOS.init({
            delay: 300,
            duration: 800,
            // disable: 'mobile'
        })
        AOS.refresh()
        AOS.refreshHard()
    }, [])

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
