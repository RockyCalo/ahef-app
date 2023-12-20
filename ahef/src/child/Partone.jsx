 import { useState } from "react";
import axios from "axios";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";


export default function Partone(){
    // const [patient_information_id, setPatientInformation] = useState('');
const [chest_pain, setChestPain] = useState('');
const [difficulty_breathing, setDifficultBreath] = useState('');
const [seizure_convulsion, setConvulsion] = useState('');
const [unconscious, setUnconscious] = useState('');
const [not_oriented, setNotOriented] = useState('');
const [bluish_discoloration, setBluish] = useState('');
const [harmful_suicide, setHarmful] = useState('');
const [acute_fracture, setFracture] = useState('');
const [sign_of_abuse, setAbuse] = useState('');
const [severe_abdominal_pain, setAbdominal] = useState('');
const [persistent_vomiting, setVomiting] = useState('');
const [persistent_diarrhea, setDiarrhea] = useState('');
const [tolerate_fluids, setFluids] = useState('');



     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_partone",
                 {
                // patient_information_id: patient_information_id,

                 chest_pain: chest_pain,
                 difficulty_breathing: difficulty_breathing,
                 seizure_convulsion: seizure_convulsion,
                 unconscious: unconscious,
                 not_oriented: not_oriented,
                 bluish_discoloration: bluish_discoloration,
                 harmful_suicide: harmful_suicide,
                 acute_fracture: acute_fracture,
                 sign_of_abuse: sign_of_abuse,
                 severe_abdominal_pain: severe_abdominal_pain,
                 persistent_vomiting: persistent_vomiting,
                 persistent_diarrhea: persistent_diarrhea,
                 tolerate_fluids: tolerate_fluids,



             });
             setChestPain("");
             setDifficultBreath("");
             setConvulsion("");
              setUnconscious("");
             setNotOriented("");
              setBluish("");
             setDiarrhea("");
              setVomiting("");
             setHarmful("");
              setFracture("");
             setAbuse("");
              setFluids("");
             setAbdominal("");


        }
         catch(err)
         {
             alert("Failed");
         }
     }



return (
        <PageComponent title='Part 1. For BHW, Midwife, RN or MD only'>
            <form action="">
                            <fieldset>
                <div className="border border-gray-900/10 pb-8">
                    <p className="text text-center font-semibold">Screen for the following red flags</p>
                    <p className="text text-center font-semibold">If any of these symptoms are present DURING the patient visit, DO NOT PROCEED TO THE REST OF THE FORMS. Refer Immediately to Physician for Assessment.</p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-8 ml-8">


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="chest_pain"
                      name="chest_pain"
                      type="checkbox"
                      value="chest_pain"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

        onChange={(event) => {
            setChestPain(event.target.value)
        }}
        />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Chest Pain/ Discomfort/ Heaviness
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="unconscious"
                      name="unconscious"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"


                            value="unconscious"
        onChange={(event) => {
            setUnconscious(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Unconscious/ Restless/ Lethargic
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="harmful_suicide"
                      name="harmful_suicide"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                        value="harmful_suicide"
        onChange={(event) => {
            setHarmful(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Act of Self-harm/ Suicide
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="severe_abdominal_pain"
                      name="severe_abdominal_pain"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                        value="severe_abdominal_pain"
        onChange={(event) => {
            setAbdominal(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Severe Abdominal Pain
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="difficulty_breathing"
                      name="difficulty_breathing"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                        value="difficulty_breathing"
        onChange={(event) => {
            setDifficultBreath(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Difficulty Breathing
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="not_oriented"
                      name="not_oriented"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                      value="not_oriented"
        onChange={(event) => {
            setNotOriented(event.target.value)
        }}

                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Not Oriented to Time, Person, or Place
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="acute_fracture"
                      name="acute_fracture"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                        value="acute_fracture"
        onChange={(event) => {
            setFracture(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Acute Fracture/ Dislocation/ Injuries
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="persistent_vomiting"
                      name="persistent_vomiting"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                        value="persistent_vomiting"
        onChange={(event) => {
            setVomiting(event.target.value)
        }}


                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Persisteng Vomiting
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="seizure_convulsion"
                      name="seizure_convulsion"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"


                        value="seizure_convulsion"
        onChange={(event) => {
            setConvulsion(event.target.value)
        }}


                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Seizure or Convulsion
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="bluish_discoloration"
                      name="bluish_discoloration"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"


                        value="bluish_discoloration"
        onChange={(event) => {
            setBluish(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Bluish Discoloration of Skin or Lips
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sign_of_abuse"
                      name="sign_of_abuse"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"


                        value="sign_of_abuse"
        onChange={(event) => {
            setAbuse(event.target.value)
        }}


                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Sign of Abuse(i.e. Multiple Bruises and Injuries)
                    </label>
                    </div>
                  </div>


 <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="persistent_diarrhea"
                      name="persistent_diarrhea"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"


                        value="persistent_diarrhea"
        onChange={(event) => {
            setDiarrhea(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Persistent Diarrhea ({'>'}14 days)
                    </label>
                    </div>
                  </div>



                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="tolerate_fluids"
                      name="tolerate_fluids"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"


                        value="tolerate_fluids"
        onChange={(event) => {
            setFluids(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Unable to tolerate Fluids
                    </label>
                    </div>
                  </div>
                    </div>
                </div>



            </fieldset>


                         <div className="flex justify-end bg-gray-50"
                             onClick={save}
                            >
                                    <Tbutton to="/generalSurvey">Next

                                    </Tbutton>
                            </div>


            </form>
    </PageComponent>

)
}
