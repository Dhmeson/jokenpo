import styled from "styled-components"
export const Container=styled.div`
display:flex ;width:100vw;background-color:black;height:100vh;flex-direction:column;

`
type DisplayTextResult={
    
    listColors:Array<string>,
    index:number,
    visibleState:boolean,
    size:string;
}
type DisplayMessage={
    visibleState:boolean
}
export const Text=styled.div<DisplayTextResult>`
color:${prop=>prop.listColors[prop.index]} ;
display:${prop=>prop.visibleState?"flex":"none"} ;
font-size:${prop=>prop.size+"rem"} ;

`
export const CountText=styled.div`
color:white;
margin-left:0.5rem ;
font-size:1.3rem ;
text-align:center ;

`
export const GridDisplayResult=styled.div`
display:flex ;width:100vw;height:10%;justify-content:center;align-items:center;

`
export const DisplayResult=styled.div`
width:100%;display:flex;justify-content:center;align-items:center;

`

export const GameTable=styled.div`
width:100%;display:flex;justify-content:center;margin-top:2rem;

`
export const Card=styled.div`
min-width:8rem ;min-height:9rem;background-color:#12BFBC;border:2px solid #1285BF;max-width:8rem;max-height:9rem;padding:5px;border-radius:5px;
box-shadow: 1px 2px #1285BF;box-sizing:border-box;

`
export const Icon=styled.img`
width:100% ;height:auto;
`
export const DisplayMessageResult=styled.div`
width:100%;display:flex;justify-content:center;margin-top:2rem;
`
export const Message=styled.div<DisplayMessage>`
background-color:#7A848E ;max-width:20rem;min-width:18rem;min-height:4rem;display:flex;align-items:center;justify-content:center;
border-radius:5rem ;display:${prop=>prop.visibleState?"flex":"none"} ;
`
export const DisplayHand=styled.div`
width:80%;display:flex;justify-content:center;margin-top:2rem;align-items:center;align-self:center;

`
export const ButtonCard=styled.div`
min-width:6rem ;min-height:9rem;background-color:#12BFBC;border:2px solid #1285BF;max-width:8rem;max-height:9rem;padding:5px;border-radius:5px;
box-shadow: 1px 2px #1285BF;box-sizing:border-box;margin-left:0.5rem;display:flex;align-items:center;justify-content:center;
:hover{
    cursor: pointer;
}
`

