import { useState } from "react";
import axios from "axios";

import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";



export default function Annex_b(){
    // const [patient_information_id, setPatientInformation] = useState('');
const [chest_pain, setChestPain] = useState('');
const [difficulty_breathing, setDifficultBreath] = useState('');
const [seizure_convulsion, setConvulsion] = useState('');
const [unconscious, setUnconscious] = useState('');
const [not_oriented, setNotOriented] = useState('');
const [bluish_discoloration, setBluish] = useState('');
const [harmful_suicide, setHarmful] = useState('');
const [acute_fracture, setFracture] = useState('');
const [sign_of_abuse, setAbuse] = useState('');
const [severe_abdominal_pain, setAbdominal] = useState('');
const [persistent_vomiting, setVomiting] = useState('');
const [persistent_diarrhea, setDiarrhea] = useState('');
const [tolerate_fluids, setFluids] = useState('');



     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_partone",
                 {


                 chest_pain: chest_pain,
                 difficulty_breathing: difficulty_breathing,
                 seizure_convulsion: seizure_convulsion,
                 unconscious: unconscious,
                 not_oriented: not_oriented,
                 bluish_discoloration: bluish_discoloration,
                 harmful_suicide: harmful_suicide,
                 acute_fracture: acute_fracture,
                 sign_of_abuse: sign_of_abuse,
                 severe_abdominal_pain: severe_abdominal_pain,
                 persistent_vomiting: persistent_vomiting,
                 persistent_diarrhea: persistent_diarrhea,
                 tolerate_fluids: tolerate_fluids,



             });
             setChestPain("");
             setDifficultBreath("");
             setConvulsion("");
              setUnconscious("");
             setNotOriented("");
              setBluish("");
             setDiarrhea("");
              setVomiting("");
             setHarmful("");
              setFracture("");
             setAbuse("");
              setFluids("");
             setAbdominal("");


        }
         catch(err)
         {
             alert("Failed");
         }
     }



return (
        <PageComponent title='Annex B'>
            <form action="">






                                          <fieldset>


                        <div class="border border-green-500 border-t4">

                            <div className=" grid grid-cols-6">
                                     {/* one */}
                                      <div className="cols-span-1 text-md mb-2 font-semibold">
                                        Visit
                                      </div>



                            <div className="cols-span-1 text-md mb-2 font-semibold">
                                Gross
                            </div>


                             <div className="cols-span-1 text-md mb-2 font-semibold">
                             fine motor
                             </div>


                            <div className="cols-span-1 text-md mb-2 font-semibold">
                             Language
                             </div>


                            <div className="cols-span-1 text-md mb-2 font-semibold">
                             Cognitive
                             </div>


                            <div className="cols-span-1 text-md mb-2 font-semibold">
                             Psychosocial
                            </div>








                               {/* //Two */}
                             <div className="cols-span-1 text-md mb-2 font-semibold">
                             4-month
                             </div>


                             <div className="cols-span-1">
                             blank
                             </div>





                                          <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                               <div className="flex h-6 items-center">
                               <input
                                 id="fine_motor"
                                 name="fine_motor"
                                 type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                 }}
                                 />
                             </div>
                              Persistent of grasp reflex
                             </div>
                             </div>



                             <div className="cols-span-1">
                                  Blank
                             </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                        <div className="flex h-6 items-center">
                                    <input
                                    id="cognitive"
                                     name="cognitive"
                                     type="checkbox"
                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      value="/"
                                       onChange={(event) => {
                                      setWeightManagement(event.target.value)
                                     }}
                                     />
                                   </div>
                                      Not alert to mother with special interest
                                        </div>
                                     </div>







                                         <div className="cols-span-1">
                                        <div className="relative flex gap-x-3 sm:col-span-1">


                                              <div className="flex h-6 items-center">
                                                 <input
                                                  id="psychosocial"
                                                  name="psychosocial"
                                                   type="checkbox"
                                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                     value="/"
                                                        onChange={(event) => {
                                                     setWeightManagement(event.target.value)
                                                    }}
                                                     />
                                                           </div>
                                                                 Not smiling socially
                                                             </div>

                                   </div>


                                {/* three */}
                             <div className="cols-span-1 text-md mb-2 font-semibold">
                               6-month
                              </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                    <div className="flex h-6 items-center">
                                  <input
                                     id="gross_motor"
                                     name="gross_motor"
                                     type="checkbox"
                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      value="/"
                                        onChange={(event) => {
                                    setWeightManagement(event.target.value)
                                       }}
                                     />
                               </div>
                                 Does not pull up to sit
                                 </div>


                                                <div className="relative flex gap-x-3 sm:col-span-1">


                                 <div className="flex h-6 items-center">
                                        <input
                                     id="gross_motor"
                                     name="gross_motor"
                                     type="checkbox"
                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      value="/"
                                     onChange={(event) => {
                                      setWeightManagement(event.target.value)
                                     }}
                                      />
                                     </div>
                                          Does not roll over
                                          </div>




                             </div>



                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                      <div className="flex h-6 items-center">
                                    <input
                                     id="fine_motor"
                                     name="fine_motor"
                                     type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      value="/"
                                      onChange={(event) => {
                                     setWeightManagement(event.target.value)
                                     }}
                                     />
                                     </div>
                                      Unable to hold a rattle
                                    </div>


                             </div>



                                                <div className="cols-span-1">
                                                <div className="relative flex gap-x-3 sm:col-span-1">


                                     <div className="flex h-6 items-center">
                                     <input
                                    id="language"
                                    name="language"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value="/"
                                    onChange={(event) => {
                                        setWeightManagement(event.target.value)
                                          }}
                                    />
                                </div>
                                 Not babbing
                                 </div>


                             </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                               <input
                                 id="cognitive"
                                name="cognitive"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                value="/"
                                   onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                 }}
                                 />
                                 </div>
                                 Not searching for dropped object
                                 </div>


                             </div>

                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                      <div className="flex h-6 items-center">
                                       <input
                                      id="psychosocial"
                                      name="psychosocial"
                                        type="checkbox"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                     value="/"
                                       onChange={(event) => {
                                     setWeightManagement(event.target.value)
                                      }}
                                    />
                                     </div>
                                     Not laughing in playful situation
                                     </div>


                             </div>






                                {/* Four */}
                                <div className="cols-span-1 text-md mb-2 font-semibold">
                               9-month
                              </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                <div className="flex h-6 items-center">
                                 <input
                                  id="gross_motor"
                                 name="gross_motor"
                                 type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                   }}
                                />
                               </div>
                                 Does not sit without support
                                 </div>


                             </div>



                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                  <div className="flex h-6 items-center">
                                 <input
                                 id="fine_motor"
                                 name="fine_motor"
                                 type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                value="/"
                                onChange={(event) => {
                                setWeightManagement(event.target.value)
                                }}
                                 />
                                 </div>
                                 Unable to hold an object in each hand
                                 </div>


                             </div>



                            <div className="cols-span-1">
                            <div className="relative flex gap-x-3 sm:col-span-1">


                                  <div className="flex h-6 items-center">
                                     <input
                                    id="language"
                                    name="language"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value="/"
                                    onChange={(event) => {
                                   setWeightManagement(event.target.value)
                                    }}
                                />
                              </div>
                              Not Saying "da" or "ba"
                             </div>
                             </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                              <div className="flex h-6 items-center">
                               <input
                              id="cognitive"
                               name="cognitive"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                               value="/"
                             onChange={(event) => {
                              setWeightManagement(event.target.value)
                                }}
                              />
                              </div>
                               No interest in peek-a-boo
                              </div>
                             </div>

                             <div className="cols-span-1">
                              blank
                             </div>







                                {/* Five */}
                                <div className="cols-span-1 text-md mb-2 font-semibold">
                                12-month
                                </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                               <input
                               id="gross_motor"
                              name="gross_motor"
                             type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                             value="/"
                            onChange={(event) => {
                            setWeightManagement(event.target.value)
                             }}
                            />
                            </div>
                            Does not stand while holding on
                             </div>
                             </div>



                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                  <div className="flex h-6 items-center">
                                 <input
                                 id="fine_motor"
                                 name="fine_motor"
                                 type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                value="/"
                                onChange={(event) => {
                                setWeightManagement(event.target.value)
                                }}
                                 />
                                 </div>
                                 Absence of pincer grasp
                                 </div>
                             </div>



                            <div className="cols-span-1">
                            <div className="relative flex gap-x-3 sm:col-span-1">


                               <div className="flex h-6 items-center">
                                <input
                                 id="language"
                                 name="language"
                                  type="checkbox"
                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                 }}
                                 />
                                 </div>
                                 Not saying "dada" or "baba"
                                 </div>
                             </div>



                             <div className="cols-span-1">
                            <div className="relative flex gap-x-3 sm:col-span-1">


                               <div className="flex h-6 items-center">
                                <input
                                 id="cognitive"
                                 name="cognitive"
                                  type="checkbox"
                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                 }}
                                 />
                                 </div>
                                 Does not search for hidden objects
                                 </div>
                             </div>



                             <div className="cols-span-1">
                              <div className="relative flex gap-x-3 sm:col-span-1">


                                  <div className="flex h-6 items-center">
                                 <input
                                 id="/"
                                 name="/"
                                 type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                value="/"
                                onChange={(event) => {
                                setWeightManagement(event.target.value)
                                }}
                                 />
                                 </div>



                                 <div className="relative flex gap-x-3 sm:col-span-1">


                                          <div className="flex h-6 items-center">
                                     <input
                                     id="psychosocial"
                                     name="psychosocial"
                                     type="checkbox"
                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                     value="/"
                                     onChange={(event) => {
                                    setWeightManagement(event.target.value)
                                     }}
                                     />
                                    </div>
                                    Hard to console, stiffens when approached
                                    </div>

                                 </div>
                             </div>




                                {/* sixth */}
                                <div className="cols-span-1 text-md mb-2 font-semibold">
                                15-month
                              </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                <div className="flex h-6 items-center">
                                <input
                                 id="gross_motor"
                                 name="gross_motor"
                                 type="checkbox"
                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                 }}
                                 />
                                 </div>
                                Not walking
                                </div>
                             </div>





                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                              <div className="flex h-6 items-center">
                               <input
                               id="fine_motor"
                               name="fine_motor"
                               type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              value="/"
                               onChange={(event) => {
                               setWeightManagement(event.target.value)
                               }}
                              />
                               </div>
                                Unable to put  in or take out
                              </div>
                             </div>






                            <div className="cols-span-1">
                               Blank
                             </div>




                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                            <div className="flex h-6 items-center">
                            <input
                            id="cognitive"
                            name="cognitive"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            value="/"
                             onChange={(event) => {
                            setWeightManagement(event.target.value)
                              }}
                            />
                             </div>
                            No interest in caused-and-effects games
                            </div>
                             </div>

                             <div className="cols-span-1">
                               blank
                             </div>




                                {/* seven */}
                             <div className="cols-span-1 text-md mb-2 font-semibold">
                                18-month
                              </div>


                             <div className="cols-span-1">
                                  blank
                             </div>



                             <div className="cols-span-1">
                              Blank
                             </div>



                            <div className="cols-span-1">
                            <div className="relative flex gap-x-3 sm:col-span-1">


                                   <div className="flex h-6 items-center">
                                   <input
                                   id="language"
                                   name="language"
                                   type="checkbox"
                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value="/"
                                   onChange={(event) => {
                                   setWeightManagement(event.target.value)
                                   }}
                                  />
                                 </div>
                                   Has less than three words with meaning
                                </div>

                                 <div className="relative flex gap-x-3 sm:col-span-1">


                                   <div className="flex h-6 items-center">
                                     <input
                                     id="language"
                                     name="language"
                                     type="checkbox"
                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                     value="/"
                                     onChange={(event) => {
                                     setWeightManagement(event.target.value)
                                     }}
                                     />
                                    </div>
                                    Unable to acheive shared attention
                                    </div>
                             </div>


                             <div className="cols-span-1">
                               blank
                             </div>

                             <div className="cols-span-1">
                               blank
                             </div>




                                {/* eight */}
                             <div className="cols-span-1  text-md mb-2 font-semibold">
                               2-year
                              </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                              <input
                              id="gross_motor"
                              name="gross_motor"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              value="/"
                              onChange={(event) => {
                              setWeightManagement(event.target.value)
                               }}
                             />
                            </div>
                             Not climbing up or down the stairs
                             </div>
                             </div>





                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                               <input
                               id="fine_motor"
                              name="fine_motor"
                             type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                             value="/"
                            onChange={(event) => {
                            setWeightManagement(event.target.value)
                             }}
                            />
                            </div>
                             Unable to remove socks or gloves  alone





                             <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                               <input
                             id="fine_motor"
                             name="fine_motor"
                             type="checkbox"
                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                             value="/"
                             onChange={(event) => {
                             setWeightManagement(event.target.value)
                             }}
                              />
                             </div>
                             Unable to stack five blocks not scribbling
                             </div>
                             </div>
                             </div>



                            <div className="cols-span-1">
                            <div className="relative flex gap-x-3 sm:col-span-1">


                                   <div className="flex h-6 items-center">
                                 <input
                                 id="language"
                                 name="language"
                                 type="checkbox"
                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                   }}
                                 />
                                 </div>
                                 No two-word phrases or repetition of phrases
                                 </div>
                                  </div>





                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                              <div className="flex h-6 items-center">
                                   <input
                                 id="cognitive"
                                 name="cognitive"
                                 type="checkbox"
                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                 }}
                                 />
                                 </div>
                                 Does not categorize similarities
                                </div>
                                 </div>




                             <div className="cols-span-1">
                              <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                               <input
                               id="psychosocial"
                              name="psychosocial"
                             type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                             value="/"
                            onChange={(event) => {
                            setWeightManagement(event.target.value)
                             }}
                            />
                            </div>
                           Kicks, bites and screams easily and without provication
                             </div>

                             <div className="relative flex gap-x-3 sm:col-span-1">


                                <div className="flex h-6 items-center">
                                    <input
                                    id="psychosocial"
                                    name="psychosocial"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    value="/"
                                    onChange={(event) => {
                                    setWeightManagement(event.target.value)
                                       }}
                                     />
                                     </div>
                                     Rocks back and forth in crib
                                     </div>




                                     <div className="relative flex gap-x-3 sm:col-span-1">


                                     <div className="flex h-6 items-center">
                                        <input
                                        id="psychosocial"
                                        name="psychosocial"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                         value="/"
                                         onChange={(event) => {
                                         setWeightManagement(event.target.value)
                                          }}
                                         />
                                     </div>
                                     No eye contact or engagement with other children
                                     </div>
                             </div>




                                {/* Nine */}
                            <div className="cols-span-1 text-md mb-2 font-semibold">
                                 2 1/2-year  months
                            </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                       <div className="flex h-6 items-center">
                                     <input
                                     id="gross_motor"
                                     name="gross_motor"
                                     type="checkbox"
                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      value="/"
                                      onChange={(event) => {
                                      setWeightManagement(event.target.value)
                                       }}
                                     />
                                      </div>
                                      Not jumping with both feet
                                      </div>
                             </div>






                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                               <input
                               id="fine_motor"
                              name="fine_motor"
                             type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                             value="/"
                            onChange={(event) => {
                            setWeightManagement(event.target.value)
                             }}
                            />
                            </div>
                             Not Turning a single page of a book
                             </div>
                             </div>



                            <div className="cols-span-1">
                            <div className="relative flex gap-x-3 sm:col-span-1">


                                    <div className="flex h-6 items-center">
                                   <input
                                   id="language"
                                   name="language"
                                   type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                  setWeightManagement(event.target.value)
                                  }}
                                 />
                                 </div>
                                     Not using at least one personal pronoun
                                </div>
                             </div>


                             <div className="cols-span-1">
                             blank
                             </div>

                             <div className="cols-span-1">
                              blank
                             </div>





                                {/* Nine */}
                            <div className="cols-span-1 text-md mb-2 font-semibold">
                               Yearly visit (up to 5 yrs. old)
                            </div>


                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                               <div className="flex h-6 items-center">
                               <input
                                 id="gross_motor"
                                 name="gross_motor"
                                 type="checkbox"
                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                 value="/"
                                 onChange={(event) => {
                                setWeightManagement(event.target.value)
                                 }}
                                />
                                 </div>
                                 Unable to stand on one foot  momentarily(3)
                                 </div>
                                 <div className="relative flex gap-x-3 sm:col-span-1">


                                    <div className="flex h-6 items-center">
                                         <input
                                         id="gross_motor"
                                         name="gross_motor"
                                         type="checkbox"
                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                         value="/"
                                         onChange={(event) => {
                                         setWeightManagement(event.target.value)
                                           }}
                                           />
                                         </div>
                                           Not hopping (4)
                                         </div>


                             </div>






                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                              <div className="flex h-6 items-center">
                                    <input
                                   id="fine_motor"
                                   name="fine_motor"
                                   type="checkbox"
                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                   value="/"
                                   onChange={(event) => {
                                   setWeightManagement(event.target.value)
                                    }}
                                     />
                                     </div>
                                     Unable to stack eight blocks or draw a straight line(3)
                                      </div>

                                     <div className="relative flex gap-x-3 sm:col-span-1">


                                     <div className="flex h-6 items-center">
                                               <input
                                              id="fine_motor"
                                              name="fine_motor"
                                               type="checkbox"
                                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                               value="/"
                                              onChange={(event) => {
                                             setWeightManagement(event.target.value)
                                             }}
                                               />
                                       </div>
                                           Unable to stack ten blocks or copy a circle(4)
                                        </div>



                                           <div className="relative flex gap-x-3 sm:col-span-1">


                                             <div className="flex h-6 items-center">
                                               <input
                                             id="fine_motor"
                                             name="fine_motor"
                                             type="checkbox"
                                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                             value="/"
                                              onChange={(event) => {
                                             setWeightManagement(event.target.value)
                                             }}
                                             />
                                             </div>
                                             Unable to copy a square (4 1/2)
                                             </div>


                                    </div>





                            <div className="cols-span-1">
                            <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                                <input
                              id="language"
                              name="language"
                              type="checkbox"
                             className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                             value="/"
                             onChange={(event) => {
                             setWeightManagement(event.target.value)
                                }}
                             />
                              </div>
                             Speech only half understanbadle (3)
                              </div>

                              <div className="relative flex gap-x-3 sm:col-span-1">


                             <div className="flex h-6 items-center">
                               <input
                               id="language"
                              name="language"
                             type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                             value="/"
                            onChange={(event) => {
                            setWeightManagement(event.target.value)
                             }}
                            />
                            </div>
                            Does not understand preposition(4)
                             </div>

                             </div>






                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                   <div className="flex h-6 items-center">
                                    <input
                                  id="cognitive"
                                  name="cognitive"
                                   type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  value="/"
                                  onChange={(event) => {
                                 setWeightManagement(event.target.value)
                                 }}
                                  />
                                 </div>
                                      Does not know own full name (3)
                                  </div>

                                   <div className="relative flex gap-x-3 sm:col-span-1">


                                    <div className="flex h-6 items-center">
                                         <input
                                         id="cognitive"
                                         name="cognitive"
                                         type="checkbox"
                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                         value="/"
                                         onChange={(event) => {
                                          setWeightManagement(event.target.value)
                                          }}
                                         />
                                      </div>
                                         Cannot pick shorter or longer of two lines(4)
                                          </div>

                                          <div className="relative flex gap-x-3 sm:col-span-1">


                                          <div className="flex h-6 items-center">
                                         <input
                                          id="cognitive"
                                          name="cognitive"
                                          type="checkbox"
                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                          value="/"
                                          onChange={(event) => {
                                           setWeightManagement(event.target.value)
                                          }}
                                         />
                                         </div>
                                            Cannot count  sequentially (4 1/2)
                                           </div>

                             </div>






                             <div className="cols-span-1">
                             <div className="relative flex gap-x-3 sm:col-span-1">


                                <div className="flex h-6 items-center">
                                <input
                                id="psychosocial"
                                name="psychosocial"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                value="/"
                                onChange={(event) => {
                                setWeightManagement(event.target.value)
                                 }}
                                 />
                                 </div>
                                 In Constant motion
                                 </div>



                                 <div className="relative flex gap-x-3 sm:col-span-1">


                                  <div className="flex h-6 items-center">
                                      <input
                                         id="psychosocial"
                                         name="psychosocial"
                                         type="checkbox"
                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                         value="/"
                                         onChange={(event) => {
                                         setWeightManagement(event.target.value)
                                     }}
                                      />
                                   </div>
                                     Resists discipline
                                     </div>

                                      <div className="relative flex gap-x-3 sm:col-span-1">


                                         <div className="flex h-6 items-center">
                                             <input
                                               id="psychosocial"
                                               name="psychosocial"
                                               type="checkbox"
                                               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                               value="/"
                                               onChange={(event) => {
                                               setWeightManagement(event.target.value)
                                              }}
                                           />
                                          </div>
                                          Does not play  with other children
                                           </div>



                             </div>








                         </div>


                  </div>




            </fieldset>


                         <div className="flex justify-end bg-gray-50"
                             onClick={save}
                            >
                                    <Tbutton to="/generalSurvey">Next

                                    </Tbutton>
                            </div>


            </form>
    </PageComponent>

)
}
