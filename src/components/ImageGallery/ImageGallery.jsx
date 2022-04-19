import React, {Component} from "react";
import {searchByName} from 'components/API';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';
import {GallaryList} from 'components/ImageGallery/ImageGallery.styled';



export default class ImageGallery extends Component  {

    state = {
        dataToRender:null
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.request !== this.props.request) {



            this.props.changeLoaderStatus(true);

            
            setTimeout(() => {
                searchByName(this.props.request).then(data => {
                    this.setState({dataToRender: data})
                    
                }).finally(() => {
                    this.props.changeLoaderStatus(false);
                    this.props.setMoreBtnStatus(true);
                }) 
            }, 1000)
        }


        
    }

    onItemClick = (event) => {

        if (event.target.nodeName !== 'IMG') {
            return
        }
        
        const currentItem = this.state.dataToRender.filter(item => `${item.id}` === event.target.id) 
        const currentUrl = currentItem[0].largeImageURL
        console.log(currentUrl)
        this.props.setModalUrl(currentUrl)
        this.props.setModalStatus(true)
        
    }

    render () {
        

        return (
           
            <GallaryList>


               {this.state.dataToRender && this.state.dataToRender.map(item => {
                   return (
                       <ImageGalleryItem key={item.id} id={item.id} imageMin={item.webformatURL} onItemClick={this.onItemClick}/>
                   )
               })}

               {this.props.onMoreBtn.length !== 0 && this.props.onMoreBtn.map(item => {
                   return (
                    <ImageGalleryItem key={item.id} id={item.id} imageMin={item.webformatURL} onItemClick={this.onItemClick}/>
                )
               })}

            </GallaryList>

            
        )
            
        
    
    }
    

       
    
};