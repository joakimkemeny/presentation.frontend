/* global module */
module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({

		// Configure the compass task to compile the sass files.
		compass: {
			// TODO: Configure source maps.
			compile: {
				options: {
					cssDir: 'css',
					outputStyle: 'compressed',
					sassDir: 'src/scss'
				}
			}
		},

		// Configure the concat task to combine all libraries into one file.
		concat: {
			app: {
				src: 'src/js/**/*.js',
				dest: 'js/app.js'
			},
			libs: {
				src: [
					'bower_components/jquery/jquery.min.js',
					'bower_components/jquery-ui/ui/minified/jquery.ui.widget.min.js',
					'bower_components/lodash/dist/lodash.min.js',
					'bower_components/handlebars/handlebars.min.js',
					'bower_components/ember/ember.js',
					'bower_components/ember-data/ember-data.js',
					'bower_components/moment/min/moment.min.js',
					'bower_components/d3/d3.min.js',
					'bower_components/jke-d3-calendar/src/js/jke-d3-calendar.js',
					'bower_components/jke-d3-ecg/src/js/jke-d3-ecg.js',
					'bower_components/stomp-websocket/lib/stomp.min.js',
					'bower_components/floating-label/dist/floating-label.min.js',
					'bower_components/jquery-resize/jquery.ba-resize.min.js'
				],
				dest: 'js/libs.js'
			}
		},

		// Configure the connect task to start a web server for the demo.
		connect: {
			demo: {
				options: {
					base: '.',
					livereload: true,
					port: 3000
				}
			}
		},

		// Configure the copy task to copy all fonts from bower_components.
		copy: {
			fonts: {
				expand: true,
				flatten: true,
				src: [
					'bower_components/font-awesome/fonts/*',
					'!bower_components/font-awesome/fonts/*.otf'
				],
				dest: 'fonts/'
			},

			// Copy our generated files to the demo-server project.
			'server-css': {
				src: 'css/style.css',
				dest: '../demo-server/src/main/resources/static/css/style.css'
			},
			'server-js': {
				src: 'js/libs.js',
				dest: '../demo-server/src/main/resources/static/js/libs.js'
			}
		},

		// Configure the emberTemplates to compile all Ember templates.
		emberTemplates: {
			compile: {
				options: {
					templateBasePath: /src\/templates\//
				},
				files: {
					'js/templates.js': 'src/templates/**/*.hbs'
				}
			}
		},

		// Configure the jshint task to check the syntax of all JavaScript files.
		jshint: {
			all: {
				options: {
					jshintrc: '.jshintrc',
					force: true
				},
				src: ['Gruntfile.js', 'src/js/**/*.js']
			}
		},

		// Configure the uglify task to concatenate and optimize all JavaScript files.
		//		uglify: {
		//			// TODO: Configure source maps.
		//			dist: {
		//				src: 'src/js/**/*.js',
		//				dest: 'js/app.js'
		//			}
		//		},

		// Configure the watch task to listen to changes to relevant files and run the correct tasks.
		watch: {
			options: {
				livereload: true
			},
			compass: {
				files: ['Gruntfile.js', 'src/scss/**/*.scss'],
				tasks: ['compass']
			},
			concat: {
				files: ['Gruntfile.js', 'src/js/**/*.js'],
				tasks: ['concat:app']
			},
			emberTemplates: {
				files: ['Gruntfile.js', 'src/templates/**/*.hbs'],
				tasks: ['emberTemplates']
			},
			//			uglify: {
			//				files: ['Gruntfile.js', 'src/js/**/*.js'],
			//				tasks: ['uglify']
			//			},
			jshint: {
				files: ['Gruntfile.js', 'src/js/**/*.js'],
				tasks: ['jshint']
			}
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Aliases
	grunt.registerTask('build', ['jshint', 'compass', 'concat', 'emberTemplates', 'copy']);
	grunt.registerTask('default', ['build', 'connect', 'watch']);
};
