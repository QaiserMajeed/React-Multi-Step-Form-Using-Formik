import React, { Component, Fragment } from "react";
import { FormGroup, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import { DatePickerField } from '../common/DateField'
import * as moment from 'moment';
import ReactFlagsSelect from 'react-flags-select';

import {
  Formik,

  Form,
  Field,

  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Label from "reactstrap/lib/Label";
import { SelectField } from "../common/SelectField";


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const customStyles = {
  option: (provided, state) => ({

    ...provided,
    backgroundColor: 'white',
    color: "#0d89ec",

  }),
  control: (base, state) => ({
    ...base,

    borderRadius: "8px",
    // Overwrittes the different states of border
    borderColor: "#0d89ec",

    // Removes weird border around container

  }),

  placeholder: base => ({
    ...base,
    // kill the white space on first and last option
    color: "#0d89ec",
    opacity: '.5'
  })
};


const PersonalDetails = ({ values, errors, touched, setFieldValue }) => (

  <Fragment>
    {/* <pre>{JSON.stringify(values, null, 2)}</pre>
    <pre>{JSON.stringify(errors, null, 2)}</pre> */}
    <FormGroup>
      <Col sm="12" md={{ size: 9, offset: 4 }}>
        <FontAwesomeIcon style={{ 'color': "#007bff" }} size={'3x'} icon={faUserCircle} />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>

        <DatePickerField
          name='dateOfBirth'
          value={values.dateOfBirth}
          placeholderText="Date Of birth"
          className={'form-control'}
        />
        {/* <ErrorMessage name="dateOfBirth" component={DatePicker} className="invalid-feedback" /> */}
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field
          placeholder="Select Nationality"
          searchable={true}
          searchPlaceholder="Select Nationality"
          name="selectedNationality"
          options={values.nationality}
          component={SelectField}
          styles={customStyles}
          value={values.selectedNationality}
          onChange={(value) => { setFieldValue("selectedNationality", value)}}
        />

        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field
          placeholder="Select Gender"
          name="selectedGender"
          options={[{ label: 'Male', text: '1' },{ label: 'Female', text: '2' }]}
          component={SelectField}
          styles={customStyles}
          value={values.selectedGender}
          onChange={(value) => { setFieldValue("selectedGender", value)}}
        />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field
          name="home"
          type="text"
          placeholder="Home Number"
          validate="Required"
          className={'form-control' + (errors.home && touched.home ? ' is-invalid' : '')} />
        <ErrorMessage name="home" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name="mobile" type="text" placeholder='Mobile Number' className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
        <ErrorMessage name="mobile" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name="currentAddress" type="text" placeholder='Current Address' className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
        <ErrorMessage name="currentAddress" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Field name="postCode" type="text" placeholder='Postal Code' className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
        <ErrorMessage name="postCode" component="div" className="invalid-feedback" />
      </Col>
    </FormGroup>

  </Fragment>

);



export default PersonalDetails;
