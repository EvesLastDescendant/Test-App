/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react"

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
            <div className=''>
                {/* <div className="flex flex-col md:flex-row items-center justify-center image-box">
                    {
                        images.map((image) => (
                            <img key={image.id} src={image.src} alt={image.alt} width={200} style={{display: image.display}} />
                        ))
                    }
                </div> */}
                <div className="flex items-center justify-center h-72">
                    <img src="/imgs/student-1.png" alt="work" srcSet="/imgs/student-1.png, /imgs/student-2.png, /imgs/student-3.png" width={500} />
                </div>
                <h1 className="mx-auto text-center mb-3 font-bold text-white intro-text">SOFTWARE DEVELOPMENT ASSESSMENT</h1>
                <p className="text-pink-200 instruction-text">Please fill in the form below before procedding to the test</p>
                <form className="p-2" onSubmit={props.handleSubmit}>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0 md:mr-4">
                            <input type="text" name="name" value={props.userData.name} placeholder="Fullname" onChange={props.handleOnchange} className="text-slate-700 rounded-md ps-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" autoComplete="true" />
                        </div>
                        <div className="mb-4 md:mb-0 md:mr-4">
                            <input type="text" name="gender" value={props.userData.gender} placeholder="Gender" onChange={props.handleOnchange} className="text-slate-700 rounded-md ps-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" autoComplete="true" />
                        </div>
                        <div>
                            <input type="submit" value="To Test" className="text-slate-100 w-28 px-3 py-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto flex justify-center items-center toggle-button" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default IntroComponent