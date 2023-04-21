import {Box, Grid, GridItem, Image} from "@chakra-ui/react";

export const BasePhotoGallery = ({data = []}) => {
    return(
        <Box>
            <Grid
                gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(6, 1fr)"}}
                gap="1"
            >
                {data.map(({id, imgUri}) => (
                    <GridItem key={id}>
                        <Image src={imgUri} h="full"/>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}
