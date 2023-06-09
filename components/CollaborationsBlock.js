import {Box, Grid} from "@chakra-ui/react";
import {collaborationOptions} from "@/config/collaborationOptions";
import Link from "next/link";

export const CollaborationsBlock = () => {
    return (
        <Grid gridTemplateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(10, 1fr)'}}
              gap="2">
            {collaborationOptions.length
                ? collaborationOptions.map(({id, label, path}) => (
                    <Link key={id} href={path} target="_blank" rel="noopener noreferrer">
                        <Box
                            border="1px solid black"
                            borderRadius="5px"
                            textAlign="center"
                            paddingY="1"
                        >
                            {label}
                        </Box>
                    </Link>
                ))
                : ''
            }
        </Grid>
    )
}
