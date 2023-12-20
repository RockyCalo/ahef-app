


import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";




export default function PEAbdomen(){



const [unremarkable, setUnremarkable] = useState('');
const [scars, setScar] = useState('');
const [discoloration, setDiscoloration] = useState('');
const [striae, setStriae] = useState('');
const [mass, setMass] = useState('');
const [distended, setDistended] = useState('');
const [visible_peristalsis_pulsation, setPeristalsis] = useState('');
const [fluid_wave, setFluidWave] = useState('');
const [shifting_dullness, setShifting] = useState('');
const [hypo_hyperactive_bowel_sound, setHyperactive] = useState('');
const [tenderness_guarding, setTenderness] = useState('');
const [palpable_liver_edge, setLiverAge] = useState('');
const [palpable_spleen, setSpleen] = useState('');
const [others_physical_exam_abdomen, setOthersPEAbdomen] = useState('');





     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/peAbdomen",
                 {
                // patient_information_id: patient_information_id,

                 unremarkable: unremarkable,
                 scars: scars,
                 discoloration: discoloration,
                 striae: striae,
                 mass: mass,
                 distended: distended,
                 visible_peristalsis_pulsation: visible_peristalsis_pulsation,
                  fluid_wave: fluid_wave,
                 shifting_dullness: shifting_dullness,
                 hypo_hyperactive_bowel_sound: hypo_hyperactive_bowel_sound,
                 tenderness_guarding: tenderness_guarding,
                 palpable_liver_edge: palpable_liver_edge,
                 palpable_spleen: palpable_spleen,
                   others_physical_exam_abdomen: others_physical_exam_abdomen,


             });
             setUnremarkable("");
             setScar("");
             setDiscoloration("");
             setStriae("");
             setMass("");
             setDistended("");
             setPeristalsis("");
             setFluidWave("");
             setShifting("");
             setHyperactive("");
             setTenderness("");
             setLiverAge("");
             setSpleen("");
             setOthersPEAbdomen("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }



return (
        <PageComponent title='Physical Abdomen'>
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
                      id="scars"
                      name="scars"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Scars"
                      onChange={(event) => {
            setScar(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Scars
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="distended"
                      name="distended"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Distended"
                      onChange={(event) => {
            setDistended(event.target.value)
        }}
                   />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Distended
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="shifting_dullness"
                      name="shifting_dullness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Shifting dullnes"
                      onChange={(event) => {
            setShifting(event.target.value)
        }}
                   />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Shifting dullnes
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="tenderness_guarding"
                      name="tenderness_guarding"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Tenderness/ guarding"
                      onChange={(event) => {
            setTenderness(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Tenderness/ guarding
                    </label>
                    </div>




                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>




                <div className="relative flex gap-x-3 sm:col-span-1">
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="discoloration"
                      name="discoloration"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Discoloration"
                      onChange={(event) => {
            setDiscoloration(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Discoloration
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="visible_peristalsis_pulsation"
                      name="visible_peristalsis_pulsation"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value=" Visible persistalsis /pulsation"
                      onChange={(event) => {
            setPeristalsis(event.target.value)
        }}
                   />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Visible persistalsis /pulsation
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="hypo_hyperactive_bowel_sound"
                      name="hypo_hyperactive_bowel_sound"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value=" Hypo/hyperactive bowel sound"
                      onChange={(event) => {
            setHyperactive(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                            Hypo/hyperactive bowel sound
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

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="striae"
                      name="striae"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Striae"
                      onChange={(event) => {
            setStriae(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                           Striae
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="fluid_wave"
                      name="fluid_wave"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Fluid wave"
                      onChange={(event) => {
            setFluidWave(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                     <label htmlFor="offers" className="font-medium text-gray-900">
                       Fluid wave
                    </label>
                    </div>

                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="palpable_liver_edge"
                      name="palpable_liver_edge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Palpable liver edge"
                      onChange={(event) => {
            setLiverAge(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Palpable liver edge
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">

                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="palpable_spleen"
                      name="palpable_spleen"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Palpable spleen"
                      onChange={(event) => {
            setSpleen(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Palpable spleen
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
                      id="others_physical_exam_abdomen"
                      name="others_physical_exam_abdomen"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={others_physical_exam_abdomen}
                      onChange={(event) => {
            setOthersPEAbdomen(event.target.value)
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
