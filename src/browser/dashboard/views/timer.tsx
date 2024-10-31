import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import {render} from "../../render";
import {TimerDashboard} from "../timer";

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {minWidth: 70, minHeight: 30, margin: 5},
				iconSizeMedium: {
					"& > *:first-child": {fontSize: 30},
				},
				iconSizeLarge: {
					"& > *:first-child": {fontSize: 36},
				},
				startIcon: {
					margin: 0,
				},
			},
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<TimerDashboard />
		</ThemeProvider>
	);
};

render(
	<>
		<CssBaseline />
		<App />
	</>,
);
