var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' : {
      title: 'Article One | Ankit Profile',
      heading: 'Article One',
      date: 'August 10, 2017',
      content: `<p>Today I started working on my First Webpage.</p>
                <p>And here It is. My first webpage in front of you.</p>
                    <div>
                <p>It was really a fun thing to this task.</p>`
                
},
    'article-two' : {title: 'Article Two | Ankit Profile',
      heading: 'Article Two',
      date: 'August 11, 2017',
      content: `<p>Today I started working on my Second Webpage.</p>
                <p>And here It is. My second webpage in front of you.</p>
                    <div>
                <p>It was really a fun thing to this task.</p>`
            
    },
    'article-three' : {title: 'Article Three | Ankit Profile',
      heading: 'Article Three',
      date: 'August 12, 2017',
      content: `<p>Today I started working on my Third Webpage.</p>
                <p>And here It is. My third webpage in front of you.</p>
                    <div>
                <p>It was really a fun thing to this task.</p>`
        
    }
    };

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
             <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req, res) { // URL: /submit-name?name=xxxxx
    //Get the name from the request
    var name = req.query.name;
    
    names.push(name);
    //JSON: javascript Object Notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req,res) {
    // articleName == article-one
    //articles[articleNmae] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
