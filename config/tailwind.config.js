const tint = require('polished/lib/color/tint');
const darken = require('polished/lib/color/darken');
module.exports = {
    theme: {
        extend: {
            screens: {
                '2xl': '1680px'
            },
            container: {
                center: true,
            },
            fontFamily: {
                headingone: "'Inter var'",
                headingtwo: "'Inter var'"
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '108': '27rem',
                '120': '30rem'
            },
            colors: {
                'primary': "#bc2e7c",
            }
        }
    },
    variants: {},
    plugins: []
}