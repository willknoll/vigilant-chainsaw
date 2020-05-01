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
const testSafeLink = new RegExp("safelinks\.protection");
module.exports = {
    names: ["MD100", "relative-image-urls"],
    description: "Relative URLs to images must start with ./ or ../",
    tags: ["links"],
    "function": (params, onError) => {
        params.tokens.filter(t => t.type === "inline").forEach(token => {
			let links = token.children.filter(t => t.type === "link_open");
			console.log('New link found:');
			for (let alink of links)
			{
				let href = child.attrGet('href');
				console.log('  ' + href);
				if (testSafeLink.test(href.toLowerCase()))
				{
					let index = alink.line.indexOf(href);
                    let range = [index + 1, href.length];
                    onError({
                        lineNumber: href.lineNumber,
                        details: `In the link for ${alink.content}`,
                        context: `![${alink}](${alink.content})`,
                        range
                    })
				}
				else
				{
					console.log('  Not a SafeLink')
				}
				//if (child.type === "link_open")
				//{
					//console.log('New link child: ' + child.type);
					//console.log('  Content: ' + child.content);
					//console.log('  Info: ' + child.info);
					//console.log('  Markup :' + child.markup);
					//console.log('  Tag :' + child.tag);
					//console.log('  Attributes:')
					//for (let attribute of token.attrs)
					//{
						//let href = child.attrGet("href");
						//console.log('    ' + href);
						//console.log('    ' + testSafeLink.test(href.toLowerCase()));
					//}
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