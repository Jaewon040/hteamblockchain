import './Home.css';
import React from 'react'

function Home() {
	return (
		<div className="App">

			<div className="nav">

				<div className="navLeft">
					<div className="navName">제목</div>
				</div>

				<div className="navRight">
					<button className="navMyProfile">My Profile</button>
					<button className="navWallet">Wallet</button>
				</div>

			</div>

			<div className="main">

				<div className="newChallenge">
					<button className="newButton">
						+
					</button>
				</div>


				<div className="viewChallenges">

					<div className="challenge">
						<div className="challengeTitle">
							챌린지 제목1
						</div>
						<div className="challengeText">
							챌린지 내용1
						</div>
						<div className="bottomBox">
							<div className="challengeOperator">
								개설자
							</div>
							<div className="challengeStatus">
								현재 참여인원
							</div>
							<button>
								JOIN
							</button>
						</div>

					</div>

					<div className="challenge">
						<div className="challengeTitle">
							챌린지 제목2
						</div>
						<div className="challengeText">
							챌린지 내용2
						</div>

						<div className="bottomBox">
							<div className="challengeOperator">
								개설자
							</div>
							<div className="challengeStatus">
								현재 참여인원
							</div>
							<button>
								JOIN
							</button>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							챌린지 제목3
						</div>
						<div className="challengeText">
							챌린지 내용3
						</div>
						<div className="bottomBox">
							<div className="challengeOperator">
								개설자
							</div>
							<div className="challengeStatus">
								현재 참여인원
							</div>
							<button>
								JOIN
							</button>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							챌린지 제목4
						</div>
						<div className="challengeText">
							챌린지 내용4
						</div>
						<div className="bottomBox">
							<div className="challengeOperator">
								개설자
							</div>
							<div className="challengeStatus">
								현재 참여인원
							</div>
							<button>
								JOIN
							</button>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							챌린지 제목5
						</div>
						<div className="challengeText">
							챌린지 내용5
						</div>
						<div className="bottomBox">
							<div className="challengeOperator">
								개설자
							</div>
							<div className="challengeStatus">
								현재 참여인원
							</div>
							<button>
								JOIN
							</button>
						</div>
					</div>

					<div className="challenge">
						<div className="challengeTitle">
							챌린지 제목6
						</div>
						<div className="challengeText">
							챌린지 내용6
						</div>
						<div className="bottomBox">
							<div className="challengeOperator">
								개설자
							</div>
							<div className="challengeStatus">
								현재 참여인원
							</div>
							<button>
								JOIN
							</button>
						</div>
					</div>

				</div>
			</div>



		</div>
	);
}

export default Home;