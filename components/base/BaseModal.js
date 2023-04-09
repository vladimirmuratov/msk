import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";
import {BaseFormMessage} from "@/components/base/BaseFormMessage";

export const BaseModal = ({isOpen, onClose}) => {
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Отправить сообщение</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <BaseFormMessage onClose={onClose}/>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
