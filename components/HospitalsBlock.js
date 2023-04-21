import {hospitalsOptions} from "@/config/hospitalsOptions";
import {BaseHospitalCard} from "@/components/base/BaseHospitalCard";
import {Grid, GridItem} from "@chakra-ui/react";

export const HospitalsBlock = ({isLocal = false}) => {
    return (
        <Grid my="10" gap="1" gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}>
                {hospitalsOptions.map((item) => (
                    <GridItem key={item.id}>
                        <BaseHospitalCard {...item} isLocal={isLocal}/>
                    </GridItem>
                ))}
        </Grid>
    )
}
