import React from "react";
import View from "../components/View";
import { Container, Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.style = useStyles();
		this.theme = useTheme();
		this.state = {
			value: 0,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	useStyles() {
		makeStyles((theme) => ({
			root: {
				backgroundColor: theme.palette.background.paper,
				width: 500,
			},
		}));
	}

	handleChange(event, newValue) {
		this.setState({
			value: newValue,
		});
	}

	render() {
		return (
			<View>
				<Container maxWidth="lg">
					<h1>Hello</h1>
					<Paper square>
						<Tabs
							value={this.state.value}
							indicatorColor="primary"
							textColor="primary"
							onChange={this.handleChange}
						>
							<Tab label="Tab" />
						</Tabs>
					</Paper>
					<TabPanel value={value} index={0} dir={theme.direction}>
						Item One
					</TabPanel>
					<TabPanel value={value} index={1} dir={theme.direction}>
						Item Two
					</TabPanel>
					<TabPanel value={value} index={2} dir={theme.direction}>
						Item Three
					</TabPanel>
				</Container>
			</View>
		);
	}
}

export default App;
