import React from 'react'
import styled from 'styled-components'

const Homescreen = () => {
  return (
    <div>
        <Container>
            <Main>
                <Right>
                    <Placement>
                    <MainArticle>
                  <ArticleHolder>
                   <ArticleProfile>
                   <ArticleImage/>
                    <ArticleAutor>Akiola joshua</ArticleAutor>
                   </ArticleProfile>
                    <ArticleName>Lorem ipsum, dolor sit amet consectetur adipisicing.</ArticleName>
                    <ArticleContent>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus assumenda delectus maxime aliquam animi est recusandae ea quas ipsum neque.
                    </ArticleContent>
                    </ArticleHolder>
                  </MainArticle>
                    </Placement>
                </Right>
                <Left>
                    <ArticleFriendsList>
                        <Title>Suggested Friends</Title>
                        <ArticleFriendsListHolder>
                            <Holder><ArticleFriendsListImage/>
                            <ArticleFriendsListName>Richard okoro</ArticleFriendsListName></Holder>
                            <AddFriends>Follow</AddFriends>
                        </ArticleFriendsListHolder>
                    </ArticleFriendsList>
                </Left>
            </Main>
        </Container>
    </div>
  )
}

export default Homescreen

const ArticleAutor = styled.div`
font-size: 14px;
font-weight: 400;
color: #938e8e;
`

const ArticleProfile = styled.div`
display: flex;
gap: 10px;
/* justify-content: flex-end; */
align-items: flex-end;
`

const ArticleImage = styled.div`
width: 50px;
height: 50px;
border: 1px solid #98f998;
`
const ArticleContent = styled.div`
width: 87%;
font-size: 14px;
color: #938e8e;
`
const ArticleName = styled.div`
font-size: 20px;
font-weight: 600;
color: #938e8e;
`
const ArticleHolder = styled.div``

const AddFriends = styled.div`
font-size: 14px;
padding: 3px 10px;
background-color: white;
border-radius: 5px;
color: #938e8e;
font-weight: 500;
`

const ArticleFriendsListName = styled.div`
font-size: 15px;
color: #938e8e;
`

const ArticleFriendsListImage = styled.div`
height: 35px;
width: 35px;
border-radius: 50%;
border: 1px solid white;
`

const Holder = styled.div`
display: flex;
gap: 15px;
align-items: center;
`
const ArticleFriendsListHolder = styled.div`
width: 90%;
display: flex;
align-items: center;
margin: 10px 0;
justify-content: space-between;
`

const Title = styled.div`
font-size: 16px;
align-items: center;
justify-content: center;
word-spacing: 3px;
display: flex;
width: 100%;
color: #938e8e;
height: 35px;
border-bottom: 1px solid #cfc9c9;
`

const ArticleFriendsList = styled.div`
height: 300px;
width: 90%;
display: flex;
align-items: center;
flex-direction: column;
background-color: whitesmoke;
margin-top: 20px;
`
const Left = styled.div`
width: 40%;
display: flex;
/* align-items: center; */
justify-content: center;
/* background-color: silver; */
`
const Placement = styled.div`
width: 90%;
`
const MainArticle = styled.div`
height: 160px;
width: 90%;
padding: 15px 0;
display: flex;
align-items: center;
border-bottom: 1px solid #98f998;
/* background-color: #997fff; */
`
const Right = styled.div`
height: 100%;
width: 60%;
display: flex;
justify-content: center;
border-right: 1px solid #98f998;
`
const Main = styled.div`
width: 95%;
display: flex;
/* align-items: center; */
justify-content: center;
/* background-color: silver; */
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* align-items: center; */
justify-content: center;
/* background-color: aqua; */
`