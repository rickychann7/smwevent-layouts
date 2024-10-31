import {useReplicant} from "@nodecg/react-hooks";
import {CSSProperties} from "react";

export const CategoryName = (props: {style: CSSProperties}) => {
	const [category] = useReplicant<string>("category");

	return (
		<div
			style={{
				...props.style,
				fontFamily: '"M PLUS 1 Variable", sans-serif',
				fontWeight: 600,
				position: "absolute",
				textAlign: "center",
			}}
		>
			{category}
		</div>
	);
};
