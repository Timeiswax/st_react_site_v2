// JavaScript Document

import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Header from '../components/header'
import galleryData from '../public/js/galleryData'

import "react-image-gallery/styles/css/image-gallery.css";


const PhotoGallery = () => {

    return (  
        <div>
            <Header />
            <div className="full-page">
                <div className="col" style={{justifyContent:"flex-start"}}>
                    <h1 style={{margin:"30px"}}>Gallery</h1>
                    <ImageGallery items={galleryData} />
                </div>
            </div>
        </div>
        
    );
}
 
export default PhotoGallery;

