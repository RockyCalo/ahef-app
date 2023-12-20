

import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";



export default function PEHead(){

    const [unremarkable, setUnremarkable] = useState('');
    const [deformity, setDeformity] = useState('');
    const [alopecia, setAlopecia] = useState('');
    const [lesion, setlesion] = useState('');
    const [mass, setMass] = useState('');
    const [others_pe_head, setOtherPeHead] = useState('');

         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/peHead",
                     {
                    // patient_information_id: patient_information_id,

                     unremarkable: unremarkable,
                     deformity: deformity,
                     alopecia: alopecia,
                     lesion: lesion,
                     mass: mass,
                     others_pe_head: others_pe_head,

                 });
                 setUnremarkable("");
                 setDeformity("");
                 setAlopecia("");
                 setlesion("");
                 setMass("");
                 setOtherPeHead("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }



return (
        <PageComponent title='Physical Head'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-4 sm:grid-cols-6 ml-8 ">

                                 <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="unremarkable"
                      name="unremarkable"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="unremarkable"
                      onChange={(event) => {
                        setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                               <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Unremarkbale
                    </label>
                    </div>
                  </div>


                              <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="deformity"
                      name="deformity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="deformity"
                      onChange={(event) => {
                        setDeformity(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Deformity
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="alopecia"
                      name="alopecia"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="alopecia"
                      onChange={(event) => {
                        setAlopecia(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Alopecia
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="lesion"
                      name="lesion"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="lesion"
                      onChange={(event) => {
                        setlesion(event.target.value)
        }}
                   />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Lesion(s)
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="mass"
                      name="mass"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="mass"
                      onChange={(event) => {
                        setMass(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Mass
                    </label>
                    </div>




                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_pe_head"
                      name="others_pe_head"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value=" Others:"
                      onChange={(event) => {
                        setOtherPeHead(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Others:
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
