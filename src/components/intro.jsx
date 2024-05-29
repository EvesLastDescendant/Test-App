/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react"

import ReactCurvedText from "react-curved-text"

const IntroComponent = (props) => {
    // const [images, setImages] = useState([
    //     { id: 1, src: '/imgs/student-1.png', alt: 'Image 1', display: 'none' },
    //     { id: 2, src: '/imgs/student-2.png', alt: 'Image 2', display: 'none' },
    //     { id: 3, src: '/imgs/student-3.png', alt: 'Image 3', display: 'none' }
    // ])
    
    // useEffect(() => {
    //     images.forEach((image, index) => {
    //         setTimeout(() => {
    //             const updatedImages = [...images];
    //             updatedImages[index].display = 'block';
    //             setImages(updatedImages);
    //         }, (index + 1) * 1000);
    //     });
    // });

    return (
        <>
            <div className='w-3/4 h-1/2 flex flex-col md:flex-row items-center justify-between'>
                <div className="relative flex flex-col items-center">
                    <div><img src="/imgs/student-1.png" alt="student-test" className="absolute right-0 md:right-1" /></div>
                    <div>
                        <ReactCurvedText 
                            width={200}
                            height={200}
                            cx={100}
                            cy={100}
                            rx={70}
                            ry={70}
                            startOffset={29}
                            reversed={false}
                            text="SOFTWARE DEV CBT"
                            textProps={{style: {fontSize: 'var(--fs-lg)'}}}
                            textPathProps={{fill: '#1d4ed8'}}
                            tspanProps={{dy: 29}}
                            ellipseProps={null}
                            svgProps={null}
                        />
                    </div>
                </div>
                
                <div className="w-full md:w-3/5 flex flex-col gap-5">
                    <p className="text-blue-400 instruction-text">Fill in form then proceed</p>
                    <form className="p-4 shadow-lg bg-zinc-100 rounded-md" onSubmit={props.handleSubmit}>
                        <div className="flex flex-col justify-between items-center p-4">
                            <div className="w-full flex flex-col lg:flex-row justify-between gap-y-5 items-center mb-4 md:mb-2 md:mr-4">
                                <input type="text" name="firstname" value={props.userData.firstname} placeholder="first name" onChange={props.handleOnchange} className="text-slate-700 border-zinc-400 border rounded-lg ps-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" autoComplete="true" />
                                <input type="text" name="lastname" value={props.userData.lastname} placeholder="last name" onChange={props.handleOnchange} className="text-slate-700 border-zinc-400 border rounded-lg ps-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" autoComplete="true" />
                            </div>
                            <div className="w-full flex flex-row justify-between items-center mb-4 md:mb-2 md:mr-4">
                                <input type="mail" name="email" value={props.userData.email} placeholder="your email" onChange={props.handleOnchange} className="w-full text-slate-700 border-zinc-400 border rounded-lg ps-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" autoComplete="true" />
                            </div>
                            <div className="w-full flex flex-col lg:flex-row justify-between gap-y-5 items-center mb-4 md:mb-2 md:mr-4">
                                <select name="path" id="path" value={props.userData.techpath} onChange={props.onSelect} className="py-2 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option value="">Choose your stack</option>
                                    <option value="SD">Software development</option>
                                    <option value="DAP">Data Science with Python</option>
                                    <option value="DAR">Data Analysis with R</option>
                                    <option value="AM">Affiliate Marketing</option>
                                    <option value="UIX">UI/UX</option>
                                    <option value="PM">Product Management</option>
                                    <option value="CW">Content Writing</option>
                                </select>
                                <input type="submit" value="To test ➡️" className="border-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-300 to-zinc-700 cursor-pointer" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default IntroComponent