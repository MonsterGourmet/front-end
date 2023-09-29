'use client'
import styled from "styled-components"

const Text = styled.p`
     color: var(--color-Brand1);

     font-family: 'Inter', sans-serif;
     /* font-size: 240px; */
     font-weight: 400;
     line-height: 29px;

     color: var(--color-Brand1);

     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
`
const Checkout = styled.section`
     height: auto;
     width: 100%;

     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 2.5px;
`
const SubTotal = styled.div`
     height: 50px;
     width: 100%;

     padding: 0 1.5px;

     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;

     ${Text}:first-child{
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 29px;

          color: var(--color-Grey0)     
     }

     ${Text}:last-child{
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 29px;

          color: var(--color-Brand1);
     }
`
const IncrementTotal = styled.div`
     height: 50px;
     width: 100%;

     padding: 0 1.5px;

     justify-content: flex-end;
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;
     

     ${Text}:first-child{
          font-family: 'Open Sans';
          font-size: 20px;
          font-weight: 400;
          line-height: 27px;

          color: #989898;
     }

     ${Text}:last-child{
          font-family: Open Sans;
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;

          color: #989898;
     }
`
const Total = styled.div`
     height: 50px;
     width: 100%;

     padding: 0 1.5px;

     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;
     
     ${Text}:first-child{
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 29px;

          color: var(--color-Grey0)     
     }

     ${Text}:last-child{
          font-size: 1.4rem;
          font-weight: 400;
          line-height: 29px;

          color: var(--color-Brand1);
     }
`
const Payment = styled.div`
     height: 50px;
     width: 100%;

     margin-top: 10px;
     
     padding: 2px 1.5px;

     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;

     ${Text}{
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 29px;

          color: var(--color-Grey0);     
     }
`
const Address = styled.div`
     height: 50px;
     width: 100%;

     padding: 2px 1.5px;

     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;

     ${Text}{
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 29px;

          color: var(--color-Grey0);     
     }
`
const SpaceForNotes = styled.div`
     height: 200px;
     width: 100%;

     padding: 10px;

     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 2px;

     ${Text}{
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 29px;

          color: var(--color-Grey0) 
     }

     textarea{
          height: 80%;
          width: 100%;

          padding: 10px;

          border-radius: 20px;
          border: 1px solid var(--color-Brand1);

          color: var(--color-Grey3);

          outline: none;
          resize: none;

          font-size: 1rem;
          font-family: "Inter";
          font-weight: 400;
          line-height: 24px;
     }
`
const SpaceForButtons = styled.div`
     height: 40px;
     width: 100%;     

     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;

     a{
          height: 90%;
          width: 100px;

          display: block;

          font-size: 1rem;
          font-weight: 100;
          
          .configBttn{
               height: 100%;
               width: 100%;


               font-size: 1rem;
               font-weight: 100;
          }
     }
  

     .configBttn{
          height: 100%;
          width: 150px;

          font-size: 1rem;
          font-weight: 100;
     }
    
`
export { Text, Checkout, SubTotal, IncrementTotal, Total, Payment, Address, SpaceForButtons, SpaceForNotes }