/* global require, process */
const { flattenVersionForFile } = require( './config/webpack/paths' );
const path = require( "path" );

module.exports = function( grunt ) {
	'use strict';

	const pkg = grunt.file.readJSON( 'package.json' );
	const pluginVersion = pkg.yoast.pluginVersion;

	const project = {
		pluginVersion,
		pluginVersionSlug: flattenVersionForFile( pluginVersion ),
		pluginSlug: "duplicate-post",
		pluginMainFile: "duplicate-post.php",
		paths: {
			get config() {
				return this.grunt + 'task-config/';
			},
			grunt: 'config/grunt/',
			images: 'images/',
			js: 'js/',
		},
		files: {
			images: [
				'images/*'
			],
			js: [
				'js/src/*.js',
				'!js/dist/*.min.js'
			],
			get config() {
				return project.paths.config + '*.js';
			},
			grunt: 'Gruntfile.js'
		},
		versionFiles: [
			"package.json",
			"duplicate-post.php",
		],
		pkg,
	};

	// Load Grunt configurations and tasks
	require( 'load-grunt-config' )( grunt, {
		configPath: path.join( process.cwd(), "node_modules/@yoast/grunt-plugin-tasks/config/" ),
		overridePath: path.join( process.cwd(), project.paths.config ),
		data: project,
		jitGrunt: {
			staticMappings: {
				"set-version": "@yoast/grunt-plugin-tasks",
				"update-version": "@yoast/grunt-plugin-tasks",
			},
			customTasksDir: 'config/grunt/custom-tasks',
		}
	});
};
