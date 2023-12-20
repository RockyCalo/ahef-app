import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

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
        <PageComponent title='Environmental History'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-1 sm:grid-cols-6">
                    <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Access to Safe Water?</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}


                              <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="safe_water"
                      name="safe_water"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                     value="None"
                      onChange={(event) => {
            setWater(event.target.value)
        }}
        />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     None
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="safe_water"
                      name="safe_water"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Point Source"
                      onChange={(event) => {
            setWater(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Point Source
                    </label>

                    <p>(protected well/development spring)</p>

                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="safe_water"
                      name="safe_water"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value="Communal Feucet/Standpost"
                      onChange={(event) => {
            setWater(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Communal Feucet/Standpost
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="safe_water"
                      name="safe_water"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value="Waterworks/ Individual House Connection"
                      onChange={(event) => {
            setWater(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Waterworks/ Individual House Connection
                    </label>
                    </div>
                  </div>
                            </div>

                        </div>
                    </div>


                     <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Access to Sanitary Toilet?</p>
                        </div>
                        <div className="border border-gray-900/10 pb-4">
                            {/* content */}
  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sanitary_toilet"
                      name="sanitary_toilet"
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
                     Open Defecation
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sanitary_toilet"
                      name="sanitary_toilet"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Toilet w/o Water"
                      onChange={(event) => {
            setSanitary(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Toilet w/o Water
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sanitary_toilet"
                      name="sanitary_toilet"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Toilet w/ Septic Tank"
                      onChange={(event) => {
            setSanitary(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Toilet w/ Septic Tank
                    </label>
                    </div>
                  </div>


<p>Place</p>
                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sanitary_toilet"
                      name="sanitary_toilet"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="In House"
                      onChange={(event) => {
            setSanitary(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     In House
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sanitary_toilet"
                      name="sanitary_toilet"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Out of House"
                      onChange={(event) => {
            setSanitary(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Out of House
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sanitary_toilet"
                      name="sanitary_toilet"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value=" Public Facility"
                      onChange={(event) => {
            setSanitary(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Public Facility
                    </label>
                    </div>
                  </div>


                        </div>
                        </div>
                    </div>
                     <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Access to Satisfactory Waste Disposal?</p>
                        </div>
                        <div className="border border-gray-900/10 pb-4">
                             {/* content */}

                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="satisfactory_waste_disposal"
                      name="satisfactory_waste_disposal"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value=" Waste sigregation"
                      onChange={(event) => {
            setWasteDisposal(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Waste sigregation
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="satisfactory_waste_disposal"
                      name="satisfactory_waste_disposal"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value=" Composting"
                      onChange={(event) => {
            setWasteDisposal(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Composting
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="satisfactory_waste_disposal"
                      name="satisfactory_waste_disposal"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Recycling/ Reuse"
                      onChange={(event) => {
            setWasteDisposal(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Recycling/ Reuse
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="satisfactory_waste_disposal"
                      name="satisfactory_waste_disposal"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        value="City/Municipal Collection and Disposal"
                      onChange={(event) => {
            setWasteDisposal(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     City/Municipal Collection and Disposal
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="satisfactory_waste_disposal"
                      name="satisfactory_waste_disposal"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                      value=" Others: Burying/Burning, etc."
                      onChange={(event) => {
        setWasteDisposal(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Others: Burying/Burning, etc.
                    </label>
                    </div>
                  </div>
                        </div>
                        </div>
                    </div>



                                        <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Prolonged Exposure to biomass fuel for cooking(Charcoal, Firewood, Sawdust, Animal Manure, or Crop Residue)</p>

                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}


                              <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="prolonged_exposure_to_biomass"
                      name="prolonged_exposure_to_biomass"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Yes"
                      onChange={(event) => {
        setBiomass(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Yes
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="prolonged_exposure_to_biomass"
                      name="prolonged_exposure_to_biomass"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value="No"
                      onChange={(event) => {
        setBiomass(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     No
                    </label>

                    </div>
                  </div>
                            </div>
                        </div>
                    </div>


                        <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Expose to Tabacco Smoke or Vape?</p>

                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}


                              <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="exposure_to_tabacco"
                      name="exposure_to_tabacco"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value="Yes"
                      onChange={(event) => {
        setBiomass(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Yes, by whom?
                    </label>

                    <input
                      id="exposure_to_tabacco"
                      name="exposure_to_tabacco"
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
                  <div className="flex h-6 items-center">
                    <input
                      id="exposure_to_tabacco"
                      name="exposure_to_tabacco"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value="No"
                      onChange={(event) => {
        setBiomass(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     No
                    </label>

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
