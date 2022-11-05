const path = require("path");



exports.onCreatePage = ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/administrador/hoteles",
    matchPath: "/administrador/hoteles/:id",
    component: path.resolve("src/pages/hoteles.js"),
    context: `:id`
  })
  createPage({
    path: "/administrador/producto",
    matchPath: "/administrador/producto/:id",
    component: path.resolve("src/pages/producto.js"),
    context: `:id`,
  })
  
  
}

  


