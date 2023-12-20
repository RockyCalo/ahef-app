import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function GeneralSurvey(){


       // const [patient_information_id, setPatientInformation] = useState('');
const [conscious, setConscious] = useState('');
const [coherent, setCoherent] = useState('');
const [not_in_cardiorespiratory, setNotCardio] = useState('');
const [blood_pressure, setBloodPressure] = useState('');
const [heart_rate, setHeartRate] = useState('');
const [respiratory_rate, setRespiratory] = useState('');
const [temperature, setTemperature] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_generalSurvey",
                 {
                // patient_information_id: patient_information_id,

                 conscious: conscious,
                 coherent: coherent,
                 not_in_cardiorespiratory: not_in_cardiorespiratory,
                 blood_pressure: blood_pressure,
                 heart_rate: heart_rate,
                 respiratory_rate: respiratory_rate,
                 temperature: temperature,




             });
             setConscious("");
             setCoherent("");
             setNotCardio("");
              setBloodPressure("");
             setRespiratory("");
              setHeartRate("");
             setTemperature("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }



return (
        <PageComponent title='General Survey and Vital Sign'>
   {/* General Survey and Vital Signs */}

   <form action="">
                            <fieldset>
                <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-10 ml-8">

                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="conscious"
                      name="conscious"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        value="Concious"
                      onChange={(event) => {
            setConscious(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Conscious
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      BP:
                    </label>
                    </div>
                    <input
                      id="blood_pressure"
                      name="blood_pressure"
                      type="text"
                      className="h-7 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        value={blood_pressure}
                      onChange={(event) => {
            setBloodPressure(event.target.value)
        }}
                    />
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Heart Rate:
                    </label>
                    </div>
                    <input
                      id="heart_rate"
                      name="heart_rate"
                      type="text"
                      className="h-7 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value={heart_rate}
                      onChange={(event) => {
            setHeartRate(event.target.value)
        }}
                    />
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Respiratory Rate:
                    </label>
                    </div>
                    <input
                      id="respiratory_rate"
                      name="respiratory_rate"
                      type="text"
                      className="h-7 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value={respiratory_rate}
                      onChange={(event) => {
            setRespiratory(event.target.value)
        }}
                    />
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Temperature:
                    </label>
                    </div>
                    <input
                      id="temperature"
                      name="temperature"
                      type="text"
                      className="h-7 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value={temperature}
                      onChange={(event) => {
            setTemperature(event.target.value)
        }}
                    />
                  </div>

                  </div>


                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="coherent"
                      name="coherent"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                     value="Coherent"
                      onChange={(event) => {
            setCoherent(event.target.value)
        }}
        />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Coherent
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                    <p>Normal Values:</p>
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                    <p>Normal Values:</p>
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                    <p>Normal Values:</p>
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                    <p>Normal Values:</p>
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="not_in_cardiorespiratory"
                      name="not_in_cardiorespiratory"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                       value="Not in Cardiorespiratory"
                      onChange={(event) => {
            setNotCardio(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Not in Cardiorespiratory Distress
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p>{'<'}80th percentile for age, gender and height percentile <br/> See annex for BP percentile</p>

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p>3 to 5 y/o: 70-115 beat per minute <br/> 5 to 12 y/o: 60-100 beat per minute</p>

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p>3 to 5 y/o: 20-25 cycles per minute <br/> 5 to 12 y/o: 14-22 cycles per minute</p>

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p>Axilliry: 35.5 to 37.</p>

                  </div>

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
