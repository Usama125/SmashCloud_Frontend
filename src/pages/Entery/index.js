import React, { useState } from 'react'
import ROUTES from '../../constants/index.js';
import _Entry from './index.jsx';

function Entry() {
  const [vehicle, setVehicle] = useState(null);

  const addEntry = (data) => {
    setVehicle(data)
  }

  return (
    <_Entry addEntry={addEntry} vehicle={vehicle} />
  )
}

export default Entry