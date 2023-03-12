const { appSuccess } = require('../utils/appSuccess');
const { catchAsync } = require('../utils/catchAsync');
const XLSX = require('xlsx');

const extractData = catchAsync(async (req, res, next) => {
  // 1. Extraer la información de las hojas de cálculo
  const archivo = req.file.buffer;
  const workbook = XLSX.read(archivo, { type: 'array' });
  const data = workbook.Sheets;
  // 2. Validar las entradas de las celdas

  appSuccess(res, 200, 'Perra', { workbook });
});

module.exports = { extractData };
