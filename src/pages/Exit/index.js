import React, { useState } from 'react'
import _Exit from './index.jsx'

function Exit() {
  const [calculation, setCalculation] = useState(null);

  const setCalculationHandler = (data) => {
    setCalculation(data)
  }

  return (
    <_Exit setCalculationHandler={setCalculationHandler} calculation={calculation} />
  )
}

export default Exit