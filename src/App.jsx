import { useState } from 'react'

import testqt from './testquestions'
import IntroComponent from './components/intro'
import TestComponent from './components/eval'
import Result from './components/res'

import Confetti from 'react-confetti'

function App() {
  const [toTest, setToTest] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    gender: ""
  })
  const [userDataList, setUserDataList] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState('')
  const [testScore, setTestScore] = useState(0)

  // useEffect(() => {
  //   console.log(currentQuestion)
  //   console.log(testScore)
  // })

  const addUserData = (data) => {
    setUserDataList([...userDataList, data])
  }

  const handleToggleToTest = () => {
    setToTest(!toTest)
  }

  const getProgressColor = (score) => {
    switch (true) {
      case score >= 0 && score <= 5:
        return (
          <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-red-600" style={{ width: "20%" }}></div>
          </div>
        )
      
      case score > 5 && score <= 10:
        return (
          <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-blue-600" style={{ width: "40%" }}></div>
          </div>
        )

      case score > 10 && score <= 15:
        return (
          <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-orange-600" style={{ width: "60%" }}></div>
          </div>
        )

      case score > 15 && score <= 17:
        return (
          <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-yellow-600" style={{ width: "80%" }}></div>
          </div>
        )

      default:
        return (
          <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
            <div className="h-1 bg-green-600" style={{ width: "100%" }}></div>
          </div>
        )
    }
  }

  const handleSubmit = (e) => {
    
    e.preventDefault()

    if(!userData.name, !userData.gender) return

    const newUserData = {
      id: Date.now(),
      name: userData.name,
      gender: userData.gender
    }

    console.log(newUserData)

    addUserData(newUserData)

    handleToggleToTest()

    setUserData({
      name: "",
      gender: ""
    })

  }

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  const onAnswer = (e) => {
    setAnswer(e.target.value)
    // console.log(e.target.value)
  }

  // const prevQuestion = () => {
  //   if(currentQuestion === 0) return

  //   setCurrentQuestion((curr) => curr -1)
  // }

  const nextQuestion = () => {
    // if(currentQuestion === testqt.length - 1) return

    if(answer === testqt[currentQuestion].correctAnswer) setTestScore((score) => score + 1)
    setCurrentQuestion((curr) => curr + 1)
    setAnswer("")
  }

  // const lastQuestion = () => {
  //   return currentQuestion === testqt.length - 1
  // }

  // const firstQuestion = () => {
  //   return currentQuestion === 0
  // }

  return (
    <>
      <div className='mx-auto w-full md:w-3/4 px-3 md:px-0 flex items-center justify-center h-screen bg-'>
        { !toTest ? 
          <IntroComponent 
            handleSubmit={handleSubmit} 
            userData={userData} 
            handleOnchange={handleOnchange}  
          />
          : 
          <div className='text-white w-full md:w-3/4'>
            {currentQuestion >= 0 && currentQuestion < testqt.length ?
              <>
                <TestComponent 
                  testqt={testqt}
                  currentQuestion={currentQuestion}
                  answer={answer}
                  onAnswer={onAnswer}
                />
                <div className="mt-5 flex justify-center">
                  <button className='px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 hover:text-white font-bold hover:font-light' onClick={nextQuestion}>Next</button>
                </div>
              </>
              :
              <>
                {testScore >=17 && <Confetti width={window.innerWidth} height={window.innerHeight} />}
                <Result testScore={testScore} getProgressColor={getProgressColor} userData={userDataList} />
              </>
            }
          </div>
        }
      </div>
    </>
  )
}

export default App
