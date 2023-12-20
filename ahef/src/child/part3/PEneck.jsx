


import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";





export default function PENeck(){



    const [unremarkable, setUnremarkable] = useState('');
    const [regidity, setRegidity] = useState('');
    const [deviated_trachea, setDeviated] = useState('');
    const [mass, setMass] = useState('');
    const [nodules, setNodule] = useState('');
    const [tenderness, setTenderness] = useState('');
    const [bruit, setBruit] = useState('');
    const [palpable_thyroid, setPalpable] = useState('');
    const [lymphadenopathies, setLymphade] = useState('');
    const [others_physical_exam_neck, setOtherPeNeck] = useState('');

         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/peNeck",
                     {
                    // patient_information_id: patient_information_id,

                     unremarkable: unremarkable,
                     regidity: regidity,
                     deviated_trachea: deviated_trachea,
                     mass: mass,
                     nodules: nodules,
                     tenderness: tenderness,
                     bruit: bruit,
                     palpable_thyroid: palpable_thyroid,
                     lymphadenopathies: lymphadenopathies,
                     others_physical_exam_neck: others_physical_exam_neck,

                 });
                 setUnremarkable("");
                 setRegidity("");
                 setDeviated("");
                 setMass("");
                 setNodule("");
                 setTenderness("");
                 setBruit("");
                 setPalpable("");
                 setLymphade("");
                 setOtherPeNeck("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }

return (
        <PageComponent title='Physical Neck'>
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
                      id="regidity"
                      name="regidity"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Rigidity"
                      onChange={(event) => {
                        setRegidity(event.target.value)
        }}
                    />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Rigidity
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
                      id="tenderness"
                      name="tenderness"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="tenderness"
                      onChange={(event) => {
                        setTenderness(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Tenderness
                    </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="palpable_thyroid"
                      name="palpable_thyroid"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Palpalable thyroid"
                      onChange={(event) => {
                        setPalpable(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Palpalable thyroid
                    </label>
                    </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">

                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_physical_exam_neck"
                      name="others_physical_exam_neck"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPeNeck(event.target.value)
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
                      id="deviated_trachea"
                      name="deviated_trachea"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Deviated trachea"
                      onChange={(event) => {
                        setDeviated(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Deviated trachea
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="nodules"
                      name="nodules"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="nodules"
                      onChange={(event) => {
                        setNodule(event.target.value)
        }}
                   />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Modules
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="bruit"
                      name="bruit"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="bruit"
                      onChange={(event) => {
                        setBruit(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                           Bruit
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="lymphadenopathies"
                      name="lymphadenopathies"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Lymphadenopathies"
                      onChange={(event) => {
                        setLymphade(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Lymphadenopathies
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
