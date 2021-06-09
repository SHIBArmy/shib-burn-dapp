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
           <BurnerParagraph>
             BURN YOUR SHIBA INU HERE
            </BurnerParagraph>

           <BurnerFormRow>
            <StyledInput
             type="number"
             step="1"
             min="1"
             onChange={ (e) => dispatch(amountChanged(e.target.value))  }
             required
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
  align-items: top;
  justify-content: center;
  color:#ffffff;
  background-image:url('https://shibarmy.github.io/shib-burn-dapp/assets/burn-shiba.jpg');
  background-repeat: no-repeat;
  background-size: contain;
`;

const BurnerFormWrapper = styled.div`

  top: 100px;
  margin-right:25%;
  margin-left:auto;
  height: 500px;
  width:400px;
  align-items: top;
  justify-content: center;
  border:1px solid #e8ae22;
  color:#ffffff;
  border-radius: 10px;
  padding:10px;
  box-shadow: 2px 2px 5px #e8ae22;
  &:hover {
    box-shadow: 5px 5px 10px #830100;
  }
`;


const BurnerFormRow = styled.div`

  position:relative;
  margin:auto;
  height: 50px;
  width:400px;
  margin-bottom:10px;


`;


const StyledInput = styled.input`

border-radius: 10px;
height:40px;
margin-bottom:10px;
`;

const BurnerParagraph = styled.p`
font-weight:600;
color:red;
font-size:25px;
`;


