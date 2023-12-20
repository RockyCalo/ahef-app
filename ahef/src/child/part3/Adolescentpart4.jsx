import { useState } from "react";


import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";


export default function EnvironmentalHistory(){


    const [safe_water, setWater] = useState('');
const [sanitary_toilet, setSanitary] = useState('');
const [satisfactory_waste_disposal, setWasteDisposal] = useState('');
const [prolonged_exposure_to_biomass, setBiomass] = useState('');
const [exposure_to_tabacco, setTabacco] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_environmentalHistory",
                 {
                // patient_information_id: patient_information_id,

                 safe_water: safe_water,
                 sanitary_toilet: sanitary_toilet,
                 satisfactory_waste_disposal: satisfactory_waste_disposal,
                 prolonged_exposure_to_biomass: prolonged_exposure_to_biomass,
                 exposure_to_tabacco: exposure_to_tabacco,


             });
             setWater("");
             setSanitary("");
             setWasteDisposal("");
              setBiomass("");
             setTabacco("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }


return (
        <PageComponent title='Adolescents Part4'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-1 sm:grid-cols-6">




                        <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Tanner Staging/SMR</p>

                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}


                              <div className="relative flex gap-x-3 sm:row-span-2">

                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Public Hair Stage
                    </label>

                    <input
                      id="/"
                      name="/"
                      type="text"
                      className="h-8 w-full rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={exposure_to_tabacco}
                      onChange={(event) => {
        setBiomass(event.target.value)
        }}
                    />

                    </div>
                  </div>



                          <div className="relative flex gap-x-3 sm:row-span-2">

              <div className="text-sm leading-6">
                <label htmlFor="offers" className="font-small text-gray-900">
               Breast Stage
               (for female)
                </label>

                <input
                  id="/"
                  name="/"
                  type="text"
                  className="h-8 w-full rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value={exposure_to_tabacco}
                  onChange={(event) => {
    setBiomass(event.target.value)
    }}
                />

                </div>
              </div>

              <div className="relative flex gap-x-3 sm:row-span-2">

              <div className="text-sm leading-6">
                <label htmlFor="offers" className="font-small text-gray-900">
                 Genital Stage
                 (for male)
                </label>

                <input
                  id="/"
                  name="/"
                  type="text"
                  className="h-8 w-full rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                value={exposure_to_tabacco}
                  onChange={(event) => {
    setBiomass(event.target.value)
    }}
                />

                </div>
              </div>

              <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">

                            <p>Assesment</p>
                        </div>


                                      <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value=" Open Defecation"
                      onChange={(event) => {
            setSanitary(event.target.value)
        }}
                    />
                  </div>

                                       <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    At par with Age
                    </label>


                                     </div>
                               </div>
                           </div>




                              <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                    </div>


                                      <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value=" Open Defecation"
                      onChange={(event) => {
            setSanitary(event.target.value)
        }}
                    />
                                </div>

                                       <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                       Delayed puberty({'>'}12 years old)
                    </label>

                                       </div>
                                  </div>
                               </div>



                           </div>
                     </div>
                  </div>






                    </div>
                </div>

            </fieldset>
                         <div className="flex justify-end bg-gray-50"
                             onClick={save}
                            >
                                    <Tbutton>Next</Tbutton>
                            </div>
            </form>
    </PageComponent>

)
}
