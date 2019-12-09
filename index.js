const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const TaskRoutes = require('./routes/routes')
const mongoose = require('mongoose')
const config = require('./config/keys.config')

mongoose.connect(config.mongodbUri, { useNewUrlParser:true })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error on database connection', err))
mongoose.set('useFindAndModify', false)


app.use(bodyParser.json());
app.use('/api/tasks', TaskRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});