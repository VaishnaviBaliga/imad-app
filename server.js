var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');
var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
    title: 'Article one! Vaishnavi!',
    heading: 'Article one',
    date: '15 Aug 2017',
    content: `
                <p>
                    this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
                </p>
                
                <p>
                    this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
                </p>
                
                <p>
                    this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.this is the content of my first article.
                </p>`
    
},
'article-two': {
     title: 'Article two! Vaishnavi!',
    heading: 'Article two',
    date: '10 Aug 2017',
    content: `
                <p>
                    this is the content of my second article........
                </p> `
},
'article-three': {
     title: 'Article three! Vaishnavi!',
    heading: 'Article three',
    date: '25 Aug 2017',
    content: `
                <p>
                    this is the content of my third article.
                    :DDDDD
                    
                </p> `

}
};

function createtemplate (data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmltemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
             <meta name="viewport" content="width-device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class=container>
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/><hr/>
            
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

    return htmltemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


function hash(input, salt){
    // how to create hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, $12, 'sha$12');
    return hashed.toString('hex');
}

app.get('/hash/:input',function (req, res){
    var hashedstring = hash(req.params.input, 'this-is-random-string');
    res.send(hashedstring);
});

app.get('/test-db', function (req, res) {
  // make req
  // get results from db
});

var counter = 0;

app.get('/:articlename', function (req,res) {
    //articlename == article-one
    //articles[articlename == {} content obj for article-one
    
    var articlename = req.params.articlename
    res.send(createtemplate(articles[articlename]));
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

app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));

});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});