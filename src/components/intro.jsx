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
                    <img src="/imgs/student-1.png" alt="student-test" className="absolute" />
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
                
                <div className="w-full md:w-3/5 flex flex-col gap-5">
                    <p className="text-blue-600 instruction-text">Fill in form then proceed</p>
                    <form className="shadow-lg bg-zinc-100 rounded-md" onSubmit={props.handleSubmit}>
                        <div className="flex flex-col md:flex-row justify-between items-center p-4">
                            <div className="mb-4 md:mb-0 md:mr-4">
                                <input type="text" name="name" value={props.userData.name} placeholder="your name" onChange={props.handleOnchange} className="text-slate-700 border-blue-400 border rounded-md ps-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" autoComplete="true" />
                            </div>
                            <div>
                                <input type="submit" value="To Test" className="text-slate-100 w-28 px-3 py-2 rounded-sm bg-gradient-to-r from-blue-700 to-blue-400 mx-auto flex justify-center items-center toggle-button" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default IntroComponent