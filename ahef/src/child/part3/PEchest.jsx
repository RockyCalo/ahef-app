



import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";






export default function PEChest(){



const [unremarkable, setUnremarkable] = useState('');
const [shape, setShape] = useState('');
const [asymmetry, setAsymmetry] = useState('');
const [abnormal_fremitus, setFremitus] = useState('');
const [retractions, setRetraction] = useState('');
const [abnormal_breath, setAbnormalBreath] = useState('');
const [others_physical_exam_chest, setOtherPhysical] = useState('');



     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/peChest",
                 {
                // patient_information_id: patient_information_id,

                 unremarkable: unremarkable,
                 shape: shape,
                 asymmetry: asymmetry,
                 abnormal_fremitus: abnormal_fremitus,
                 retractions: retractions,
                 abnormal_breath: abnormal_breath,
                 others_physical_exam_chest: others_physical_exam_chest,
             });
             setUnremarkable("");
             setShape("");
             setAsymmetry("");
             setFremitus("");
             setRetraction("");
             setAbnormalBreath("");
             setOtherPhysical("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }



return (
        <PageComponent title='Physical Chest'>
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
                    value="Unremarkable"
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
                      id="shape"
                      name="shape"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                       value=" Shape"
                      onChange={(event) => {
            setShape(event.target.value)
        }}
                   />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Shape
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="abnormal_fremitus"
                      name="abnormal_fremitus"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                       value="Abnormal Fremitus"
                      onChange={(event) => {
            setFremitus(event.target.value)
        }}
                   />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Abnormal Fremitus
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="retractions"
                      name="retractions"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Retractions"
                      onChange={(event) => {
            setRetraction(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Retractions
                    </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="abnormal_breath"
                      name="abnormal_breath"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                       value="Abnormal breath, Sounds,specify:"
                      onChange={(event) => {
            setAbnormalBreath(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Abnormal breath
                        Sounds,specify:
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
                      id="asymmetry"
                      name="asymmetry"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
           value="Asymmetry"
                      onChange={(event) => {
            setAsymmetry(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Asymmetry
                    </label>
                    </div>
                  </div>


                               <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Others:
                    </label>
                    </div>
                    <input
                      id="others_physical_exam_chest"
                      name="others_physical_exam_chest"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                               value={others_physical_exam_chest}
                      onChange={(event) => {
            setOtherPhysical(event.target.value)
        }}
                    />
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
