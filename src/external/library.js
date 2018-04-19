/* This is just an example Javascript library. */

var module;
(function (glbl, require) {'use strict';
    function AnExternalLib () {

    }

// PUBLIC CLASS PROPERTIES AND METHODS

// For backward compatibility (deprecated)
    AnExternalLib.eval = function () {
        return "hello!"
    };

    if (typeof define === 'function' && define.amd) {
        define(function () {return AnExternalLib;});
    }
    else if (isNode) {
        module.exports = AnExternalLib;
    }
    else {
        glbl.AnExternalLib = { // Deprecated
            eval: AnExternalLib.eval
        };
        glbl.AnExternalLib = AnExternalLib;
    }
}(this || self, typeof require === 'undefined' ? null : require));