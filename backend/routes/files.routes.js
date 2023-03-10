const { Router } = require('express');
const { extractData } = require('../controllers/files.controller');
const { upload } = require('../utils/multer');

const router = Router();

router.get('/', upload.single('hoja-de-calculo'), extractData);

module.exports = {
  filesRouter: router,
};
