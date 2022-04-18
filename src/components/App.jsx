import React, { Component } from "react";
import {SearchBar} from 'components/Searchbar/Searchbar';
import {ModalWindow} from 'components/Modal/Modal';
import ImageGallary from 'components/ImageGallery/ImageGallery';
import {LoadMoreBtn} from 'components/Button/Button';


export class App extends Component {

  state = {
    searchRequest: '',
    modalUrl:'',
  }


  setSearchingImage = (name) => {
    this.setState({searchRequest: name});
  }

  setModalUrl = (url) => {
    this.setState({modalUrl: url});
  }

  

  render () {
    
    const {searchRequest, modalUrl} = this.state
    
    return (
      <>
        <SearchBar bringMeNameToSearch={this.setSearchingImage}/>

        <ImageGallary request={searchRequest} setModalUrl={this.setModalUrl}/>
        
        <LoadMoreBtn/>

        <ModalWindow modalContent={modalUrl}/>
        
      </>
    );
  }
};
