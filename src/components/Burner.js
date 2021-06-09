import React from "react";
import styled from "styled-components";
import {web3Selector} from '../store/selectors'
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {amountChanged} from '../store/actions'
import {transaction} from '../store/interactions'
import {amountSelector} from '../store/selectors'




const BurnForm = (dispatch,web3,amount) => {
    return (
        <BurnerFormWrapper>
           <BurnerFormRow>
            <input 
             type="number"
             step="1"
             onChange={ (e) => dispatch(amountChanged(e.target.value))  }
            />
            </BurnerFormRow>
            
            <BurnerFormRow>
            <Button onClick={ (e) => { transaction(dispatch,web3,amount)  }} variant="outline-warning">BURN</Button>
            </BurnerFormRow>
        </BurnerFormWrapper>
    )
}



const Burner = () => {

    const dispatch = useDispatch();
    const web3 = useSelector(web3Selector)
    const amount = useSelector(amountSelector)

    return (

        <BurnerWrapper>
         { web3 ? BurnForm(dispatch, web3.web3,amount) : null  }
      
         </BurnerWrapper>
    )





}

export default Burner



const BurnerWrapper = styled.div`
  position:absolute;
  top: 90px;
  bottom:0px;
  text-align:center;
  width:100%;
  background: #000000;
  align-items: center;
  justify-content: center;
  color:#ffffff;
`;

const BurnerFormWrapper = styled.div`
  display:flex;
  top: 90px;
  margin:auto;
  height: 500px;
  width:400px;
  background: #000000;
  align-items: top;
  justify-content: center;
  border:1px solid #e8ae22;
  color:#ffffff;
  border-radius: 10px;
  padding:10px;
`;


const BurnerFormRow = styled.div`
  
  position:relative;
  margin:auto;
  height: 50px;
  width:400px;


`;




