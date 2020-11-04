const express = require('express');
const path = require('path');
const { album } = require('./public/albumDetails');
const albumDetails = require('./public/albumDetails'); //.albums .albums(name)

function myHTML(albumDets, albumName = -1) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id = 'container'>
        <div id='head'> Check out J Balvin's recent album work!</div>
        <div id='albums'>
        ${
          albumName === -1
            ? `Album Names`
            : `Displaying details for: ${albumName}`
        }
        </div>
        <ul id = 'albumList'>
        ${
          albumName === -1
            ? `${albumDets
                .map(
                  (_album) =>
                    `<li><a href='/posts/${_album.title}'>${_album.title}</a></li>`
                )
                .join('')}`
            : `${Object.keys(albumDetails.album(albumName))
                .map(
                  (key) =>
                    `<li>${key.toUpperCase()}: ${
                      albumDetails.album(albumName)[key]
                    }</li>`
                )
                .join('')}`
        }


        </ul>
      </div>
      ${
        albumName === -1
          ? `<div id='back'></div>`
          : `<div id='back'><a href='/'>BACK TO ALBUMS</a></div>`
      }
    </body>
  </html>`;
}

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('morgan')('dev'));

app.get('/', (req, res) => {
  res.send(myHTML(albumDetails.albums));
});

app.get('/posts/:id', (req, res) => {
  if (Object.keys(albumDetails.album(req.params.id)).length === 0) {
    res
      .status(404)
      .send(`<a href='/'>Try Again ${req.params.id} Don't work!</a>`);
  } else {
    res.send(myHTML(albumDetails.albums, req.params.id));
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
