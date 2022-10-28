import React from 'react'
import styled from 'styled-components'

const Nav:React.FC<{}> = () => {
 const Nav =styled.nav`
    width:100%;
    height:60px;
    background-color :'lightgreen';
    border-bottom:1px solid grey;
     `;
     const Img =styled.img`
     height:50px;
     width:50px;
    `
     
     const Input =styled.input`
     background-color:Black;
     color:white;
     margin-left:700px;
     height:20px;
     margin-top:20px;
     margin-right:200px;
     width:300px;
      float:right;
      border-radius:3px;`
    
      const Button = styled.button`
     background-color:Black;
     color:white;
     float:right;
     height:23px;
     margin-top:-35px;
     margin-right:10px;`
     
     
     
  return (
    <div>
    <Nav>
        <Img src='Logo.jpeg' alt="picture"></Img>
        <Input type="text" placeholder="search" className='sear'></Input>
        <Button>Create Account</Button>
        
    </Nav>
    </div>
  )
}

export default Nav