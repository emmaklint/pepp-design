import styled from "styled-components";

const ColorCircle = styled.div`
background-color: ${props => props.color || "black"};
border: ${props => props.color === "#ffffff" ? "1px solid black" : "0px"};
position: relative;
border-radius: 50%;
width: ${props => props.size || "100%"};
height: auto;
padding-top: ${props => props.size || "100%"}
`

export default ColorCircle