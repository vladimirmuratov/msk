import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text} from "@chakra-ui/react";
import Link from "next/link";
import {accordionOptions} from "@/config/accordionOptions";

export const BaseAccordion = () => {
    return (
        <Accordion allowToggle>
            {accordionOptions.length
                ? accordionOptions.map(({id, label, text, path}) => (
                    <AccordionItem key={id}>
                        <h2>
                            <AccordionButton _expanded={{bg: 'tomato', color: 'white'}}>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Text fontSize={{md: "18px", lg: "20px", xl: "22px"}}>{label}</Text>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box display="flex" flexDirection="column" alignItems="flex-start" textAlign="start">
                                <Text fontSize={{md: "18px", lg: "20px", xl: "22px"}}>{text}</Text>
                                <Link href={path} style={{
                                    color: "#1565c0",
                                    border: "1px solid black",
                                    padding: "5px 10px 5px",
                                    borderRadius: "5px",
                                    marginTop: "5px"
                                }}>Подробнее</Link>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                ))
                : ''
            }
        </Accordion>
    )
}
