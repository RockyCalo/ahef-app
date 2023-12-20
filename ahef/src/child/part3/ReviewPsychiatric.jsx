
import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";




export default function ReviewPsychiatric(){
    const [none, setNone] = useState('');
    const [problem_in_concentration, setConcentration] = useState('');
    const [peers_of_carryingout, setCarryingOut] = useState('');
    const [easily_distracted, setDistracted] = useState('');
    const [excessive_overactivity, setOverActivity] = useState('');
    const [extreme_changes, setExtremeChange] = useState('');
    const [extreme_mood_changes, setMoodChange] = useState('');
    const [excessive_fears, setFears] = useState('');
    const [difficulty_in_social_interact, setSocialInteract] = useState('');
    const [sleep_difficulties, setSleepDifficult] = useState('');
    const [hallucinations, sethallucination] = useState('');
    const [disruptive, setDisruptive] = useState('');
    const [impulsivity, setImpulsive] = useState('');
    const [severe_tantrums, setTantrums] = useState('');
    const [physical_aggression, setAggression] = useState('');
    const [suicidal_thoughts, setSuicide] = useState('');
    const [others_psychiatric_review, setOtherPsyciatricReview] = useState('');



    async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewMusculoSkeletal",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    problem_in_concentration: problem_in_concentration,
                    peers_of_carryingout: peers_of_carryingout,
                    easily_distracted: easily_distracted,
                    excessive_overactivity: excessive_overactivity,
                    extreme_changes: extreme_changes,
                    extreme_mood_changes: extreme_mood_changes,
                    excessive_fears: excessive_fears,
                    difficulty_in_social_interact: difficulty_in_social_interact,
                    sleep_difficulties: sleep_difficulties,
                    hallucinations: hallucinations,
                    disruptive: disruptive,
                    impulsivity: impulsivity,
                    severe_tantrums: severe_tantrums,
                    physical_aggression: physical_aggression,
                    suicidal_thoughts: suicidal_thoughts,
                    others_psychiatric_review: others_psychiatric_review,

                 });
                 setNone("");
                 setConcentration("");
                 setCarryingOut("");
                 setDistracted("");
                 setOverActivity("");
                 setExtremeChange("");
                 setMoodChange("");
                 setFears("");
                 setSocialInteract("");
                 setSleepDifficult("");
                 sethallucination("");
                 setDisruptive("");
                 setImpulsive("");
                 setTantrums("");
                 setAggression("");
                 setSuicide("");
                 setOtherPsyciatricReview("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }
return (
        <PageComponent title='Pyschiatric'>
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
                      value="none"
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
                      id="extreme_changes"
                      name="extreme_changes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Extreme changes in eating habits"
                      onChange={(event) => {
                        setExtremeChange(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Extreme changes in eating habits
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="disruptive"
                      name="disruptive"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Disruptive /frequent rule breaking"
                      onChange={(event) => {
                        setDisruptive(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Disruptive /frequent rule breaking
                    </label>
                    </div>
                  </div>






                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="problem_in_concentration"
                      name="problem_in_concentration"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Problem in Concentration"
                      onChange={(event) => {
                        setConcentration(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Problem in Concentration
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="extreme_mood_changes"
                      name="extreme_mood_changes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Extreme mood changes"
                      onChange={(event) => {
                        setExtremeChange(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Extreme mood changes
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="impulsivity"
                      name="impulsivity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Impulsivity"
                      onChange={(event) => {
                        setImpulsive(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Impulsivity
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_psychiatric_review"
                      name="others_psychiatric_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPsyciatricReview(event.target.value)
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
                      id="peers_of_carryingout"
                      name="peers_of_carryingout"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Difficulty Keeping up with peers or carrying out daily activites"
                      onChange={(event) => {
                        setCarryingOut(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Difficulty Keeping up with peers or carrying out daily activites
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="excessive_fears"
                      name="excessive_fears"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Excessive fears,guilt, sadness,anger"
                      onChange={(event) => {
                        setFears(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Excessive fears,guilt, sadness,anger
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="severe_tantrums"
                      name="severe_tantrums"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Frequent or servere tantrums"
                      onChange={(event) => {
                        setTantrums(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Frequent or servere tantrums
                    </label>
                    </div>


                  </div>





                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="easily_distracted"
                      name="easily_distracted"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Easily distracted"
                      onChange={(event) => {
                        setDistracted(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Easily distracted
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="difficulty_in_social_interact"
                      name="difficulty_in_social_interact"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value=" Diffulty in social interactions"
                      onChange={(event) => {
                        setSocialInteract(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Diffulty in social interactions
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="physical_aggression"
                      name="physical_aggression"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Physical aggression"
                      onChange={(event) => {
                        setAggression(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Physical aggression
                    </label>
                    </div>


                  </div>




                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="excessive_overactivity"
                      name="excessive_overactivity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Excessive overactivity"
                      onChange={(event) => {
                        setOverActivity(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Excessive overactivity
                    </label>
                    </div>

                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="hallucinations"
                      name="hallucinations"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Hallucinations"
                      onChange={(event) => {
                        sethallucination(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Hallucinations
                    </label>
                    </div>

                  </div>



                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="sleep_difficulties"
                      name="sleep_difficulties"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Sleep difficulties"
                      onChange={(event) => {
                        setSleepDifficult(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Sleep difficulties
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="suicidal_thoughts"
                      name="suicidal_thoughts"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Suicidal thoughts"
                      onChange={(event) => {
                        setSuicide(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Suicidal thoughts
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
