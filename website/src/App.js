import React, { Component } from 'react';
import Avatar from 'react-avatar';
import ScrollableAnchor from 'react-scrollable-anchor';
import NavBar from './components/Navbar.js';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<ScrollableAnchor id={'nav'}>
					<NavBar />
				</ScrollableAnchor>
				<ScrollableAnchor id={'about'}>
					<div className="about">
						<h3 className="title">about me</h3>
						<div className="avatar">
							<Avatar src={process.env.PUBLIC_URL + '/img/profpic.jpg'} size={350} round={true} />
						</div>
						<div className="abouttext">
							<h3>
								hi! i&#39;m a fourth year cs major at uc berkeley. i'm involved with{' '}
								<a href="https://codebase.berkeley.edu/" target="_blank">
									berkeley codebase
								</a>
								, where i&#39;m the vp of projects responsible for finding and scoping projects and
								managing pm and developer experience, and{' '}
								<a href="https://girlswhocode.com/" target="_blank">
									girls who code
								</a>
								, where i&#39;ve been a student and a TA. i'm currently interning at blackrock,
								where i do full-stack development on an web app that visualizes dataset relationships. i
								previously interned at adobe, where i build a visual regression testing framework for
								the livefyre team.
							</h3>
							<h3>
								i am fluent in python and java and familiar with web development. this summer i worked
								a lot with react, which this website is built with!
							</h3>
							<h3>
								you can connect with me on linkedin{' '}
								<a href="https://www.linkedin.com/in/elise-xu/" target="_blank">
									here
								</a>
								, and see projects i&#39;m tinkering with{' '}
								<a href="https://github.com/elisexu/" target="_blank">
									here
								</a>
								.
							</h3>
						</div>
					</div>
				</ScrollableAnchor>

				<ScrollableAnchor id={'projects'}>
					<div className="proj" styles="proj">
						<h3 className="title">things i&#39;ve worked on </h3>
						<div className="projimg">
							<a href="https://github.com/codebase-berkeley/ApplicationPortal" target="_blank">
								<img src="https://preview.ibb.co/muJEMc/bearapps.jpg" />
							</a>
						</div>
						<h3 className="subtitle">bearapps: django, jquery, and html/css</h3>
						<p>
							for berkeley codebase, i worked in a team of ten to build a web application to manage club
							applications and admissions. i implemented categories to sort applications into, and a
							rating system for applicants. i got to work in both backend and frontend development, and
							had a blast contributing to my first full-fledged web application! you can check out the
							code <a href="https://github.com/codebase-berkeley/ApplicationPortal"> here</a>.
						</p>
						<div className="projimg">
							<a
								href="https://grayarea.org/workshop/creative-code-youth-workshop-now-hunters-point/"
								target="_blank"
							>
								<img src="https://preview.ibb.co/bx8U2H/Screen_Shot_2018_04_03_at_1_56_50_AM.png" />
							</a>
						</div>
						<h3 className="subtitle">lit: LEDs and processing.js</h3>
						<p>
							under the{' '}
							<a href="https://grayarea.org/" target="_blank">
								gray area foundation for the arts
							</a>{' '}
							creative code apprenticeship, i created part of an LED display using processing.js (a
							visualization language) and adafruit LEDs that generates balls of color based on how quickly
							viewers move in front of a camera. my part of the display is pictured above. i wanted to
							make something that was simple enough that a viewer could easily understand it and play with
							it, but that was still colorful and entertaining.
						</p>
						<div className="projimg">
							<a href="https://cathacks2016.github.io/ourshelter/main_page.html" target="_blank">
								<img src="https://preview.ibb.co/fbb9Mc/cat.jpg" />
							</a>
						</div>
						<h3 className="subtitle">cathacks: html/css, and js</h3>
						<p>
							my first calhacks project and a lighthearted website i built with my floormates after we
							discovered our love of <a href="https://findtheinvisiblecow.com/">bizarre sites</a>, the
							premise of cathacks is to pet cats and make them happy. none of us had prior web development
							experience, so we learned together and hacked together a website that made all of us laugh.
							i built the happy cat count and the movement!
						</p>

						<p className="lnk">
							<a href="#nav">back to top.</a>
						</p>
					</div>
				</ScrollableAnchor>
			</div>
		);
	}
}

export default App;
