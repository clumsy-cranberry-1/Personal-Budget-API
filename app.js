const express = require('express');
const app = express();
const morgan = require('morgan');

const envelopesRouter = require('./routes/envelopes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use('/envelopes', envelopesRouter);

app.get('*', (_, res) => {
    res.status(404).send("The page can not be found");
})

const port = 3000;

app.listen(port, () => {
    console.log(`Portfolio Budget API app listening on http://localhost:${port}`);
});