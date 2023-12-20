import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function PersonalSocialHistory(){



    const [diet_balance, setDietBalance] = useState('');
const [diet_with_supplement, setWithSupplement] = useState('');
const [deworming, setDeworming] = useState('');
const [oral_health, setOralHealth] = useState('');
const [physical_activity, setPhysicalActivity] = useState('');
const [daily_screening_time, setDailyScreening] = useState('');
const [violence_and_injuries, setViolence] = useState('');
const [bullying_and_harassment, setBullying] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_personalSocial",
                 {
                // patient_information_id: patient_information_id,

                 diet_balance: diet_balance,
                 diet_with_supplement: diet_with_supplement,
                 deworming: deworming,
                 oral_health: oral_health,
                 physical_activity: physical_activity,
                 daily_screening_time: daily_screening_time,
                 violence_and_injuries: violence_and_injuries,
                 bullying_and_harassment: bullying_and_harassment,




             });
             setDietBalance("");
             setWithSupplement("");
             setDeworming("");
              setOralHealth("");
             setPhysicalActivity("");
              setDailyScreening("");
             setViolence("");
            setBullying("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }



return (
        <PageComponent title='Personal/Social History'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-1 sm:grid-cols-6">

                    <div className="mt-8 sm:col-span-6 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Diet Feeding nutrition(in most days of the week)</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Intake of High Sugar (chocolate, pastries, cakes, softdrinks, etc.),</p>
                            <p>High Fat, High Salt (processed, fast food like intant noodles, burgers, fries, dried fish, ihaw, etc.),</p>
                            <p>Low fiver (little to no fruit and vegetables),</p>
                        </div>

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                                 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="diet_balance"
                      name="diet_balance"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value="Yes"
                      onChange={(event) => {
            setDietBalance(event.target.value)
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
                      id="diet_balance"
                      name="diet_balance"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value="No"
                      onChange={(event) => {
            setDietBalance(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     No, patient follows balance diet (pinggang pinoy)
                    </label>

                    </div>
                  </div>
                            </fieldset>

                            </div>
                        </div>
                        <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>With Supplementation?</p>
                        </div>

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                                 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="diet_with_supplement"
                      name="diet_with_supplement"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                     value="No"
                      onChange={(event) => {
            setWithSupplement(event.target.value)
        }}
        />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     No
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="diet_with_supplement"
                      name="diet_with_supplement"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

  value="Yes"
                      onChange={(event) => {
            setWithSupplement(event.target.value)
        }}
                    />
                  </div>

                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Yes:
                    </label>
                        <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="diet_with_supplement"
                      name="diet_with_supplement"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value="Vitamin A"
                      onChange={(event) => {
            setWithSupplement(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Vitamin A
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="diet_with_supplement"
                      name="diet_with_supplement"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value="Iron Supplementation"
                      onChange={(event) => {
            setWithSupplement(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Iron Supplementation
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:row-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="diet_with_supplement"
                      name="diet_with_supplement"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Micronutrient Powder"
                      onChange={(event) => {
            setWithSupplement(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Micronutrient Powder
                    </label>
                    </div>
                  </div>
                    </div>





                  </div>

                            </fieldset>

                            </div>
                        </div>



                                                <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>Deworming Every 6 Months?</p>
                            <p className="text text-xs">(only until age 12)</p>
                        </div>

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                                 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="deworming"
                      name="deworming"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                      value="No"
                      onChange={(event) => {
            setDeworming(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     No
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="deworming"
                      name="deworming"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Yes"
                      onChange={(event) => {
            setDeworming(event.target.value)
        }}
                    />
                  </div>

                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Yes
                    </label>
                    </div>





                  </div>

                            </fieldset>

                            </div>
                        </div>
                    </div>
                            </div>
                            </div>
                            </div>

                    <div className="mt-8 sm:col-span-6 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                             <p>Oral health</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                                 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="oral_health"
                      name="oral_health"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Yes"
                      onChange={(event) => {
            setOralHealth(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Use of Flouride Toothpaste
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Last Dental Check-up?
                    </label>

                    </div>
                    <input
                      id="oral_health"
                      name="oral_health"
                      type="text"
                      className="h-7 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={oral_health}
                      onChange={(event) => {
            setOralHealth(event.target.value)
        }}
                    />
                  </div>

                  </div>
                            </fieldset>

                            </div>
                        </div>
                    </div>


                            </div>
                            </div>
                            </div>

                     <div className="mt-8 sm:col-span-6 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                             <p>Physical Activity</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                                 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="physical_activity"
                      name="physical_activity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value="Sedentary"
                      onChange={(event) => {
            setPhysicalActivity(event.target.value)
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
                      id="physical_activity"
                      name="physical_activity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value=" With Supervised moderate to vigorous physical activities(brisk walk, jogging, running, bicycling, etc.) for atleast 1 hour/day"
                      onChange={(event) => {
            setPhysicalActivity(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     With Supervised moderate to vigorous physical activities(brisk walk, jogging, running, bicycling, etc.) for atleast 1 hour/day
                    </label>

                    </div>
                  </div>
                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="physical_activity"
                      name="physical_activity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value=" With vigorous-intensity activities, including those which strengthen muscles and bones, at least 3x / week"
                      onChange={(event) => {
            setPhysicalActivity(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     With vigorous-intensity activities, including those which strengthen muscles and bones, at least 3x / week
                    </label>

                    </div>
                  </div>
                            </fieldset>

                            </div>
                        </div>
                    </div>


                            </div>
                            </div>
                            </div>

                    <div className="mt-8 sm:col-span-6 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                             <p>Daily Screen Time</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="daily_screening_time"
                      name="daily_screening_time"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="No screening time"
                      onChange={(event) => {
            setDailyScreening(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     No screening time
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="daily_screening_time"
                      name="daily_screening_time"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="lessthan 1 hour sedentary screen time"
                      onChange={(event) => {
            setDailyScreening(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     {'<1 hour sedentary screen time'}
                    </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="daily_screening_time"
                      name="daily_screening_time"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value="Morethan 1 hour sedentary screen time"
                      onChange={(event) => {
            setDailyScreening(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     {'>1 hour sedentary screen time'}
                    </label>
                    </div>
                  </div>

                            </fieldset>

                            </div>
                        </div>
                    </div>


                            </div>
                            </div>
                            </div>

                    <div className="mt-8 sm:col-span-6 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                             <p>Violence And Injuries</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                                 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="violence_and_injuries"
                      name="violence_and_injuries"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value="Mauling"
                      onChange={(event) => {
            setViolence(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Mauling
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="violence_and_injuries"
                      name="violence_and_injuries"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Electrocution"
                      onChange={(event) => {
            setViolence(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Electrocution
                    </label>

                    </div>
                  </div>
                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="violence_and_injuries"
                      name="violence_and_injuries"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Falls"
                      onChange={(event) => {
            setViolence(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Falls
                    </label>

                    </div>
                  </div>
                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Others
                    </label>

                    </div>
                    <input
                      id="violence_and_injuries"
                      name="violence_and_injuries"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={violence_and_injuries}
                      onChange={(event) => {
            setViolence(event.target.value)
        }}
                    />
                  </div>
                  </div>
                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="violence_and_injuries"
                      name="violence_and_injuries"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="none"
                      onChange={(event) => {
            setViolence(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     None
                    </label>

                    </div>
                  </div>
                            </fieldset>

                            </div>
                        </div>
                    </div>


                            </div>
                            </div>
                            </div>

                            <div className="mt-8 sm:col-span-6 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                             <p>Bullying and Harassment</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <div className="mt-8 sm:col-span-2 ml-8">
                    <div className="text-md font-semibold">

                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

                            <fieldset>
                                 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="bullying_and_harassment"
                      name="bullying_and_harassment"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="At Home"
                      onChange={(event) => {
            setBullying(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     At Home
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="bullying_and_harassment"
                      name="bullying_and_harassment"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value="in School"
                      onChange={(event) => {
            setBullying(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     In School
                    </label>

                    </div>
                  </div>
                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="bullying_and_harassment"
                      name="bullying_and_harassment"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Online"
                      onChange={(event) => {
            setBullying(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Online
                    </label>

                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Others
                    </label>

                    </div>
                    <input
                      id="bullying_and_harassment"
                      name="bullying_and_harassment"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={bullying_and_harassment}
                      onChange={(event) => {
            setBullying(event.target.value)
        }}
                    />
                  </div>
                  </div>
                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="bullying_and_harassment"
                      name="bullying_and_harassment"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="none"
                      onChange={(event) => {
            setBullying(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     None
                    </label>

                    </div>
                  </div>
                            </fieldset>

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
