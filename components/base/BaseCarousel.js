import Carousel from "react-bootstrap/Carousel"
import {Box, Button, ButtonGroup} from "@chakra-ui/react";
import {carouselOptions} from "@/config/carouselOptions";
import {Banner} from "@/components/Banner";

export const BaseCarousel = ({data = []}) => {

    return (
        <Box>
            <Carousel>
                {data.map(({id, img, label, btnLabel1, btnLabel2, path}) => (
                    <Carousel.Item key={id}>
                        <Banner label={label} imgUrl={img}/>
                        {/*<Carousel.Caption>
                                <ButtonGroup mt="3" variant='outline' spacing='6'>
                                    <Button _hover={{color: "lightgray"}}>{btnLabel1}</Button>
                                    <Button _hover={{color: "lightgray"}}>{btnLabel2}</Button>
                                </ButtonGroup>
                        </Carousel.Caption>*/}
                    </Carousel.Item>
                ))}
            </Carousel>
        </Box>
    )
}
