// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = fs.readFileSync('config.ngx').toString();
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
// Generated by LiveScript 1.3.1
var fs, LiveScript, engine;
fs = require('fs');
LiveScript = require('LiveScript');
engine = function(code, cfg){
  var vars, k, v, ret;
  code == null && (code = "");
  cfg == null && (cfg = {});
  cfg = typeof cfg === 'function' ? cfg() : cfg;
  code = code.replace(/\\/gm, "\\\\").replace(/#/gm, "\\#").replace(/\$/gm, "\\$").replace(/!{/gm, '#{');
  vars = (function(){
    var ref$, results$ = [];
    for (k in ref$ = cfg) {
      v = ref$[k];
      results$.push([k, v]);
    }
    return results$;
  }()).map(function(d){
    return d[0] + " = " + JSON.stringify(d[1]) + ";";
  });
  code = (vars.join('\n') + " return ") + '"""\n' + code + '""";';
  return ret = LiveScript.run(code);
};
module.exports = engine;
