// Currently this file only can be pasted to https://ace.c9.io/tool/mode_creator.html

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var RioHighlightRules = function() {

    var keywords = (
        "value|is|function|of|do|end|if|then|else|use|from|expose"
    );

    var keywordMapper = this.createKeywordMapper({
        "keyword": keywords,
    }, "identifier", false);

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
        }, {
            token: "comment",
            regex: ";.*;"
        } ]
    };
    this.normalizeRules();
};

oop.inherits(RioHighlightRules, TextHighlightRules);

exports.RioHighlightRules = RioHighlightRules;
});
