




import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";






export default function PEHeart(){

    const [unremarkable, setUnremarkable] = useState('');
    const [precordial_bulge, setPrecondial] = useState('');
    const [dynamic_precordium, setPrecondium] = useState('');
    const [irregular_rhythm, setIrregRhythm] = useState('');
    const [irregular_rate, setIrregRate] = useState('');
    const [thrills_heaves, setThrills] = useState('');
    const [murmurs, setMurmur] = useState('');
    const [displaced_pmi_apex_beat, setApexBeat] = useState('');
    const [others_physical_exam_heart, setOtherPeHeart] = useState('');

         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/peHeart",
                     {
                    // patient_information_id: patient_information_id,

                     unremarkable: unremarkable,
                     precordial_bulge: precordial_bulge,
                     dynamic_precordium: dynamic_precordium,
                     irregular_rhythm: irregular_rhythm,
                     irregular_rate: irregular_rate,
                     thrills_heaves: thrills_heaves,
                     murmurs: murmurs,
                     displaced_pmi_apex_beat: displaced_pmi_apex_beat,
                     others_physical_exam_heart: others_physical_exam_heart,

                 });
                 setUnremarkable("");
                 setPrecondial("");
                 setPrecondium("");
                 setIrregRhythm("");
                 setIrregRate("");
                 setThrills("");
                 setMurmur("");
                 setApexBeat("");
                 setOtherPeHeart("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }


return (
        <PageComponent title='Physical Heart'>
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
                      id="precordial_bulge"
                      name="precordial_bulge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Precordial bulge"
                      onChange={(event) => {
                        setPrecondial(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Precordial bulge
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="irregular_rhythm"
                      name="irregular_rhythm"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Irrigular rythm"
                      onChange={(event) => {
                        setIrregRhythm(event.target.value)
        }}
                   />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Irrigular rythm
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="thrills_heaves"
                      name="thrills_heaves"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Thrills /heaves"
                      onChange={(event) => {
                        setThrills(event.target.value)
        }}
                   />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Thrills /heaves
                    </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="displaced_pmi_apex_beat"
                      name="displaced_pmi_apex_beat"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Displaced PMI/ apex beat"
                      onChange={(event) => {
                        setApexBeat(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Displaced PMI/ apex beat
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
                      id="others_physical_exam_heart"
                      name="others_physical_exam_heart"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPeHeart(event.target.value)
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
                      id="dynamic_precordium"
                      name="dynamic_precordium"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Dynamic precordium"
                      onChange={(event) => {
                        setPrecondium(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Dynamic precordium
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="irregular_rate"
                      name="irregular_rate"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Irregular rate"
                      onChange={(event) => {
                        setIrregRate(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Irregular rate
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="murmurs"
                      name="murmurs"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="murmurs"
                      onChange={(event) => {
                        setMurmur(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Murmurs
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
