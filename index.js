import expressEjsLayouts from "express-ejs-layouts";
import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

app.use(expressEjsLayouts);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const config = {
    title: 'Luz e Vida',
    layout: true
  }

  if ('hx-request' in req.headers) {
    config.layout = false;
  }

  res.render('index', config);
});

app.get('/doacoes', (req, res) => {
  const config = {
    title: 'Doação',
    layout: true
  }

  if ('hx-request' in req.headers) {
    config.layout = false;
  }

  res.render('doacoes', config);
});

app.post('/doacoes', multer().none(), async (req, res) => {
  const config = {
    title: 'Doação',
    valor: 0,
    layout: true
  }

  if (req.get('content-type').startsWith('multipart/form-data')) {
    if ('valor' in req.body) {
      config.valor = parseFloat(req.body.valor);
      if (isNaN(config.valor)) {
        config.valor = 10;
      }
    }

    if ('hx-request' in req.headers && req.headers['hx-request'] == 'true') {
      config.layout = false;
    }

    res.render('checkout', config);
  }
})

app.get('/historia', (req, res) => {
  const config = {
    title: 'História',
    layout: true
  }

  if ('hx-request' in req.headers) {
    config.layout = false;
  }

  res.render('historia', config);
});

app.get('/projetos', (req, res) => {
  const config = {
    title: 'Projetos',
    layout: true
  }

  if ('hx-request' in req.headers) {
    config.layout = false;
  }

  res.render('projetos', config);
});


app.get('/obrigado', (req, res) => {
  const config = {
    title: 'Obrigado',
    layout: true
  }

  if ('hx-request' in req.headers) {
    config.layout = false;
  }

  res.render('obrigado', config);
});


app.get('/*', (req, res) => {
  res.render('notfound', {title: 'Página não encontrada'});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
