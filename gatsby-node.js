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
  createPage({
    path: "/menu/menualimentos",
    component: path.resolve("src/pages/menualimentos.js")
  });
  createPage({
    path: "/menu/menubebidas",
    component: path.resolve("src/pages/menubebidas.js"),
  });
   createPage({
     path: "/menu/cantinero",
     component: path.resolve("src/pages/cantinero.js"),
   });
   createPage({
     path: "/menu/menubebidas/cervezasartesanales",
     component: path.resolve("src/pages/cervezasartesanales.js"),
   });
  createPage({
    path: "/menu/menubebidas/mezcalesartesanales",
    component: path.resolve("src/pages/mezcalesartesanales.js"),
  });
  createPage({
    path: "/menu/menubebidas/mixologia",
    component: path.resolve("src/pages/mixologia.js"),
  });
    createPage({
      path: "/menu/menubebidas/destilados",
      component: path.resolve("src/pages/destilados.js"),
    });
   createPage({
     path: "/menu/menubebidas/sodas",
     component: path.resolve("src/pages/sodas.js"),
   });

  createPage({
    path: "/menu/menudrinks",
    component: path.resolve("src/pages/menudrinks.js"),
  });
   createPage({
     path: "/menu/menufood",
     component: path.resolve("src/pages/menufood.js"),
   });
  createPage({
    path: "/menu/menudrinks/craftbeers",
    component: path.resolve("src/pages/craftbeers.js"),
  });
  createPage({
    path: "/menu/menudrinks/artisanalmezcal",
    component: path.resolve("src/pages/artisanalmezcal.js"),
  });
  createPage({
    path: "/menu/menudrinks/mixology",
    component: path.resolve("src/pages/mixology.js"),
  });
  createPage({
    path: "/menu/menudrinks/distillates",
    component: path.resolve("src/pages/distillates.js"),
  });
   createPage({
     path: "/menu/menudrinks/sodascoffee",
     component: path.resolve("src/pages/sodascoffee.js"),
   });
  createPage({
    path: "/menu/menutavern",
    component: path.resolve("src/pages/menutavern.js"),
  });
}

  


