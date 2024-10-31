import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {render} from "../../render";
import {PlayerSelect} from "../player";

const theme = createTheme({});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<PlayerSelect></PlayerSelect>
		</ThemeProvider>
	);
};

render(
	<>
		<CssBaseline />
		<App />
	</>,
);
