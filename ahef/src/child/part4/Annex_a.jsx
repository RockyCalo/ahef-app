import { useState } from "react";


import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";

export default function Annex_a(){



    const [bcg, setBcg] = useState('');
const [hep_b, setHepB] = useState('');
const [rotavirus, setRotavirus] = useState('');
const [pentavalent_vaccine, setPentavalent] = useState('');
const [inactive_polio_vaccine, setInactivePolio] = useState('');
const [oral_polio_vaccine, setOralPolio] = useState('');
const [mmr_vaccine, setMmr] = useState('');
 const [pcv, setPcv] = useState('');
const [pcv_thirteen, setPcvThirteen] = useState('');
const [inactive_influenza, setInactiveInfluenza] = useState('');
const [hepatitis_a, setHepaA] = useState('');
const [varicella, setVaricella] = useState('');
const [typhoid, setTyphoid] = useState('');
const [japanese_encephalitis, setJapanese] = useState('');
const [meningococcal, setMeningcoccal] = useState('');
const [mr_td, setMrTd] = useState('');
const [hpv, setHpv] = useState('');
const [covid, setCovid] = useState('');
const [others_immunization, setOtherImmunization] = useState('');
const [others_immunization_date, setOtherImmunizationDate] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_immunizationHistory",
                 {
                // patient_information_id: patient_information_id,

                 bcg: bcg,
                 hep_b: hep_b,
                 rotavirus: rotavirus,
                 pentavalent_vaccine: pentavalent_vaccine,
                 inactive_polio_vaccine: inactive_polio_vaccine,
                oral_polio_vaccine: oral_polio_vaccine,
                 mmr_vaccine: mmr_vaccine,
                   pcv: pcv,
                 pcv_thirteen: pcv_thirteen,
                 inactive_influenza: inactive_influenza,
                 hepatitis_a: hepatitis_a,
                 varicella: varicella,
                typhoid: typhoid,
                 japanese_encephalitis: japanese_encephalitis,
                   meningococcal: meningococcal,
                 mr_td: mr_td,
                 hpv: hpv,
                 covid: covid,
                 others_immunization: others_immunization,
                others_immunization_date: others_immunization_date,


             });
             setBcg("");
             setHepB("");
             setRotavirus("");
              setPentavalent("");
             setInactivePolio("");
            setOralPolio("");
             setMmr("");
            setPcv("");
             setPcvThirteen("");
             setInactiveInfluenza("");
              setHepaA("");
             setVaricella("");
             setTyphoid("");
             setJapanese("");
            setMeningcoccal("");
             setMrTd("");
             setHpv("");
              setCovid("");
             setOtherImmunization("");
            setOtherImmunizationDate("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }


return (
        <PageComponent title='Annex A.'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-3 divide-x">
                    <div className="text-md mb-2 font-semibold">Risk Factor(s)
    <p className="text-xs">(if unrecalled, may administer age-appropriate vaccine as long as no contraindications are present/ identified)</p>
  </div>
  <div className="text-md font-semibold"></div>
    <div className="text-md font-semibold">Perform or Request for the Following</div>


  <div className="relative flex gap-x-3 sm:col-span-1">

                  <div className="text-sm mt-2 leading-6 ">
                    <label htmlFor="offers" className=" font-medium text-gray-900 ">
                     Mental Health
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md">With Mental Health or Traumatic Life Events
                    <p className="text-xs">Depressive symptoms</p>
                    <p className="text-xs">Symptoms of anxiety conditions</p>
                    <p className="text-xs">Suicde</p>



                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

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
                     Refer to an mhGAP-trained personal for directed assessment
                      according to WHO mhGAP Intervention Guide v2
                  </div>




  <div className="relative flex gap-x-3 sm:col-span-1">

                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Neuro-developmental
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md">Neurodevelopmental redflags</div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">

                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     None-communicable disease
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md"> At risk for development Dyslipidemia:
                    </div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

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
                     Consider referring to a Development Pediatrician for proper assessment
                  </div>






  <div className="relative flex gap-x-3 sm:col-span-1">
         </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md">
                    <p className="text-xs">Extensive menstrual or blood loss</p>
                    <p className="text-xs">Low Iron intake</p>
                    <p className="text-xs">Known Hypertension</p>
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


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
                     Lipid profile(including LDL,HDL, Triglycerides, and Total Cholesterol)
                     taken at least 2 weeks apart but w/in 3 months
                  </div>




                    <div className="relative flex gap-x-3 sm:col-span-1">

                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Infectious
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md ">1 or more risk factors for Iron Deficiency Anemia(IDA):
                    <br></br>
                    <p className="text-xs">Extensive menstrual or blood loss</p>
                    <p className="text-xs">Low iron intake</p>
                    <p className="text-xs">Previous history of IDA</p>
                    <p className="text-xs">Physical abuse with trauma or injuries</p>
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

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
                     CBC with RBC indices
                  </div>




                                      <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md ">Exposure to Family members/s with tuberulosis AND with any of
                    the ff{">"} 2 weeks:
                    <br></br>
                    <p className="text-xs">Cough especially if unexplained or wheezing</p>
                    <p className="text-xs">Unexplained fever</p>
                    <p className="text-xs">Night sweats</p>
                    <p className="text-xs">Unexplained weight loss or failure to thrive</p>
                    </div>


                  </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md ">

                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
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
                     CBC, if with bruises
                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2 ">Exposure to family members with tuberulosis AND with any of
                    the ff  {'>'} 2 weeks

                    <p className="text-xs">Cough especially if unexplained or wheezing</p>
                    <p className="text-xs">Unexplained fever</p>
                    <p className="text-xs">Night sweats</p>
                    <p className="text-xs">Unexplained weight loss or failure to thrive</p>


                    </div>


                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
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
                    Chest Xray
                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">



                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>





                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">

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
