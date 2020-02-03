define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var RioHighlightRules = function() {

    var keywords = (
        "value|is|function|of|do|end"
    );

    var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
    }, "identifier", true);

    this.$rules = {
        "start" : [ {
            token : "string",           // " string
            regex : '".*?"'
        }, {
            token : "constant.numeric", // float
            regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
        }, {
            token : keywordMapper,
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
        }, {
            token : "paren.lparen",
            regex : "[\\(]"
        }, {
            token : "paren.rparen",
            regex : "[\\)]"
        }, {
            token : "text",
            regex : "\\s+"
        } ]
    };
    this.normalizeRules();
};

oop.inherits(RioHighlightRules, TextHighlightRules);

exports.RioHighlightRules = RioHighlightRules;
});

