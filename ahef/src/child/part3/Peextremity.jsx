


import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";





export default function PEExtremity(){


    const [unremarkable, setUnremarkable] = useState('');
const [varicosities, setVaricosity] = useState('');
const [skin_changes, setSkinChange] = useState('');
const [discoloration, setDiscoloration] = useState('');
const [redness, setRedness] = useState('');
const [bruising, setBruising] = useState('');
const [deforming, setDeforming] = useState('');
const [clubbing, setClubbing] = useState('');
const [mass, setMass] = useState('');
const [edema, setEdema] = useState('');
const [swelling, setSwelling] = useState('');
const [tenderness, setTenderness] = useState('');
const [lesion, setLision] = useState('');
const [ulcer, setulcer] = useState('');
const [unequal_pulses, setUnequalPulse] = useState('');
const [crt_sec, setCrtSec] = useState('');
const [fracture_sprain, setfracture] = useState('');
const [others_physical_exam_extremities, setOtherPeExtremity] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/peExtremity",
                 {
                // patient_information_id: patient_information_id,

                 unremarkable: unremarkable,
                 varicosities: varicosities,
                 skin_changes: skin_changes,
                 discoloration: discoloration,
                 redness: redness,
                 bruising: bruising,
                 deforming: deforming,
                 clubbing: clubbing,
                 mass: mass,
                 edema: edema,
                 swelling: swelling,
                 tenderness: tenderness,
                 lesion: lesion,
                 ulcer: ulcer,
                 unequal_pulses: unequal_pulses,
                 crt_sec: crt_sec,
                 fracture_sprain: fracture_sprain,
                 others_physical_exam_extremities: others_physical_exam_extremities,
             });
             setVaricosity("");
             setSkinChange("");
             setDiscoloration("");
             setRedness("");
             setBruising("");
             setDeforming("");
             setClubbing("");
             setMass("");
             setEdema("");
             setSwelling("");
             setTenderness("");
             setLision("");
             setulcer("");
             setUnequalPulse("");
             setCrtSec("");
             setfracture("");
             setOtherPeExtremity("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }


return (
        <PageComponent title='Physical Extremity'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8"></div>
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
                      id="varicosities"
                      name="varicosities"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Varicosities"
                      onChange={(event) => {
                        setVaricosity(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Varicosities
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="bruising"
                      name="bruising"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Bruising"
                      onChange={(event) => {
                        setBruising(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Bruising
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="edema"
                      name="edema"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Edema"
                      onChange={(event) => {
                        setEdema(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Edema
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="ulcer"
                      name="ulcer"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Ulcer"
                      onChange={(event) => {
                        setulcer(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Ulcer
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
                      id="others_physical_exam_extremities"
                      name="others_physical_exam_extremities"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPeExtremity(event.target.value)
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
                      id="skin_changes"
                      name="skin_changes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Skin Changes"
                      onChange={(event) => {
                        setSkinChange(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Skin changes
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="deforming"
                      name="deforming"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Deforming"
                      onChange={(event) => {
                        setDeforming(event.target.value)
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
                      id="unequal_pulses"
                      name="unequal_pulses"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Unequal pulses"
                      onChange={(event) => {
                        setUnequalPulse(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Unequal pulses
                    </label>
                    </div>


                  </div>





                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="discoloration"
                      name="discoloration"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Discoloratio"
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
                      id="clubbing"
                      name="clubbing"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Clubbing"
                      onChange={(event) => {
                        setClubbing(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                     <label htmlFor="offers" className="font-medium text-gray-900">
                      Clubbing
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

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="crt_sec"
                      name="crt_sec"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="CRT {'>'} 2sec"
                      onChange={(event) => {
                        setCrtSec(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         CRT{'>'}2sec
                    </label>
                    </div>


                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="redness"
                      name="redness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Redness"
                      onChange={(event) => {
                        setRedness(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Redness
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
                        setLision(event.target.value)
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
                      id="fracture_sprain"
                      name="fracture_sprain"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Fracture/sprain"
                      onChange={(event) => {
                        setfracture(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Fracture/sprain
                    </label>
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
