var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
    tilte: 'Article one! Vaishnavi!',
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
     tilte: 'Article two! Vaishnavi!',
    heading: 'Article two',
    date: '15 Aug 2017',
    content: `
                <p>
                    this is the content of my second article.
                </p> `
},
'article-three': {
     tilte: 'Article three! Vaishnavi!',
    heading: 'Article three',
    date: '15 Aug 2017',
    content: `
                <p>
                    this is the content of my third article.
                    
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

app.get('/:articlename', function (req,res) {
    //articlename == article-one
    //articles[articlename == {} content obj for article-one
    
    var articlename = req.params.articlename
    res.send(createtemplate(articles[articlename]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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