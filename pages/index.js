import Head from 'next/head'
import Button from '../components/Button'
import ButtonReset from '../components/ButtonReset'
import Input from '../components/Input'
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import iconDollar from '../public/images/icon-dollar.svg'
import iconPerson from '../public/images/icon-person.svg'
import DisplayField from '../components/DisplayField'
import InputHeader from '../components/InputHeader'
import { useEffect, useState } from 'react'
import InputCustom from '../components/InputCustom'

export default function Home() {
  /* Display */
  const [tipValue, setTipValue] = useState(0)
  const [tipDisplay, setTipDisplay] = useState('0.00')
  const [totalValue, setTotalValue] = useState(0)
  const [totalDisplay, setTotalDisplay] = useState('0.00')
  /* Display */

  /* Percent */
  const allPercentages = [5, 10, 15, 25, 50]
  const [currentPercent, setCurrentPercent] = useState(0)
  const [customPercent, setCustomPercent] = useState('')
  /* Percent */

  /* Bill */
  const [billError, setBillError] = useState(false)
  const [isBillActive, setIsBillActive] = useState(false)
  const [billValue, setBillValue] = useState(0)
  const [billInput, setBillInput] = useState('')
  /* Bill */

  /* Person */
  const [personError, setPersonError] = useState(false)
  const [isPersonActive, setIsPersonActive] = useState(false)
  const [personValue, setPersonValue] = useState(0)
  const [personInput, setPersonInput] = useState('')
  /* Person */

  /* Reset */
  const [isResetActive, setIsResetActive] = useState(false)
  /* Reset */

  /* Percent Related */
  const handlePercentButtonClick = (e) => {
    setCurrentPercent(Number(e.target.value)) // Set current percent from the button value
    setCustomPercent('') // Remove value from custom input
    setIsResetActive(true)
  }
  const handleCustomPercent = (e) => {
    setCustomPercent(e.target.value.substring(0, 3)) //Input goes to temp variable // prevented length over three symbols
    if (e.target.value <= 0) {
      setCustomPercent('') // Prevent value less than 0
    }
    setIsResetActive(true)
  }
  const handleCustomBlur = () => {
    setIsResetActive(true)
    if (!customPercent) {
      return setCurrentPercent(allPercentages[1]) // Set default value if input empty
    }
    setCurrentPercent(Number(customPercent)) // Set value from input
  }
  /* Percent Related */

  /* Bill Input Related */
  const handleBillInput = (e) => {
    setBillInput(e.target.value.substring(0, 7)) // Set input value // Prevent over five symbols
    setBillValue(Number(e.target.value.substring(0, 5))) // Set value for calculations // Prevent over five symbols
    if (e.target.value <= 0) {
      setBillInput('') // Prevent value less than 0
      setBillValue(0) // Prevent value less than 0
    }
  }
  const handleBillFocus = () => {
    setIsBillActive(true) // Set input active
    setBillError(false) // Remove error
    setIsResetActive(true)
  }
  const handleBillBlur = () => {
    if (!billInput) {
      setBillError(true) // If value is empty set error
    }
  }
  /* Bill Input Related */

  /* Person Input Related */
  const handlePersonInput = (e) => {
    setPersonInput(e.target.value.substring(0, 3)) // Set input value // Prevent over three symbols
    setPersonValue(Number(e.target.value.substring(0, 3))) // Set value for calculations // Prevent over five symbols
    if (e.target.value <= 0) {
      setPersonInput('') // Prevent value less than 0
      setPersonValue(0) // Prevent value less than 0
    }
  }
  const handlePersonFocus = () => {
    setIsPersonActive(true) // Set input active
    setPersonError(false) // Remove error
    setIsResetActive(true)
  }
  const handlePersonBlur = () => {
    if (!personInput) {
      setPersonError(true) // If value is empty set error
    }
  }
  /* Person Input Related */

  /* Reset */
  const resetHandler = () => {
    if (!isResetActive) return
    setBillValue(0)
    setBillInput('')
    setIsBillActive(false)
    setBillError(false)
    setPersonValue(0)
    setPersonInput('')
    setIsPersonActive(false)
    setPersonError(false)
    setCurrentPercent(0)
    setCustomPercent('')
    setTipValue(0)
    setTipDisplay('0.00')
    setTotalValue(0)
    setTotalDisplay('0.00')
    setIsResetActive(false)
  }
  /* Reset */

  // Display functions
  function calcTipAmount() {
    if (!isBillActive || !isPersonActive || billError || personError) return
    // Magic ***++**++++**++***
    const tempTip = Math.round(
      (billValue / personValue / 100) * currentPercent * 100
    )
    if (tempTip === Infinity) {
      setTipValue(0)
      setTipDisplay('0.00')
      return
    }
    // Magic ***++**++++**++***
    console.log('display: ' + tipDisplay)
    console.log('value: ' + tipValue)

    const result = tempTip / 100
    setTipValue(result)
    setTipDisplay(result.toFixed(2))
  }
  function calcTotal() {
    if (!isBillActive || !isPersonActive || billError || personError) return
    // Magic ***++**++++**++***
    const tempTotal = Math.round((billValue / personValue + tipValue) * 100)
    if (tempTotal === Infinity) {
      setTotalValue(0)
      setTotalDisplay('0.00')
      return
    }
    // Magic ***++**++++**++***
    const result = tempTotal / 100
    setTotalValue(result)
    setTotalDisplay(result.toFixed(2))
  }
  // Display functions

  useEffect(() => {
    calcTipAmount()
  }, [billValue, currentPercent, personValue, tipValue])

  useEffect(() => {
    calcTotal()
  }, [billValue, currentPercent, personValue, tipValue])

  return (
    <>
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
        <meta
          name="description"
          content="Tip calculator app challenge from frontend mentor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* section */}
        <div className="flex flex-col min-h-screen items-center justify-center bg-clr-section overflow-hidden">
          <div className="py-16 relative">
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt="SPLITTER logo"
            />
            <h1 className="absolute invisible top-0 left-0">SPLITTER</h1>
          </div>

          {/* component */}
          <div className="bg-white p-8 rounded-t-3xl md:rounded-3xl shadow-lg font-space grid gap-8 md:grid md:grid-cols-2 md:max-w-4xl md:mx-2">
            {/* content */}
            <div className="px-1 grid gap-8 md:px-0 md:py-1">
              <div className="grid gap-2">
                <InputHeader type={'Bill'} error={billError} />

                <Input
                  icon={iconDollar}
                  error={billError}
                  value={billInput}
                  action={handleBillInput}
                  blurAction={handleBillBlur}
                  focusAction={handleBillFocus}
                />
              </div>

              <div className="grid gap-2">
                <InputHeader type={'Select Tip %'} />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
                  {allPercentages.map((percent, key) => {
                    if (percent === currentPercent) {
                    }
                    return (
                      <Button
                        value={percent}
                        key={key}
                        active={percent === currentPercent ? true : false}
                        action={handlePercentButtonClick}
                      />
                    )
                  })}

                  <InputCustom
                    action={handleCustomPercent}
                    blurAction={handleCustomBlur}
                    value={customPercent}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <InputHeader type={'Number of People'} error={personError} />
                <Input
                  icon={iconPerson}
                  error={personError}
                  value={personInput}
                  action={handlePersonInput}
                  blurAction={handlePersonBlur}
                  focusAction={handlePersonFocus}
                />
              </div>
            </div>
            {/* ./content */}

            {/* display */}
            <div className="bg-clr-primary p-6 rounded-2xl grid gap-8 md:p-8">
              <div className="grid gap-2 md:gap-0">
                <DisplayField type={'Tip Amount'} value={tipDisplay} />
                <DisplayField type={'Total'} value={totalDisplay} />
              </div>

              <div className="md:mt-auto">
                <ButtonReset action={resetHandler} isActive={isResetActive}>
                  Reset
                </ButtonReset>
              </div>
            </div>
            {/* ./display */}
          </div>
          {/* ./component */}
        </div>
        {/* ./section */}
      </main>
    </>
  )
}
