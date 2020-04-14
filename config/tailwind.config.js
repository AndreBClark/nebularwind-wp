const tint = require('polished/lib/color/tint');
const darken = require('polished/lib/color/darken');
module.exports = {
    theme: {
        extend: {
            container: {
                center: true,
            },
            fontFamily: {
                body: ["Inter", '-apple-system', 'BlinkMacSystemFont', "Helvetica Neue", "Helvetica", "sans-serif"],
                heading: ["Inter", '-apple-system', 'BlinkMacSystemFont', "Helvetica Neue", "Helvetica", "sans-serif"],
            },
            fontSize: {
                "7xl": '5rem',
                "8xl": '6rem',
                '9xl': '7rem',
                '10xl': '8rem'
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
                '180': '45rem'
            },
            colors: {
                'primary': "#bc2e7c",
                'secondary': "#350e47",
                'dark': "#1a202c"
            }
        }
    },
    variants: {
    },
    plugins: [
        require('tailwindcss-blend-mode')()
    ]
}