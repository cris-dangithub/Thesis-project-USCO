const { appSuccess } = require('../utils/appSuccess');
const { catchAsync } = require('../utils/catchAsync');
const XLSX = require('xlsx');

const extractData = catchAsync(async (req, res, next) => {
  //const archivo = req.file.buffer;
  //console.log(archivo);

  // Leer la hoja de cálculo utilizando SheetsJS
  //const workbook = XLSX.readFile(archivo);
  appSuccess(res, 200, 'Perra', { req: req.file });
});

module.exports = { extractData };
