const babel = require('@babel/core');

const visitor = {
  IfStatement(path) {
    path.node.type = 'SiStatement';
  }
};

module.exports = function(babel) {
  return {
    visitor
  };
};
