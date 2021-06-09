
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { SafeAppWeb3Modal } from '@gnosis.pm/safe-apps-web3modal';
import {
    loadWeb3,
    loadAccount
} from './actions'

import shib_token_abi from '../abis/shib.abi.json'

const shib_address = '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE'
let PROVIDER
let SHIB_TOKEN
let ACCOUNT
export const loadEthereum = async (dispatch) => {


    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {

          infuraId: "85bebd9e43b24aeeab1c6f92afbdecad",
        }
      }
    }


    const web3Modal = new SafeAppWeb3Modal({
        network: "rinkeby",
        cacheProvider: false,
        providerOptions
      });
     web3Modal.clearCachedProvider();

      PROVIDER = await web3Modal.connect();
      const web3 = new Web3(PROVIDER);
    
      let network = await web3.eth.net.getId()
      let networkType = await web3.eth.net.getNetworkType()
     
      if (network !== 1) {
        // display testnet warning
        //dispatch(loadWarning('You are currently connected to the ' + networkType + ' Testnet'))
        
      }

    SHIB_TOKEN = new web3.eth.Contract(shib_token_abi,shib_address)
    
    const accounts = await web3.eth.getAccounts()

    ACCOUNT = accounts[0]
      
     
    dispatch(loadWeb3(web3))
    dispatch(loadAccount(ACCOUNT))
         
}


export const transaction = async (dispatch, web3, amount) => {


if(amount <= 0){
   
}else
{
  const formatedAmount = Web3.utils.toWei(amount.toString())

  let result = await SHIB_TOKEN.methods.burn(formatedAmount).send({ from: ACCOUNT, gasLimit: 500000 })

  console.log(result)
}


}