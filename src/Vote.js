// eslint-disable-next-line 
import { EuiHorizontalRule, EuiPageHeader, EuiPageBody, EuiConfirmModal} from '@elastic/eui';
import React, {useState} from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import './Vote.css';
import { EuiText } from '@elastic/eui';
import { EuiFieldText , EuiFieldNumber, EuiTextArea, EuiDatePicker, EuiFlexGroup, EuiFlexItem, EuiButton} from '@elastic/eui';
import moment from 'moment';


export default function() {
  
let [value1,  setValue1] = useState('');
let [value4,  setValue4] = useState('');
let [value5,  setValue5] = useState('');
let [value6,  setValue6] = useState('');
let [startDate, setStartDate] = useState(moment());
let [endDate, setEndDate] = useState(moment());

let challenge = {
  title : value1,
  startDate : startDate,
  endDate : endDate,
  maxNum : value4,  
  ETH : value5,
  description : value6
}

function deliver ({dataSet}){
  let challenge = {
    title : value1,
    startDate : startDate,
    endDate : endDate,
    maxNum : value4,  
    ETH : value5,
    description : value6
  } 


  
}

  
  function change({input}){
      if(input="") return (<EuiText color={'danger'} size={'m'}>입력해주세요.</EuiText>)
      else return (<EuiText color={'success'} size={'m'}>{input}</EuiText>)
  }

  let onChange1 = (e) => {
    setValue1(e.target.value1);
  };

  let onChange4 = (e) => {
    setValue4(e.target.value4);
  };

  let onChange5 = (e) => {
    setValue5(e.target.value5);
  };

  let onChange6 = (e) => {
    setValue6(e.target.value6);
  };

  let handleChange2 = (date) => {
    setStartDate(date);
  };
  let handleChange3 = (date) => {
    setEndDate(date);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);
  const showModal = () => {
    console.log(setValue1);
    setIsModalVisible(true);
    
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
        <p>수락 버튼을 누르면 설정하신 0.02 ETH가 출금됩니다.</p>
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
          value={value1}
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
                value={value4}
                onChange={(e) => onChange4(e)}
                aria-label="Use aria labels when no actual label is in use"
                step="any"
            />
            <div id='result'></div>
        </EuiFlexGroup>
    </EuiText>
    <EuiHorizontalRule size="half" />
    <EuiText textAlign="center">

    <p>5. 챌린지에 베팅해야 하는 금액은 얼마인가요? (0.00 ETH)</p>
    <EuiFlexGroup justifyContent="center"> 
    <EuiFieldNumber
        className = "item"
        placeholder="숫자를 입력하세요."
        value={value5}
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
        value={value6}
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
          formAction="http://localhost:3000/vote3"
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
