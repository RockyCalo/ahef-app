import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";



export default function ReviewHeent(){



    const [none, setNone] = useState('');
    const [blurring_of_vision, setBlurringVision] = useState('');
    const [floater, setFloater] = useState('');
    const [tearing_eye_discharge, setTearing] = useState('');
    const [eye_redness, setRedness] = useState('');
    const [eye_itchiness, setItchiness] = useState('');
    const [hearing_changes, setHearingChange] = useState('');
    const [nose_bleed, setNoseBleed] = useState('');
    const [nasal_discharge, setNasalDischarge] = useState('');
    const [ear_discharge, setEarDischarge] = useState('');
    const [toothache, setTootache] = useState('');
    const [gum_bleeding, setGumBleeding] = useState('');
    const [sore_throat, setSoreThroat] = useState('');
    const [difficulty_swallowing, setDifficultSwallow] = useState('');
    const [hoarseness, setHoarseness] = useState('');
    const [polydipsia, setPolydipsia] = useState('');
    const [others_heent_review, setOtherHeent] = useState('');



    async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewHeent",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    blurring_of_vision: blurring_of_vision,
                    floater: floater,
                    tearing_eye_discharge: tearing_eye_discharge,
                    eye_redness: eye_redness,
                    eye_itchiness: eye_itchiness,
                    hearing_changes: hearing_changes,
                    nose_bleed: nose_bleed,
                    nasal_discharge: nasal_discharge,
                    ear_discharge: ear_discharge,
                    toothache: toothache,
                    gum_bleeding: gum_bleeding,
                    sore_throat: sore_throat,
                    difficulty_swallowing: difficulty_swallowing,
                    hoarseness: hoarseness,
                    polydipsia: polydipsia,
                    others_heent_review: others_heent_review,

                 });
                 setNone("");
                 setBlurringVision("");
                 setFloater("");
                 setTearing("");
                 setRedness("");
                 setItchiness("");
                 setHearingChange("");
                 setNoseBleed("");
                 setNasalDischarge("");
                 setEarDischarge("");
                 setTootache("");
                 setGumBleeding("");
                 setSoreThroat("");
                 setDifficultSwallow("");
                 setHoarseness("");
                 setPolydipsia("");
                 setOtherHeent("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }



return (
        <PageComponent title='HEENT'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-4 sm:grid-cols-5 ml-8 ">

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
                      id="eye_itchiness"
                      name="eye_itchiness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Eye itchiness"
                      onChange={(event) => {
                        setItchiness(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Eye itchiness
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="toothache"
                      name="toothache"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Toothache"
                      onChange={(event) => {
                        setTootache(event.target.value)
        }}
                   />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Toothache
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="polydipsia"
                      name="polydipsia"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Polydipsia"
                      onChange={(event) => {
                        setPolydipsia(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Polydipsia
                    </label>
                    </div>
                  </div>



                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="blurring_of_vision"
                      name="blurring_of_vision"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Blurring of vision"
                      onChange={(event) => {
                        setBlurringVision(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Blurring of vision
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="hearing_changes"
                      name="hearing_changes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Hearing changes"
                      onChange={(event) => {
                        setHearingChange(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Hearing changes
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="gum_bleeding"
                      name="gum_bleeding"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Gum bleeding"
                      onChange={(event) => {
                        setGumBleeding(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Gum bleeding
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_heent_review"
                      name="others_heent_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others"
                      onChange={(event) => {
                        setOtherHeent(event.target.value)
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
                      id="floater"
                      name="floater"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Floaters /glare"
                      onChange={(event) => {
                        setFloater(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                    Floaters /glare
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="nose_bleed"
                      name="nose_bleed"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Nose bleed"
                      onChange={(event) => {
                        setNoseBleed(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Nose bleed
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="sore_throat"
                      name="sore_throat"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="None"
                      onChange={(event) => {
                        setSoreThroat(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Sore Throat
                    </label>
                    </div>


                  </div>





                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="tearing_eye_discharge"
                      name="tearing_eye_discharge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Tearing / eye discharge"
                      onChange={(event) => {
                        setTearing(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Tearing / eye discharge
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="nasal_discharge"
                      name="nasal_discharge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Nasal discharge"
                      onChange={(event) => {
                        setNasalDischarge(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Nasal discharge
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="difficulty_swallowing"
                      name="difficulty_swallowing"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Difficulty Swallowing"
                      onChange={(event) => {
                        setDifficultSwallow(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Difficulty Swallowing
                    </label>
                    </div>


                  </div>





                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="eye_redness"
                      name="eye_redness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Eye redness /pain"
                      onChange={(event) => {
                        setRedness(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Eye redness /pain
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="ear_discharge"
                      name="ear_discharge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Ear discharge or pain"
                      onChange={(event) => {
                        setEarDischarge(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Ear discharge or pain
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="hoarseness"
                      name="hoarseness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="None"
                      onChange={(event) => {
                        setHoarseness(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Hoarness
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
