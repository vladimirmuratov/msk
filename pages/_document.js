import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                {/*УДАЛИТЬ ПРИ PRODUCTION!!!*/}
                <meta name="robots" content="noindex,nofollow" key="robots"/>
                {/*-----------------------*/}
                <meta property="og:title" content="МСК-неотложная госпитализация"/>
                <meta
                    property="og:description"
                    content="ассистанс - компания, оказывающая профессиональную сервисную поддержку в организации медицинских услуг"
                />
                <meta
                    property="og:image"
                    content="/images/doctor3.png"
                />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
