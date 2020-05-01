// @ts-check

//"use strict";

/* const testSafeLink = "/safelinks\.protection/i";

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
}; */

const testExternal = /^(?:https?\:)?\/\//;
const testValidRelative = /^(?:\.\.?\/)/;

module.exports = {
    names: ["MD100", "relative-image-urls"],
    description: "Relative URLs to images must start with ./ or ../",
    tags: ["links"],
    "function": (params, onError) => {
        params.tokens.filter(t => t.type === "inline").forEach(token => {
            let images = token.children.filter(t => t.type === "image");
            for (let img of images) {
                let src = img.attrGet("src");
                if (src) {
                    let isExternal = testExternal.test(src);
                    let isValidRelative = testValidRelative.test(src);
                    if (!isExternal && !isValidRelative) {
                        let index = img.line.indexOf(src);
                        let range = [index + 1, src.length];
                        onError({
                            lineNumber: img.lineNumber,
                            details: `In the image for ${img.content}`,
                            context: `![${src}](${img.content})`,
                            range,
                        })
                    }
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