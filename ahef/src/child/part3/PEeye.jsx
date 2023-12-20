

import axios from "axios";
import PageComponent from "../../components/PageComponent";
import Tbutton from "../../components/core/Tbutton";
import { useState } from "react";




export default function PEEye(){

    const [unremarkable, setUnremarkable] = useState('');
    const [icteric_sclera, setIcteric] = useState('');
    const [red_eye, setRedEye] = useState('');
    const [white_pupillary, setWhitePupillary] = useState('');
    const [ror, setRor] = useState('');
    const [exophthalmos, setExophthalmos] = useState('');
    const [strabismus, setStrabimus] = useState('');
    const [discharge, setDischarge] = useState('');
    const [xanthelasma, setXanthelasma] = useState('');
    const [xanthoma, setXanthoma] = useState('');
    const [chalazion, setChalazion] = useState('');
    const [sty, setSty] = useState('');
    const [ectropion, setEctropion] = useState('');
    const [ptosis, setPtosis] = useState('');
    const [others_pe_eyes, setOtherPeEyes] = useState('');
    const [visual_od, setVisionOD] = useState('');
    const [visual_os, setVisionOS] = useState('');


         async function save(event)
         {
             event.preventDefault();
             try {
                 await axios.post(
                     "http://localhost:8000/api/peEyes",
                     {
                    // patient_information_id: patient_information_id,

                     unremarkable: unremarkable,
                     icteric_sclera: icteric_sclera,
                     red_eye: red_eye,
                     white_pupillary: white_pupillary,
                     ror: ror,
                     exophthalmos: exophthalmos,
                     strabismus: strabismus,
                     discharge: discharge,
                     xanthelasma: xanthelasma,
                     xanthoma: xanthoma,
                     chalazion: chalazion,
                     sty: sty,
                     ectropion: ectropion,
                     ptosis: ptosis,
                     others_pe_eyes: others_pe_eyes,
                     visual_od: visual_od,
                     visual_os: visual_os,

                 });
                 setUnremarkable("");
                 setIcteric("");
                 setRedEye("");
                 setWhitePupillary("");
                 setRor("");
                 setExophthalmos("");
                 setStrabimus("");
                 setDischarge("");
                 setXanthelasma("");
                 setXanthoma("");
                 setChalazion("");
                 setSty("");
                 setEctropion("");
                 setPtosis("");
                 setOtherPeEyes("");
                 setVisionOD("");
                 setVisionOS("");


            }
             catch(err)
             {
                 alert("Failed");
             }
         }




return (
        <PageComponent title='Physical Eye'>
            <form action="">
                            <fieldset>
                            <div className="border border-gray-900/10 pb-8"></div>
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
                      id="icteric_sclera"
                      name="icteric_sclera"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Icteric sciera"
                      onChange={(event) => {
                        setIcteric(event.target.value)
        }}
                   />
                  </div>


                                <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Icteric sciera
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="offeexophthalmosrs"
                      name="exophthalmos"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value=" Exophthalmos"
                      onChange={(event) => {
                        setExophthalmos(event.target.value)
        }}
                    />
                  </div>


                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Exophthalmos
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="xanthelasma"
                      name="xanthelasma"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="xanthelasma"
                      onChange={(event) => {
                        setXanthelasma(event.target.value)
        }}
                    />
                  </div>



                                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Xanthelasma
                    </label>
                    </div>
                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="sty"
                      name="sty"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="sty"
                      onChange={(event) => {
                        setSty(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        Sty
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
                      id="others_pe_eyes"
                      name="others_pe_eyes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Others:"
                      onChange={(event) => {
                        setOtherPeEyes(event.target.value)
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
                      id="red_eye"
                      name="red_eye"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Red eye"
                      onChange={(event) => {
                        setRedEye(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Red eye
                    </label>
                    </div>
                  </div>

                                  <div className="relative flex gap-x-3 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="strabismus"
                      name="strabismus"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="strabismus"
                      onChange={(event) => {
                        setStrabimus(event.target.value)
        }}
                    />
                  </div>
                 <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Strabismus
                    </label>
                    </div>
                  </div>


                <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="xanthoma"
                      name="xanthoma"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="xanthoma"
                      onChange={(event) => {
                        setXanthoma(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                            Xanthoma
                    </label>
                    </div>
                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="ectropion"
                      name="ectropion"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="ectropion"
                      onChange={(event) => {
                        setEctropion(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                         Ectropion
                    </label>
                    </div>


                  </div>



                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="white_pupillary"
                      name="white_pupillary"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="White Pupillary reflex"
                      onChange={(event) => {
                        setWhitePupillary(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                           White Pupillary reflex
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="discharge"
                      name="discharge"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="discharge"
                      onChange={(event) => {
                        setDischarge(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                     <label htmlFor="offers" className="font-medium text-gray-900">
                      Discharge
                    </label>
                    </div>

                  </div>


                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="chalazion"
                      name="chalazion"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="chalazion"
                      onChange={(event) => {
                        setChalazion(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                       Chalazion
                    </label>
                    </div>


                  </div>

                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="ptosis"
                      name="ptosis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="Ptosis"
                      onChange={(event) => {
                        setPtosis(event.target.value)
        }}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Ptosis
                    </label>
                    </div>


                  </div>




                  <div className="relative flex gap-x-4 sm:col-span-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="ror"
                      name="ror"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value="(-)ROR"
                      onChange={(event) => {
                        setRor(event.target.value)
        }}
                   />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                        (-)ROR
                    </label>
                    </div>


                  </div>






                    <div className="sm:col-span-2 " >
    <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
        Visual Aculty Testing:
        <p>OD:</p>
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="visual_od"
        id="visual_od"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

        value={"visual_od"}
        onChange={(event) => {
            setVisionOD(event.target.value)
}}/>
      </div>
      <label htmlFor="first-name" className="block text-md font-medium leading-6 text-gray-900">
        Visual Aculty Testing:
        <p>OS:</p>
    </label>
    <div className="mt-2">
      <input
        type="text"
        name="visual_os"
        id="visual_os"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

        value={"visual_od"}
        onChange={(event) => {
            setVisionOS(event.target.value)
}}/>
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
