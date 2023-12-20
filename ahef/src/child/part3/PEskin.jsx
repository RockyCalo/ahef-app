
import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";



export default function PESkin(){

    const [unremarkable, setUnremarkable] = useState('');
    const [cyanosis, setCyanosis] = useState('');
    const [pallor, setPalor] = useState('');
    const [jaundice, setjaudice] = useState('');
    const [dry, setDry] = useState('');
    const [cold, setCold] = useState('');
    const [wound, setWound] = useState('');
    const [rash, setRash] = useState('');
    const [petechiae, setPetechiae] = useState('');
    const [ecchymosis, setEcchymosis] = useState('');
    const [acne, setAcne] = useState('');
    const [mass, setMass] = useState('');
    const [suspecious_growth, setGrowth] = useState('');
    const [othes_pe_skin, setOtherPeSkin] = useState('');


         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/peSkin",
                     {
                    // patient_information_id: patient_information_id,

                     unremarkable: unremarkable,
                     cyanosis: cyanosis,
                     pallor: pallor,
                     jaundice: jaundice,
                     dry: dry,
                     cold: cold,
                     wound: wound,
                     rash: rash,
                     petechiae: petechiae,
                     ecchymosis: ecchymosis,
                     acne: acne,
                     mass: mass,
                     suspecious_growth: suspecious_growth,
                     othes_pe_skin: othes_pe_skin,

                 });
                 setUnremarkable("");
                 setCyanosis("");
                 setPalor("");
                 setjaudice("");
                 setDry("");
                 setCold("");
                 setWound("");
                 setRash("");
                 setPetechiae("");
                 setEcchymosis("");
                 setAcne("");
                 setMass("");
                 setGrowth("");
                 setOtherPeSkin("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }


return (
        <PageComponent title='Physical Skin'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-4 sm:grid-cols-6 ml-8 ">

                                 <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="unremarkable"
                      name="unremarkable"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="unremarkable"
                      onChange={(event) => {
                        setUnremarkable(event.target.value)
        }}
                    />
                  </div>
                               <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Unremarkbale
                    </label>
                    </div>
                  </div>


                              <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="cyanosis"
                      name="cyanosis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="unremarkable"
                      onChange={(event) => {
                        setUnremarkable(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Cyanosis
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="dry"
                      name="dry"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="dry"
                      onChange={(event) => {
                        setDry(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Dry
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="rash"
                      name="rash"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="rash"
                      onChange={(event) => {
                        setRash(event.target.value)
        }}
                   />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Rash
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="acne"
                      name="acne"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="acne"
                      onChange={(event) => {
                        setAcne(event.target.value)
        }}
                   />
                    Acne
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="othes_pe_skin"
                      name="othes_pe_skin"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPeSkin(event.target.value)
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
                      id="pallor"
                      name="pallor"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Pallor"
                      onChange={(event) => {
                        setPalor(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Pallor
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="cold"
                      name="cold"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="cold"
                      onChange={(event) => {
                        setCold(event.target.value)
        }}
                    />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Cold
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="petechiae"
                      name="petechiae"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="petechiae"
                      onChange={(event) => {
                        setPetechiae(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                            Petechiae
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="mass"
                      name="mass"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="mass"
                      onChange={(event) => {
                        setMass(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Mass
                    </label>
                    </div>


                  </div>



                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="jaundice"
                      name="jaundice"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="jaundice"
                      onChange={(event) => {
                        setjaudice(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                           Jaundice
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="wound"
                      name="wound"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="wound"
                      onChange={(event) => {
                        setWound(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                     <label htmlFor="offers" className="font-medium text-gray-900">
                      Wounds(s)
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="ecchymosis"
                      name="ecchymosis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="ecchymosis"
                      onChange={(event) => {
                        setEcchymosis(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Ecchymosis
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="suspecious_growth"
                      name="suspecious_growth"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Suspicious growth"
                      onChange={(event) => {
                        setGrowth(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Suspicious growth
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
