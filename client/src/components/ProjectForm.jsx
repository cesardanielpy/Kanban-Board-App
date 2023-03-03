import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProjectForm = ({ initialValues, formAction }) => {
    
    const projectSchema = Yup.object().shape({
        description: Yup.string()
            .required('Required.')
            .min(3, 'Too short.'),
        dueDate: Yup.date()
            .required('Required')
    })

    const handleSubmit = (values, actions) => {
        console.log(values)
        formAction(values)
        actions.resetForm(initialValues);
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={projectSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isValid, dirty }) => (
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>Plan a new project</h3>
                        <Form className='p-4' noValidate>
                            <div className='form-group row mb-3'>
                                <label className='col-form-label col-lg-2 ' style={{ fontSize: '20px', fontWeight: 'bold' }}>Description</label>
                                <div className='col-lg-4'>
                                    <Field name="description" className={`form-control ${touched.description && errors.description ? 'is-invalid' : '' }`} placeholder="" />
                                    <ErrorMessage name='description' render={msg => <span className='invalid-feedback' style={{fontSize: '16px', fontWeight: 'bold'}}>{msg}</span>} />
                                </div>
                            </div>
                            <div className='form-group row mb-3'>
                                <label className='col-form-label col-lg-2 ' style={{ fontSize: '20px', fontWeight: 'bold' }}>Due Date</label>
                                <div className='col-lg-4'>
                                    <Field name="dueDate" type="date" className={`form-control ${touched.dueDate && errors.dueDate ? 'is-invalid' : '' }`} placeholder="" />
                                    <ErrorMessage name='dueDate' render={msg => <span className='invalid-feedback' style={{fontSize: '16px', fontWeight: 'bold'}}>{msg}</span>} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2"> Plan project</button>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default ProjectForm;