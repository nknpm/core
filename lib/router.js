"use strict";

var Router = {
  delRoute: function(meth, path) {
    delete this.routes[meth.toLowerCase()][path];
  },
  getRoute: function(meth, path) {
    return this.routes[meth.toLowerCase()][path];
  },
  loadRoute: function(meth, path) {
    var ctrl = this.getRoute(meth, path);
    return require('../' + ctrl);
  },
  setRoute: function(meth, path, ctrl) {
    var route = Array;
    route[path] = ctrl;
    this.routes[meth.toLowerCase()] = route;
  },
  routes: [
    'delete',
    'get',
    'post',
    'put'
  ]
};

module.exports = Router;
