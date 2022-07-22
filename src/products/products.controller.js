const db = require("../db/connection");

function read(req, res, next) {
  res.json({ data: { product_title: "some product title" } });
}

async function list(req, res, next) {
  const products = await db.select("*").from("products");
  res.json({ data: products });
}

module.exports = {
  read: [read],
  list: [list],
};
