


import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";



export default function ReviewMusculoskeletal(){


    const [none, setNone] = useState('');
    const [myalgia, setMyalgia] = useState('');
    const [stiffness, setStiffness] = useState('');
    const [joint_pain, setjointPain] = useState('');
    const [difficulty_in_motion, setMotion] = useState('');
    const [others_mosculo_review, setOtherMosculo] = useState('');


    async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewMusculoSkeletal",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    myalgia: myalgia,
                    stiffness: stiffness,
                    joint_pain: joint_pain,
                    difficulty_in_motion: difficulty_in_motion,
                    others_mosculo_review: others_mosculo_review,

                 });
                 setNone("");
                 setMyalgia("");
                 setStiffness("");
                 setjointPain("");
                 setMotion("");
                 setOtherMosculo("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }


return (
        <PageComponent title='Musculoskeletal'>
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
                      id="stiffness"
                      name="stiffness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Stiffness"
                      onChange={(event) => {
                        setStiffness(event.target.value)
        }}
                    />
                        Stiffness
                  </div>

                  </div>

                                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="difficulty_in_motion"
                      name="difficulty_in_motion"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="changes/difficult in motion"
                      onChange={(event) => {
                        setMotion(event.target.value)
        }}
                    />

                        changes/difficult in motion
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                    <input
                      id="others_mosculo_review"
                      name="others_mosculo_review"
                      type="checkbox"
                      className="h-4 w-4  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherMosculo(event.target.value)
        }}
                   />
                       Others:
                  </div>

                  </div>




                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="myalgia"
                      name="myalgia"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="myalgia"
                      onChange={(event) => {
                        setMyalgia(event.target.value)
        }}
                    />
                    <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Myalgia
                    </label>
                    </div>
                  </div>
                  </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="joint_pain"
                      name="joint_pain"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Joint pain"
                      onChange={(event) => {
                        setjointPain(event.target.value)
        }}
                    />
                       Joint pain
                  </div>

                  </div>

                                  {/* <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                  <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="None"
                      onChange={(event) => {
                        setNone(event.target.value)
        }}
                    />
                       Polyphagia
                  </div>

                  </div> */}









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
