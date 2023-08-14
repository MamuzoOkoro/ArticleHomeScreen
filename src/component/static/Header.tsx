import React from 'react'
import styled from 'styled-components'
import { BsSearch} from "react-icons/bs"
import { TfiWrite} from "react-icons/tfi"
import { BsBell} from "react-icons/bs"

const Header = () => {
  return (
    <div>
        <Container>
            <Main>
               <Hold>
               <Logo>Team 4</Logo>
                <InputHolder>
                <Icon><BsSearch/></Icon>
                <Input placeholder='Search'/>
                </InputHolder>
               </Hold>
               <Box>
               <BOx>
               <Icon1><TfiWrite/></Icon1>
                <Word>write</Word>
               </BOx>
                <Icon1><BsBell/></Icon1>
                <Profile></Profile>
               </Box>
            </Main>
        </Container>
    </div>
  )
}

export default Header

const BOx = styled.div`
display: flex;
align-items: center;
color: #938e8e;
`

const Word = styled.div``

const Profile = styled.div`
height: 35px;
width: 35px;
border-radius: 50%;
border: 1px solid  #98f998;
`

const Box = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

const Icon1 = styled.div`
font-size: 20px;
margin-right: 10px;
color: #938e8e;
font-weight: 700;
`
const Icon = styled.div`
font-size: 20px;
margin-right: 10px;
color: white;
font-weight: 700;
`

const Hold = styled.div`
display: flex;
align-items: center;
gap: 20px;
/* background-color: red; */
`

const Input = styled.input`
/* width: 200px; */
height: 30px;
outline: none;
border: none;
color: white;
background-color: #98f998;
::placeholder{
    color: white;
    caret-color: #98f998;
}
`

const InputHolder = styled.div`
height: 15px;
display: flex;
border-radius: 40px;
align-items: center;
padding: 10px 10px;
justify-content: center;
background-color: #98f998;
`

const Logo = styled.div`
color: #58f958;
font-size: 24px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: silver; */
`

const Container = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 1px solid #9bfc9b;
background-color: white;
`