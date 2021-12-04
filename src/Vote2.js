import React, {useState, Fragment} from 'react';
import { useGeneratedHtmlId } from '@elastic/eui';
import {
  EuiPage,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageSideBar,
  EuiPageBody,
  EuiBottomBar,
  EuiPanel,
  EuiSplitPanel,
  EuiExpression,
  EuiCard,
  //cardFooterContent,
  EuiCode,
  EuiHorizontalRule,
  EuiRadioGroup,
  EuiFlexGrid
} from '@elastic/eui';
//import {cardFooterConten} from '@elastic/eui/lib';
import {
  EuiFilePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiSwitch,
  EuiButtonGroup,
  EuiButton
} from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import "./Vote2.css";

import {
  EuiIcon,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
} from '@elastic/eui';

export default ({ button = <></>, content, sideNav, bottomBar }) => {

  const [files, setFiles] = useState({});
  const [large, setLarge] = useState(true);

  const filePickerId = useGeneratedHtmlId({ prefix: 'filePicker' });

  const onChange = (files) => {
    setFiles(files.length > 0 ? Array.from(files) : []);
    console.log("changed")
  };

  const radioGroupItem = [
    (useGeneratedHtmlId({ prefix: 'radioGroup0_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup0_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup1_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup1_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup2_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup2_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup3_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup3_disagree' })),  
    (useGeneratedHtmlId({ prefix: 'radioGroup4_agree' })), (useGeneratedHtmlId({ prefix: 'radioGroup4_disagree' })),  
    
  ];

  //const radioGroupName2 = useGeneratedHtmlId({ prefix: 'radioGroup2' });
  //const radioGroupName3 = useGeneratedHtmlId({ prefix: 'radioGroup3' });

  const keypadRadioButtonId__1 = useGeneratedHtmlId({
    prefix: 'keypadRadioButton',
    suffix: 'first',
  });

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

 

  const [toggleIdSelected, setToggleIdSelected] = useState(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      address: '3558', // 지갑의 마지막 주소 4자리
      file : "https://source.unsplash.com/400x200/?Nature"
    },
    {
      id: 2,
      address: '1670',
      file : "https://source.unsplash.com/400x200/?Nature"
    },
    {
      id: 3,
      address: '1786',
      file : "https://source.unsplash.com/400x200/?Nature"
    },
    {
      id: 4,
      address: '5978',
      file : "https://source.unsplash.com/400x200/?Nature"
    },
   
    {
      id: 5,
      address: '4405',
      file : "https://source.unsplash.com/400x200/?Nature"
    },
  ]);

  
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

  return (
    <EuiPage paddingSize="300px" >
      <EuiPageSideBar paddingSize="l" sticky>
        {sideNav}
      </EuiPageSideBar>

      {/* Double EuiPageBody to accommodate for the bottom bar */}
      <EuiPageBody panelled paddingSize="none">
        <EuiPageBody paddingSize="l">
          <EuiPageHeader
            bottomBorder
            restrictWidth
            pageTitle="챌린지 검증"
            rightSideItems={[button]}
          />
          <EuiPageContent
            hasBorder={true}
            hasShadow={false}
            paddingSize="500px"
            color="transparent"
            borderRadius="none"
          >
          <EuiPageContentBody restrictWidth>

    <Fragment>
      <EuiFlexGroup>
      <EuiFlexItem>
          <EuiText>
            <h3>Step1. Files attached</h3>
            {renderFiles()}
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={2}>
          {/* DisplayToggles wrapper for Docs only */}
          <EuiFilePicker
              id={filePickerId}
              multiple
              initialPromptText="Select or drag and drop multiple files"
              onChange={onChange}
              display={large ? 'large' : 'default'}
              aria-label="Use aria labels when no actual label is in use"
            />
          <EuiSpacer />
        </EuiFlexItem>
      </EuiFlexGroup>
    </Fragment>
    
    <EuiFlexItem>
      <EuiText>
        <h3>Step2. Vote for records</h3>
        <p>다른 사람의 기록이 옳은지 투표하세요</p>
        <p> </p>
      </EuiText>
    </EuiFlexItem>

  
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
  
              
    </EuiPageContentBody>
      </EuiPageContent>

      <EuiSpacer size="l" />

      <EuiFlexItem>
          <EuiText>
            <h3>Step3. End</h3>
            <p>자신의 파일을 업로드하고 80% 이상의 투표를 진행하면 완료됩니다.</p>
            <p> </p>
          </EuiText>
        </EuiFlexItem>

<EuiPanel paddingSize="l">
  <EuiText>
     <p>이제 모든 입무가 완수되었습니다.</p>
    <p>당신에게 돌아올 보상을 기다리세요.</p>
  </EuiText>
</EuiPanel>    
</EuiPageBody>
<EuiHorizontalRule size="half" />


      {true && (
        <EuiBottomBar
          affordForDisplacement={toggleIdSelected === 'bottomBarStandard'}
        >
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={onSubmit}
                color="ghost"
                size="m"
              >
                Submit
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      )}
    
    </EuiPageBody>
    </EuiPage>
  );
};