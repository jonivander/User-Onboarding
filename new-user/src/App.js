import React, { useEffect, useState } from 'react';
import Form from './Form';
import User from './User'
import formSchema from './formSchema'
import axios from 'axios';
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  role: '',
  checkbox: { termms: false }
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  role: '',
}

const initialUsers = []
const initialDisabled = true


function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState (initialDisabled)

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res => {
  //       setUsers(res.data)
  //     })
  //     .catch(err => {
  //       debugger
  //     })
  // }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      checkbox: {
        ...formValues.checkbox,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim(),

      checkbox: Object.keys(formValues.checkbox).filter(cb => formValues.checkbox[cb]),
    }
    postNewUser(newUser)
  }
  
  // useEffect(() => {
  //   getUsers()
  // }, [])
  
  // useEffect(() => {
  //   formSchema.isValid(formValues).then(valid => {
  //     setDisabled(!valid)
  //   })
  // }, [formValues])
  

  return (
    <div className="App">
      <header><h1>User Database</h1></header>

      <Form 
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

    {
        users.map(user => {
          return(
            <User key={user.id} details={user} />
          )
        })
    }
    </div>
  )
}

export default App;
