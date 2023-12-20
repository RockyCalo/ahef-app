import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function ImmunizationHistory(){



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
        <PageComponent title='Immunization History'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-3 divide-x">
                    <div className="text-md mb-2 font-semibold">Developmental Milestones
    <p className="text-xs">(if unrecalled, may administer age-appropriate vaccine as long as no contraindications are present/ identified)</p>
  </div>
  <div className="text-md font-semibold">Recommended Schedule:</div>
    <div className="text-md font-semibold">Date(s) of doses/Last dose given, and place of vaccination:</div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="bcg"
                      name="bcg"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={bcg}
                      onChange={(event) => {
            setBcg(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     BCG
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md">&le; 24 hours after birth</div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="bcg"
                      name="bcg"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={bcg}
                      onChange={(event) => {
            setBcg(event.target.value)
        }}
                    />
                  </div>

                  </div>




  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hep_b"
                      name="hep_b"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={hep_b}
                      onChange={(event) => {
            setHepB(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Hep B
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md">&le; 24 hours after birth</div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hep_b"
                      name="hep_b"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={hep_b}
                      onChange={(event) => {
            setHepB(event.target.value)
        }}
                    />
                  </div>

                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="rotavirus"
                      name="rotavirus"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                         value={rotavirus}
                      onChange={(event) => {
            setRotavirus(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Rotavirus
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md">&le; 1 y/o</div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="rotavirus"
                      name="rotavirus"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={rotavirus}
                      onChange={(event) => {
            setRotavirus(event.target.value)
        }}
                    />
                  </div>

                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="pentavalent_vaccine"
                      name="pentavalent_vaccine"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={pentavalent_vaccine}
                      onChange={(event) => {
            setPentavalent(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Pentavalent Vaccine (DBT-HiB-Hep-B)
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md">

                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="pentavalent_vaccine"
                      name="pentavalent_vaccine"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={pentavalent_vaccine}
                      onChange={(event) => {
            setPentavalent(event.target.value)
        }}
                   />
                  </div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="inactive_polio_vaccine"
                      name="inactive_polio_vaccine"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={inactive_polio_vaccine}
                      onChange={(event) => {
            setInactivePolio(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Inactivated Polio Vaccine
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md ">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="inactive_polio_vaccine"
                      name="inactive_polio_vaccine"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={inactive_polio_vaccine}
                      onChange={(event) => {
            setInactivePolio(event.target.value)
        }}
                    />
                  </div>

                  </div>


                                      <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="oral_polio_vaccine"
                      name="oral_polio_vaccine"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                       value={oral_polio_vaccine}
                      onChange={(event) => {
            setOralPolio(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Oral Polio Vaccine
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md ">&le; 1 y/o or 13-23 months old
                    <p className="text-xs">(During catch-up Vaccination)</p>
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="oral_polio_vaccine"
                      name="oral_polio_vaccine"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
  value={oral_polio_vaccine}
                      onChange={(event) => {
            setOralPolio(event.target.value)
        }}
                    />
                  </div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="mmr_vaccine"
                      name="mmr_vaccine"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={mmr_vaccine}
                      onChange={(event) => {
            setMmr(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Measles Mumps Rubella Vaccine(MMR)
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md ">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="mmr_vaccine"
                      name="mmr_vaccine"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={mmr_vaccine}
                      onChange={(event) => {
            setMmr(event.target.value)
        }}
                   />
                  </div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="pcv"
                      name="pcv"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={pcv}
                      onChange={(event) => {
            setPcv(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Pneumococcal Conjugate Vaccine (PCV)
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-">&le; 1 y/o or 13-23 months old
                    <p className="text-xs">(During catch-up Vaccination and Children with HIV)</p>
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="pcv"
                      name="pcv"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={pcv}
                      onChange={(event) => {
            setPcv(event.target.value)
        }}
                    />
                  </div>

                  </div>




                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="pcv_thirteen"
                      name="pcv_thirteen"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={pcv_thirteen}
                      onChange={(event) => {
            setPcvThirteen(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     PCV 13
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2 ">Adolescents 18-19 y/o
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="pcv_thirteen"
                      name="pcv_thirteen"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={pcv_thirteen}
                      onChange={(event) => {
            setPcvThirteen(event.target.value)
        }}
                   />
                  </div>

                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="inactive_influenza"
                      name="inactive_influenza"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={inactive_influenza}
                      onChange={(event) => {
            setInactiveInfluenza(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Inactivated Influenza (annual)
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">&ge; 1 y/o And Children with HIV
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="inactive_influenza"
                      name="inactive_influenza"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={inactive_influenza}
                      onChange={(event) => {
            setInactiveInfluenza(event.target.value)
        }}
                    />
                  </div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hepatitis_a"
                      name="hepatitis_a"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={hepatitis_a}
                      onChange={(event) => {
            setHepaA(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    Hepatitis A
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hepatitis_a"
                      name="hepatitis_a"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={hepatitis_a}
                      onChange={(event) => {
            setHepaA(event.target.value)
        }}
                    />
                  </div>

                  </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="varicella"
                      name="varicella"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={varicella}
                      onChange={(event) => {
            setVaricella(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Varicella
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="varicella"
                      name="varicella"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={varicella}
                      onChange={(event) => {
            setVaricella(event.target.value)
        }}
                    />
                  </div>

                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="typhoid"
                      name="typhoid"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={typhoid}
                      onChange={(event) => {
            setTyphoid(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Typhoid
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">&ge; 1 y/o
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="typhoid"
                      name="typhoid"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={typhoid}
                      onChange={(event) => {
            setTyphoid(event.target.value)
        }}
                    />
                  </div>

                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="japanese_encephalitis"
                      name="japanese_encephalitis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={japanese_encephalitis}
                      onChange={(event) => {
            setJapanese(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Japanese Encephalitis
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="japanese_encephalitis"
                      name="japanese_encephalitis"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={japanese_encephalitis}
                      onChange={(event) => {
            setJapanese(event.target.value)
        }}
                   />
                  </div>

                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="meningococcal"
                      name="meningococcal"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={meningococcal}
                      onChange={(event) => {
            setMeningcoccal(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Meningococcal
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="meningococcal"
                      name="meningococcal"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={meningococcal}
                      onChange={(event) => {
            setMeningcoccal(event.target.value)
        }}
                   />
                  </div>

                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="mr_td"
                      name="mr_td"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={mr_td}
                      onChange={(event) => {
            setMrTd(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Measles-Rubella and Tetanus-diphtheria (Mr-Td)
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">Grade 1(5-5 y/o)/Grade 7(12-13 y/o)
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="mr_td"
                      name="mr_td"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={mr_td}
                      onChange={(event) => {
            setMrTd(event.target.value)
        }}
                   />
                  </div>

                  </div>





                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hpv"
                      name="hpv"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={hpv}
                      onChange={(event) => {
            setHpv(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Human Papilomavirus (HPV)
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">Grade 4 female students or 9-14 y/o females AND Male & Female 18-19 y/o
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="hpv"
                      name="hpv"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={hpv}
                      onChange={(event) => {
            setHpv(event.target.value)
        }}

                   />
                  </div>

                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="covid"
                      name="covid"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={covid}
                      onChange={(event) => {
            setCovid(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Covid-19
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">&ge; 5 y/o
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="covid"
                      name="covid"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
 value={covid}
                      onChange={(event) => {
            setCovid(event.target.value)
        }}
                   />
                  </div>

                  </div>



                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="others_immunization"
                      name="others_immunization"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={others_immunization}
                      onChange={(event) => {
            setOtherImmunization(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Others:
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                    <div className="text-md m-2">
                         <input
                      id="others_immunization"
                      name="others_immunization"
                      type="text"
                      className="h-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={others_immunization}
                      onChange={(event) => {
            setOtherImmunization(event.target.value)
        }}
                   />
                    </div>


                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="others_immunization_date"
                      name="others_immunization_date"
                      type="date"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={others_immunization_date}
                      onChange={(event) => {
            setOtherImmunizationDate(event.target.value)
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
