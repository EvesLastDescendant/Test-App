import { useState } from 'react'

import testqt from './testquestions'
import IntroComponent from './components/intro'
import TestComponent from './components/eval'
import Result from './components/res'

import Confetti from 'react-confetti'
import CircularProgress from './components/progressbar'

function App() {
  const [toTest, setToTest] = useState(false)
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    techpath: "",
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
          <>
            <CircularProgress score={score} scorecolor={'red'} />
          </>
        )
      
      case score > 5 && score <= 10:
        return (
          <>
            <CircularProgress score={score} scorecolor={'red'} />
          </>
        )

      case score > 10 && score <= 15:
        return (
          <>
            <CircularProgress score={score} scorecolor={'orange'} />
          </>
        )

      case score > 15 && score <= 17:
        return (
          <>
            <CircularProgress score={score} scorecolor={'yellow'} />
          </>
        )

      default:
        return (
          <>
            <CircularProgress score={score} scorecolor={'green'} />
          </>
        )
    }
  }

  const handleSubmit = (e) => {
    
    e.preventDefault()

    if(!userData.firstname) return

    const newUserData = {
      id: Date.now(),
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      techpath: userData.techpath
    }

    console.log(newUserData)

    addUserData(newUserData)

    handleToggleToTest()

    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      techpath: ""
    })

  }

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  const handleSelectTech = (e) => {
    setUserData((prev) => ({
      ...prev,
      techpath: e.target.value
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
      <div className='mx-auto w-full md:w-3/4 px-3 md:px-0 flex items-center justify-center md:justify-end h-screen'>
        { !toTest ? 
          <IntroComponent 
            handleSubmit={handleSubmit} 
            userData={userData} 
            handleOnchange={handleOnchange}
            onSelect={handleSelectTech}  
          />
          : 
          <div className='text-white w-full md:w-3/4 flex flex-col justify-end'>
            {currentQuestion >= 0 && currentQuestion < testqt.length ?
              <>
                <TestComponent 
                  testqt={testqt}
                  currentQuestion={currentQuestion}
                  answer={answer}
                  onAnswer={onAnswer}
                  onNext={nextQuestion}
                />
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
