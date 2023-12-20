
import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";




export default function ReviewCardiorespiratory(){


    const [none, setNone] = useState('');
    const [cough, setCough] = useState('');
    const [wheezing, setWheezing] = useState('');
    const [cough_with_blood, setCoughWBlood] = useState('');
    const [palpitations, setPalpitation] = useState('');
    const [chest_pain, setChestPain] = useState('');
    const [difficult_breathing, setDifficultBreath] = useState('');
    const [others_cardiorespiratories_review, setOtherCardio] = useState('');

         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewCardiorespiratory",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    cough: cough,
                    wheezing: wheezing,
                    cough_with_blood: cough_with_blood,
                    palpitations: palpitations,
                    chest_pain: chest_pain,
                    difficult_breathing: difficult_breathing,
                    others_cardiorespiratories_review: others_cardiorespiratories_review,

                 });
                 setNone("");
                 setCough("");
                 setWheezing("");
                 setCoughWBlood("");
                 setPalpitation("");
                 setChestPain("");
                 setDifficultBreath("");
                 setOtherCardio("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }


return (
        <PageComponent title='Skin'>
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
                      id="wheezing"
                      name="wheezing"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="wheezing"
                      onChange={(event) => {
                        setWheezing(event.target.value)
        }}
                    />
                      Wheezing
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="palpitations"
                      name="palpitations"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="palpitations"
                      onChange={(event) => {
                        setPalpitation(event.target.value)
        }}
                    />

                      Palpitations
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="difficult_breathing"
                      name="difficult_breathing"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Difficult breathing while lying down"
                      onChange={(event) => {
                        setDifficultBreath(event.target.value)
        }}
                    />
                        Difficult breathing while lying down
                  </div>

                  </div>



                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="cough"
                      name="cough"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="cough"
                      onChange={(event) => {
                        setCough(event.target.value)
        }}
                    />
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Cough
                    </label>
                    </div>
                  </div>
                  </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="cough_with_blood"
                      name="cough_with_blood"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Change in Color"
                      onChange={(event) => {
                        setCoughWBlood(event.target.value)
        }}
                    />
                    Change in Color
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="chest_pain"
                      name="chest_pain"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="unremarkable"
                      onChange={(event) => {
                        setChestPain(event.target.value)
        }}
                    />
                       Chestpain
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="others_cardiorespiratories_review"
                      name="others_cardiorespiratories_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherCardio(event.target.value)
        }}
                   />
                    Others:
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                    <p></p>
                  </div>

                  </div>



                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p><br/> </p>

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p><br/> </p>

                  </div>

                  </div>

    <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p></p>

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
