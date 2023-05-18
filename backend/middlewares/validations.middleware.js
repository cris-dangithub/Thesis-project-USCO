const { generateCheckers } = require('../utils/generateCheckers');
// Body checkers. Example:
// ----------- product validations -----------
// exports.updateProductValidation = [
//   ...generateCheckers({
//     fields: [
//       {
//         validType: 'string',
//         fieldNames: ['title', 'description'],
//         optionals: ['title', 'description'],
//       },
//       {
//         validType: 'numeric',
//         fieldNames: ['quantity', 'price', 'categoryId', 'userId'],
//         optionals: ['quantity', 'price', 'categoryId', 'userId'],
//       },
//     ],
//     optionals: [
//       'title',
//       'description',
//       'quantity',
//       'price',
//       'categoryId',
//       'userId',
//     ],
//   }),
// ];
