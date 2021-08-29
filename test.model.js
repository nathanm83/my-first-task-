module.exports = (sequelize, Sequelize) => {
  const myfirsttask = sequelize.define("myfirsttask", {
    title: {
      type: Sequelize.STRING,
    },

    description: {
      type: Sequelize.STRING,
    },

    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return myfirsttask;
};
