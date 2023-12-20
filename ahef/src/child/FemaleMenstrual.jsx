import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function FemaleMenstrual(){
    const [minarch, setMinarch] = useState('');
const [mestrual_period, setMenstrualPeriod] = useState('');
    const [duration, setDuration] = useState('');
const [cycle, setCycle] = useState('');
const [flow, setFlow] = useState('');
const [dysmenorrhea, setDysmenorrhea] = useState('');
const [contraceptive_use, setContraceptive] = useState('');
const [cervical_cancer, setCervicalCancer] = useState('');
const [cervical_cancer_findings, setCervicalCancerFindings] = useState('');
const [patient_been_pregnant, setPatientPregnant] = useState('');
 const [prenatal_checkups, setPrenatalCheckup] = useState('');
const [prenatal_services, setPrenatalService] = useState('');
const [gravida, setGravida] = useState('');
const [year, setYear] = useState('');
const [place_of_delivery, setPlaceofDelivery] = useState('');
const [type_of_delivery, setTypeofDelivery] = useState('');
const [specify_complication, setSpecifyComplication] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_femaleMenstrual",
                 {
                // patient_information_id: patient_information_id,
                 minarch: minarch,
                 mestrual_period: mestrual_period,
                 duration: duration,
                 cycle: cycle,
                 flow: flow,
                 dysmenorrhea: dysmenorrhea,
                 contraceptive_use: contraceptive_use,
                 cervical_cancer: cervical_cancer,
                 cervical_cancer_findings: cervical_cancer_findings,
                 patient_been_pregnant: patient_been_pregnant,
                 prenatal_checkups: prenatal_checkups,
                 prenatal_services: prenatal_services,
                 gravida: gravida,
                 year: year,
                 place_of_delivery: place_of_delivery,
                 type_of_delivery: type_of_delivery,
                 specify_complication: specify_complication,


             });
                          setMinarch("");
             setMenstrualPeriod("");
             setDuration("");
             setCycle("");
             setFlow("");
              setDysmenorrhea("");
             setContraceptive("");
             setCervicalCancer("");
             setCervicalCancerFindings("");
              setPatientPregnant("");
             setPrenatalCheckup("");
            setPrenatalService("");
             setGravida("");
              setYear("");
             setPlaceofDelivery("");
              setTypeofDelivery("");
             setSpecifyComplication("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }

return (
        <PageComponent title='[FOR FEMALES] Menstrual and OB Gyne History'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                                        <div className="m-2 grid grid-cols-2 divide-x">


                <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" font-bold text-gray-900">
                     Menarche
                    </label>
                    </div>
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="minarch"
                      name="minarch"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={minarch}
                      onChange={(event) => {
            setMinarch(event.target.value)
        }}
                    />
                  </div>

                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" font-bold text-gray-900">
                     First day of last menstrual period
                    </label>
                    </div>
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="mentrual_period"
                      name="mentrual_period"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={mestrual_period}
                      onChange={(event) => {
            setMenstrualPeriod(event.target.value)
        }}
                    />
                  </div>

                  </div>

                        </div>
                         <div className="border-t border-gray-900/10 pb-4"></div>
                 <div className="m-2 grid grid-cols-4 divide-x">


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" font-bold text-gray-900">
                     Duration
                    </label>
                    </div>

                  </div>
                     <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" font-bold text-gray-900">
                     Cycle
                    </label>
                    </div>

                  </div>
                     <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" font-bold text-gray-900">
                     Flow
                    </label>
                    </div>

                  </div>
                     <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" font-bold text-gray-900">
                     Dysmenorrhea
                    </label>
                    </div>

                  </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="duration"
                      name="duration"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={duration}
                      onChange={(event) => {
            setDuration(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     &le; 7 days
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cycle"
                      name="cycle"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={cycle}
                      onChange={(event) => {
            setCycle(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     {'<'} 21 days
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                                          <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     # of pads per day
                    </label>
                    </div>
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="flow"
                      name="flow"
                      type="text"
                      className="h-7 w-24 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={flow}
                      onChange={(event) => {
            setFlow(event.target.value)
        }}
                    />
                  </div>

                  </div>


                                      <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="dysmenorrhea"
                      name="dysmenorrhea"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value={dysmenorrhea}
                      onChange={(event) => {
            setDysmenorrhea(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     No
                    </label>
                    </div>
                  </div>




                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="duration"
                      name="duration"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={duration}
                      onChange={(event) => {
            setDuration(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     {'>'}7 days
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cycle"
                      name="cycle"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={cycle}
                      onChange={(event) => {
            setCycle(event.target.value)
        }}

                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     21-35 days cycle
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-sm">Soaking more than usual # of pads per day?</div>

                  </div>



                     <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="dysmenorrhea"
                      name="dysmenorrhea"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={dysmenorrhea}
                      onChange={(event) => {
            setDysmenorrhea(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Yes, Mild to Moderate
                    </label>
                    </div>
                  </div>

                   <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    </div>
                  </div>


 <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cycle"
                      name="cycle"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={cycle}
                      onChange={(event) => {
            setCycle(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     {'>'}35 days cycle
                    </label>
                    </div>
                  </div>


 <div className="relative flex gap-x-3 sm:col-span-1">
  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="flow"
                      name="flow"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="yes"
                      onChange={(event) => {
            setFlow(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    Yes
                    </label>
                    </div>



                    <div className="flex h-6 mt-2 items-center">
                    <input
                      id="flow"
                      name="flow"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="No"
                      onChange={(event) => {
            setFlow(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                   No
                    </label>
                    </div>
                  </div>





                     <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="dysmenorrhea"
                      name="dysmenorrhea"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={dysmenorrhea}
                      onChange={(event) => {
            setDysmenorrhea(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Yes, Severe
                    </label>
                    </div>
                  </div>

                   <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    </div>
                  </div>
                    </div>

                    <div className="border  border-gray-900/10 bg-gray-100 pb-4">
                         <div className=" mt-1 grid sm:grid-cols-4 ml-2">
                    <div className="text-md font-semibold  sm:col-span-2">Contraceptive Use</div>
                    <div className="text-md font-semibold  sm:col-span-2">Cervical Cancer Screening History</div>
                         </div>

                    </div>
                    <div className="border  border-gray-900/10pb-4">
                         <div className=" mt-1 grid sm:grid-cols-4 ml-2">

  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="contraceptive_use"
                      name="contraceptive_use"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={contraceptive_use}
                      onChange={(event) => {
            setContraceptive(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     W/o contraceptive use
                    </label>
                    </div>
                  </div>

  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" text-sm text-gray-900">
                     With Contraceptive Use, Pls Specify details
                    </label>
                    </div>
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="contraceptive_use"
                      name="contraceptive_use"
                      type="text"
                      className="h-7 w-24 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={contraceptive_use}
                      onChange={(event) => {
            setContraceptive(event.target.value)
        }}

                    />
                  </div>

                  </div>

   <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="text-md mt-2 leading-6">
                    <label htmlFor="offers" className=" text-xs text-gray-900">
                     Date of last cervical cancer screening
                    </label>
                    </div>
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cervical_cancer"
                      name="cervical_cancer"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={cervical_cancer}
                      onChange={(event) => {
            setCervicalCancer(event.target.value)
        }}
                    />
                  </div>

                  </div>

  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cervical_cancer_findings"
                      name="cervical_cancer_findings"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={cervical_cancer_findings}
                      onChange={(event) => {
            setCervicalCancerFindings(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Normal Previous cervical cancer screening findings
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="contraceptive_use"
                      name="contraceptive_use"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                   value={contraceptive_use}
                      onChange={(event) => {
            setContraceptive(event.target.value)
        }}/>
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     W/o Contraceptive use & wants to start
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">

                    </div>
                  </div>



  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    </div>
                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cervical_cancer_findings"
                      name="cervical_cancer_findings"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={cervical_cancer_findings}
                      onChange={(event) => {
            setCervicalCancerFindings(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Abnormal previous cervical cancer screening findings. pls specify:
                    </label>
                    </div>
                  </div>

                         </div>

                    </div>

                    <div className="border  border-gray-900/10 pb-4">
                    <div className="text-md font-bold">Has the patient Ever been pregnant?</div>
                     <div className=" mt-1 grid sm:grid-cols-4 ml-2">
                     <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="patient_been_pregnant"
                      name="patient_been_pregnant"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={patient_been_pregnant}
                      onChange={(event) => {
            setPatientPregnant(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     No (proceed to Review of Symptoms)
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="patient_been_pregnant"
                      name="patient_been_pregnant"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={patient_been_pregnant}
                      onChange={(event) => {
            setPatientPregnant(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Yes, Currently Pregnant
                    </label>
                        <div className="relative flex gap-x-3 sm:row-span-1">
                  <div className="flex items-center">
                    <input
                      id="patient_been_pregnant"
                      name="patient_been_pregnant"
                      type="text"
                      placeholder="No, Specify"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
   value={patient_been_pregnant}
                      onChange={(event) => {
            setPatientPregnant(event.target.value)
        }}
                   />
                  </div>

                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-1">
                  <div className="flex items-center">
                    <input
                      id="patient_been_pregnant"
                      name="patient_been_pregnant"
                      type="text"
                      placeholder="Yes, Specify"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={patient_been_pregnant}
                      onChange={(event) => {
            setPatientPregnant(event.target.value)
        }}
                    />
                  </div>

                  </div>



                    </div>





                  </div>


                        </div>
                    </div>




        <div className="border  border-gray-900/10 pb-4">
                         <div className=" mt-1 grid sm:grid-cols-4 ml-2">
                    <div className="text-md font-semibold  sm:col-span-2">Prenatal Check-ups</div>
                    <div className="text-md font-semibold  sm:col-span-2">Prenatal Service Availed</div>
                         </div>

                            <div className=" mt-1 grid sm:grid-cols-4 ml-2">
                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_checkups"
                      name="prenatal_checkups"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={prenatal_checkups}
                      onChange={(event) => {
            setPrenatalCheckup(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     {'<'} 8 visit
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_services"
                      name="prenatal_services"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={prenatal_services}
                      onChange={(event) => {
            setPrenatalService(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Ultrasound
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_services"
                      name="prenatal_services"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={prenatal_services}
                      onChange={(event) => {
            setPrenatalService(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    Td vaccine following the recommended schedule
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_services"
                      name="prenatal_services"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={prenatal_services}
                      onChange={(event) => {
            setPrenatalService(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    HIV test
                    </label>
                    </div>
                  </div>



                     <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_checkups"
                      name="prenatal_checkups"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={prenatal_services}
                      onChange={(event) => {
            setPrenatalService(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     &ge; 8 visits
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_services"
                      name="prenatal_services"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={prenatal_services}
                      onChange={(event) => {
            setPrenatalService(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Iron & folic acid supplementation
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_services"
                      name="prenatal_services"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={prenatal_services}
                      onChange={(event) => {
            setPrenatalService(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    Screening for gestational dieabetes
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="prenatal_services"
                      name="prenatal_services"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={prenatal_services}
                      onChange={(event) => {
            setPrenatalService(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    Syphilis Screening
                    </label>
                    </div>
                  </div>




                         </div>

                    </div>



        <div className="border  border-gray-900/10 pb-4">
                         <div className=" mt-1 grid sm:grid-cols-10 ml-2">
                    <div className="text-md font-semibold  sm:col-span-2">Gravida
                            <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="gravida"
                      name="gravida"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                     value={gravida}
                      onChange={(event) => {
            setGravida(event.target.value)
        }}
        />
                  </div>
                  </div></div>
                    <div className="text-md font-semibold  sm:col-span-2">Year
                            <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="year"
                      name="year"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={year}
                      onChange={(event) => {
            setYear(event.target.value)
        }}
                    />
                  </div>
                  </div></div>
                    <div className="text-md font-semibold  sm:col-span-2">Place of Delivery or Abortion
                            <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="place_of_delivery"
                      name="place_of_delivery"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={place_of_delivery}
                      onChange={(event) => {
            setPlaceofDelivery(event.target.value)
        }}
                   />
                  </div>
                  </div></div>
                    <div className="text-md font-semibold  sm:col-span-2">Type of Delivery
                            <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="type_of_delivery"
                      name="type_of_delivery"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={type_of_delivery}
                      onChange={(event) => {
            setTypeofDelivery(event.target.value)
        }}
                    />
                  </div>
                  </div></div>
                    <div className="text-md font-semibold  sm:col-span-2">Specify Complications, if any
                            <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="specify_complication"
                      name="specify_complication"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={specify_complication}
                      onChange={(event) => {
            setSpecifyComplication(event.target.value)
        }}
                   />
                  </div>
                  </div></div>
                         </div>




                    </div>

                </div>




            </fieldset>
                         <div className="flex justify-end bg-gray-50"
                             onClick={save}
                            >
                                    <Tbutton>Next</Tbutton>
                            </div>
            </form>
    </PageComponent>

)
}

