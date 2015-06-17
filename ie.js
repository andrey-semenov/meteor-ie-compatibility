console = window.console;
if (!console) {
  window._logs = {
    log: [],
    info: [],
    trace: [],
    debug: [],
    warn: [],
    error: []
  };

  console = {
    log: function(e) {
      var message = "";
      for (var i = 0; i < arguments.length; i++) {
        message += "ARG" + i + ": " + arguments[i].toString() + "\n";
      }
      window._logs.log.push(message);
    }
    ,
    info: function(e) {
      var message = "";
      for (var i = 0; i < arguments.length; i++) {
        message += "ARG" + i + ": " + arguments[i].toString() + "\n";
      }
      window._logs.info.push(message);
    },
    trace: function(e) {
      var message = "";
      for (var i = 0; i < arguments.length; i++) {
        message += "ARG" + i + ": " + arguments[i].toString() + "\n";
      }
      window._logs.trace.push(message);
    },
    debug: function(e) {
      var message = "";
      for (var i = 0; i < arguments.length; i++) {
        message += "ARG" + i + ": " + arguments[i].toString() + "\n";
      }
      window._logs.debug.push(message);
    },
    warn: function(e) {
      var message = "";
      for (var i = 0; i < arguments.length; i++) {
        message += "ARG" + i + ": " + arguments[i].toString() + "\n";
      }
      window._logs.warn.push(message);
    },
    error: function(e) {
      var message = "";
      for (var i = 0; i < arguments.length; i++) {
        message += "ARG" + i + ": " + arguments[i].toString() + "\n";
      }
      window._logs.error.push(message);
    },
    clear: function() {}
  };
}

/* Make sure all console methods are defined */
var consoleMethods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
];

var noop = function () {};
for (var i = 0; i < consoleMethods.length; i++) {
  if (!console[consoleMethods[i]]) {
    console[consoleMethods[i]] = noop;
  }
}