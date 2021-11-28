import './Home.css';
import React, {useCallback} from 'react';
import { useNavigate } from "react-router-dom";
import {description, eth, num, topic} from './state';
import {
	EuiButtonIcon,
  	EuiFlexGroup,
  	EuiFlexItem,
  	EuiSpacer,
  	EuiTitle,
  	EuiCode,
  } from '@elastic/eui';


function Home() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/vote");
	};
	return (
		<div className="App">

			{/* <div className="nav">

				<div className="navLeft">
					<button className="navName">challenges</button>
				</div>

				<div className="navRight">
					<button className="navMyProfile">My Challenges</button>
					<button className="navWallet">Wallet</button>
				</div>

			</div> */}

			<div className="main">

				<div className="newChallenge">
				
					<button className="newButton" onClick={handleOnClick}>
						+
					</button>

				</div>
				<div className="viewChallenges">

					{eth.contents != 0 && eth.contents !=null ?

						<div className="challenge">
							<div className="challengeTitle">
								{topic.contents}
							</div>
							<div className="challengeText">
								{description.contents}
							</div>
							<div className="bottomBox">
								<div className="cost">
									<img className="eth_logo" alt="eth_logo" src="img/eth_logo.png" />
									{eth.contents} ETH
								</div>
								<div className="challengeStatus">
									{num.contents}명 참여중
								</div>
								<EuiButtonIcon size="xs" iconType="arrowRight" />
							</div>

						</div> : ''}



					<div className="challenge">
						<div className="challengeTitle">
							TOEFL over 100
						</div>
						<div className="challengeText">
							토플 점수 100점 넘기
						</div>

						<div className="bottomBox">
							<div className="cost">
							<img className="eth_logo" alt="eth_logo" src="img/eth_logo.png" />
							0.01 ETH
							</div>
							<div className="challengeStatus">
								12명 참여중
							</div>
							<EuiButtonIcon size="xs" iconType="arrowRight"/>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							GPA 4.0/4.3
						</div>
						<div className="challengeText">
							4.3 만점 기준 
							4.0 이상의 학점을 받으면 성공!
						</div>
						<div className="bottomBox">
							<div className="cost">
							<img className="eth_logo" alt="eth_logo" src="img/eth_logo.png" />
							0.003 ETH
							</div>
							<div className="challengeStatus">
								21명 참여중
							</div>
							<EuiButtonIcon size="xs" iconType="arrowRight"/>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							Mt.Gwanak hiking
						</div>
						<div className="challengeText">
							관악산 연주대에 등반 후 핸드폰 시계와 함께 인증
						</div>
						<div className="bottomBox">
							<div className="cost">
							<img className="eth_logo" alt="eth_logo" src="img/eth_logo.png" />
							0.007 ETH
							</div>
							<div className="challengeStatus">
								9명 참여중
							</div>
							<EuiButtonIcon size="xs" iconType="arrowRight"/>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							20km Marathon
						</div>
						<div className="challengeText">
							20km를 달린 후 NRC를 통해 인증해주세요! 
						</div>
						<div className="bottomBox">
							<div className="cost">
							<img className="eth_logo" alt="eth_logo" src="img/eth_logo.png" />
							0.01 ETH
							</div>
							<div className="challengeStatus">
							7명 참여중
							</div>
							<EuiButtonIcon size="xs" iconType="arrowRight"/>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							Miracle Morning
						</div>
						<div className="challengeText">
							새벽 5시에 일어나는 미라클모닝을 30일간
						</div>
						<div className="bottomBox">
							<div className="cost">
								<img className="eth_logo" alt="eth_logo" src="img/eth_logo.png" />
								0.01 ETH
							</div>
							<div className="challengeStatus">
								22명 참여중
							</div>
							<EuiButtonIcon size="xs" iconType="arrowRight"/>
						</div>

					</div>
	

					
				</div>
			</div>
		</div>
	);
}

export default Home;