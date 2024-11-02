import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {render} from "../../render";
import {Container} from "../components/container";
import {PlayerSelect} from "../player";
import "../styles/global";

const theme = createTheme({});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<PlayerSelect />
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
