import {useForm} from "react-hook-form";
import {Box, Button, ButtonGroup, FormControl, FormLabel, Input, Text, Textarea, useToast} from "@chakra-ui/react";
import emailjs from 'emailjs-com'
import {useState} from "react";

export const BaseFormMessage = ({onClose}) => {
    const toast = useToast()
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = data => {
        setLoading(true)
        emailjs.send(
            'service_rg6k58o',
            'template_wn3gy7j',
            data,
            '7oClEGnjEsBhAcLGE'
        ).then(res => {
            // отправка письма с vladimirmuratov
            if (res.status === 200) {
                reset()
                onClose()
                setLoading(false)
                toast({
                    position: 'top',
                    title: 'Ваше сообщение доставлено!',
                    description: "Скоро с Вами свяжется наш специалист",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
            } else if (res.status !== 200) {
                // отправка письма с ishop200
                emailjs.send(
                    'service_6el1gh4',
                    'template_zojtq0n',
                    data,
                    'iJ8h3WIbzKYbDF1tL'
                ).then(res => {
                    if (res.status === 200) {
                        reset()
                        onClose()
                        setLoading(false)
                        toast({
                            position: 'top',
                            title: 'Ваше сообщение доставлено!',
                            description: "Скоро с Вами свяжется наш специалист",
                            status: 'success',
                            duration: 4000,
                            isClosable: true,
                        })
                    } else {
                        toast({
                            position: 'top',
                            title: 'Ошибка сервера!',
                            description: "Пожалуйста позвоните по телефону",
                            status: 'error',
                            duration: 4000,
                            isClosable: true,
                        })
                    }
                })
            }
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <FormControl>
                    <FormLabel>Ваше имя</FormLabel>
                    <Input
                        type='text'
                        {...register("name", {
                            required: {value: true, message: 'Введите Ваше имя'}
                        })}
                        style={{borderColor: errors.name?.message ? 'red' : ''}}
                    />
                    <Text fontSize="sm" color="red">{errors.name?.message}</Text>
                </FormControl>
                <FormControl>
                    <FormLabel>Ваше телефон</FormLabel>
                    <Input
                        type='text'
                        {...register("phone", {
                            required: {value: true, message: 'Введите Ваше телефон'}
                        })}
                        style={{borderColor: errors.phone?.message ? 'red' : ''}}
                    />
                    <Text fontSize="sm" color="red">{errors.phone?.message}</Text>
                </FormControl>
                <FormControl>
                    <FormLabel>О чем Вы хотите спросить?</FormLabel>
                    <Textarea {...register("message")}/>
                </FormControl>
                <ButtonGroup mt="5" w="full" display="flex" justifyContent="flex-end">
                    <Button
                        isDisabled={isLoading}
                        size={{base: "sm", md: "md"}}
                        type="button"
                        colorScheme="gray"
                        onClick={onClose}
                    >
                        Отменить
                    </Button>
                    <Button
                        isLoading={isLoading}
                        size={{base: "sm", md: "md"}}
                        type="submit"
                        colorScheme="teal"
                    >
                        Отправить
                    </Button>
                </ButtonGroup>
            </Box>
        </form>
    )
}
