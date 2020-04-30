// @ts-check

"use strict";

module.exports = {
  "names": [ "no-safelinks" ],
  "description": "No SafeLinks allowed for URLs",
  "tags": [ "links" ],
  "information": new URL("https://example.com/rules/no-safelinks"),
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
	});
  }
};