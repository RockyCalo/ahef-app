import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function MedicalSurgicalHistory(){
    const [asthma, setAsthma] = useState('');
const [allergies, setAllergies] = useState('');
const [allergies_to_medicines, setAllergiesMeds] = useState('');
const [injury_accident, setInjuryAccident] = useState('');
const [hearing_problem, setHearingProblem] = useState('');
const [vision_problem, setVisionProblem] = useState('');
const [heart_disease, setHearDisease] = useState('');
const [mental_conditions, setMentalCondition] = useState('');
const [cancer, setCancer] = useState('');
const [other_organ_disorder, setOrganDisorder] = useState('');
const [previous_hospitalization, setPreviousHos] = useState('');
const [previous_surgeries, setPreviousSurgery] = useState('');
const [others_medical_history, setOtherMedical] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_medicalSurgical",
                 {
                // patient_information_id: patient_information_id,

                 asthma: asthma,
                 allergies: allergies,
                 allergies_to_medicines: allergies_to_medicines,
                  injury_accident: injury_accident,
                 hearing_problem: hearing_problem,
                 vision_problem: vision_problem,
                 heart_disease: heart_disease,
                 mental_conditions: mental_conditions,
                 cancer: cancer,
                 other_organ_disorder: other_organ_disorder,
                 previous_hospitalization: previous_hospitalization,
                 previous_surgeries: previous_surgeries,
                 others_medical_history: others_medical_history,




             });
             setAsthma("");
             setAllergies("");
             setAllergiesMeds("");
              setHearingProblem("");
             setVisionProblem("");
              setHearDisease("");
             setMentalCondition("");
                          setCancer("");
              setOrganDisorder("");
             setPreviousHos("");
              setPreviousSurgery("");
             setOtherMedical("");
             setInjuryAccident("");



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
                 <div className="m-2 grid grid-cols-2 divide-x">



                    <div className="text-md mb-2 font-bold">Tick all that apply:

  </div>
  <div className="text-md font-bold">Details:
    <p className="text-sm">(i.e Medications, Year diagnosed, Year of surgery/ injury, etc.)</p>
  </div>


        <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="asthma"
                      name="asthma"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={asthma}
                      onChange={(event) => {
            setAsthma(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Asthma
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="asthma"
                      name="asthma"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={asthma}
                      onChange={(event) => {
            setAsthma(event.target.value)
        }}
                    />
                  </div>

                  </div>



                          <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="allergies"
                      name="allergies"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={allergies}
                      onChange={(event) => {
            setAllergies(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Allergies
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="allergies"
                      name="allergies"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={allergies}
                      onChange={(event) => {
            setAllergies(event.target.value)
        }}
                    />
                  </div>

                  </div>




  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="allergies_to_medicines"
                      name="allergies_to_medicines"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={allergies_to_medicines}
                      onChange={(event) => {
            setAllergiesMeds(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Allergies to Medicine
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="allergies_to_medicines"
                      name="allergies_to_medicines"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={allergies_to_medicines}
                      onChange={(event) => {
            setAllergiesMeds(event.target.value)
        }}
                    />
                  </div>

                  </div>

  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="injury_accident"
                      name="injury_accident"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={injury_accident}
                      onChange={(event) => {
            setInjuryAccident(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Injuries/Accidents
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="injury_accident"
                      name="injury_accident"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={injury_accident}
                      onChange={(event) => {
            setInjuryAccident(event.target.value)
        }}
                    />
                  </div>

                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hearing_problem"
                      name="hearing_problem"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={hearing_problem}
                      onChange={(event) => {
            setHearingProblem(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    Hearing Problems
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hearing_problem"
                      name="hearing_problem"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={hearing_problem}
                      onChange={(event) => {
            setHearingProblem(event.target.value)
        }}
                    />
                  </div>

                  </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="vision_problem"
                      name="vision_problem"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={vision_problem}
                      onChange={(event) => {
            setVisionProblem(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Vision Problems
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="vision_problem"
                      name="vision_problem"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={vision_problem}
                      onChange={(event) => {
            setVisionProblem(event.target.value)
        }}
                    />
                  </div>

                  </div>



  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="heart_disease"
                      name="heart_disease"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={heart_disease}
                      onChange={(event) => {
            setHearDisease(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Heart Disease
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="heart_disease"
                      name="heart_disease"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={heart_disease}
                      onChange={(event) => {
            setHearDisease(event.target.value)
        }}

                   />
                  </div>

                  </div>


                   <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="mental_conditions"
                      name="mental_conditions"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={mental_conditions}
                      onChange={(event) => {
            setMentalCondition(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Mental, Neurological, Learning, or Substance Use Conditions
                     <p className="text-xs">(i.e diagnosed learning disability, etc.)</p>
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="mental_conditions"
                      name="mental_conditions"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={mental_conditions}
                      onChange={(event) => {
            setMentalCondition(event.target.value)
        }}

                   />
                  </div>

                  </div>

  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cancer"
                      name="cancer"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={cancer}
                      onChange={(event) => {
            setCancer(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Cancer
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="cancer"
                      name="cancer"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={cancer}
                      onChange={(event) => {
            setCancer(event.target.value)
        }}
                    />
                  </div>

                  </div>



                   <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="other_organ_disorder"
                      name="other_organ_disorder"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={other_organ_disorder}
                      onChange={(event) => {
            setOrganDisorder(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Other Organ Disorders
                     <p className="text-xs">(i.e thyroid, kidney, hypertension, diabetes, TB, etc.)</p>
                    </label>
                    </div>
                  </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="other_organ_disorder"
                      name="other_organ_disorder"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={other_organ_disorder}
                      onChange={(event) => {
            setOrganDisorder(event.target.value)
        }}

                   />
                  </div>
                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="previous_hospitalization"
                      name="previous_hospitalization"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={previous_hospitalization}
                      onChange={(event) => {
            setPreviousHos(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Previous Hospitalizations
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="previous_hospitalization"
                      name="previous_hospitalization"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value={previous_hospitalization}
                      onChange={(event) => {
            setPreviousHos(event.target.value)
        }}
                    />
                  </div>

                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="previous_surgeries"
                      name="previous_surgeries"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value={previous_surgeries}
                      onChange={(event) => {
            setPreviousSurgery(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Previous Surgeries
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="previous_surgeries"
                      name="previous_surgeries"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={previous_surgeries}
                      onChange={(event) => {
            setPreviousSurgery(event.target.value)
        }}
                   />
                  </div>

                  </div>



  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="others_medical_history"
                      name="others_medical_history"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={others_medical_history}
                      onChange={(event) => {
            setOtherMedical(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Others, Pls. Specify
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="others_medical_history"
                      name="others_medical_history"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={others_medical_history}
                      onChange={(event) => {
            setOtherMedical(event.target.value)
        }}

                    />
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
