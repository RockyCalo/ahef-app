


import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";



export default function ReviewNeurological(){



    const [none, setNone] = useState('');
    const [headache, setHeadache] = useState('');
    const [numbness, setNumbness] = useState('');
    const [seizures, setSeizure] = useState('');
    const [fainting, setFainting] = useState('');
    const [difficulty_in_communicating, setCommunicating] = useState('');


    async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewMusculoSkeletal",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    headache: headache,
                    numbness: numbness,
                    seizures: seizures,
                    fainting: fainting,
                    difficulty_in_communicating: difficulty_in_communicating,

                 });
                 setNone("");
                 setHeadache("");
                 setNumbness("");
                 setSeizure("");
                 setFainting("");
                 setCommunicating("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }


return (
        <PageComponent title='Neurological'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-10 ml-8">

                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="none"
                      name="none"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="None"
                      onChange={(event) => {
                        setNone(event.target.value)
        }}
                    />
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       None
                    </label>
                    </div>
                  </div>
                  </div>



                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="headache"
                      name="headache"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Headache"
                      onChange={(event) => {
                        setHeadache(event.target.value)
        }}
                    />
                        Headache
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="seizures"
                      name="seizures"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="seizures"
                      onChange={(event) => {
                        setSeizure(event.target.value)
        }}
                    />

                        Seizure / convulsions
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="difficulty_in_communicating"
                      name="difficulty_in_communicating"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Difficulty in communicating"
                      onChange={(event) => {
                        setCommunicating(event.target.value)
        }}
                    />
                        Difficulty in communicating
                  </div>

                  </div>





                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="numbness"
                      name="numbness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="numbness"
                      onChange={(event) => {
                        setNumbness(event.target.value)
        }}
                    />
                       Numbness
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="fainting"
                      name="fainting"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="fainting"
                      onChange={(event) => {
                        setFainting(event.target.value)
        }}
                    />
                       Fainting episodes
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
