import React from 'react'
import styled from 'styled-components'


const Footer:React.FC<{}> = () => {
  const Footer =styled.div`
  background-color:black;
  color:white;
  padding:10px;
  position:fixed;
  bottom:0px;
  width:100%;
  `
  const A =styled.a`
  font-size:medium;
  margin:20px;
  color:white`
return (

    <div>
       <Footer>
        Esther's
        <A href='#'> About us</A>
        <A href='#'> contact us</A>
        <A href='#'> Blog</A>
        <A href='#'>Cookie policy</A>
        </Footer>
       
  </div>
  )
}

export default Footer