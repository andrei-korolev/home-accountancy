module.exports = {

    // LESS config
    less: {
        src: ['./src/assets/styles/common/base.less'],
        dest: './src/assets/styles/common'
    },

    // Icons config
    icons: {
        src: './src/assets/images/icons/*',
        dest: './src/assets/styles/common',
        template: './gulp/icons-template',
        concat: 'icons.less'
    },

    svg: {
        src: './src/assets/images/svg-icons/*.svg',
        htmlSrc: 'src/index.html'
    },

    // Browser Sync config
    bsync: {
        base: './',
        start: './src/'
    },

    // Watch config
    watch: {
        less: 'src/**/*.less',
        html: 'src/**/*.html',
        ts:   'src/**/*.ts',
        icons: 'src/assets/images/icons/*',
        svg: 'src/assets/images/svg-icons/*',
        mocks: 'src/**/*.js'
    },

    clean: {
        src: ['./dist', './src/*.js*'],
        srcProd: ['./src/*.js*']
    },

    copyProd: {
        src: [
            'src/index.html',
            'src/*.js',
            'src/mocks/*',
            'src/i18n/*',
            'src/assets/*.css',
            'src/assets/fonts/**',
            'src/assets/images/other-images/**'
        ],
        dest: './dist'
    },

    // Plugins config
    plugins: {
        scope: ['dependencies', 'devDependencies', 'peerDependencies'],
        rename: {
            'gulp-sourcemaps': 'sourcemaps',
            'gulp-autoprefixer': 'autoprefixer',
            'gulp-plumber': 'plumber',
            'gulp-less': 'less',
            'gulp-soynode': 'soy',
            'gulp-image-data-uri': 'uri',
            'gulp-concat': 'concat',
            'gulp-ignore': 'ignore',
            'webpack-stream': 'plugins.webpackStream',
            'gulp-clean': 'clean',
            'gulp-svgstore': 'svgstore',
            'gulp-svgmin': 'svgmin',
            'gulp-inject': 'inject',
            'gulp-rename': 'rename',
        }
    }
};
