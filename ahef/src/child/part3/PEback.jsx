

import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";




export default function PEBack(){



const [unremarkable, setUnremarkable] = useState('');
const [deformity, setDeformity] = useState('');
const [scoliosis, setScoliosis] = useState('');
const [kyphosis, setKyphosis] = useState('');
const [lordosis, setlordosis] = useState('');
const [mass, setMass] = useState('');
const [lesions, setLesion] = useState('');
const [limited_decreased_mobility_rom, setLimitedDecreased] = useState('');
const [others_physical_exam_back, setOtherPEBack] = useState('');



     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/peBack",
                 {
                // patient_information_id: patient_information_id,

                 unremarkable: unremarkable,
                 deformity: deformity,
                 scoliosis: scoliosis,
                 kyphosis: kyphosis,
                 lordosis: lordosis,
                 mass: mass,
                 lesions: lesions,
                  limited_decreased_mobility_rom: limited_decreased_mobility_rom,
                 others_physical_exam_back: others_physical_exam_back,

             });
             setUnremarkable("");
             setDeformity("");
             setScoliosis("");
             setKyphosis("");
             setlordosis("");
             setMass("");
             setLesion("");
             setLimitedDecreased("");
             setOtherPEBack("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }





return (
        <PageComponent title='Physical Back'>
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
                      id="deformity"
                      name="deformity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Deformity"
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
                      id="kyphosis"
                      name="kyphosis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Kyphosis"
                      onChange={(event) => {
            setKyphosis(event.target.value)
        }}
                   />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Kyphosis
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
                   value="Mass"
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
                  </div>
                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="limited_decreased_mobility_rom"
                      name="limited_decreased_mobility_rom"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Limited / decreased mobility ROM"
                      onChange={(event) => {
            setLimitedDecreased(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Limited / decreased mobility ROM
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
                      id="scoliosis"
                      name="scoliosis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Scoliosis"
                      onChange={(event) => {
            setScoliosis(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Scoliosis
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="lordosis"
                      name="lordosis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Lordosis"
                      onChange={(event) => {
            setlordosis(event.target.value)
        }}
                   />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Lordosis
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="lesions"
                      name="lesions"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Lesions"
                      onChange={(event) => {
            setLesion(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                            Lesions
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
                      id="others_physical_exam_back"
                      name="others_physical_exam_back"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={others_physical_exam_back}
                      onChange={(event) => {
            setOtherPEBack(event.target.value)
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
