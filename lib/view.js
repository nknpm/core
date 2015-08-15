"use strict";

var View = {
  layout: {
    head: '<!DOCTYPE html><html lang="en"><head>{{ meta }}<title>{{ title }}</title>{{ styles }}{{ scripts }}</head><body>',
    body: '{{ body }}',
    foot: '{{ foot }}</body></html>'
  },
  prepare: function(call) {
    var html = {},
        body = /\{\{ body \}\}/g,
        foot = /\{\{ foot \}\}/g,
        meta = /\{\{ meta \}\}/g,
        title = /\{\{ title \}\}/g,
        styles = /\{\{ styles \}\}/g,
        scripts = /\{\{ scripts \}\}/g;

    this.layout.head = this.layout.head.replace(meta, '<meta name="keywords" content="krud, app">');
    this.layout.head = this.layout.head.replace(title, 'Frontpage | KRUD.app');
    this.layout.head = this.layout.head.replace(scripts, '<script type="text/javascript" src="/public/js/global.js"></script>');
    this.layout.head = this.layout.head.replace(styles, '<style type="text/css" media="all">@import url("/public/css/global.css");</style>');
    this.layout.body = this.layout.body.replace(body, '<h1>KRUD.app</h1><p>Welcome to the front page!</p>');
    this.layout.foot = this.layout.foot.replace(foot, '');

    return call(this.layout);
  },
  render: function() {
    return this.prepare(function(html) {
      return html.head + html.body + html.foot;
    });
  }
};

module.exports = View;
