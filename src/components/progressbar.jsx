/* eslint-disable react/prop-types */
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar'

const CircularProgress = (props) => {
    return (
        <>
            <div className="w-50 m-auto flex justify-center items-center">
                <ProgressBarComponent
                    id='circle-progress'
                    type='Circular'
                    height='160px'
                    progressColor={props.scorecolor}
                    minimum={0}
                    maximum={20}
                    segmentCount={20}
                    value={props.score}
                    animation={{
                        enable: true,
                        duration: 2500,
                        delay: 0.5
                    }}
                />
            </div>
        </>
    )
}

export default CircularProgress