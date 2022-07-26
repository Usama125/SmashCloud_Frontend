import React from 'react'
import Entries from '../../components/forms/Entries'
import ROUTES from '../../constants'
import DashboardLayout from '../../layout/DashboardLayout'

function _Exit({ setCalculationHandler, calculation }) {
  return (
    <DashboardLayout>
      <Entries addHandler={setCalculationHandler} route={ROUTES.EXIT_ROUTE} />
      {/* Vehicle Details */}
      <hr />
      {calculation && (
        <div className="container center-div-2">
          <h3 className="text-center mb-4">Vehicle TollTall Details</h3>
          <p><strong>BASE RATE: </strong>{calculation?.base_rate}</p>
          <p><strong>DISCOUNT: </strong>{calculation?.discount}</p>
          <p><strong>DISCOUNT COST: </strong>{calculation?.distance_cost}</p>
          <p><strong>SUB TOTAL: </strong>{calculation?.sub_total}</p>
          <p><strong>TOTAL CHARGED: </strong>{calculation?.total_charged}</p>
        </div>
      )}
    </DashboardLayout>
  )
}

export default _Exit