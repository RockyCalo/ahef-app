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
        <PageComponent title='Adolescent Part3'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-1 sm:grid-cols-6">
                    <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">

                        </div>

                                {/* content */}


                              <div className="relative flex gap-x-3 sm:row-span-2">



                        </div>
                    </div>



                     <div className="mt-8 sm:col-span-2 ml-8 ">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>GUIDE QUESTIONS</p>
                        </div>
                        <p>Home</p>
                        <div className="border border-gray-900/10">

  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="guide_question_one"
                      name="guide_question_one"
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
                     With whom do you live? Describe home situation
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="guide_question_two"
                      name="guide_question_two"
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
                    When you have concerns/problems, to whome do you confide?
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="guide_question_three"
                      name="guide_question_three"
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
                     Are there any porblems within you family that directly or indirectly concerns you?
                    </label>
                    </div>
                  </div>


<p>Education / Employment</p>
                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     Are you studying / working ?
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     How are things fir you at school/ work Are you having failures or problems?
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                    How is your relationship with teachers, fellow classmates or employees?
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                   Have you experienced bullying school? Elsewhere?
                    </label>
                    </div>
                  </div>


<p>Eatings</p>

<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                    Are you happy with the way you look or would  you like to be different in some way?
                    </label>
                    </div>
                  </div>




                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                 On a normal day, how many meals do you have ? what do you eat?
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                   do you spend time thinking about the ways to be thin?
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                      Has somebody pointed out that you have gained weight  or lost weight?
                    </label>
                    </div>
                  </div>

<p>Activities</p>



<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                      What do you do in your free time? Whom do you spend your time with?
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                      Do you excerise regularly?
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     How often do you used internet/computer?
                    </label>
                    </div>
                  </div>



<p>Drugs/Smoking /Alcohol</p>


<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                       Have you ever used tobacco /vape? Alcohol? other substances
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                       If YES, are you using them currently? How much? How heavily
                    </label>
                    </div>
                  </div>

<p>Sexuality</p>



<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     Do you have any concerns regarding your boody changes
                    </label>
                    </div>
                  </div>




                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                      Have you ever had sex?
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     Are you Sexualy active now?
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     Do you protect yourself from infection  or becoming pregnant  or getting someone
                     pregnant?
                    </label>
                    </div>
                  </div>



<p>Suicide / Depression</p>


<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                       Are you stressed? Sad or depressed in any way?
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                       Are you able to cope with situation?
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                      Have you ever thought of hurting yourself or ending you life?
                    </label>
                    </div>
                  </div>


<p>Safety</p>



<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                       Do you have feel safe at home? At work? At school? In your neighborhood
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     If NO, what makes you feel unsafe ?
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                     Do you wear a seatbelt when riding a car? A helmet when riding motorbike
                    </label>
                    </div>
                  </div>




                        </div>
                        </div>



                    </div>



                     <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>RED FLAGS</p>
                        </div>
                        <p>Home</p>
                        <div className="border border-gray-900/10 pb-4">
                             {/* content */}

                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                   Conflicted / negative relationship witn parent(s) guardian
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                     Absent or excessive rules or supervision
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                     Poor communication
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_four"
                      name="red_flags_four"
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
                      Caring adults cannot be Identified
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_five"
                      name="red_flags_five"
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
                    Uncomfortable asking parent(s) guardian(s) for help
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_six"
                      name="red_flags_six"
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
                   No access to potable water
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_seven"
                      name="red_flags_seven"
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
                      No comfort room
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_eight"
                      name="red_flags_eight"
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
                      Exposure to hazardous chemicals or wastes
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_nine"
                      name="red_flags_nine"
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
                    Exposure to dangerous  weapons
                    </label>
                    </div>
                  </div>

<p>Education /Employment</p>


<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                      Belief that school is boring,  useless, and/or usafe
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                    Isolated, disengaged or discriminated in school
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                      Belief that teachers and school mistreat him/her
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_four"
                      name="red_flags_four"
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
                       Low or extremly high academic expectations from parent(s)/guardian(s)
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_five"
                      name="red_flags_five"
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
                     Poor school performance / attendance/ grades
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_six"
                      name="red_flags_six"
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
                      Education is not seen as part of her/his future life
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_seven"
                      name="red_flags_seven"
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
                     20 hours or more per week of work
                    </label>
                    </div>
                  </div>


<p>Eating</p>




<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                       Extreme dissatisfaction with appearance or weight
                    </label>
                    </div>
                  </div>



<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                     Inadequate nutrition or sleep
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                      Excessive preoccupation with diet
                     </label>
                    </div>
                  </div>


<p>Acitivities</p>




<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                      Sedentary
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                      Lack of supervision in school or after school
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                     Engaged in risky and/or harmful behaviors
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_four"
                      name="red_flags_four"
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
                      Isolated or disconnected  from peers/ community/family
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_five"
                      name="red_flags_five"
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
                      Overscheduled and without down time
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_six"
                      name="red_flags_six"
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
                     Inadequate sleep
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_seven"
                      name="red_flags_seven"
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
                   Excessive preoccupation with experience
                    </label>
                    </div>
                  </div>


<p>Drugs/Smoking/Alcohol</p>



<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                      Substance used by peers
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                     Substance use by parent(s) family memember(s)/ guardian(s)
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                     History of recreational drug intake
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_four"
                      name="red_flags_four"
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
                      Current recreational drug user
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_five"
                      name="red_flags_five"
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
                       Current Smoking
                    </label>
                    </div>
                  </div>




                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_six"
                      name="red_flags_six"
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
                      Vape User
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_seven"
                      name="red_flags_seven"
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
                       Alcohol Blinge Drinker
                    </label>
                    </div>
                  </div>



<p>Sexuality</p>



<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                       Early coltarche or sexual activity
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                     History of STDs
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                      History of Sexual assault or abuse
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_four"
                      name="red_flags_four"
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
                      Peers are the only source of sexual information
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_five"
                      name="red_flags_five"
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
                      Sex and/or mouth-to-genital contact w/o condom
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_six"
                      name="red_flags_six"
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
                     Having  anal sex or a partner who does
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_seven"
                      name="red_flags_seven"
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
                     Multiple sexual partner
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_eight"
                      name="red_flags_eight"
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
                      Has high risk sexual partner
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_nine"
                      name="red_flags_nine"
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
                      Sex worker  or job w/ high risk for STDs
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="/"
                      name="/"
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
                    Has sex with partner  who injects or has ever injected drugs
                    </label>
                    </div>
                  </div>



<p>Suicide/ Depression</p>



<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                     Current depression / Isolation / disengagement
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                      Current suicidal  ideation
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                     History  of suicide attempt and/or major trauma
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_four"
                      name="red_flags_four"
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
                      Family member who committed suicide
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_five"
                      name="red_flags_five"
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
                     Unreasonable expectations from  self/others
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_six"
                      name="red_flags_six"
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
                      Intimate partner or gender-based violence
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_seven"
                      name="red_flags_seven"
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
                      Maltreatment or Neglect
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_eight"
                      name="red_flags_eight"
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
                       Symptoms of Depression
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_nine"
                      name="red_flags_nine"
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
                      Symptoms of Anxiety
                    </label>
                    </div>
                  </div>



<p>Safety</p>




<div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_one"
                      name="red_flags_one"
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
                      No consistent seatbelt  and protective gear usage
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_two"
                      name="red_flags_two"
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
                     Easy  access to weapons or carrying weapons
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="red_flags_three"
                      name="red_flags_three"
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
                      Victimization through family, intimate partner, gang,or  school violence/bullying
                    </label>
                    </div>
                  </div>






                        </div>
                        </div>





                    </div>






                        <div className="mt-8 sm:col-span-2 ml-8">
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
