
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
  cardFooterContent,
  EuiCode,
  EuiHorizontalRule
} from '@elastic/eui';
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
  };

  const radioGroupName = useGeneratedHtmlId({ prefix: 'radioGroup' });

  const keypadRadioButtonId__1 = useGeneratedHtmlId({
    prefix: 'keypadRadioButton',
    suffix: 'first',
  });
  const keypadRadioButtonId__2 = useGeneratedHtmlId({
    prefix: 'keypadRadioButton',
    suffix: 'second',
  });
  const keypadRadioButtonId__3 = useGeneratedHtmlId({
    prefix: 'keypadRadioButton',
    suffix: 'third',
  });

  const [singleSelectedID, setSingleSelectedID] = useState(
    keypadRadioButtonId__1
  );

  const [toggleIdSelected, setToggleIdSelected] = useState(null);

  const toggleButtons = [
    {
      id: 'bottomBarStandard',
      label: 'Show bottom bar',
    },
    {
      id: 'bottomBarWithoutAffordForDisplacement',
      label: 'Show bottom bar (without affordForDisplacement behavior)',
    },
  ];

  const onSubmit = (optionId) => {
    setToggleIdSelected(optionId);
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


  <EuiFlexGroup gutterSize="l">
    <EuiFlexItem>
      <EuiCard
        textAlign="left"
        image={
          <div>
            <img
              src="https://source.unsplash.com/400x200/?Nature"
              alt="Nature"
            />
          </div>
        }
        title="누군가1의 기록"
        footer={cardFooterContent}>
      <EuiKeyPadMenu checkable={{ ariaLegend: 'Single select as radios' }}>
      <EuiKeyPadMenuItem
        checkable="single"
        name={radioGroupName}
        id={keypadRadioButtonId__1}
        label="Agree"
        onChange={(id) => {
          setSingleSelectedID(id);
        }}
        isSelected={singleSelectedID === keypadRadioButtonId__1}
      >
        <EuiIcon type="faceHappy" size="l" />
      </EuiKeyPadMenuItem>

      <EuiKeyPadMenuItem
        checkable="single"
        name={radioGroupName}
        id={keypadRadioButtonId__2}
        label="Disagree"
        onChange={(id) => {
          setSingleSelectedID(id);
        }}
        isSelected={singleSelectedID === keypadRadioButtonId__2}
      >
        <EuiIcon type="faceSad" size="l" />
      </EuiKeyPadMenuItem>
      </EuiKeyPadMenu>
      </EuiCard>
    </EuiFlexItem>
    <EuiFlexItem>
    <EuiCard
        textAlign="left"
        image={
          <div>
            <img
              src="https://source.unsplash.com/400x200/?Nature"
              alt="Nature"
            />
          </div>
        }
        title="누군가2의 기록"
        footer={cardFooterContent}>
      <EuiKeyPadMenu checkable={{ ariaLegend: 'Single select as radios' }}>
      <EuiKeyPadMenuItem
        checkable="single"
        name={radioGroupName}
        id={keypadRadioButtonId__1}
        label="Agree"
        onChange={(id) => {
          setSingleSelectedID(id);
        }}
        isSelected={singleSelectedID === keypadRadioButtonId__1}
      >
        <EuiIcon type="faceHappy" size="l" />
      </EuiKeyPadMenuItem>

      <EuiKeyPadMenuItem
        checkable="single"
        name={radioGroupName}
        id={keypadRadioButtonId__2}
        label="Disagree"
        onChange={(id) => {
          setSingleSelectedID(id);
        }}
        isSelected={singleSelectedID === keypadRadioButtonId__2}
      >
        <EuiIcon type="faceSad" size="l" />
      </EuiKeyPadMenuItem>
      </EuiKeyPadMenu>
      </EuiCard>
    </EuiFlexItem>
    <EuiFlexItem>
    <EuiCard
        textAlign="left"
        image={
          <div>
            <img
              src="https://source.unsplash.com/400x200/?Nature"
              alt="Nature"
            />
          </div>
        }
        title="누군가3의 기록"
        footer={cardFooterContent}>
      <EuiKeyPadMenu checkable={{ ariaLegend: 'Single select as radios' }}>
      <EuiKeyPadMenuItem
        checkable="single"
        name={radioGroupName}
        id={keypadRadioButtonId__1}
        label="Agree"
        onChange={(id) => {
          setSingleSelectedID(id);
        }}
        isSelected={singleSelectedID === keypadRadioButtonId__1}
      >
        <EuiIcon type="faceHappy" size="l" />
      </EuiKeyPadMenuItem>

      <EuiKeyPadMenuItem
        checkable="single"
        name={radioGroupName}
        id={keypadRadioButtonId__2}
        label="Disagree"
        onChange={(id) => {
          setSingleSelectedID(id);
        }}
        isSelected={singleSelectedID === keypadRadioButtonId__2}
      >
        <EuiIcon type="faceSad" size="l" />
      </EuiKeyPadMenuItem>
      </EuiKeyPadMenu>
      </EuiCard>
    </EuiFlexItem>
  </EuiFlexGroup>
              
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
     <p>이재 모든 입무가 완수되었습니다.</p>
    <p>당신에게 돌아올 보상을 기다리세요.</p>
  </EuiText>
</EuiPanel>    
</EuiPageBody>
<EuiHorizontalRule size="half" />
<p></p><p></p><p></p><p></p>

      {true && (
        <EuiBottomBar
          affordForDisplacement={toggleIdSelected === 'bottomBarStandard'}
        >
          <EuiFlexGroup justifyContent="flexEnd">
            <EuiFlexItem grow={false}>
              <EuiButton
                onClick={() => setToggleIdSelected(null)}
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