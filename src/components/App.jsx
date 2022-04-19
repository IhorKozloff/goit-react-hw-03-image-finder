import React, { Component } from "react";
import {SearchBar} from 'components/Searchbar/Searchbar';
import {ModalWindow} from 'components/Modal/Modal';

import ImageGallary from 'components/ImageGallery/ImageGallery';
import {LoadMoreBtn} from 'components/Button/Button';
import {Loader} from 'components/Loader/Loader';
import {AppStyled} from 'components/App.styled';
import {searchMore} from 'components/API';



export class App extends Component {

  state = {
    searchRequest: '',
    modalUrl:'',
    loaderStatus: false,
    onMoreBtnData:[],
    moreBtnStatus: false,
    modalWindowStatus: false,

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
  setModalStatus = (status) => {
    this.setState({modalWindowStatus: status});
  }
  setMoreBtnStatus = (status) => {
    this.setState({moreBtnStatus: status});
  }


  setOnMoreBtnData = (name) => {

    this.setloaderStatus(true);

    setTimeout(() => {
      searchMore(name).then(data => {
        this.setState(prevState => {
          return {onMoreBtnData: [...prevState.onMoreBtnData,...data]}
        })
      }).finally(() => {
        this.setloaderStatus(false);
      })
    }, 1000)
  }


  onMoreBtnClick = (moreRequest) => {
    this.setloaderStatus(true);
    this.setOnMoreBtnData(moreRequest)
  }
  


  

  render () {
    
    const {searchRequest, modalUrl, modalWindowStatus, loaderStatus, onMoreBtnData, moreBtnStatus} = this.state
    
    return (
      
      
      <AppStyled>
        {loaderStatus === true && <Loader/>}

        <SearchBar bringMeNameToSearch={this.setSearchingImage}/>

        <ImageGallary 
          request={searchRequest} 
          onMoreBtn={onMoreBtnData} 
          setModalUrl={this.setModalUrl} 
          changeLoaderStatus={this.setloaderStatus}
          setModalStatus={this.setModalStatus}
          setMoreBtnStatus={this.setMoreBtnStatus} 
        />
          
        {moreBtnStatus && <LoadMoreBtn  onMoreBtnClick={() => {
                        this.onMoreBtnClick(searchRequest)
                      }}
        />}

        {modalWindowStatus && 
        <ModalWindow onCloseClick={this.setModalStatus}>
          <img src={modalUrl} width={900} height={700} alt={'content'}></img>
        </ModalWindow>}
      </AppStyled>
      
        
        
    
    );
  }
};
