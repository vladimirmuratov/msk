import {FaHandHoldingMedical, FaEye} from "react-icons/fa";
import {BsGenderFemale} from "react-icons/bs";
import {GiBrain, GiMedicalDrip, GiArmSling, GiNightSleep, GiMedicines} from "react-icons/gi";
import {AiOutlineHeart} from "react-icons/ai";
import {RiPsychotherapyLine} from "react-icons/ri";

export const directionsOfHospitalizationOptions = [
    {id: 1, label: 'Абдоминальная хирургия', icon: FaHandHoldingMedical, path: '/services/abdominal-surgery'},
    {id: 2, label: 'Гинекология', icon: BsGenderFemale, path: '/services/gynecology'},
    {id: 3, label: 'Лор и челюстно-лицевая хирургия', icon: FaHandHoldingMedical, path: '/services/facial-surgery'},
    {id: 4, label: 'Нейрохирургия', icon: GiBrain, path: '/services/neurosurgery'},
    {id: 5, label: 'Онкология', icon: GiMedicalDrip, path: '/services/oncology'},
    {id: 6, label: 'Офтальмохирургия', icon: FaEye, path: '/services/ophthalmosurgery'},
    {id: 7, label: 'Травматология и ортопедия', icon: GiArmSling, path: '/services/traumatology'},
    {id: 8, label: 'Урология', icon: FaHandHoldingMedical, path: '/services/urology'},
    {id: 9, label: 'Кардиология', icon: AiOutlineHeart, path: '/services/cardiology'},
    {id: 10, label: 'Неврология', icon: GiMedicines, path: '/services/neurology'},
    {id: 11, label: 'Терапия', icon: RiPsychotherapyLine, path: '/services/therapy'},
    {id: 12, label: 'Лечение нарушений сна', icon: GiNightSleep, path: ''},
]

export const directionOfHospitalizationObpOptions = [
    {id: 1, label: 'Гинекология', icon: BsGenderFemale, path: '/services/gynecology'},
    {id: 2, label: 'Нейрохирургия', icon: GiBrain, path: '/services/neurosurgery'},
    {id: 3, label: 'Травматология и ортопедия', icon: GiArmSling, path: '/services/traumatology'},
    {id: 4, label: 'Урология', icon: FaHandHoldingMedical, path: '/services/urology'},
    {id: 5, label: 'Сердечно-сосудистая хирургия', icon: AiOutlineHeart, path: '/services/cardiology'},
    {id: 6, label: 'Кардиология', icon: AiOutlineHeart, path: '/services/cardiology'},
    {id: 7, label: 'Неврология', icon: GiMedicines, path: '/services/neurology'},
    {
        id: 8,
        label: 'Медицинская реабилитация и восстановительная медицина',
        icon: GiNightSleep,
        path: '/services/rehabilitation'
    },
]

export const directionsOfHospitalizationVolynkaOptions = [
    {id: 1, label: 'Абдоминальная хирургия', icon: FaHandHoldingMedical, path: '/services/abdominal-surgery'},
    {id: 2, label: 'Лор и челюстно-лицевая хирургия', icon: FaHandHoldingMedical, path: '/services/facial-surgery'},
    {id: 3, label: 'Офтальмохирургия', icon: FaEye, path: '/services/ophthalmosurgery'},
    {id: 4, label: 'Кардиология', icon: AiOutlineHeart, path: '/services/cardiology'},
    {id: 5, label: 'Неврология', icon: GiMedicines, path: '/services/neurology'},
    {id: 6, label: 'Неврология ОНМК', icon: GiMedicines, path: '/services/neurology'},
]
