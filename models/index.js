// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

// Product.belongsTo (Category, {
//   // Define the third table needed to store the foreign keys
//   foreignKey: 'category_id',
//   // Define an alias for when data is retrieved
//   as: 'category_all',

// });

// Category.hasMany(Product, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE',
// });

// Product.belongsToMany(ProductTag, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Tag,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'product_all'
// });

// ProductTag.belongsToMany(Product, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Tag,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'tag_all'
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
