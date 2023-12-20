import { useState } from "react";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import axios from "axios";


export default function PartFourPlans(){
        const [proper_nutrition, setProperNutrition] = useState('');
const [weight_management, setWeightManagement] = useState('');
    const [physical_activity, setPhysicalActivity] = useState('');
const [sleeping_habit, setSleepHabit] = useState('');
const [screen_time, setScreenTime] = useState('');
const [personal_hygiene, setPersonalHygiene] = useState('');
const [selfcare_advice, setSelfCare] = useState('');
const [injury_prevention, setInjuryPrevention] = useState('');
const [safe_sexual_practice, setSafeSexual] = useState('');
const [avoiding_harmful_use, setharmfulUse] = useState('');
const [routine_vaccination, setRoutineVaccination] = useState('');
 const [appropriate_health, setAppropriateHealth] = useState('');
const [maintenance_medication, setMaintainMeds] = useState('');

const [other_plans, setOtherPlans] = useState('');

const [annual_oral_screening, setAnnualoral] = useState('');
const [color_testing, setColorTesting] = useState('');

const [disability_identification, setDisabilityIdentification] = useState('');
const [cbc_rbc, setCbcRbc] = useState('');
const [lipid_profile, setLipidProf] = useState('');
const [fbs, setFbs] = useState('');
const [hiv, setHiv] = useState('');
const [xray, setXray] = useState('');

const [developmental_pedia_assessment, setPediaAssessment] = useState('');
const [mhgap_trained, setMhgap] = useState('');
const [sped, setSped] = useState('');
const [vawc, setVawc] = useState('');
 const [specialist_for, setSpecialist] = useState('');
const [immunization_schedule, setImmunization] = useState('');
const [follow_up_on, setFollowup] = useState('');
const [phd_name_signature, setPhdName] = useState('');


     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_PartFourplan",
                 {
                // patient_information_id: patient_information_id,
                 proper_nutrition: proper_nutrition,
                 weight_management: weight_management,
                 physical_activity: physical_activity,
                 sleeping_habit: sleeping_habit,
                 screen_time: screen_time,
                 personal_hygiene: personal_hygiene,
                 selfcare_advice: selfcare_advice,
                 injury_prevention: injury_prevention,
                 safe_sexual_practice: safe_sexual_practice,
                 avoiding_harmful_use: avoiding_harmful_use,
                 routine_vaccination: routine_vaccination,
                 appropriate_health: appropriate_health,
                 maintenance_medication: maintenance_medication,
                 other_plans: other_plans,
                 annual_oral_screening: annual_oral_screening,
                 color_testing: color_testing,
                 disability_identification: disability_identification,
                 cbc_rbc: cbc_rbc,

                 lipid_profile: lipid_profile,
                 fbs: fbs,
                 hiv: hiv,
                 xray: xray,
                 developmental_pedia_assessment: developmental_pedia_assessment,
                 mhgap_trained: mhgap_trained,
                 sped: sped,
                 vawc: vawc,
                 specialist_for: specialist_for,
                 immunization_schedule: immunization_schedule,
                 follow_up_on: follow_up_on,
                 phd_name_signature: phd_name_signature,


             });
                          setProperNutrition("");
             setWeightManagement("");
             setPhysicalActivity("");
             setSleepHabit("");
             setPersonalHygiene("");
              setSelfCare("");
              setScreenTime("");
             setInjuryPrevention("");
             setSafeSexual("");
             setharmfulUse("");
              setRoutineVaccination("");
             setAppropriateHealth("");
            setMaintainMeds("");
             setOtherPlans("");
              setAnnualoral("");
             setColorTesting("");
              setDisabilityIdentification("");
             setCbcRbc("");

                          setLipidProf("");
             setFbs("");
             setHiv("");
              setXray("");
             setPediaAssessment("");
            setMhgap("");
             setSped("");
              setVawc("");
             setSpecialist("");
              setImmunization("");
             setFollowup("");
              setPhdName("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }
return (
        <PageComponent title='Part 4. Plans'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-1 sm:grid-cols-6">


                    <div className="mt-8 sm:col-span-3 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p>To All: Give General Advice on</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}


                              <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="proper_nutrition"
                      name="proper_nutrition"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="proper nutrition"
                      onChange={(event) => {
            setProperNutrition(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Healthy diet and proper nutrition
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="weight_management"
                      name="weight_management"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value="Weight management"
                      onChange={(event) => {
            setWeightManagement(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Weight management
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
                     value="Adequate physical activity and exercise"
                      onChange={(event) => {
            setPhysicalActivity(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Adequate physical activity and exercise
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sleeping_habit"
                      name="sleeping_habit"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Healthy sleeping habits"
                      onChange={(event) => {
            setSleepHabit(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Healthy sleeping habits
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="screen_time"
                      name="screen_time"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Reducing screen time"
                      onChange={(event) => {
            setScreenTime(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Reducing screen time
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="personal_hygiene"
                      name="personal_hygiene"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Personal hygiene and dental care"
                      onChange={(event) => {
            setPersonalHygiene(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Personal hygiene and dental care
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="selfcare_advice"
                      name="selfcare_advice"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Self-care and mental health advice"
                      onChange={(event) => {
            setSelfCare(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Self-care and mental health advice
                    </label>
                    </div>
                  </div>



                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="injury_prevention"
                      name="injury_prevention"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Injury prevention measures"
                      onChange={(event) => {
            setInjuryPrevention(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Injury prevention measures
                    </label>
                    </div>
                  </div>


                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="avoiding_harmful_use"
                      name="avoiding_harmful_use"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Avoiding harmful use of alcohol, tabacco, smoking, vaping, and illicit substances"
                      onChange={(event) => {
            setharmfulUse(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Avoiding harmful use of alcohol, tabacco, smoking, vaping, and illicit substances
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="routine_vaccination"
                      name="routine_vaccination"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Routine vaccination"
                      onChange={(event) => {
            setRoutineVaccination(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Routine vaccination
                    </label>
                    </div>
                  </div>


                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="appropriate_health"
                      name="appropriate_health"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Appropriate health seeking behaviors"
                      onChange={(event) => {
            setAppropriateHealth(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Appropriate health seeking behaviors
                    </label>
                    </div>
                  </div>

                                    <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="maintenance_medication"
                      name="maintenance_medication"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Adherence to maintenance medications, as applicable"
                      onChange={(event) => {
            setMaintainMeds(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Adherence to maintenance medications, as applicable
                    </label>
                    </div>
                  </div>

                            </div>

                        </div>
                    </div>





                    <div className="mt-8 sm:col-span-3 ml-8">
                    <div className="text-md font-semibold">
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}

            <div className="sm:col-span-4 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
              Other Plans:
              </label>
              <div className="mt-2">
                 <textarea
                  id="other_plans"
                  name="other_plans"
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                 value={other_plans}
                      onChange={(event) => {
            setOtherPlans(event.target.value)
        }}
                />
              </div>
            </div>



                            </div>

                        </div>
                    </div>




                  <div className="mt-8 sm:col-span-3 ml-8">
                    <div className="text-md font-semibold">
                            <div className="border border-gray-900/10 pb-4">
                                <p className="text text-center font-black">For all Children 5 to {'<'}10 Years Old</p>
                                 <p className="text text-center">Routine Screening Plan</p>
                                  <div className="border-t border-gray-900/10 pb-4"></div>
                                {/* content */}

     <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="annual_oral_screening"
                      name="annual_oral_screening"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Annual oral screening and caries risk assessment"
                      onChange={(event) => {
            setAnnualoral(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Annual oral screening and caries risk assessment
                    </label>
                    </div>
                  </div>


                       <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="color_testing"
                      name="color_testing"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Color testing and vision testing"
                      onChange={(event) => {
            setColorTesting(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Color testing and vision testing
                    </label>
                    </div>
                  </div>


                            </div>



        <div className="">
                    <div className="text-md font-semibold">
                            <div className="border border-gray-900/10 pb-4">
                                <p className="text text-center font-black">For all Children 5 to {'<'}10 Years Old with Risk Factor</p>
                                 <p className="text text-center">Targeted Screening Plan</p>
                                  <p className="text text-xs text-center">(Check all that apply)</p>
                                  <div className="border-t border-gray-900/10 pb-4"></div>
                                {/* content */}
                                <p className="text text-center font-bold">Guide for TARGETED SCREENING TEST based on History, PE, and Risk Factors may be found in ANNEX A</p>

     <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="disability_identification"
                      name="disability_identification"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value="Disability indentification Assessment"
                      onChange={(event) => {
            setDisabilityIdentification(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Disability indentification Assessment
                    </label>
                    </div>
                  </div>


                       <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="cbc_rbc"
                      name="cbc_rbc"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="CBC with RBC Indices"
                      onChange={(event) => {
            setCbcRbc(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    CBC with RBC Indices
                    </label>
                    </div>
                  </div>


                                         <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="fbs"
                      name="fbs"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Fasting Blood Sugar (FBS) OR 75-g OGTT"
                      onChange={(event) => {
            setFbs(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Fasting Blood Sugar (FBS) OR 75-g OGTT
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="ldl_hdl"
                      name="ldl_hdl"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Lipid profile (including LDL, HDL, Triglycerides, and Total Cholesterol)"
                      onChange={(event) => {
            setLipidProf(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Lipid profile (including LDL, HDL, Triglycerides, and Total Cholesterol)
                    </label>
                    </div>
                  </div>

                   <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="hiv_rapid"
                      name="hiv_rapid"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="HIV Rapid Diagnostic Test"
                      onChange={(event) => {
            setHiv(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    HIV Rapid Diagnostic Test
                    </label>
                    </div>
                  </div>



 <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="chest_xray"
                      name="chest_xray"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value="Chest X-ray"
                      onChange={(event) => {
            setXray(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Chest X-ray
                    </label>
                    </div>
                  </div>

                            </div>

                        </div>
                    </div>
                        </div>



                    </div>




                    <div className="mt-8 sm:col-span-3 ml-8">
                    <div className="text-md font-semibold">
                        <div className="border border-gray-900/10 pb-8">
                            <p className="text text-lg font-black">Referrals and/or Follow up:</p>
                        </div>
                            <div className="border border-gray-900/10 pb-4">
                                {/* content */}


                              <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="developmental_pedia_assessment"
                      name="developmental_pedia_assessment"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value=" Refer to Developmental Pedia for assessment"
                      onChange={(event) => {
            setPediaAssessment(event.target.value)
        }}
                  />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Refer to Developmental Pedia for assessment
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="mhgap_trained"
                      name="mhgap_trained"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Refer to mhGAP-trained personnel"
                      onChange={(event) => {
            setMhgap(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Refer to mhGAP-trained personnel
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="sped"
                      name="sped"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                 value="Refer to SPED or Special Needs Education"
                      onChange={(event) => {
            setSped(event.target.value)
        }}
                />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                     Refer to SPED or Special Needs Education
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:row-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="vawc"
                      name="vawc"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="Refer to VAWC desk"
                      onChange={(event) => {
            setVawc(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-small text-gray-900">
                    Refer to VAWC desk
                    </label>
                    </div>
                  </div>

                                     <div className="sm:col-span-4 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
              Refer to Specialist for:
              </label>
              <div className="mt-2">
                 <textarea
                  id="specialist_for"
                  name="specialist_for"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
 value={specialist_for}
                      onChange={(event) => {
            setSpecialist(event.target.value)
        }}
                />
              </div>
            </div>


                  <div className="sm:col-span-4 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
              Follow up on Immunization schedule:
              </label>
              <div className="mt-2">
                 <textarea
                  id="immunization_schedule"
                  name="immunization_schedule"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
 value={immunization_schedule}
                      onChange={(event) => {
            setImmunization(event.target.value)
        }}
                />
              </div>
            </div>

            <div className="sm:col-span-4 " >
              <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
              Follow up on:
              </label>
              <div className="mt-2">
                 <textarea
                  id="follow_up_on"
                  name="follow_up_on"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
 value={follow_up_on}
                      onChange={(event) => {
            setFollowup(event.target.value)
        }}
                />
              </div>
            </div>


                            </div>

                        </div>
                    </div>





<div className="sm:col-span-1 " ></div>
<div className="sm:col-span-3 " >
              <label htmlFor="first-name" className="block text-md font-medium text-center leading-6 text-gray-900">
              Physician`s Name and Signature
              </label>
              <div className="mt-2">
                 <input
                  id="phd_name_signature"
                  name="phd_name_signature"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
 value={phd_name_signature}
                      onChange={(event) => {
            setPhdName(event.target.value)
        }}
                />
              </div>
            <div className="text text-center">
             <div className="text-md">License No._______________________</div>
              <div className="text-md">PTR No.___________________________</div>
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
