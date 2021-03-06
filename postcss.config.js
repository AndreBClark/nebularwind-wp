import purgecssWordpress from 'purgecss-with-wordpress';
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: '../templates/**/*.twig',
    whitelist: purgecssWordpress.whitelist,
    whitelistPatterns: purgecssWordpress.whitelistPatterns,
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const cssnano = require('cssnano')('cssnano-advanced-preset');

module.exports = {
    "plugins": [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
    ]
}