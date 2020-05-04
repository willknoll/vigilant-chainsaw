// @ts-check

//"use strict";

const testSafeLink = new RegExp("safelinks\.protection");
module.exports = {
    names: ["MD100", "any-safelink-url"],
    description: "URLs that contain SafeLinks must be converted to the actual endpoint link",
    tags: ["links"],
    "function": (params, onError) => {
        params.tokens.filter(t => t.type === "inline").forEach(token => {
			let links = token.children.filter(t => t.type === "link_open");
			for (let alink of links)
			{
				//console.log('New link found:');
				let href = alink.attrGet('href');
				//console.log('  ' + href);
				if (testSafeLink.test(href.toLowerCase()))
				{
					let index = alink.line.indexOf(href);
                    let range = [index + 1, href.length];
                    onError({
                        lineNumber: alink.lineNumber,
                        context: `(${href})`,
                        //range
                    })
				}
				else
				{
					//console.log('  Not a SafeLink')
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