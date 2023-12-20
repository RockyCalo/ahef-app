

import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";




export default function PEMouth(){


    const [unremarkable, setUnremarkable] = useState('');
    const [asymmetry_deformity, setAsymmetry] = useState('');
    const [deviation, setDeviation] = useState('');
    const [erythema, setErythema] = useState('');
    const [dentition, setDentition] = useState('');
    const [discoloration, setDiscoloration] = useState('');
    const [caries_or_cavities, setCavities] = useState('');
    const [lesions, setLesions] = useState('');
    const [patches, setPatches] = useState('');
    const [exudates, setExudates] = useState('');
    const [persistent_nodule_ulcer_sores, setUlcerSores] = useState('');
    const [enlargement, setEnlargement] = useState('');
    const [masses, setMasses] = useState('');
    const [others_physical_exam_mouth, setOtherPeMouth] = useState('');

         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/peMouth",
                     {
                    // patient_information_id: patient_information_id,

                     unremarkable: unremarkable,
                     asymmetry_deformity: asymmetry_deformity,
                     deviation: deviation,
                     erythema: erythema,
                     dentition: dentition,
                     discoloration: discoloration,
                     caries_or_cavities: caries_or_cavities,
                     lesions: lesions,
                     patches: patches,
                     exudates: exudates,
                     persistent_nodule_ulcer_sores: persistent_nodule_ulcer_sores,
                     enlargement: enlargement,
                     masses: masses,
                     others_physical_exam_mouth: others_physical_exam_mouth,

                 });
                 setUnremarkable("");
                 setAsymmetry("");
                 setDeviation("");
                 setErythema("");
                 setDentition("");
                 setDiscoloration("");
                 setCavities("");
                 setLesions("");
                 setPatches("");
                 setExudates("");
                 setUlcerSores("");
                 setEnlargement("");
                 setMasses("");
                 setOtherPeMouth("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }


return (
        <PageComponent title='Physical Mouth'>
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
                      id="asymmetry_deformity"
                      name="asymmetry_deformity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Asymmetry / Deformity"
                      onChange={(event) => {
                        setAsymmetry(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Asymmetry / Deformity
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="dentition"
                      name="dentition"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="dentition"
                      onChange={(event) => {
                        setDentition(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Dentition
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
                      value="lesions"
                      onChange={(event) => {
                        setLesions(event.target.value)
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
                      id="persistent_nodule_ulcer_sores"
                      name="persistent_nodule_ulcer_sores"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Peristent nodule, ulcer,sore"
                      onChange={(event) => {
                        setUlcerSores(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Peristent nodule, ulcer,sore
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
                      id="others_physical_exam_mouth"
                      name="others_physical_exam_mouth"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPeMouth(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Others:
                    </label>
                    </div>
                  </div>




                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="deviation"
                      name="deviation"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="deviation"
                      onChange={(event) => {
                        setDeviation(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Diviation
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="discoloration"
                      name="discoloration"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="discoloration"
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


                <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="patches"
                      name="patches"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="patches"
                      onChange={(event) => {
                        setPatches(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                           Patches
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="enlargement"
                      name="enlargement"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="enlargement"
                      onChange={(event) => {
                        setEnlargement(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Enlargment
                    </label>
                    </div>


                  </div>




                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="erythema"
                      name="erythema"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="erythema"
                      onChange={(event) => {
                        setErythema(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                           Erythema
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="caries_or_cavities"
                      name="caries_or_cavities"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Caries or cavities"
                      onChange={(event) => {
                        setCavities(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                     <label htmlFor="offers" className="font-medium text-gray-900">
                        Caries or cavities
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="exudates"
                      name="exudates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Exudates"
                      onChange={(event) => {
                        setExudates(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Exudates
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="masses"
                      name="masses"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="masses"
                      onChange={(event) => {
                        setMasses(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Masses
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
