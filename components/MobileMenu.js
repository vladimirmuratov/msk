import {
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/react";
import {servicesOptions} from "@/config/servicesOptions";
import {linksOptions} from "@/config/linksOptions";
import {useRouter} from "next/router";
import {BaseMobLink} from "@/components/base/BaseMobLink";

export const MobileMenu = ({isOpen, onClose, placement = 'right'}) => {
    const router = useRouter()

    return (
        <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader borderBottomWidth='1px'>Меню</DrawerHeader>
                <DrawerBody
                    display="flex"
                    flexDirection="column"
                    gap="0.5rem"
                >
                    <BaseMobLink linksOptions={linksOptions} onClose={onClose} router={router}/>
                    <Divider/>
                    <BaseMobLink linksOptions={servicesOptions} onClose={onClose} router={router}/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
