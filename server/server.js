const express = require('express');
const { sequelize, config } = require('./config/config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const path = require('path')
// Import routes
const editorsRoutes = require('./routes/editors.routes');
const countryRoutes = require('./routes/country.router');
const entriesRoutes = require('./routes/entries.route');
const journalsRoutes = require('./routes/journals.route');
const AgentsRoutes = require('./routes/agents.route');
const authrouter = require('./routes/auth.route');
const helperrouter = require('./routes/helper.route');
const settingRoutes = require('./routes/setting.route');
const linkRouters= require('./routes/link.route');
const emailFileRoutes=require('./routes/emailFile.route');
const notMailRouters=require('./routes/notMail.route')

const testRoutes=require('./routes/test.route');
 
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
const port = 8080;
// app.use(
//   fileUpload({
//     limits: { fileSize: 5 * 1024 * 1024 },
//   })
// );
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT"],
    credentials: true,
  })
);


app.use("/dist", express.static(path.join(config.rootDir, "dist")));
app.use(`/assets`, express.static(config.assetsDir));
app.use(
  `/download`,
  express.static("/home/nikhil/development/dev_panel/download/")
);
app.use(
  `/article`,
  express.static("/home/nikhil/development/dev_panel/article/")
);

// Use routes
app.use('/api', editorsRoutes);
app.use('/api', countryRoutes);
app.use('/api', entriesRoutes);
app.use('/api', journalsRoutes);
app.use('/api', AgentsRoutes);

app.use('/api',linkRouters);
app.use('/api',emailFileRoutes);
app.use('/api',notMailRouters);

app.use('/api',testRoutes);

app.use('/', authrouter, helperrouter, settingRoutes)

app.get('/',(req,res)=>{
  res.send(`<p>working</p>`);
})

// Login 
sequelize.authenticate().then(() => {
  console.error('Database connected successfully')
})
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server is running on port http://localhost:${config.port}`);
});

module.exports = sequelize;

