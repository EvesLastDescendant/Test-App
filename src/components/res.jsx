import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"

/* eslint-disable react/prop-types */
const Result = (props) => {
    return (
        <>
            <div className="mx-auto bg-gray-50 shadow-lg flex flex-col justify-between items-center p-14">
                <p className="text-extrabold text-red-400 res">Assessment Complete</p>
                {/**add tick icon */}
                <FontAwesomeIcon icon={faCircleCheck} size="6x" color="rgb(74, 222, 128)" />
                <table className="w-full text-center mx-auto">
                    <thead>
                        <tr>
                            <th className="result-text text-blue-400">Student Name: </th>
                            <th className="result-text text-blue-400">{props.userData[0].name}</th>
                        </tr>
                    </thead>
                </table>
                <div>Score: {props.testScore}</div>
                <div className="mt-5 w-2/3">{props.getProgressColor(props.testScore)}</div>
            </div>
        </>
    )
}

export default Result