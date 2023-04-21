import {BaseHospitalizationStep} from "@/components/base/BaseHospitalizationStep";
import {Text} from "@chakra-ui/react";

export const HospitalizationSteps = () => {
    return (
        <>
            <BaseHospitalizationStep label="Звонок  на Горячую линию" imgUrl="/images/digits/one.png">
                <Text>
                    Позвоните на Горячую линию в <span style={{fontWeight: "bold"}}>Центр госпитализации и сопровождения пациентов МСК</span> и
                    сообщите о проблеме оператору.
                    Оператор вызовет бригаду скорой помощи, которая доставит пациента в больницу, если
                    ситуация экстренная.
                </Text>
            </BaseHospitalizationStep>
            <BaseHospitalizationStep label="Выбор профиля медицинской помощи"
                                     imgUrl="/images/digits/two.png">
                <Text>
                    Если требуется плановое стационарное лечение, но вы не знаете, куда обратиться и как
                    поступать или вам необходимо индивидуальное сопровождение, позвоните на Горячую
                    линию в <span style={{fontWeight: "bold"}}>Центр госпитализации и сопровождения пациентов МСК</span> и
                    сообщите оператору
                    профиль необходимой медицинской помощи- например, кардиология, хирургия,
                    травматология и тп.
                </Text>
                <Text>
                    Персональный менеджер по сопровождению подберет профильный стационар, профильного
                    врача пи по согласованию с ним представит вам план лечения.
                </Text>
            </BaseHospitalizationStep>
            <BaseHospitalizationStep label="Приезд в стационар" imgUrl="/images/digits/three.png">
                <Text>
                    Вы самостоятельно, по скорой помощи или в сопровождении персонального менеджера
                    приезжаете в профильный стационар.
                    Вас встретит дежурный врач, а персональный менеджер поможет с оформлением документов.
                </Text>
            </BaseHospitalizationStep>
            <BaseHospitalizationStep label="Консультация профильного врача"
                                     imgUrl="/images/digits/four.png">
                <Text>
                    Профильный специалист стационара проконсультирует вас по вопросам планового лечения, в
                    случае необходимости даст рекомендации по дополнительному обследованию.
                </Text>
            </BaseHospitalizationStep>
            <BaseHospitalizationStep label="Выписка"
                                     imgUrl="/images/digits/five.png">
                <Text>
                    После выписки из стационара персональный менеджер будет оставаться с вами столько,
                    сколько это необходимо.
                    А если потребуется- предложить программу реабилитации.
                </Text>
            </BaseHospitalizationStep>
        </>
    )
}
