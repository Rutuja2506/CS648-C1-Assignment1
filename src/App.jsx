
var nameNode = document.getElementById('Name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('Intro');
var gitNode = document.getElementById('Github');
var nameComponent = <h1>Rutuja Medhekar</h1>; 
var imageComponent = <img id="img-st" src="./Rutuja.jpg"/>;
var introComponent = <p>I have worked at Tiger Analytics, India as Senior Software Engineer for 3 years. I have hands-on experience in creating data pipelines and schedule triggers using Azure Data factory. Working with Banking and Insurance clients, I have good domain knowledge in fields of Banking and Investments. Along with this, I have worked on building regression model in machine learning, where I got introduced to React.js. </p> 
var gitComponent = <button id="btn"><a href="https://github.com/Rutuja2506">VIEW MY GITHUB REPO</a></button>
ReactDOM.render(nameComponent, nameNode); 
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);