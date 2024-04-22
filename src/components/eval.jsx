/* eslint-disable react/prop-types */
const TestComponent = (props) => {
    return (
        <>
            <div className="flex flex-col gap-5">
                <h5 className="font-semibold py-5 w-full md:w-3/4 qt-text">
                    <span>{props.testqt[props.currentQuestion].id < 9 ? `0${props.testqt[props.currentQuestion].id + 1}` : `${props.testqt[props.currentQuestion].id + 1}`}.</span>
                    <span className="ml-2">{props.testqt[props.currentQuestion].question.charAt(0).toUpperCase() + props.testqt[props.currentQuestion].question.slice(1)}</span>
                </h5>
                <div className="flex flex-col gap-5">
                    {props.testqt[props.currentQuestion].options.map((option, index) => (
                        <div  key={index}>
                            <label htmlFor={option} className="border border-t-0 border-l-0 border-r-0 border-b-slate-500 w-full md:w-3/4 mb-2 py-2 flex items-center justify-start border-shadow">
                                <input type="radio" className="ml-4 appearance-none w-5 h-5 border border-cyan-400 rounded checked:bg-cyan-400 checked:border-transparent" id={option}  value={option} checked={props.answer === option} onChange={props.onAnswer}/>
                                <span className="font-medium ml-4 opt-text">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TestComponent

