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
  EuiRadioGroup
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

  const radioGroupName = useGeneratedHtmlId({ prefix: 'radioGroup' });
  const radioGroupName2 = useGeneratedHtmlId({ prefix: 'radioGroup2' });
  const radioGroupName3 = useGeneratedHtmlId({ prefix: 'radioGroup3' });

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
  const keypadRadioButtonId__4 = useGeneratedHtmlId({
    prefix: 'keypadRadioButton',
    suffix: 'fourth',
  });
  const keypadRadioButtonId__5 = useGeneratedHtmlId({
    prefix: 'keypadRadioButton',
    suffix: 'fifth',
  });
  const keypadRadioButtonId__6 = useGeneratedHtmlId({
    prefix: 'keypadRadioButton',
    suffix: 'sixth',
  });

  


  const [nestedRadio, setNestedRadio] = useState('nestedRadio1');
  const [nestedRadio2, setNestedRadio2] = useState('nestedRadio3');
  const [nestedRadio3, setNestedRadio3] = useState('nestedRadio5');

  const nestedRadios = [
    {
      id: 'nestedRadio1',
      label: 'Agree',
    },
    {
      id: 'nestedRadio2',
      label: 'Disagree',
    },
  ];

  const nestedRadios2 = [
    {
      id: 'nestedRadio3',
      label: 'Agree',
    },
    {
      id: 'nestedRadio4',
      label: 'Disagree',
    },
  ];

  const nestedRadios3 = [
    {
      id: 'nestedRadio5',
      label: 'Agree',
    },
    {
      id: 'nestedRadio6',
      label: 'Disagree',
    },
  ];

  const cardFooterContent = (
    <EuiRadioGroup
          options={nestedRadios}
          idSelected={nestedRadio}
          onChange={(nestedRadio) => setNestedRadio(nestedRadio)}
        />
  );

  const cardFooterContent2 = (
    <EuiRadioGroup
          options={nestedRadios2}
          idSelected={nestedRadio2}
          onChange={(nestedRadio2) => setNestedRadio2(nestedRadio2)}
        />
  );

  const cardFooterContent3 = (
    <EuiRadioGroup
          options={nestedRadios3}
          idSelected={nestedRadio3}
          onChange={(nestedRadio3) => setNestedRadio3(nestedRadio3)}
        />
  );

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

  
  <EuiFlexGroup gutterSize="s">
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
        title= {users[0].address}
        footer={cardFooterContent}
        >
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
        title={users[1].address}
        footer={cardFooterContent2}
        >
  
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
        title={users[2].address}
        footer={cardFooterContent3}
        >
    
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
     <p>이제 모든 입무가 완수되었습니다.</p>
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