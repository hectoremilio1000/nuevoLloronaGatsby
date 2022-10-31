const path = require("path");


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
 

    createPage({
      path: "/administrador/hoteles",
      matchPath: "/administrador/hoteles/:id",
        component: path.resolve("src/pages/hoteles.js"),
      context:`:id`
    });
  
};
