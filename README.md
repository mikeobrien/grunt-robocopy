# grunt-robocopy [![Build Status](https://api.travis-ci.org/mikeobrien/grunt-robocopy.png?branch=master)](https://travis-ci.org/mikeobrien/grunt-robocopy) [![NPM version](https://badge.fury.io/js/grunt-robocopy.png)](https://npmjs.org/package/grunt-robocopy)
Grunt plugin for running [Robocopy](http://technet.microsoft.com/en-us/library/cc733145.aspx).
NOTE: this plugin requires Grunt 0.4.x.

## Getting Started
From the same directory as your project's Gruntfile and package.json, install
this plugin with the following command:

```bash
$ npm install grunt-robocopy --save-dev
```

Next add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-robocopy');
```

## Config
Inside your `Gruntfile.js` file, add a section named `robocopy`, containing
the robocopy options:

```js
robocopy: {
    options: {


    }
}
```

## License
MIT License