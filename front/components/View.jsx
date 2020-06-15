import React from "React";
import Head from "next/head";
import { withRouter } from "next/router";

class View extends React.Component {
	constructor() {
		super();
		this.state = {
			pages: [
				{
					name: "Home",
					path: "/",
				},
			],
		};
	}

	render() {
		return (
			<div>
				<Head>
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<script
						src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
						integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
						crossorigin="anonymous"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
						integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
						crossorigin="anonymous"
					></script>
					<script
						src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
						integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
						crossorigin="anonymous"
					></script>
				</Head>
				<div>
					<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
						<a class="navbar-brand" href="#">
							PlandoMaker
							<small style={{ "font-size": "40%" }} class="ml-2">
								v4.0.0
							</small>
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarColor01"
							aria-controls="navbarColor01"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>

						<div
							class="collapse navbar-collapse"
							id="navbarColor01"
						>
							<ul class="navbar-nav mr-auto">
								{this.state.pages.map((link, index) => {
									return (
										<li
											key={index}
											class={
												("nav-item",
												this.props.router.pathname ===
													link.path)
													? "active"
													: ""
											}
										>
											<a
												class="nav-link"
												href={link.path}
											>
												{link.name}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</nav>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default withRouter(View);
