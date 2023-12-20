


import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";





export default function PEEar(){



const [unremarkable, setUnremarkable] = useState('');
const [deformity, setDeformity] = useState('');
const [discharge, setDischarge] = useState('');
const [lesion, setlesion] = useState('');
const [mass, setMass] = useState('');
const [swelling, setSwelling] = useState('');
const [tenderness, setTenderness] = useState('');
const [others_pe_ears, setOtherPEEars] = useState('');
const [otoscopic_ad, setOtoscopicAd] = useState('');
const [otoscopic_as, setOtoscopicAs] = useState('');



     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/peChest",
                 {
                // patient_information_id: patient_information_id,

                 unremarkable: unremarkable,
                 deformity: deformity,
                 discharge: discharge,
                 lesion: lesion,
                 mass: mass,
                 swelling: swelling,
                 tenderness: tenderness,
                 others_pe_ears: others_pe_ears,
                 otoscopic_ad: otoscopic_ad,
                 otoscopic_as: otoscopic_as,

             });
             setUnremarkable("");
             setDeformity("");
             setDischarge("");
             setlesion("");
             setMass("");
             setSwelling("");
             setTenderness("");
             setOtherPEEars("");
             setOtoscopicAd("");
             setOtoscopicAs("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }


return (
        <PageComponent title='Physical Ear'>
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
                      id="offedeformityrs"
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
                      id="lesion"
                      name="lesion"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Lison"
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
                      id="swelling"
                      name="swelling"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value="Swelling"
                      onChange={(event) => {
            setSwelling(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Swelling
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_pe_ears"
                      name="others_pe_ears"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value="Others"
                      onChange={(event) => {
            setOtherPEEars(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Others:
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
                      id="discharge"
                      name="discharge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value="Discharge"
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

                                  <div className="relative flex gap-x-3 sm:col-span-1">
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
                      id="tenderness"
                      name="tenderness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value="Tenderness"
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















                    <div className="sm:col-span-1 " >
    <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
        Otoscopic findings:
         <p>AD:</p>
    </label>
    <div className="mt-2">
      <input
        type="otoscopic_ad"
        name="otoscopic_ad"
        id="remarks"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={otoscopic_ad}
                      onChange={(event) => {
            setOtoscopicAd(event.target.value)
        }}
      />
      </div>

         <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
       <p>AS:</p>
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="otoscopic_as"
        id="otoscopic_as"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={otoscopic_as}
                      onChange={(event) => {
            setOtoscopicAs(event.target.value)
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
