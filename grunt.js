module.exports = function(grunt) {
// var libFiles = ['common.js', 'graphic_elements/**/*.js', 'utilities/**/*.js'];
var libFiles = ['common.js',
                'graphic_elements/UIElement.js',
                'graphic_elements/UI.js',
                'graphic_elements/Curve.js',
                'graphic_elements/Bar.js',
                'graphic_elements/Button.js',
                'graphic_elements/Background.js',
                'graphic_elements/Band.js',
                'graphic_elements/ClickBar.js',
                'graphic_elements/Gauge.js',
                'graphic_elements/Grid.js',
                'graphic_elements/Knob.js',
                'graphic_elements/Label.js',
                'graphic_elements/RotKnob.js',
                'graphic_elements/Slider.js',
                'graphic_elements/Wavebox.js',
                'graphic_elements/extras/CurveEditor.js',
                'graphic_elements/engines/EngineFactory.js',
                'graphic_elements/engines/CanvasUtils.js',
                'utilities/Utilities.js'
                ];

  // Project configuration.
  grunt.initConfig({
    lint: {
      all: libFiles
    },
    jshint: {
      options: {
        browser: true,
        smarttabs: true,
      }
    },
   concat: {
    dist: {
      src: libFiles,
      dest: 'kievII.js'
    }
   },
   min: {
    dist: {
      src: 'kievII.js',
      dest: 'kievII.min.js'
    }
  },
  uglify: {
    mangle: {toplevel: true},
    squeeze: {dead_code: false},
    codegen: {quote_keys: true}
  }
   
  });

  // Default task.
  grunt.registerTask('default', 'lint concat min');

};