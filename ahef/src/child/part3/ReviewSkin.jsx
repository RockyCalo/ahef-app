import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";



export default function ReviewSkin(){


    const [none, setNone] = useState('');
    const [rash, setRash] = useState('');
    const [itching, setItching] = useState('');
    const [change_in_color, setChangeColor] = useState('');
    const [change_in_hair, setChangeHair] = useState('');
    const [dryness, setDryness] = useState('');
    const [others_skin_review, setOtherSkinReview] = useState('');


    async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewMusculoSkeletal",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    rash: rash,
                    itching: itching,
                    change_in_color: change_in_color,
                    change_in_hair: change_in_hair,
                    dryness: dryness,
                    others_skin_review: others_skin_review,

                 });
                 setNone("");
                 setRash("");
                 setItching("");
                 setChangeColor("");
                 setChangeHair("");
                 setDryness("");
                 setOtherSkinReview("");

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
                      value="none"
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
                      id="itching"
                      name="itching"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Itching"
                      onChange={(event) => {
                        setItching(event.target.value)
        }}
                    />
                    Itching
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="change_in_hair"
                      name="change_in_hair"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Changes in hair/nails/skin"
                      onChange={(event) => {
                        setChangeHair(event.target.value)
        }}
                    />

                  Changes in hair/nails/skin
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="dryness"
                      name="dryness"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Dryness"
                      onChange={(event) => {
                        setDryness(event.target.value)
        }}
                    />
                     Dryness
                  </div>

                  </div>




                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="rash"
                      name="rash"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="rash"
                      onChange={(event) => {
                        setRash(event.target.value)
        }}
                    />
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Rash
                    </label>
                    </div>
                  </div>
                  </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="change_in_color"
                      name="change_in_color"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Change in Color"
                      onChange={(event) => {
                        setChangeColor(event.target.value)
        }}
                   />
                    Change in Color
                  </div>

                  </div>



                   <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="others_skin_review"
                      name="others_skin_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherSkinReview(event.target.value)
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
