

import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";



export default function ReviewGastrointestinal(){

    const [none, setNone] = useState('');
    const [abdominal_pain, setAbdominalPain] = useState('');
    const [abdominal_enlargement, setAbdominalEnlarge] = useState('');
    const [nausea, setNausea] = useState('');
    const [vomiting, setVomiting] = useState('');
    const [diarrhea, setDiarrhea] = useState('');
    const [constipation, setConstipation] = useState('');
    const [polyphagia, setPolyphagia] = useState('');
    const [vomiting_blood, setVomitingBlood] = useState('');
    const [bloody_stool, setBloodStool] = useState('');
    const [melena, setmelena] = useState('');
    const [others_gastrointestinal_review, setOtherGastrointestinal] = useState('');
         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/reviewGastrointestinal",
                     {
                    // patient_information_id: patient_information_id,

                    none: none,
                    abdominal_pain: abdominal_pain,
                    abdominal_enlargement: abdominal_enlargement,
                    nausea: nausea,
                    vomiting: vomiting,
                    diarrhea: diarrhea,
                    constipation: constipation,
                    polyphagia: polyphagia,
                    vomiting_blood: vomiting_blood,
                    bloody_stool: bloody_stool,
                    melena: melena,
                    others_gastrointestinal_review: others_gastrointestinal_review,

                 });
                 setNone("");
                 setAbdominalPain("");
                 setAbdominalEnlarge("");
                 setNausea("");
                 setVomiting("");
                 setDiarrhea("");
                 setConstipation("");
                 setPolyphagia("");
                 setVomitingBlood("");
                 setBloodStool("");
                 setDiarrhea("");
                 setmelena("");
                 setOtherGastrointestinal("");

            }
             catch(err)
             {
                 alert("Failed");
             }
         }

return (
        <PageComponent title='Review Gastrointestinal'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8">
                    <div className="mt-8 grid grid-cols-4 sm:grid-cols-4 ml-8">

                                 <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="none"
                      name="none"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="None"
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
                      id="nausea"
                      name="nausea"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="nausea"
                      onChange={(event) => {
                        setNausea(event.target.value)
        }}
                   />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Nausea
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="constipation"
                      name="constipation"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="constipation"
                      onChange={(event) => {
                        setConstipation(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Constipation
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="bloody_stool"
                      name="bloody_stool"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value=" Bloody stool"
                      onChange={(event) => {
                        setBloodStool(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Bloody stool
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="abdominal_pain"
                      name="abdominal_pain"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Abdominal pain"
                      onChange={(event) => {
                        setAbdominalPain(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Abdominal pain
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="vomiting"
                      name="vomiting"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="vomiting"
                      onChange={(event) => {
                        setVomiting(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Vomiting
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="vomiting_blood"
                      name="vomiting_blood"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Vomiting blood"
                      onChange={(event) => {
                        setVomitingBlood(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Vomiting blood
                    </label>
                    </div>
                  </div>


                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="polyphagia"
                      name="polyphagia"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Polyphagia"
                      onChange={(event) => {
                        setPolyphagia(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Polyphagia
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="melena"
                      name="melena"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="melena"
                      onChange={(event) => {
                        setmelena(event.target.value)
        }}
                    />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Melena
                    </label>
                    </div>
                  </div>


                               <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="abdominal_enlargement"
                      name="abdominal_enlargement"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Abdominal enlargement"
                      onChange={(event) => {
                        setAbdominalEnlarge(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Abdominal enlargement
                    </label>
                    </div>
                  </div>


                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="diarrhea"
                      name="diarrhea"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                      value="diarrhea"
                      onChange={(event) => {
                        setDiarrhea(event.target.value)
        }}/>
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Diarrhea
                    </label>
                    </div>


                  </div>

                              <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="others_gastrointestinal_review"
                      name="others_gastrointestinal_review"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"

                      value="Others:"
                      onChange={(event) => {
                        setOtherGastrointestinal("");
                        (event.target.value)
        }}
        />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Others:
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
