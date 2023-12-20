import { Navigate, createBrowserRouter } from "react-router-dom";
import Partone from "./child/Partone";
import GeneralSurvey from "./child/GeneralSurvey";
import Anthropometrics from "./child/Anthropometrics";
import Parttwo from "./child/Parttwo";
import ChildLayout from "./components/ChildLayout";
import FamilyHistory from "./child/FamilyHistory";
import EnvironmentalHistory from "./child/EnvironmentalHistory";
import PersonalSocialHistory from "./child/PersonalSocialHistory";
import MedicalSurgicalHistory from "./child/MedicalSurgicalHistory";
import DevelopmentalMilestones from "./child/DevelopmentalMilestones";
import ImmunizationHistory from "./child/ImmunizationHistory";
import FemaleMenstrual from "./child/FemaleMenstrual";
import PartFour from "./child/part4/PartFour";
import PartFourPlans from "./child/part4/PartFourPlans";
import DigitalRectal from "./child/part3/Digitalrectal";
import PEAbdomen from "./child/part3/PEabdomen";
import PEBack from "./child/part3/PEback";
import PEChest from "./child/part3/PEchest";
import PEEar from "./child/part3/PEear";
import PEExtremity from "./child/part3/Peextremity";
import PEEye from "./child/part3/PEeye";
import PEHead from "./child/part3/PEhead";
import PEHeart from "./child/part3/PEheart";
import PEMouth from "./child/part3/PEmouth";
import PENeck from "./child/part3/PEneck";
import PENose from "./child/part3/PEnose";
import PESkin from "./child/part3/PEskin";
import ReviewCardiorespiratory from "./child/part3/ReviewCardiorespiratory";
import ReviewGastrointestinal from "./child/part3/ReviewGastrointestinal";
import ReviewGeneral from "./child/part3/ReviewGeneral";
import ReviewGenitourinary from "./child/part3/ReviewGenitourinary";
import ReviewHeent from "./child/part3/ReviewHeent";
import ReviewMusculoskeletal from "./child/part3/ReviewMusculoskeletal";
import ReviewNeurological from "./child/part3/ReviewNeurological";
import ReviewPsychiatric from "./child/part3/ReviewPsychiatric";
import ReviewSkin from "./child/part3/ReviewSkin";
import Annex_a from "./child/part4/Annex_a";
import Annex_b from "./child/part4/Annex_b";
import Adolescentpart3 from "./child/part3/Adolescentpart3";
import Adolescentpart4 from "./child/part3/Adolescentpart4";






const  childRouter = createBrowserRouter([
    {
        path: '/',
        element: <ChildLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/partone' />
            },
            {
                path: '/partone',
                element: <Partone />,
            },
            {
                path: '/generalSurvey',
                element: <GeneralSurvey />,
            },
            {
                path: '/anthropometrics',
                element: <Anthropometrics />
            },
            {
                path: '/parttwo',
                element: <Parttwo />
            },
            {
                path: '/familyHistory',
                element: <FamilyHistory />
            },
            {
                path: '/environmentalHistory',
                element: <EnvironmentalHistory />
            },
            {
                path: '/personalSocialHistory',
                element: <PersonalSocialHistory />
            },
            {
                path: '/medicalSurgicalHistory',
                element: <MedicalSurgicalHistory />
            },
            {
                path: '/developmentalMilestone',
                element: <DevelopmentalMilestones />
            },
            {
                path: '/immunizationHistory',
                element: <ImmunizationHistory />
            },
            {
                path: '/femaleMenstrual',
                element: <FemaleMenstrual />
            },
            {
                path: '/partFour',
                element: <PartFour />
            },
            {
                path: '/partFourPlans',
                element: <PartFourPlans />
            },
            {
                path: '/digitalRectal',
                element: <DigitalRectal />
            },
            {
                path: '/peAbdomen',
                element: <PEAbdomen />
            },
            {
                path: '/peBack',
                element: <PEBack />
            },
            {
                path: '/peChest',
                element: <PEChest />
            },
            {
                path: '/peEar',
                element: <PEEar />
            },
            {
                path: '/peExtremity',
                element: <PEExtremity />
            },
            {
                path: '/peEye',
                element: <PEEye />
            },
            {
                path: '/peHead',
                element: <PEHead />
            },
            {
                path: '/peHeart',
                element: <PEHeart />
            },
            {
                path: '/peMouth',
                element: <PEMouth />
            },
            {
                path: '/peNeck',
                element: <PENeck />
            },
            {
                path: '/peNose',
                element: <PENose />
            },
            {
                path: '/peSkin',
                element: <PESkin />
            },
            {
                path: '/reviewCardiorespiratory',
                element: <ReviewCardiorespiratory />
            },
            {
                path: '/reviewGastrointestinal',
                element: <ReviewGastrointestinal />
            },
            {
                path: '/reviewGeneral',
                element: <ReviewGeneral />
            },
            {
                path: '/reviewGenito',
                element: <ReviewGenitourinary />
            },
            {
                path: '/reviewHeent',
                element: <ReviewHeent />
            },
            {
                path: '/reviewMusculoskeletal',
                element: <ReviewMusculoskeletal />
            },
            {
                path: '/reviewNeurological',
                element: <ReviewNeurological />
            },
            {
                path: '/reviewPsychiatric',
                element: <ReviewPsychiatric />
            },
            {
                path: '/reviewSkin',
                element: <ReviewSkin />
            },
            {
                 path: '/Annex_a',
                 element: <Annex_a />
            },
            {
                path: '/Annex_b',
                element: <Annex_b />
            },
            {
                path: '/adolescentpart3',
                element: <Adolescentpart3 />
            },
            {
                path: '/adolescentpart4',
                element: <Adolescentpart4 />
            },




        ]
    }
])

export default childRouter;
