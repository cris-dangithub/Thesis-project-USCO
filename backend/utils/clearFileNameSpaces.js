// file viene de req.file
exports.clearFileNameSpaces = file => {
  const { originalname } = file;
  // Si el archivo tiene espacios, cambiar los espacios del originalname por guiones bajos
  if (originalname.split(' ').length > 1) {
    file.originalname = originalname.replace(/\s+/g, '_');
  }
};
