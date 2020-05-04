# Enforced Markdown Rules and How to Fix Them

## Background

To maintain consistency in markdown code and make validation easier, all of our
content is processed with Markdownlint. This tool reads all of the markdown
code and checks it against various rules. All failures noted must be fixed before
content can be merged, aside from the following:

* Inline `<br >` HTML tags are allowed within tables, however, they are still flagged as a failure.
* When intended styling conflicts with a rule, exceptions will be made on a case by case basis.

## Rules

The following is a list of all rules which are checked by Markdownlint. Items that are
struck through have been disabled and will not cause falures.

[MD001](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md001) ~~heading-increment/header-increment - Heading levels should only increment by one level at a time~~  
[MD002](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md002) first-heading-h1/first-header-h1 - First heading should be a top level heading  
[MD003](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md003) heading-style/header-style - Heading style  
[MD004](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md004) ul-style - Unordered list style  
[MD005](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md005) list-indent - Inconsistent indentation for list items at the same level  
[MD006](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md006) ~~ul-start-left - Consider starting bulleted lists at the beginning of the line~~  
[MD007](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md007) ul-indent - Unordered list indentation  
[MD009](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md009) ~~no-trailing-spaces - Trailing spaces~~  
[MD010](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md010) ~~no-hard-tabs - Hard tabs~~  
[MD011](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md011) no-reversed-links - Reversed link syntax  
[MD012](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md012) ~~no-multiple-blanks - Multiple consecutive blank lines~~  
[MD013](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md013) ~~line-length - Line length~~  
[MD014](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md014) commands-show-output - Dollar signs used before commands without showing output  
[MD018](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md018) no-missing-space-atx - No space after hash on atx style heading  
[MD019](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md019) no-multiple-space-atx - Multiple spaces after hash on atx style heading  
[MD020](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md020) no-missing-space-closed-atx - No space inside hashes on closed atx style heading  
[MD021](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md021) no-multiple-space-closed-atx - Multiple spaces inside hashes on closed atx style heading  
[MD022](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md022) ~~blanks-around-headings/blanks-around-headers - Headings should be surrounded by blank lines~~  
[MD023](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md023) heading-start-left/header-start-left - Headings must start at the beginning of the line  
[MD024](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md024) ~~no-duplicate-heading/no-duplicate-header - Multiple headings with the same content~~  
[MD025](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md025) ~~single-title/single-h1 - Multiple top level headings in the same document~~  
[MD026](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md026) ~~no-trailing-punctuation - Trailing punctuation in heading~~  
[MD027](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md027) no-multiple-space-blockquote - Multiple spaces after blockquote symbol  
[MD028](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md028) ~~no-blanks-blockquote - Blank line inside blockquote~~  
[MD029](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md029) ol-prefix - Ordered list item prefix  
[MD030](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md030) ~~list-marker-space - Spaces after list markers~~  
[MD031](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md031) ~~blanks-around-fences - Fenced code blocks should be surrounded by blank lines~~  
[MD032](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md032) ~~blanks-around-lists - Lists should be surrounded by blank lines~~  
[MD033](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md033) no-inline-html - Inline HTML  
[MD034](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md034) no-bare-urls - Bare URL used  
[MD035](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md035) hr-style - Horizontal rule style  
[MD036](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md036) ~~no-emphasis-as-heading/no-emphasis-as-header - Emphasis used instead of a heading~~  
[MD037](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md037) no-space-in-emphasis - Spaces inside emphasis markers  
[MD038](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md038) no-space-in-code - Spaces inside code span elements  
[MD039](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md039) no-space-in-links - Spaces inside link text  
[MD040](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md040) fenced-code-language - Fenced code blocks should have a language specified  
[MD041](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md041) ~~first-line-heading/first-line-h1 - First line in file should be a top level heading~~  
[MD042](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md042) no-empty-links - No empty links  
[MD043](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md043) required-headings/required-headers - Required heading structure  
[MD044](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md044) proper-names - Proper names should have the correct capitalization  
[MD045](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md045) no-alt-text - Images should have alternate text (alt text)  
[MD046](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md046) code-block-style - Code block style  
[MD047](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md047) ~~single-trailing-newline - Files should end with a single newline character~~  
[MD048](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md#md048) code-fence-style - Code fence style  

See markdownlint's [Rules.md](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md) file for more details.

## Overriding Rules

Rules can be overridden within HTML content by adding special comments around the
content which should ignore checking. This functionality should only be used
for approved exceptions, please do not abuse it.

```html
<!-- markdownlint-disable -->
any violations you want
<!-- markdownlint-restore -->
```
