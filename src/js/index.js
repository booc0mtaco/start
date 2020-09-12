// Entry point
(function() {
    // handle reading from the locale storage, or using a default value in 
    // matrix format

    // Data (can be read from localstore or bootstrapped with the following):
    var items = [
        {
            label: 'Untropy',
            destination: 'http://untropy.net/',
            trigger: 'q'
        },
        {
            label: 'Vue JS',
            destination: 'http://vuejs.org/',
            trigger: 'w'
        },
        {
            label: 'Flexbox',
            destination: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex',
            trigger: 'e'
        },
        {
            label: 'CSS Grid',
            destination: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
            trigger: 'r'
        },
        {
            label: 'resp. flex',
            destination: 'http://blog.teamtreehouse.com/responsive-design-of-the-future-with-flexbox',
            trigger: 'a'
        },
        {
            label: 'MVVM',
            destination: 'https://msdn.microsoft.com/en-us/library/hh848246.aspx',
            trigger: 's'
        },
        {
            label: 'Webpack',
            destination: 'https://webpack.js.org',
            trigger: 'd'
        },
        {
            label: 'ESLint',
            destination: 'https://eslint.org',
            trigger: 'f'
        },
        {
            label: 'TypeScript',
            destination: 'http://www.typescriptlang.org',
            trigger: 'z'
        },
        {
            label: 'Sass',
            destination: 'http://sass-lang.com/guide',
            trigger: 'x'
        },
        {
            label: 'Mocha',
            destination: 'https://mochajs.org',
            trigger: 'c'
        },
        {
            label: 'Sanity',
            destination: 'https://en.wikipedia.org/wiki/Exposure_therapy',
            trigger: 'v'
        }
    ];

    // Register component(s):
    Vue.component('start-button', {
        template: '#start-button',
        props: ['label', 'destination', 'trigger'],
        methods: {
            goToUrl: function() {
                var win = window.open(this.destination, '_blank');
                win.focus();
            }
        }
    });

    // Editing happens at the app-level
    var app = window.app = new Vue({
        el: '#app',
        methods: {
            handleKeyPress: function(keycode) {
                const found = this.items.filter(item => item.trigger === keycode);
                found.length && window.open(found[0].destination, '_blank').focus();
            }
        },
        data: {
            items,
            version: '0.1.0',
        }
    });

    // TODO: Find the best Vue-y way to handle attaching to page
    window.addEventListener('keypress', event => {
        app.handleKeyPress(event.key);
    })
})();
