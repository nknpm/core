"use strict";

var Router = {
  delRoute: function(meth, path) {
    delete this.routes[meth.toLowerCase()][path];
  },
  getRoute: function(meth, path) {
    return this.routes[meth.toLowerCase()][path];
  },
  loadRoute: function(meth, path) {
    var route = this.getRoute(meth, path);
    return require('../../../api/route/' + route);
  },
  setRoute: function(meth, path, route) {
    var newRoute = [];
    newRoute[path] = route;
    this.routes[meth.toLowerCase()] = newRoute;
  },
  routes: [
    'delete',
    'get',
    'post',
    'put'
  ]
};

module.exports = Router;
