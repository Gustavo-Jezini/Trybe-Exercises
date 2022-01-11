const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  },{
    timestamps: false,
  });

  return Book;
}

module.exports = Book;