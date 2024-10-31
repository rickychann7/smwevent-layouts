import {CSSProperties} from "react";
import logo from "../images/logo_beginner.png";

export const Logo = (props: {style: CSSProperties}) => {
	return (
		<img
			src={logo}
			width={"835px"}
			height={"254px"}
			style={{
				...props.style,
			}}
		></img>
	);
};
