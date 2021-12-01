import React, {useEffect, useState} from 'react';
import 'MyChallengeTab.css';
import {
    EuiBreadcrumbs,
    EuiButton,
    EuiPageContent,
    EuiPageHeader,
    EuiSpacer,
    EuiText
  } from '@elastic/eui';
import {Modal,Button} from 'react-bootstrap';
import {description, eth, num, topic} from './state';

function MyChallengeTab() {
    return (

      <div className="challenge1">
         <div className="nowChallenge" style={{ fontWeight: "bold", color:"4582ec"}}>
           진행중
         </div>
        <div className="details">
      <div className="challengeTitle1">
        {topic.contents}
      </div>
      <div className="challengeText1">
      {description.contents}
      </div>
      <div className="bottomBox1">
        <div className="cost">
        챌린지 도전 금액:&nbsp;
        <img className="eth_logo" alt="eth_logo" src="img/eth_logo.png" />
        {eth.contents}ETH
            </div>
            <div className="challengeStatus1">

            </div></div>
          <div className="clicks">

            <Button style={{ marginRight: 10 }}> 검증서류 제출 </Button>
            <Button style={{ backgroundColor: 'white', color: '#4582ec' }}> 타인 검증하기 </Button>
          </div>
        </div>
    </div>
      );}
export default MyChallengeTab;
