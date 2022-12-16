//import { Rick } from "../data";
import styled from 'styled-components'

const DivStyle = styled.div`
width : 20vw;
border : 5px solid rgba(255, 255, 255, 0.3); 
border-radius : 10px;
position : relative; 
display: inline-block;
margin : 5px 20px; 
background : white; 
background-clip: padding-box;`

const ButtonStyled = styled.button`
margin-left : 17.5vw; 
background : red;
color : white; 
border : 1px solid black; 
border-radius : 5px;`
const ImgStyled = styled.img`
width : 20vw;
margin-top : 5px;`

const Name = styled.h2`
position : absolute;
top : 65%;
left : 2%;
color : white; 
font-size : 15px;
background : black;
opacity : 0.7; 
padding : 5px;`
const Other = styled.h3`
font-size : 17px; 
text-align : left;
padding-left : 50px;`

export default function Card(props) {

   return (
      <DivStyle>
      
            <ButtonStyled onClick={props.onClose}>X</ButtonStyled>
            <ImgStyled src={props.image} alt={props.name} />
            <Name>{props.name}</Name>
            <Other>{ props.species }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { props.gender }</Other>

      </DivStyle>

   );
}
