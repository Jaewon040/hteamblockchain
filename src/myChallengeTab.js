import React, {useEffect, useState} from 'react';
import './MyChallengeTab.css';
import {
    EuiBreadcrumbs,
    EuiButton,
    EuiPageContent,
    EuiPageHeader,
    EuiSpacer,
    EuiText,
    EuiModal,
    EuiModalBody,
    EuiModalFooter,
    EuiModalHeader,
    EuiModalHeaderTitle,
    EuiFilePicker,
    EuiFlexGrid,
    EuiFlexItem,
    EuiRadioGroup,
    EuiCard

  } from '@elastic/eui';
import {Modal,Button} from 'react-bootstrap';
import {description, eth, num, topic} from './state';
import { useGeneratedHtmlId } from '@elastic/eui';

function MyChallengeTab() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);
  const closeModal2 = () => setIsModal2Visible(false);
  const showModal2 = () => setIsModal2Visible(true);

  let modal; let modal2;

  const [files, setFiles] = useState({});
  const [large, setLarge] = useState(true);

  const filePickerId = useGeneratedHtmlId({ prefix: 'filePicker' });


  const onChange = (files) => {
    setFiles(files.length > 0 ? Array.from(files) : []);
  };

  const onSubmit = () => {
    window.location.href = '/';
  };

  const renderFiles = () => {
    if (files.length > 0) {
      return (
        <ul>
          {files.map((file, i) => (
            <li key={i}>
              <strong>{file.name}</strong> ({file.size} bytes)
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p>나의 기록을 증명할 파일을 올리세요.</p>
      );
    }
  };

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={closeModal}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            <h5>검증 서류를 제출해주세요.</h5>
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
          <EuiFilePicker
              id={filePickerId}
              multiple
              initialPromptText="Select or drag and drop multiple files"
              onChange={onChange}
              display={large ? 'large' : 'default'}
              aria-label="Use aria labels when no actual label is in use"
            />
          <EuiSpacer />
         
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButton onClick={closeModal} fill>
            Submit
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }

  const radioGroupItem = [
    (useGeneratedHtmlId({ prefix: 'radioGroup0_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup0_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup1_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup1_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup2_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup2_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup3_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup3_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup4_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup4_disagree' })),  
    
  ];

  const [nestedRadio0, setNestedRadio0] = useState(radioGroupItem[0]);
  const [nestedRadio1, setNestedRadio1] = useState(radioGroupItem[2]);
  const [nestedRadio2, setNestedRadio2] = useState(radioGroupItem[4]);
  const [nestedRadio3, setNestedRadio3] = useState(radioGroupItem[6]);
  const [nestedRadio4, setNestedRadio4] = useState(radioGroupItem[8]);
 

  const radios = [
    [{ id: radioGroupItem[0], label: 'Agree'},{id: radioGroupItem[1], label: 'Disagree'}],
    [{ id: radioGroupItem[2], label: 'Agree'},{id: radioGroupItem[3], label: 'Disagree'}],
    [{ id: radioGroupItem[4], label: 'Agree'},{id: radioGroupItem[5], label: 'Disagree'}],
    [{ id: radioGroupItem[6], label: 'Agree'},{id: radioGroupItem[7], label: 'Disagree'}],
    [{ id: radioGroupItem[8], label: 'Agree'},{id: radioGroupItem[9], label: 'Disagree'}],

  ];

  const cardFooterContent = [
    (<EuiRadioGroup options={radios[0]} idSelected={nestedRadio0} onChange={(nestedRadio0) => setNestedRadio0(nestedRadio0)}/>),
    (<EuiRadioGroup options={radios[1]} idSelected={nestedRadio1} onChange={(nestedRadio1) => setNestedRadio1(nestedRadio1)}/>),
    (<EuiRadioGroup options={radios[2]} idSelected={nestedRadio2} onChange={(nestedRadio2) => setNestedRadio2(nestedRadio2)}/>),
    (<EuiRadioGroup options={radios[3]} idSelected={nestedRadio3} onChange={(nestedRadio3) => setNestedRadio3(nestedRadio3)}/>),
    (<EuiRadioGroup options={radios[4]} idSelected={nestedRadio4} onChange={(nestedRadio4) => setNestedRadio4(nestedRadio4)}/>),
  ];

  if(isModal2Visible) {
    modal2 = (
      <EuiModal style={{ width: 800 }} onClose={closeModal2}>
        <EuiModalHeader>
          <EuiModalHeaderTitle>
            <h5>타인의 기록에 투표해주세요.</h5>
          </EuiModalHeaderTitle>
        </EuiModalHeader>

        <EuiModalBody>
        <EuiFlexGrid columns={3}>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src="https://source.unsplash.com/400x200/?Nature" alt="Nature"/>
          </div>
        }
        title= "#5602의 기록"
        footer={cardFooterContent[0]}
        >
      </EuiCard>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src="https://source.unsplash.com/400x200/?Nature" alt="Nature"/>
          </div>
        }
        title= "#1209의 기록"
        footer={cardFooterContent[1]}
        >
      </EuiCard>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src="https://source.unsplash.com/400x200/?Nature" alt="Nature"/>
          </div>
        }
        title= "#0081의 기록"
        footer={cardFooterContent[2]}
        >
      </EuiCard>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src="https://source.unsplash.com/400x200/?Nature" alt="Nature"/>
          </div>
        }
        title= "#6329의 기록"
        footer={cardFooterContent[3]}
        >
      </EuiCard>
    </EuiFlexItem>
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img src="https://source.unsplash.com/400x200/?Nature" alt="Nature"/>
          </div>
        }
        title= "#8872의 기록"
        footer={cardFooterContent[4]}
        >
      </EuiCard>
    </EuiFlexItem>
  </EuiFlexGrid>
          
          <EuiSpacer />
         
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButton onClick={closeModal2} fill>
            Submit
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }

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

            <Button style={{ marginRight: 10 }} onClick={showModal}> 검증서류 제출 </Button>
            {modal}
            <Button style={{ backgroundColor: 'white', color: '#4582ec' }} onClick={showModal2}> 타인 검증하기 </Button>
            {modal2}
          </div>
        </div>
    </div>
      )
      ;}
export default MyChallengeTab;
