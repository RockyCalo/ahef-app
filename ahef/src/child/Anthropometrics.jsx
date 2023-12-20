import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function Anthropometrics(){

    const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [bmi, setBmi] = useState('');
const [normal, setNormal] = useState('');
const [underweight, setUnderweight] = useState('');
const [overweight, setOverweight] = useState('');
const [obese, setObese] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_anthropometrics",
                 {
                // patient_information_id: patient_information_id,

                 weight: weight,
                 height: height,
                 bmi: bmi,
                 normal: normal,
                 underweight: underweight,
                 overweight: overweight,
                 obese: obese,




             });
             setWeight("");
             setHeight("");
             setBmi("");
              setNormal("");
             setUnderweight("");
              setOverweight("");
             setObese("");



        }
         catch(err)
         {
             alert("Failed");
         }
     }



return (
        <PageComponent title='Anthropometrics'>
            <form action="">
                <fieldset>
                <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-8 ml-8">




                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Weight(kg):
                    </label>
                    </div>
                    <input
                      id="weight"
                      name="weight"
                      type="text"
                      className="h-8 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={weight}
                      onChange={(event) => {
            setWeight(event.target.value)
        }}
                    />
                  </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Height(cm):
                    </label>
                    </div>
                    <input
                      id="height"
                      name="height"
                      type="text"
                      className="h-8 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={height}
                      onChange={(event) => {
            setHeight(event.target.value)
        }}
                    />
                  </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                                      <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      BMI:
                    </label>
                    </div>
                    <input
                      id="bmi"
                      name="bmi"
                      type="text"
                      className="h-8 w-24 ml-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={bmi}
                      onChange={(event) => {
            setBmi(event.target.value)
        }}
                    />
                  </div>
                  </div>




                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="normal"
                      name="normal"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                    value="Normal"
                      onChange={(event) => {
            setNormal(event.target.value)
        }}
        />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Normal
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                   <br></br>
                  </div>

                  </div>
     <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                   <br></br>
                  </div>
                  </div>





                      <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex text-sm items-center">
                   <br></br>
                  </div>
                  </div>

                <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="underweight"
                      name="underweight"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        value="Underweight"
                      onChange={(event) => {
            setUnderweight(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Underweight (between -1 and -2)
                    </label>
                    </div>
                  </div>

                   <div className="relative flex gap-x-3 sm:col-span-4">
                  <div className="flex text-sm items-center">
                    <p className="text-md font-semibold">Plot Against `weight-for-age` and `Height-for-age` in Annex Z-score interpretation found in Annex A</p>
                  </div>

                  </div>


                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p className="text-md font-semibold">Plot against BMI for age in annexes for BMI </p>
                  </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="overweight"
                      name="overweight"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        value="overweight"
                      onChange={(event) => {
            setOverweight(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Overweight (between +1 and +2)
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-3 sm:col-span-4">
                  <div className="flex ml-2 text-sm items-center">

                  </div>
                  </div>

  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex ml-2 text-sm items-center">
                    <p className="text-md font-semibold">assessment. Z-score interpretation found in Annex A</p>
                  </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input
                      id="obese"
                      name="obese"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value="obese"
                      onChange={(event) => {
            setObese(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Obese (above +2)
                    </label>
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
