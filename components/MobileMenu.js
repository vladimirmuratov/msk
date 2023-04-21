import {
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/react";
import cardsOptions from "../config/cardsOptions.js";
import {BaseNavLink} from "./base/BaseNavLink.js";
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
                    {/*<BaseNavLink linksOptions={linksOptions} onClose={onClose} router={router}/>*/}
                    <BaseMobLink linksOptions={linksOptions} onClose={onClose} router={router}/>
                    <Divider/>
                    {/*<BaseNavLink linksOptions={cardsOptions} onClose={onClose} router={router}/>*/}
                    <BaseMobLink linksOptions={cardsOptions} onClose={onClose} router={router}/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
