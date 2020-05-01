// @ts-check

//"use strict";

/* module.exports = {
  "names": [ "sample-rule" ],
  "description": "Sample rule",
  "tags": [ "sample" ],
  "function": function rule(params, onError) {
    params.tokens.forEach((token) => {
		console.log(token.type);
      if (token.type === "hr") {
        onError({
          "lineNumber": token.lineNumber,
          "detail": "Sample error for hr"
        });
      }
    });
  }
}; */

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

//const testExternal = /^(?:https?\:)?\/\//;
//const testValidRelative = /^(?:\.\.?\/)/;
const testSafeLink = "/safelinks\.protection/i";
module.exports = {
    names: ["MD100", "relative-image-urls"],
    description: "Relative URLs to images must start with ./ or ../",
    tags: ["links"],
    "function": (params, onError) => {
        params.tokens.filter(t => t.type === "inline").forEach(token => {
			console.log('New token:' + token.type);
			for (let child of token.children) {
				if (child.type === "link_open")
				{
					console.log('New link child: ' + child.type);
					console.log('  Content: ' + child.content);
					console.log('  Info: ' + child.info);
					console.log('  Markup :' + child.markup);
					console.log('  Tag :' + child.tag);
					console.log('  Attributes:')
					for (let attribute of token.attrs)
					{
						console.log('    ' + attribute);
					}
				}
			}
            let links = token.children.filter(t => t.type === "a");
            for (let img of links) {
                let src = img.attrGet("href");
                if (src) {
                    let isExternal = testSafeLink.test(src);
                    if (isExternal) {
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