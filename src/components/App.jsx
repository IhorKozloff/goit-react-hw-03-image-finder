import React, { Component } from "react";
import {SearchBar} from 'components/Searchbar/Searchbar';
import {ModalWindow} from 'components/Modal/Modal';
import ImageGallary from 'components/ImageGallery/ImageGallery';
import {LoadMoreBtn} from 'components/Button/Button';
import {Loader} from 'components/Loader/Loader';


export class App extends Component {

  state = {
    searchRequest: '',
    modalUrl:'',
    loaderStatus: 'off',
  }





  setSearchingImage = (name) => {
    this.setState({searchRequest: name});
  }

  setModalUrl = (url) => {
    this.setState({modalUrl: url});
  }
  setloaderStatus = (status) => {
    this.setState({loaderStatus: status});
  }

  

  render () {
    
    const {searchRequest, modalUrl, loaderStatus} = this.state
    
    return (
      <>
        {loaderStatus === 'on' && <Loader/>}
        <SearchBar bringMeNameToSearch={this.setSearchingImage}/>

        <ImageGallary request={searchRequest} setModalUrl={this.setModalUrl} changeLoaderStatus={this.setloaderStatus}/>
        
        <LoadMoreBtn/>

        <ModalWindow modalContent={modalUrl}/>
        
      </>
    );
  }
};
