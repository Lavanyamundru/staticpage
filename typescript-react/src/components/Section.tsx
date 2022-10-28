import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styled from 'styled-components'
import { boxSizing } from '@mui/system';

const Section:React.FC<{}> = () => {
  
  const [show,setShow]=React.useState(false);
  const handlemouseOver= () =>{
    setShow(true);
  };
  const handleMouseOut= () =>{
    setShow(false);
  };
  
  
  return (
    <ImageList sx={{ width: '90%', height: '70%',marginLeft:10}}>
      <ImageListItem key="Subheader" cols={4}>
       
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} onMouseOver={handlemouseOver} onMouseOut={handleMouseOut}   >
          
         
          <img
            src={`${item.img}?w=240&fit=crop&auto=format`}
            srcSet={`${item.img}?w=240 &h=240&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            
          />
          
          <ImageListItemBar position='top' style={{display:show? 'block':'none'}} sx={{background:'transparent'}}
            title={item.title}
           
           
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'Images/image1.jpeg',
    title: 'decorista',
    
  },
  {
    img: 'Images/image2.jpeg',
    title: 'r.u.home',
    
  },
  {
    img: 'Images/image3.jpeg',
    title: 'Hedda',
    
  },
  {
    img: 'Images/image4.jpeg',
    title: 'jaskesradhus',
    
  },
  {
    img: 'Images/image5.jpeg',
    title: 'decorista',
    
  },
  {
    img: 'Images/image6.jpeg',
    title: 'interiortian',
   
  },
  {
    img: 'Images/image7.jpeg',
    title: 'decovertime',
    
  },
  {
    img: 'Images/image8.jpeg',
    title: 'IDLU',
    
  },
  {
    img: 'Images/image9.jpeg',
    title: 'idaskvm',
    
  },
  {
    img: 'Images/image10.jpeg',
    title: 'StudioIn',
   
  },
  {
    img: 'Images/image11.jpeg',
    title: 'Homeaffairs',
   
  },
  {
    img: 'Images/image12.jpeg',
    title: 'Victoriasvenssonn',
    
  },
];

export default Section;
