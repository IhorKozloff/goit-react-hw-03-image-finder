import React, { Component } from "react";
import { Formik } from 'formik';
import {SearchBarHead, FormStyled, FieldStyled, SearchBtn, SearchBtnLabel} from 'components/Searchbar/Searchbar.styled';


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
            <SearchBarHead className="searchbar">
                <Formik initialValues={{imageName:''}} onSubmit={this.onFormSubmit}>
                    <FormStyled className="form">
                        <SearchBtn type="submit" className="button">
                            <SearchBtnLabel className="button-label">Search</SearchBtnLabel>
                        </SearchBtn>

                        <FieldStyled
                        name="imageName"
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        />
                    </FormStyled>
                </Formik>
            </SearchBarHead>
            </>
        )
    
    }
}