



import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";





export default function PENose(){

    const [unremarkable, setUnremarkable] = useState('');
    const [asymmetry_deformity, setAsymmetry] = useState('');
    const [discharge, setDischarge] = useState('');
    const [tenderness, setTenderness] = useState('');
    const [nasal_septum, setSeptum] = useState('');
    const [lesion, setlesion] = useState('');
    const [masses, setMasses] = useState('');
    const [others_pe_nose, setOtherPeNose] = useState('');

         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/peNose",
                     {
                    // patient_information_id: patient_information_id,

                     unremarkable: unremarkable,
                     asymmetry_deformity: asymmetry_deformity,
                     discharge: discharge,
                     tenderness: tenderness,
                     nasal_septum: nasal_septum,
                     lesion: lesion,
                     masses: masses,
                     others_pe_nose: others_pe_nose,
                 });
                 setUnremarkable("");
                 setAsymmetry("");
                 setDischarge("");
                 setTenderness("");
                 setSeptum("");
                 setlesion("");
                 setMasses("");
                 setOtherPeNose("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }

return (
        <PageComponent title='Physical Nose'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-5 sm:grid-cols-6 ml-8 ">

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
                      value="Asymmetry/Deformity"
                      onChange={(event) => {
                        setAsymmetry(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Asymmetry/
                      Deformity
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="discharge"
                      name="discharge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="discharge"
                      onChange={(event) => {
                        setDischarge(event.target.value)
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
                      id="nasal_septum"
                      name="nasal_septum"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Nasal Septum deviation"
                      onChange={(event) => {
                        setSeptum(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Nasal Septum deviation
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



                    <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_pe_nose"
                      name="others_pe_nose"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPeNose(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Others:
                    </label>
                    </div>
                    </div>




                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>




                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="tenderness"
                      name="tenderness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="tenderness"
                      onChange={(event) => {
                        setTenderness(event.target.value)
        }}
                    />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Tenderness
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
                       Masses/Polyps
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
