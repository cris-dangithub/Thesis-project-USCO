const multer = require('multer');

// Constante que me contendrá el storage de la aplicación
const storage = multer.memoryStorage();

// Constante upload que tendrá la configuración de multer
const upload = multer({ storage });

module.exports = { upload };
