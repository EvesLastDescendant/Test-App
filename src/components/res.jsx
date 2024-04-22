/* eslint-disable react/prop-types */
const Result = (props) => {
    return (
        <>
            <div className="mx-auto shadow-lg flex flex-col justify-between items-center py-5 ">
                <p className="text-extrabold res">Assessment Complete</p>
                
                <table className="w-full text-center mx-auto">
                    <thead>
                        <tr>
                        <th className="result-text">Student Name: </th>
                        <th className="result-text">{props.userData[0].name}</th>
                        </tr>
                    </thead>
                </table>
                <div className="mt-5 w-2/3">{props.getProgressColor(props.testScore)}</div>
            </div>
        </>
    )
}

export default Result