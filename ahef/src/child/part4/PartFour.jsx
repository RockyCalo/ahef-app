import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";


export default function PartFour(){

        const [assessment, setAssessment] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_PartFour",
                 {
                // patient_information_id: patient_information_id,
                 assessment: assessment,



             });
                          setAssessment("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }
return (
        <PageComponent title='Part 4 MD only'>
                        <form action="">

                <div className="border border-gray-900/10 pb-8">
                                    <div className="border border-gray-900/10 pb-8">
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-7 ml-8">
                                        <div className="sm:col-span-1 " >
                                        <div className="text-xs">Surname:</div>
            </div>
            <div className="sm:col-span-1 " >
                                        <div className="text-xs">Firstname:</div>
            </div>
            <div className="sm:col-span-1 " >
                                        <div className="text-xs">Middlename:</div>
            </div>
            <div className="sm:col-span-1 " >
                                        <div className="text-xs">Age:</div>
            </div>
            <div className="sm:col-span-1 " >
                                        <div className="text-xs">Sex:</div>
            </div>
            <div className="sm:col-span-1 " >
                                        <div className="text-xs">Date:</div>
            </div>
            <div className="sm:col-span-1 " >
                                        <div className="text-xs">Contact #:</div>
            </div>
                        <div className="sm:col-span-4 m-2" >
                                        <div className="text-xs">Parent/Guardian`s name:</div>
            </div>
                        <div className="sm:col-span-1 m-2 " >
                                        <div className="text-xs">Age:</div>
            </div>
                        <div className="sm:col-span-2 m-2" >
                                        <div className="text-xs">Relationship to Patient:</div>
            </div>
                        <div className="sm:col-span-5 m-2" >
                                        <div className="text-xs">Address:</div>
            </div>
                        <div className="sm:col-span-2 m-2" >
                                        <div className="text-xs">Contact #:</div>
            </div>
                        </div>
                                    </div>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 ml-8">





            <div className="sm:col-span-4 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
               Assessment:
              </label>
              <div className="mt-2">
                 <textarea
                  id="assessment"
                  name="assessment"
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                value={assessment}
                      onChange={(event) => {
            setAssessment(event.target.value)
        }}
                />
              </div>
            </div>



                    </div>
                                             <div className="flex justify-end bg-gray-50"
                             onClick={save}
                            >
                                    <Tbutton>Next</Tbutton>
                            </div>
                </div>


            </form>
    </PageComponent>

)
}
