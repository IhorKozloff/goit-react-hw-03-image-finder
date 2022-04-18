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
    loaderStatus: 'off',
    onMoreBtnData:[],
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


  setOnMoreBtnData = (name) => {
    
    searchMore(name).then(data => {
      this.setState(prevState => {
        return {onMoreBtnData: [...prevState.onMoreBtnData,...data]}
      })
    }).finally(() => {
      this.setloaderStatus('off');
    })
  }


  onMoreBtnClick = (moreRequest) => {
    this.setloaderStatus('on');
    this.setOnMoreBtnData(moreRequest)
  }
  


  

  render () {
    
    const {searchRequest, modalUrl, modalWindowStatus, loaderStatus, onMoreBtnData} = this.state
    
    return (
      
      
      <AppStyled>
        {loaderStatus === 'on' && <Loader/>}

        <SearchBar bringMeNameToSearch={this.setSearchingImage}/>

        <ImageGallary 
          request={searchRequest} 
          onMoreBtn={onMoreBtnData} 
          setModalUrl={this.setModalUrl} 
          changeLoaderStatus={this.setloaderStatus}
          setModalStatus={this.setModalStatus} 
        />
          
        <LoadMoreBtn  onMoreBtnClick={() => {
                        this.onMoreBtnClick(searchRequest)
                      }}
        />

        {modalWindowStatus && 
        <ModalWindow>
          <img src={modalUrl} alt={'dgdvhfgfhg'}></img>
        </ModalWindow>}
      </AppStyled>
      
        
        
    
    );
  }
};
