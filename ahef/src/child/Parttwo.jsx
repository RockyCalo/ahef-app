import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function Parttwo(){

        const [reason_of_consult, setReason] = useState('');
const [health_problem, setHealthProb] = useState('');





     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_parttwo",
                 {
                // patient_information_id: patient_information_id,

                 reason_of_consult: reason_of_consult,
                 health_problem: health_problem,



             });
             setReason("");
             setHealthProb("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }




return (
        <PageComponent title='Part 2. For Midwife, RN or MD only'>
                        <form action="">

                <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 ml-8">

<div className="sm:col-span-2 " >
    <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
  Reason for Consult
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="reason_of_consult"
        id="reason_of_consult"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  value={reason_of_consult}
                      onChange={(event) => {
            setReason(event.target.value)
        }}
     />
      </div>
      </div>



            <div className="sm:col-span-4 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
                History of Present Illness/Health Problem:
              </label>
              <div className="mt-2">
                 <textarea
                  id="health_problem"
                  name="health_problem"
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                   value={health_problem}
                      onChange={(event) => {
            setHealthProb(event.target.value)
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
