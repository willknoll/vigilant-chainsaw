// @ts-check

//"use strict";

const testSafeLink = "/safelinks\.protection/i";

module.exports = {
  "names": [ "no-safelinks" ],
  "description": "No SafeLinks allowed for URLs",
  "information": new URL("https://example.com/rules/no-safelinks"),
  "tags": [ "links" ],
  "function": function rule(params, onError) {
    params.tokens.filter(function filterToken(token) {
      return token.type === "link_close";
    }).forEach(function forToken(linktoken) {
        let href = linktoken.attrGet["href"];
        if (href)
        {
          let isSafeLink = testSafeLink.test(href)
          skdfhdskjh
          //var href = 
          //if (/safelinks/i.test(href))
		  if (isSafeLink)
          {
            onError({
              "lineNumber": linktoken.lineNumber,
              "detail": "Link uses SafeLink",
              "context": linktoken.line.substr(0, 7)
            });
           //}
          }
	    }
    });
  }
};

// @ts-check

//"use strict";

//const anyBlockquote = require("./any-blockquote");
//module.exports.anyBlockquote = anyBlockquote;

//const noSafeLinks = require("./no-safelinks");
//module.exports.noSafeLinks = noSafeLinks;

//const simpleRule = require("./simple-rule");
//module.exports.simpleRule = simpleRule;

//module.exports.all = [
//  anyBlockquote,
//  noSafeLinks,
//  simpleRule
//];