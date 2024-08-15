/* eslint-disable react/prop-types */

import img  from '/imgs/student-1.png'

const style = {
    background: "url('/circle.svg')",
    backgroundSize: 'cover'
}
const IntroComponent = (props) => {
    return (
        <>
            <div className="w-4/5 p-10 shadow-lg shadow-slate-400 rounded-lg flex flex-col md:flex-row justify-center md:justify-between items-center" style={style}>
                <div className="w-full h-full md:w-1/2 flex">
                    <img src={img} alt="img" width={350} />
                </div>
                <div className="w-full h-full md:w-1/2">
                    <form onSubmit={props.handleSubmit} className="shadow-md h-full rounded-md py-10 px-5">
                        <div >
                            <label htmlFor="firstname" className='font-bold'>Firstname: </label>
                            <input type="text" name="firstname" id="firstname" placeholder="first name" className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                            <label htmlFor="lastname" className='font-bold'>Lastname: </label>
                            <input type="text" name="lastname" id="lastname" placeholder='last name' className='w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'/>
                        </div>
                    </form>
                </div>
                {/* <div className="w-full md:w-3/5 flex flex-col gap-5">
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
                </div> */}
            </div>
        </>
    )
}

export default IntroComponent