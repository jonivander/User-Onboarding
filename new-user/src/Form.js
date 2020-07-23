import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

export default function Form (props) {
    const { 
        values, 
        submit, 
        inputChange,
        checkboxChange,
        disabled, 
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    return (
        <form className='formContainer' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>New User</h2>

                <Button className='submitbtn' color='success'>submit</Button>

                <div className ='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                    <div>{errors.civil}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>User Info</h4>

                <label>Name:&nbsp;
                    <input 
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label>Email:&nbsp;
                    <input 
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password:&nbsp;
                    <input 
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>

                <label>Role: 
                    <select
                        value={values.role}
                        onChange={onInputChange}
                        name='role' 
                    >
                    
                        <option value=''>~ Select a Role ~</option>
                        <option value='student'>Student</option>
                        <option value='alumnus'>Alumnus</option>
                        <option value='tl'>Team Lead</option>
                        <option value='instructor'>Instructor</option>
                    </select>
                </label>
            </div>

            <div className='for-group checkboxes'>
                <label>I have read and understand the Terms of Service:
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={values.checkbox.terms === true}
                        onChange={onCheckboxChange}
                    />
                </label>
            </div>
        </form>
    )


}