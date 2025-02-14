/* eslint-disable no-useless-escape */
/* eslint-disable no-useless-concat */
// Custom task
module.exports = {
	"duplicate-post": {
		options: {
			// header:
			// = 15.7 =
			// Release Date: January 26th, 2021
			//
			// Enhancements:
			readmeFile: "./readme.txt",
			releaseInChangelog: /[=] \d+\.\d+(\.\d+)? =/g,
			matchChangelogHeader: /[=]= Changelog ==\n\n/ig,
			newHeadertemplate: "== Changelog ==\n\n" + "= " + "VERSIONNUMBER" + " =\nRelease Date: " + "DATESTRING"  + "\n\n",
			matchCorrectHeader: "= " + "VERSIONNUMBER" + "(.|\\n)*?\\n(?=(\\w\+?:\\n|= \\d+[\.\\d]+ =|= Earlier versions =))",
			matchCorrectLines: "= " + "VERSIONNUMBER" + "(.|\\n)*?(?=(= \\d+[\.\\d]+ =|= Earlier versions =))",
			matchCleanedChangelog: "= " + "VERSIONNUMBER" + "(.|\\n)*= Earlier versions =",
			replaceCleanedChangelog: "= Earlier versions =",
			pluginSlug: "duplicate-post",
			defaultChangelogEntries: "",
			useANewLineAfterHeader: true,
			commitChangelog: true,
			changelogToInject: ".tmp/n8nchangelog.txt",
		},
	},

};
