import { useState } from "react";
import PageComponent from "../components/PageComponent";
import Tbutton from "../components/core/Tbutton";
import axios from "axios";

export default function DevelopmentalMilestones(){


    const [walks_straight, setWalks] = useState('');
const [able_to_balance, setBalance] = useState('');
const [build_staircase, setStaircase] = useState('');
const [copies_cross, setCopiesCross] = useState('');
const [proper_syntax_short, setProperSyntax] = useState('');
const [Knows_color_letter, setColorLetter] = useState('');
const [play_pretend, setPlayPretend] = useState('');




     async function save(event)
     {
         event.preventDefault();
         try {
             await axios.post(
                 "http://localhost:8000/api/save_developmentalMilestone",
                 {
                // patient_information_id: patient_information_id,

                 walks_straight: walks_straight,
                 able_to_balance: able_to_balance,
                 build_staircase: build_staircase,
                 copies_cross: copies_cross,
                 proper_syntax_short: proper_syntax_short,
                                  Knows_color_letter: Knows_color_letter,
                 play_pretend: play_pretend,


             });
             setWalks("");
             setBalance("");
             setStaircase("");
              setCopiesCross("");
             setProperSyntax("");
                           setColorLetter("");
             setPlayPretend("");

        }
         catch(err)
         {
             alert("Failed");
         }
     }

return (
        <PageComponent title='Developmental Milestones'>
            <form action="">
                <fieldset>

                <div className="border border-gray-900/10 pb-4">
                 <div className="m-2 grid grid-cols-2 divide-x">
  <div className="text-md mb-2 font-semibold">Developmental Milestones
    <p className="text-sm">*See Annex B for red flags until 5<sup>1</sup>&frasl;<sub>2</sub> years old</p>
  </div>
  <div className="text-md font-semibold">When was the Milestone achieved?</div>


        <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="walks_straight"
                      name="walks_straight"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                         value={walks_straight}
                      onChange={(event) => {
            setWalks(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                     Walks in a straight line back and forth
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="walks_straight"
                      name="walks_straight"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={walks_straight}
                      onChange={(event) => {
            setWalks(event.target.value)
        }}
                    />
                  </div>

                  </div>



                          <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="able_to_balance"
                      name="able_to_balance"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={able_to_balance}
                      onChange={(event) => {
            setBalance(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Able to balance on one foot for 5-10 seconds
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="able_to_balance"
                      name="able_to_balance"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                     value={able_to_balance}
                      onChange={(event) => {
            setBalance(event.target.value)
        }}
                    />
                  </div>

                  </div>




  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="build_staircase"
                      name="build_staircase"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={build_staircase}
                      onChange={(event) => {
            setStaircase(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Build a Staircase of blocks
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="build_staircase"
                      name="build_staircase"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={build_staircase}
                      onChange={(event) => {
            setStaircase(event.target.value)
        }}
                    />
                  </div>

                  </div>

  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="copies_cross"
                      name="copies_cross"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={copies_cross}
                      onChange={(event) => {
            setCopiesCross(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Copies a cross
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="copies_cross"
                      name="copies_cross"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                   value={copies_cross}
                      onChange={(event) => {
            setCopiesCross(event.target.value)
        }}

                   />
                  </div>

                  </div>


  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="proper_syntax_short"
                      name="proper_syntax_short"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={proper_syntax_short}
                      onChange={(event) => {
            setProperSyntax(event.target.value)
        }}

                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                    Uses proper syntax in short sentences
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="proper_syntax_short"
                      name="proper_syntax_short"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={proper_syntax_short}
                      onChange={(event) => {
            setProperSyntax(event.target.value)
        }}
                    />
                  </div>

                  </div>

                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="Knows_color_letter"
                      name="Knows_color_letter"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={Knows_color_letter}
                      onChange={(event) => {
            setColorLetter(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Knowns colors or letters
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="Knows_color_letter"
                      name="Knows_color_letter"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>

                  </div>



  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="play_pretend"
                      name="play_pretend"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
value={play_pretend}
                      onChange={(event) => {
            setPlayPretend(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm mt-2 leading-6">
                    <label htmlFor="offers" className=" font-medium text-gray-900">
                     Play pretend or make believe
                    </label>
                    </div>
                  </div>


                    <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 mt-2 items-center">
                    <input
                      id="play_pretend"
                      name="play_pretend"
                      type="text"
                      className="h-7 m-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    value={play_pretend}
                      onChange={(event) => {
            setPlayPretend(event.target.value)
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
