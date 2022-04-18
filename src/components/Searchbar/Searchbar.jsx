import React, { Component } from "react";
import { Formik, Form, Field, } from 'formik';


export class SearchBar extends Component {
  
    onFormSubmit = ({imageName}, actions) => {
        if (imageName.trim() === '') {
            return;
        };
        
        this.props.bringMeNameToSearch(imageName);
        
        actions.resetForm();
    }

    render () {
        return (
            <>
            <header className="searchbar">
                <Formik initialValues={{imageName:''}} onSubmit={this.onFormSubmit}>
                    <Form className="form">
                        <button type="submit" className="button">
                            <span className="button-label">Search</span>
                        </button>

                        <Field
                        name="imageName"
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        />
                    </Form>
                </Formik>
            </header>
            </>
        )
    
    }
}