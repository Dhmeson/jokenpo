import React, {  useState } from 'react';
import { ImageList } from './functions/ImageList';
import './App.css';
import {Container,Text,GridDisplayResult,DisplayResult,CountText,Card,GameTable,Icon,Message,DisplayMessageResult,
ButtonCard,DisplayHand} from "./style"
const TextColors=["#1ED12C","#D11E1E","#D0C818"]

function App() {
  const [SelectCard,setSelectCard]=useState<number>(0)
  const [ComputerCard,setComputerCard]=useState<number>(0);
  const [Result,setDisplayResult]=useState<boolean>(false)
  const [ResultText,setResultText]=useState<string>("")
  const [countWins,setWins]=useState<number>(0)
  const [countDraw,setDraw]=useState<number>(0)
  const [countLoses,setLoses]=useState<number>(0)

 

  function ChooseCard(i:number){
    if(!Result){
      setSelectCard(i)
      ComputerChoice(i)
    }
  }
   function ComputerChoice(player:number){
    var n=Math.round( Math.random()+1+Math.round(Math.random()));
    setComputerCard(n)
    CheckWinner(n,player)
    
  }
  function ShowDisplayResult(txt:string){ 
    setResultText(txt)
    setDisplayResult(true);
    setTimeout(()=>{
      setDisplayResult(false);
      setComputerCard(0)
      setSelectCard(0)
     
    },1300)
    
  }
   function CheckWinner(n:number,p:number){
    if(p===1 && n===1){ShowDisplayResult("Draw");setDraw(countDraw+1)}
    if(p===1 && n===2){ShowDisplayResult("Lose");setLoses(countLoses+1)}
    if(p===1 && n===3){ShowDisplayResult("Win");setWins(countWins+1)}

    if(p===2 && n===2){ShowDisplayResult("Draw");setDraw(countDraw+1)}
    if(p===2 && n===3){ShowDisplayResult("Lose");setLoses(countLoses+1)}
    if(p===2 && n===1){ShowDisplayResult("Win");setWins(countWins+1)}

    if(p===3 && n===3){ShowDisplayResult("Draw");setDraw(countDraw+1)}
    if(p===3 && n===2){ShowDisplayResult("Win");setWins(countWins+1)}
    if(p===3 && n===1){ShowDisplayResult("Lose");setLoses(countLoses+1)}
  }
  return (
    <Container>
      <GridDisplayResult>
        <DisplayResult>
          <Text listColors={TextColors} index={0} visibleState={true} size={"1.5"}>Win:</Text>
          <CountText>{countWins}</CountText>
        </DisplayResult>
        <DisplayResult>
          <Text listColors={TextColors} index={1} visibleState={true} size={"1.5"}>Lose:</Text>
          <CountText>{countLoses}</CountText>
        </DisplayResult>
        <DisplayResult>
          <Text listColors={TextColors} index={2} visibleState={true} size={"1.5"}>Draw:</Text>
          <CountText>{countDraw}</CountText>
        </DisplayResult>
      </GridDisplayResult>
      <GameTable>
        <Card>
          <Icon src={ImageList[SelectCard]}></Icon>
        </Card>
        <h1>X</h1>
        <Card>
          <Icon src={ImageList[ComputerCard]}></Icon>
        </Card>
      </GameTable>
      <DisplayMessageResult>
        <Message visibleState={Result}>
          <Text listColors={TextColors} index={2} visibleState={true} size={"3"}>{ResultText}</Text>
        </Message>
      </DisplayMessageResult>
      <DisplayHand>
        <ButtonCard onClick={()=>ChooseCard(1)}>
          <Icon src={ImageList[1]}></Icon>
        </ButtonCard>
        <ButtonCard onClick={()=>ChooseCard(2)}>
          <Icon src={ImageList[2]}></Icon>
        </ButtonCard>
        <ButtonCard onClick={()=>ChooseCard(3)}>
          <Icon src={ImageList[3]}></Icon>
        </ButtonCard>
      </DisplayHand>
      
      
    </Container>
  );
}

export default App;
