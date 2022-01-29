
var nameNode = document.getElementById('Name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('Intro');
var gitNode = document.getElementById('Github');
var nameComponent = React.createElement(
  'h1',
  null,
  'Rutuja Medhekar'
);
var imageComponent = React.createElement('img', { id: 'img-st', src: './Rutuja.jpg' });
var introComponent = React.createElement(
  'p',
  null,
  'I have worked at Tiger Analytics, India as Senior Software Engineer for 3 years. I have hands-on experience in creating data pipelines and schedule triggers using Azure Data factory. Working with Banking and Insurance clients, I have good domain knowledge in fields of Banking and Investments. Along with this, I have worked on building regression model in machine learning, where I got introduced to React.js. '
);
var gitComponent = React.createElement(
  'button',
  { id: 'btn' },
  React.createElement(
    'a',
    { href: 'https://github.com/Rutuja2506' },
    'VIEW MY GITHUB REPO'
  )
);
ReactDOM.render(nameComponent, nameNode);
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);