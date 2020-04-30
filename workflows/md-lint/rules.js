// @ts-check

"use strict";

const anyBlockquote = require("./any-blockquote");
module.exports.anyBlockquote = anyBlockquote;

const noSafeLinks = require("./no-safelinks");
module.exports.noSafeLinks = noSafeLinks;

module.exports.all = [
  anyBlockquote
];