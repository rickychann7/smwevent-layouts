import {css} from "@emotion/react";
import {useReplicant} from "@nodecg/react-hooks";
import {Comment} from "../../../../types/schemas";

const fadeContainerStyle = css`
	font-family: "M PLUS 1 Variable";
	position: absolute;
	bottom: 2px;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

const fadeStyles = css`
	&.fade-enter {
		opacity: 0;
	}
	&.fade-enter-active {
		opacity: 1;
		transition: opacity 1.5s;
	}
	&.fade-exit {
		opacity: 1;
	}
	&.fade-exit-active {
		opacity: 0;
		transition: opacity 1.5s;
	}
`;

export const InformationFader = () => {
	const [comment] = useReplicant<Comment>("comment");

	// useEffect(() => {
	//   const interval = setInterval(() => {
	//     setInfoIndex((prevIndex) => (prevIndex + 1) % infoArray.length);
	//   }, 4000);
	//   return () => clearInterval(interval);
	// }, []);

	return (
		<div css={[fadeContainerStyle, fadeStyles]}>{comment}</div>
		// <TransitionGroup>
		//   <CSSTransition timeout={500} classNames="fade">
		//     <div css={[fadeContainerStyle, fadeStyles]}>{comment}</div>
		//   </CSSTransition>
		// </TransitionGroup>
	);
};
