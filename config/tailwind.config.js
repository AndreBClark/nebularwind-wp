const tint = require('polished/lib/color/tint');
const darken = require('polished/lib/color/darken');
module.exports = {
    theme: {
        extend: {
            container: {
                center: true,
            },
            fontFamily: {
                body: "Inter var",
                headingone: "Inter var",
                headingtwo: "Inter var"
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '108': '27rem',
                '120': '30rem',
                '132': '33rem',
                '144': '36rem',
                '156': '39rem',
                '168': '42rem',
            },
            colors: {
                'primary': "#bc2e7c",
                'secondary': "#350e47"
            }
        }
    },
    variants: {},
    plugins: []
}