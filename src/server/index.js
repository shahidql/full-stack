const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// var Greeting = React.createClass({
//   render: function() {
//     return '<h1>Hello, {this.props.name}</h1>';
//   }
// });
// const s = ReactDOMServer.renderToString(Greeting);


const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
