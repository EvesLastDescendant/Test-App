/* eslint-disable react/prop-types */
const TestComponent = (props) => {
    return (
        <>
            <div className="w-full md:w-3/4 flex flex-col gap-5">
                <div className="inline-flex items-center font-semibold py-5 qt-text">
                    <p className="num text-slate-400">{props.testqt[props.currentQuestion].id < 9 ? `0${props.testqt[props.currentQuestion].id + 1}` : `${props.testqt[props.currentQuestion].id + 1}`}.</p>
                    <p className="qt text-black ml-2">{props.testqt[props.currentQuestion].question.charAt(0).toUpperCase() + props.testqt[props.currentQuestion].question.slice(1)}</p>
                </div>
                <div className="flex flex-col gap-5">
                    {props.testqt[props.currentQuestion].options.map((option, index) => (
                        <div  key={index}>
                            <label htmlFor={option} className="shadow-lg bg-white mb-2 p-3 rounded-md flex items-center justify-start">
                                <input type="radio" className="ml-4 appearance-none w-5 h-5 border border-indigo-500 rounded checked:bg-indigo-500 checked:border-transparent" id={option}  value={option} checked={props.answer === option} onChange={props.onAnswer}/>
                                <span className="font-medium ml-4 text-zinc-900 opt-text">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end items-center">
                    <button className='px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold hover:font-light' onClick={props.onNext}>Next</button>
                </div>
            </div>
        </>
    )
}

export default TestComponent

