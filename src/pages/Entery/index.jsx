import React from 'react'
import Entries from '../../components/forms/Entries'
import ROUTES from '../../constants'
import DashboardLayout from '../../layout/DashboardLayout'
import moment from 'moment'

function _Entry({ addEntry, vehicle }) {
  return (
    <DashboardLayout>
      <Entries addHandler={addEntry} route={ROUTES.ENTRY_ROUTE} />
      {/* Vehicle Details */}
      <hr />
      {vehicle && (
        <div className="container center-div-2">
          <h3 className="text-center mb-4">Vehicle Entry Details</h3>
          <p><strong>Entry Date: </strong>{moment(vehicle?.entry_date).format('MMMM Do YYYY, h:mm:ss a')}</p>
          <p><strong>Plate Number: </strong>{vehicle?.number_plate}</p>
          <p><strong>Interchange: </strong>{vehicle?.entry_point}</p>
        </div>
      )}
    </DashboardLayout>
  )
}

export default _Entry