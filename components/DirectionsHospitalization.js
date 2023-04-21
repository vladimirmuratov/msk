import {Box, Grid, Heading} from "@chakra-ui/react";
import {directionsOfHospitalizationOptions} from "@/config/directionsOfHospitalizationOptions";
import {BaseDirectionOfHospitalizationCard} from "@/components/base/BaseDirectionOfHospitalizationCard";

export const DirectionsHospitalization = ({options, label = ''}) => {
    return(
        <Box textAlign="center" px={{base: "3", md: "0"}}>
            <Heading mb="5">{label}</Heading>
            <Grid
                gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)"}}
                gap="3"
            >
                {options.map((item) => (
                    <BaseDirectionOfHospitalizationCard key={item.id} {...item}/>
                ))}
            </Grid>
        </Box>
    )
}
