


import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";




export default function ReviewGenitourinary(){


    const [none, setNone] = useState('');
    const [difficulty_urinating, setDifficultUrinating] = useState('');
    const [polyuria, setPolyuria] = useState('');
    const [nocturia, setNocturia] = useState('');
    const [increased_urinary_frequency, setUrinarayFrequency] = useState('');
    const [bloody_urine, setBloodUrine] = useState('');
    const [urinary_incontinence, setUrinaryIncontinence] = useState('');
    const [decreased_stream, setDecreasedStream] = useState('');
    const [urinary_stones, seturinaryStone] = useState('');
    const [vaginal_penile_discharge, setVaginalDischarge] = useState('');
    const [vaginal_penile_bleeding, setViginalBleeding] = useState('');
    const [others_genitourinaty_review, setOtherGenitoUrinary] = useState('');



    async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewGenitoUrinary",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    difficulty_urinating: difficulty_urinating,
                    polyuria: polyuria,
                    nocturia: nocturia,
                    increased_urinary_frequency: increased_urinary_frequency,
                    bloody_urine: bloody_urine,
                    urinary_incontinence: urinary_incontinence,
                    decreased_stream: decreased_stream,
                    urinary_stones: urinary_stones,
                    vaginal_penile_discharge: vaginal_penile_discharge,
                    vaginal_penile_bleeding: vaginal_penile_bleeding,
                    others_genitourinaty_review: others_genitourinaty_review,

                 });
                 setNone("");
                 setDifficultUrinating("");
                 setPolyuria("");
                 setNocturia("");
                 setUrinarayFrequency("");
                 setBloodUrine("");
                 setUrinaryIncontinence("");
                 setDecreasedStream("");
                 seturinaryStone("");
                 setVaginalDischarge("");
                 setViginalBleeding("");
                 setOtherGenitoUrinary("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }


return (
        <PageComponent title='Review Genitourinary'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-4 sm:grid-cols-4 ml-8">

                                 <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="none"
                      name="none"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="None"
                      onChange={(event) => {
                        setNone(event.target.value)
        }}
                    />
                  </div>
                               <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     None
                    </label>
                    </div>
                  </div>


                              <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="nocturia"
                      name="nocturia"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Nocturia"
                      onChange={(event) => {
                        setNocturia(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Nocturia
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="urinary_incontinence"
                      name="urinary_incontinence"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Urinary Incontinence"
                      onChange={(event) => {
                        setUrinaryIncontinence(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                          Urinary Incontinence
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="vaginal_penile_discharge"
                      name="vaginal_penile_discharge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Vaginal/penile discharge"
                      onChange={(event) => {
                        setVaginalDischarge(event.target.value)
        }}
                   />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Vaginal/penile discharge
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="difficulty_urinating"
                      name="difficulty_urinating"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Difficult urinating"
                      onChange={(event) => {
                        setDifficultUrinating(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Difficult urinating
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="increased_urinary_frequency"
                      name="increased_urinary_frequency"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Increased urinary frequency"
                      onChange={(event) => {
                        setUrinarayFrequency(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Increased urinary frequency
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="decreased_stream"
                      name="decreased_stream"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Decreased stream"
                      onChange={(event) => {
                        setDecreasedStream(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Decreased stream
                    </label>
                    </div>
                  </div>


                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="vaginal_penile_bleeding"
                      name="vaginal_penile_bleeding"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Vaginal/penile bleeding"
                      onChange={(event) => {
                        setViginalBleeding(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Vaginal/penile bleeding
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="polyuria"
                      name="polyuria"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="polyuria"
                      onChange={(event) => {
                        setPolyuria(event.target.value)
        }}
                   />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                          Polyuria
                    </label>
                    </div>
                  </div>


                               <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="bloody_urine"
                      name="bloody_urine"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Bloody urine"
                      onChange={(event) => {
                        setBloodUrine(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Bloody urine
                    </label>
                    </div>
                  </div>


                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="urinary_stones"
                      name="urinary_stones"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Urinary stones"
                      onChange={(event) => {
                        seturinaryStone(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Urinary stones
                    </label>
                    </div>


                  </div>

                              <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_genitourinaty_review"
                      name="others_genitourinaty_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherGenitoUrinary(event.target.value)
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
