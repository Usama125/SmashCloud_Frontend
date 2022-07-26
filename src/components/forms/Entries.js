import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import TollTallApi from '../../api/TollTall'
import { toast } from 'react-toastify'
import NumberPlateInput from './NumberPlateInput'
import ROUTES from '../../constants'

function Entries({ route, addHandler }) {
  return (
    <Formik
      initialValues={{
        entry_point: "",
        number_plate: "",
        entry_date: ""
      }}
      validationSchema={Yup.object({
        entry_point: Yup.string().required('Required'),
        number_plate: Yup.string().required('Required'),
        entry_date: Yup.string().required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        if(route === ROUTES.ENTRY_ROUTE) {
          TollTallApi.entryPoint(values).then(res => {
            addHandler(res.data.data)
            toast.success("Vehicle entered successfully")
          }).catch(err => {
            toast.error(err.response.data.message)
          })
        } else {
          const data = {
            exit_point: values.entry_point,
            number_plate: values.number_plate,
            exit_date: values.entry_date
          }
          TollTallApi.exitPoint(data).then(res => {
            addHandler(res.data.data)
            toast.success("Vehicle tolltall details")
          }).catch(err => {
            toast.error(err.response.data.message)
          })
        }
        resetForm()
      }}
      enableReinitialize={true}
    >
      <div className="container center-div">
        <h3 className="text-center mb-4">{route === ROUTES.ENTRY_ROUTE ? "ADD ENTRY" : "EXIT & CALCULATE"}</h3>
        <Form>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <SelectInput name="entry_point" style={{ height: "50px" }}>
                  <option value="">Interchange</option>
                  <option value="zero">ZERO</option>
                  <option value="ns">NS</option>
                  <option value="ph4">PH4</option>
                  <option value="ferozpur">FEROZPUR</option>
                  <option value="lakecity">LAKECITY</option>
                  <option value="raiwand">RAIWAND</option>
                  <option value="bahria">BAHRIA</option>
                </SelectInput>
              </div>
              <div className="form-group">
                <NumberPlateInput name="number_plate" placeholder="Number Plate" />
              </div>
              <div className="form-group">
                <TextInput type="datetime-local" name="entry_date" placeholder="Entry Date" />
              </div>
            </div>
          </div>
          <div className="form-group text-center mb-0 mt-3">
            <button type="submit" className="btn btn-primary">{route === ROUTES.ENTRY_ROUTE ? 'Submit' : 'Calculate'}</button>
          </div>
        </Form>
      </div>
    </Formik>
  )
}

export default Entries
