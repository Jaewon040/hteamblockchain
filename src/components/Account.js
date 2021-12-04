
import React, { useState, useEffect } from 'react';
import { useMoralis, useChain } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters"
import Blockie from "./Blockie"

// import MyChallengeTab from 'MyChallengeTab.css';


function Account() {
  const { switchNetwork, chainId } = useChain();
  const { authenticate, isWeb3Enabled, isAuthenticated, logout, account, enableWeb3 } = useMoralis();
  const default_network = "0x3"

  useEffect(() => {
    if(!isWeb3Enabled) enableWeb3();
    else if (!chainId) switchNetwork(default_network);
    else if (chainId !== default_network) switchNetwork(default_network);
  }, [chainId]);

return (
    isAuthenticated ? 
        <button className="navWallet" onClick={() => logout()}> 
            {getEllipsisTxt(account, 4)} 
            {<Blockie currentWallet scale={3}/>}
        </button> :
        <button className="navWallet" onClick={() => authenticate({ signingMessage: "Welcome to MyChallenge!" })}> 
          Authenticate
        </button>
        
    )
};

export default Account;
