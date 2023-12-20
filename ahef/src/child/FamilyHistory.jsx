import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function FamilyHistory(){

    const [hypertension, setHypertension] = useState('');
const [stroke, setStroke] = useState('');
const [heart_disease, setHeartDisease] = useState('');
const [high_cholesterol, setCholesterol] = useState('');
const [heart_pain, setHeartPain] = useState('');
const [diabetes, setDiabetes] = useState('');
const [kidney_disease, setKidneyDisease] = useState('');
const [liver_disease, setLiverDisease] = useState('');
const [copd, setCopd] = useState('');
const [asthma, setAsthma] = useState('');
const [mental_abuse_condition, setMentalAbuse] = useState('');
const [cancer, setCancer] = useState('');
const [others_family_history, setOtherFamily] = useState('');
const [tuberculosis, setTuberculosis] = useState('');
const [leprosy, setLeprosy] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_familyHistory",
                 {
                // patient_information_id: patient_information_id,

                 hypertension: hypertension,
                 stroke: stroke,
                 heart_disease: heart_disease,
                 high_cholesterol: high_cholesterol,
                 heart_pain: heart_pain,
                 diabetes: diabetes,
                 kidney_disease: kidney_disease,
                 liver_disease: liver_disease,
                 copd: copd,
                 asthma: asthma,
                 mental_abuse_condition: mental_abuse_condition,
                 cancer: cancer,
                 others_family_history: others_family_history,
                  tuberculosis: tuberculosis,
                 leprosy: leprosy,




             });
             setHypertension("");
             setStroke("");
             setHeartDisease("");
              setCholesterol("");
             setHeartPain("");
              setDiabetes("");
             setKidneyDisease("");
                          setLiverDisease("");
             setCopd("");
              setAsthma("");
             setMentalAbuse("");
              setCancer("");
             setOtherFamily("");
                           setTuberculosis("");
             setLeprosy("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }


return (
        <PageComponent title='Family History'>
            <form action="">
                            <fieldset>
                <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 text center grid grid-cols-1 sm:grid-cols-4 ml-8">

                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="hypertension"
                      name="hypertension"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="hypertension"
                      onChange={(event) => {
            setHypertension(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Hypertension
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="stroke"
                      name="stroke"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        value="stroke"
                      onChange={(event) => {
            setStroke(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Stroke
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="heart_disease"
                      name="heart_disease"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Heart Disease"
                      onChange={(event) => {
            setHeartDisease(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Heart Disease
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="high_cholesterol"
                      name="high_cholesterol"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="High Cholesterol"
                      onChange={(event) => {
            setCholesterol(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      High Cholesterol
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="heart_pain"
                      name="heart_pain"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Heart Pain"
                      onChange={(event) => {
            setHeartPain(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Hearth Pain or heart attack in Males {'<'}55 y/o Or Females {'<'} 60 y/o
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="diabetes"
                      name="diabetes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value="Diabetes"
                      onChange={(event) => {
            setDiabetes(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Diabetes
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="kidney_disease"
                      name="kidney_disease"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Kidney Disease"
                      onChange={(event) => {
            setKidneyDisease(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Kidney Disease
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="liver_disease"
                      name="liver_disease"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                    value="Liver Disease"
                      onChange={(event) => {
            setLiverDisease(event.target.value)
        }}
        />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      liver Disease
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="copd"
                      name="copd"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="COPD"
                      onChange={(event) => {
            setCopd(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     COPD
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="asthma"
                      name="asthma"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Asthma"
                      onChange={(event) => {
            setAsthma(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Asthma
                    </label>
                    </div>
                  </div>

                  <div className="sm:col-span-2 " >
    <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
   Mental, Neurological, and Substance abuse condition, Pls. Specify:
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="mental_abuse_condition"
        id="mental_abuse_condition"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={mental_abuse_condition}
                      onChange={(event) => {
            setMentalAbuse(event.target.value)
        }}
      />
      </div>
      </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Cancer, pls. Specify:
                    </label>
                    </div>
                    <input
                      id="cancer"
                      name="cancer"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={cancer}
                      onChange={(event) => {
            setCancer(event.target.value)
        }}
                    />
                  </div>

                  </div>

<div className="sm:col-span-1 " >
    <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
   Others, Pls. Specify:
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="others_family_history"
        id="others_family_history"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      value={others_family_history}
                      onChange={(event) => {
            setOtherFamily(event.target.value)
        }}
      />
      </div>
      </div>


                    </div>

                </div>
                <div className="border border-gray-900/10 pb-8">
                    <div className="text-md font-semibold">
                        <p>Check if Present among  Household Contact</p>
                        <div className="border-t border-gray-900/10 pb-2"></div>
                    </div>
                    <div className="mt-8 text center grid grid-cols-1 sm:grid-cols-4 ml-8">

                        <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="tuberculosis"
                      name="tuberculosis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={tuberculosis}
                      onChange={(event) => {
            setTuberculosis(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Tuberculosis
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="leprosy"
                      name="leprosy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={leprosy}
                      onChange={(event) => {
            setLeprosy(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Leprosy
                    </label>
                    </div>
                  </div>


                    </div>
                </div>
                         <div className="flex justify-end bg-gray-50"
                             onClick={save}
                            >
                                    <Tbutton>Next</Tbutton>
                            </div>
            </fieldset>

            </form>
    </PageComponent>

)
}
