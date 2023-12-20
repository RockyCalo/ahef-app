
import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";

export default function ReviewGeneral(){


    const [none, setNone] = useState('');
    const [unintentiona_weight_loss, setWeightLoss] = useState('');
    const [fever, setFever] = useState('');
    const [fatigue, setFatigue] = useState('');
    const [chills, setChills] = useState('');
    const [bruisability, setBruisability] = useState('');
    const [enlarged_lymph, setEnlargeLymph] = useState('');
    const [others_general_review, setOtherGeneralReview] = useState('');


    async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewGeneral",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    unintentiona_weight_loss: unintentiona_weight_loss,
                    fever: fever,
                    fatigue: fatigue,
                    chills: chills,
                    bruisability: bruisability,
                    enlarged_lymph: enlarged_lymph,
                    others_general_review: others_general_review,
                 });
                 setNone("");
                 setWeightLoss("");
                 setFever("");
                 setFatigue("");
                 setChills("");
                 setBruisability("");
                 setEnlargeLymph("");
                 setOtherGeneralReview("");

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
                      id="fever"
                      name="fever"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="fever"
                      onChange={(event) => {
                        setFever(event.target.value)
        }}
                    />
                    Fever
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="chills"
                      name="chills"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Chills or Night sweats:"
                      onChange={(event) => {
                        setChills(event.target.value)
        }}
                    />

                  Chills or Night sweats:
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="enlarged_lymph"
                      name="enlarged_lymph"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Enlarged lymph nodes/mass"
                      onChange={(event) => {
                        setEnlargeLymph(event.target.value)
        }}
                    />
                     Enlarged lymph nodes/mass
                  </div>

                  </div>




                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="unintentiona_weight_loss"
                      name="unintentiona_weight_loss"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Unintentional weight loss"
                      onChange={(event) => {
                        setWeightLoss(event.target.value)
        }}
                    />
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Unintentional weight loss
                    </label>
                    </div>
                  </div>
                  </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="fatigue"
                      name="fatigue"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Fatigue"
                      onChange={(event) => {
                        setFatigue(event.target.value)
        }}
                    />
                    Fatigue
                  </div>

                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="bruisability"
                      name="bruisability"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Easy bruisability"
                      onChange={(event) => {
                        setBruisability(event.target.value)
        }}
                    />
                    Easy bruisability
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="others_general_review"
                      name="others_general_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherGeneralReview(event.target.value)
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
