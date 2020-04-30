// @ts-check

"use strict";

module.exports = {
  "names": [ "no-safelinks" ],
  "description": "No SafeLinks allowed for URLs",
  "tags": [ "links" ],
  "function": function safelinkRule(params, onError) {
	params.tokens.filter(function filterToken(token) {
      return token.type === "link_open";
    }).forEach(function forToken(linktoken) {
		var href = token.attrs["href"];
		if (/safelinks/i.test(href)) {
			onError({
				"lineNumber": linktoken.lineNumber,
				"detail": "Link uses SafeLink"",
				"context": linktoken.line.substr(0, 7)
			});
		}
	}
  }
};
	  
/*	  
    filterTokens(params, "inline", function forToken(token) {
      let inLink = false;
      let linkText = "";
      let emptyLink = false;
      token.children.forEach(function forChild(child) {
        if (child.type === "link_open") {
          inLink = true;
          linkText = "";
          child.attrs.forEach(function forAttr(attr) {
            if (attr[0] === "href" && (!attr[1] || (attr[1] === "#"))) {
              emptyLink = true;
            }
          });
        } else if (child.type === "link_close") {
          inLink = false;
          if (emptyLink) {
            addErrorContext(onError, child.lineNumber,
              "[" + linkText + "]()", null, null,
              rangeFromRegExp(child.line, emptyLinkRe));
          }
        } else if (inLink) {
          linkText += child.content;
        }
      });
    });
  }
};
*/
