import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {render} from "../../render";
import {Container} from "../components/container";
import "../styles/global";
import {TimerDashboard} from "../timer";

const theme = createTheme();

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<TimerDashboard />
			</Container>
		</ThemeProvider>
	);
};

render(
	<>
		<CssBaseline />
		<App />
	</>,
);
