import React from "react";
import styled from "styled-components";
import {web3Selector} from '../store/selectors'
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

import { loadEthereum} from '../store/interactions'
import {accountSelector} from '../store/selectors'





const Account = (props) => {
  
  return (
<AddressWrapper>
{props.account}

</AddressWrapper>
  )

}



const Navigator = () => {

    const dispatch = useDispatch();
    const web3 = useSelector(web3Selector)
    const account = useSelector(accountSelector)
    const props = {dispatch, account }
    return (

        <NavWrapper>
            <AccountWrapper>
             { web3 ? Account(props) : <Button onClick={ (e) => {  loadEthereum(dispatch) }} variant="outline-warning">Connect</Button>}  
               
            </AccountWrapper>
        </NavWrapper>

    )





}

export default Navigator



const NavWrapper = styled.div`
  position: relative;
  height: 90px;
  background: #000000;
  text-align: center;
`;

const AccountWrapper = styled.div`
  float:right;
  height: 90px;
  padding: 10px;
  background: #000000;
  text-align: center;
  width: 400px;
  color: #ffffff;
`;



const AddressWrapper = styled.div`
  position: relative;
  color: #e8ae22;
  
`;
