// eslint-disable-next-line 
import { EuiHorizontalRule, EuiPageHeader, EuiPageBody, EuiConfirmModal} from '@elastic/eui';
import React, {useEffect, useState} from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import './Vote.css';
import { EuiText } from '@elastic/eui';
import { EuiFieldText , EuiFieldNumber, EuiTextArea, EuiDatePicker, EuiFlexGroup, EuiFlexItem, EuiButton} from '@elastic/eui';
import moment from 'moment';
import {atom, selector, useRecoilState, useRecoilValueLoadable} from 'recoil';
import { topic, sDate, dDate, eth, num,  description} from './state';

export default function(){
const topic1 = useRecoilValueLoadable(topic);
const startDate2 = useRecoilValueLoadable(sDate);
const endDate3 = useRecoilValueLoadable(dDate);
const num4 = useRecoilValueLoadable(num);
const eth5 = useRecoilValueLoadable(eth);
const description6 = useRecoilValueLoadable(description);

let [value1,  setValue1] = useRecoilState(topic);
let [value4,  setValue4] = useRecoilState(num);
let [value5,  setValue5] = useRecoilState(eth);
let [value6,  setValue6] = useRecoilState(description);
let [startDate, setStartDate] = useRecoilState(sDate);
let [endDate, setEndDate] = useRecoilState(dDate);

function deliver (){
  let challenge = {
    title : topic.contents,
    startDate : sDate.contents,
    endDate : dDate.contents,
    maxNum : num.contents,  
    ETH : eth.contents,
    description : description.contents
  } 

  console.log(challenge);
  return challenge;
}

  
  function change({input}){
      if(input="") return (<EuiText color={'danger'} size={'m'}>입력해주세요.</EuiText>)
      else return (<EuiText color={'success'} size={'m'}>{input}</EuiText>)
  }

  let onChange1 = (e) => {
    setValue1(e.target.value);
    topic.contents = e.target.value;
  };

  let onChange4 = (e) => {
    setValue4(e.target.value);
    num.contents = e.target.value;
  };

  let onChange5 = (e) => {
    setValue5(e.target.value);
    eth.contents = e.target.value;
  };

  let onChange6 = (e) => {
    setValue6(e.target.value);
    description.contents = e.target.value;
  };

  let handleChange2 = (date) => {
    setStartDate(date);
    sDate.contents = date.format("YY.MM.DD");
  };
  let handleChange3 = (date) => {
    setEndDate(date);
    dDate.contents = date.format("YY.MM.DD");
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);
  const showModal = () => {
    //console.log(topic.contents);
    console.log(dDate.contents);
    //console.log(dDate.contents);
    deliver();
    setIsModalVisible(true);
    
  }
  const moveToMain = () => {
    setIsModalVisible(false);
    console.log(topic.contents);
    window.location.href = '';
  }
  let modal;

  if (isModalVisible) {
    modal = (
      <EuiConfirmModal
        title="챌린지를 만드시겠습니까?"
        onCancel={closeModal}
        onConfirm={closeModal}
        cancelButtonText="No, don't do it"
        confirmButtonText="Yes, do it"
        defaultFocusedButton="confirm"
      >
        <p>수락 버튼을 누르면 설정하신 {eth.contents} ETH가 출금됩니다.</p>
      </EuiConfirmModal>
    );
  }

  return (
<>
<EuiPageBody paddingSize="l">
    <EuiPageHeader
      bottomBorder
      pageTitle="챌린지 개설"
      alignItems="center"
      responsive="true"
      textAlign="center"
    />
    <EuiText textAlign="center" >
    <p >1. 챌린지의 주제는 무엇인가요?</p>
    <EuiFlexGroup justifyContent="center"> 
      <EuiFieldText 
          className = "item"
          placeholder="주제를 입력하세요."
          value={topic1.contents}
          onChange={(e) => onChange1(e)}
          textAlign="center" />
    </EuiFlexGroup>
    </EuiText>
    <EuiHorizontalRule size="half" />
    
    <EuiText textAlign="center" >
      <p>2. 챌린지의 시작일은 언제인가요?</p>
      <EuiFlexGroup justifyContent="center"> 
      <EuiDatePicker selected={startDate} onChange={handleChange2} />
      </EuiFlexGroup>
    </EuiText>
    <EuiHorizontalRule size="half" />

    <EuiText textAlign="center">
        <p>3. 챌린지의 종료일은 언제인가요?</p>
        <EuiFlexGroup justifyContent="center"> 
        <EuiDatePicker selected={endDate} onChange={handleChange3} />
        </EuiFlexGroup>
       
    </EuiText>
    <EuiHorizontalRule size="half" />
    
    <EuiText textAlign="center">
        <p>4. 챌린지의 최대 참가인원은 몇 명인가요? </p>
        <EuiFlexGroup justifyContent="center"> 
            <EuiFieldNumber
                className = "item"
                placeholder="숫자를 입력하세요."
                value={num4.contents}
                onChange={(e) => onChange4(e)}
                aria-label="Use aria labels when no actual label is in use"
                step="any"
            />
            <div id='result'></div>
        </EuiFlexGroup>
    </EuiText>
    <EuiHorizontalRule size="half" />
    <EuiText textAlign="center">

    <p>5. 챌린지에 참가하기 위해 지불해야 하는 금액은 얼마인가요? (0.00 ETH)</p>
    <EuiFlexGroup justifyContent="center"> 
    <EuiFieldNumber
        className = "item"
        placeholder="숫자를 입력하세요."
        value={eth5.contents}
        onChange={(e) => onChange5(e)}
        aria-label="Use aria labels when no actual label is in use"
        step="any"
      />
       </EuiFlexGroup>

    </EuiText>
    <EuiHorizontalRule size="half" />
    <EuiText textAlign="center">
        <p>6. 챌린지를 간단히 소개해주세요!</p>
        <EuiTextArea
        placeholder="소개글을 입력하세요."
        aria-label="Use aria labels when no actual label is in use"
        value={description6.contents}
        onChange={(e) => onChange6(e)}
        />
        <div id='result'></div>
    </EuiText>
    <EuiHorizontalRule size="half" />
    <EuiFlexGroup
        gutterSize="s"
        alignItems="center"
        responsive={false}
        justifyContent="center"
        wrap
      >
    <EuiFlexItem grow={false}>
        <EuiButton fill 
          onClick={showModal} 
          type='submit'
          formAction="http://localhost:3000/"
          size="m"
          >
          Submit
        </EuiButton>
      </EuiFlexItem>
    <EuiHorizontalRule />
    </EuiFlexGroup>
    {modal}
    </EuiPageBody>
    </>
  )

  };
