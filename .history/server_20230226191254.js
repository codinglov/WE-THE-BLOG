const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const helper = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequ