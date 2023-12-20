
import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";




export default function DigitalRectal(){


const [unremarkable, setUnremarkable] = useState('');
const [prostate_exam_unremarkable, setProstate] = useState('');
const [sphincter_tone, setSphincter] = useState('');
const [strictures, setStrictures] = useState('');
const [lesions, setLesion] = useState('');
const [skin_tags, setSkinTags] = useState('');
const [masses_nodules, setMasses] = useState('');
const [tenderness, setTenderness] = useState('');
const [prolapse, setProlapse] = useState('');
const [discharge, setDischarge] = useState('');
const [blood_per_tactating_finger, setTactating] = useState('');
const [prostate_findings, setProstateFindings] = useState('');
const [others_physical_digital_rectal, setOtherDigitalrectal] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/degitalRectal",
                 {
                // patient_information_id: patient_information_id,

                 unremarkable: unremarkable,
                 prostate_exam_unremarkable: prostate_exam_unremarkable,
                 sphincter_tone: sphincter_tone,
                 strictures: strictures,
                 lesions: lesions,
                 skin_tags: skin_tags,
                 masses_nodules: masses_nodules,
                  tenderness: tenderness,
                 prolapse: prolapse,
                 discharge: discharge,
                 blood_per_tactating_finger: blood_per_tactating_finger,
                 prostate_findings: prostate_findings,
                 others_physical_digital_rectal: others_physical_digital_rectal,


             });
             setUnremarkable("");
             setProstate("");
             setSphincter("");
             setStrictures("");
             setLesion("");
             setSkinTags("");
             setMasses("");
             setTenderness("");
             setProlapse("");
             setDischarge("");
             setTactating("");
             setProstateFindings("");
             setOtherDigitalrectal("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }


return (
        <PageComponent title='Digital Rectal'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-9 sm:grid-cols-3 ml-8 ">
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
                     Unremarkable
                      For males:
                    </label>
                    </div>
                  </div>




                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value=" Prostate exam unremarkable (approx. size)"
                      onChange={(event) => {
            setProstate(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Prostate exam unremarkable (approx. size)
                    </label>
                    </div>
                  </div>


                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Prostate exam unremarkable (approx. size)
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       With abnormal findings, pls specify:
                    </label>
                    </div>
                  </div>









                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Difficulty Keeping up with peers or carrying out daily activites
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="excessive_fears"
                      name="excessive_fears"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Excessive fears,guilt, sadness,anger
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="severe_tantrums"
                      name="severe_tantrums"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Sphincter tone
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Prolapse
                    </label>
                    </div>


                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Strictures
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Discharge
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="easily_distracted"
                      name="easily_distracted"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Strictures
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
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
                    <input
                      id="physical_aggression"
                      name="offphysical_aggressioners"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Blood per tactating finger t
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                          Lesion
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                            Skin tags
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="excessive_overactivity"
                      name="excessive_overactivity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Prostate findings ()
                    </label>
                    </div>

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Skin tags
                    </label>
                    </div>

                  </div>



                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="sleep_difficulties"
                      name="sleep_difficulties"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Masses / nodules
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="suicidal_thoughts"
                      name="suicidal_thoughts"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Suicidal thoughts
                    </label>
                    </div>


                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Masses / nodules
                    </label>
                    </div>

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                 value={unremarkable}
                      onChange={(event) => {
            setUnremarkable(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                              Tendernes
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
