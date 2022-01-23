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

/* Things to do */
// Fix percent update

export default function Home() {
  /* Display */
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  /* Display */

  /* Percent */
  const allPercentages = [5, 10, 15, 25, 50]
  const [currentPercent, setCurrentPercent] = useState(10)
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

  /* Custom Percent Related */
  // On click set current percent from the button value
  // Remove active state from custom input
  // Remove all values from custom input
  const handlePercentButtonClick = (e) => {
    setCurrentPercent(Number(e.target.value))
    setCustomPercent('')
  }
  // Every input changes will go in temp variable as string
  // Prevent value less than 0
  const handleCustomPercent = (e) => {
    setCustomPercent(e.target.value.substring(0, 3))
    if (e.target.value <= 0) {
      setCustomPercent('')
    }
  }
  // If focus lost
  // If no value set default value from array
  // If there is value transform to integer and set as current
  const handleCustomBlur = () => {
    if (!customPercent) {
      return setCurrentPercent(allPercentages[1])
    }
    setCurrentPercent(Number(customPercent))
  }
  /* Custom Percent Related */

  /* Bill Input Related */
  // On input
  // Set visible input value as string
  // Set integer input value
  // Prevent value less than 0
  const handleBillInput = (e) => {
    setBillInput(e.target.value.substring(0, 5))
    setBillValue(Number(e.target.value.substring(0, 5)))
    if (e.target.value <= 0) {
      setBillInput('')
      setBillValue(0)
    }
  }
  // On focus activate input
  // Remove error from input
  const handleBillFocus = () => {
    setIsBillActive(true)
    setBillError(false)
  }
  // On focus lost
  // If value empty set error
  const handleBillBlur = () => {
    if (!billInput) {
      setBillError(true)
    }
  }
  /* Bill Input Related */

  /* Person Input Related */
  // On input
  // Set visible input value as string
  // Set integer input value
  // Prevent value less than 0
  const handlePersonInput = (e) => {
    setPersonInput(e.target.value.substring(0, 3))
    setPersonValue(Number(e.target.value.substring(0, 3)))
    if (e.target.value <= 0) {
      setPersonInput('')
      setPersonValue(0)
    }
  }
  // On focus activate input
  // Remove error from input
  const handlePersonFocus = () => {
    setIsPersonActive(true)
    setPersonError(false)
  }
  // On focus lost
  // If value empty set error
  const handlePersonBlur = () => {
    if (!personInput) {
      setPersonError(true)
    }
  }
  /* Person Input Related */

  /* Reset */
  const resetHandler = () => {
    setBillValue(0)
    setBillInput('')
    setIsBillActive(false)
    setBillError(false)
    setPersonValue(0)
    setPersonInput('')
    setIsPersonActive(false)
    setPersonError(false)
    setCurrentPercent(allPercentages[1])
    setCustomPercent('')
    setTip(0)
    setTotal(0)
  }
  /* Reset */

  // Display functions
  function calcTotal() {
    if (!isBillActive || !isPersonActive || billError || personError) return
    const tempTip = Math.ceil(
      (billValue / personValue / 100) * currentPercent * 100
    )
    if (tempTip === Infinity) {
      return setTip(0)
    }
    setTip(tempTip / 100)
  }
  function calcTipAmount() {
    if (!isBillActive || !isPersonActive || billError || personError) return
    const tempTotal = Math.ceil((billValue / personValue + tip) * 100)
    if (tempTotal === Infinity) {
      return setTotal(0)
    }
    setTotal(tempTotal / 100)
  }
  // Display functions

  useEffect(() => {
    calcTotal()
    calcTipAmount()
  }, [billValue, currentPercent, personValue, tip, total])

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
            <Image src={logo.src} width={logo.width} height={logo.height} />
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
                <DisplayField type={'Tip Amount'} value={tip} />
                <DisplayField type={'Total'} value={total} />
              </div>

              <div className="md:mt-auto">
                <ButtonReset action={resetHandler} isActive={true}>
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
