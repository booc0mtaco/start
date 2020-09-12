// Entry point
(function() {
    // handle reading from the locale storage, or using a default value in 
    // matrix format

    // register components
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

    // Vue is already on the page, so let's look for the app ID,
    // then enhance it with functionality
    // 
    // all editing happens at the app-level
    var app = window.app = new Vue({
        el: '#app',
        data: {
            items: [
                [{
                    label: 'Untropy',
                    destination: 'http://untropy.net/',
                    trigger: 'u'
                },
                {
                    label: 'Vue JS',
                    destination: 'http://vuejs.org/',
                    trigger: 'i'
                },
                {
                    label: 'Flexbox',
                    destination: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex',
                    trigger: 'o'
                },
                {
                    label: 'CSS Grid',
                    destination: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
                    trigger: 'p'
                }],
                [{
                    label: 'resp. flex',
                    destination: 'http://blog.teamtreehouse.com/responsive-design-of-the-future-with-flexbox',
                    trigger: 'j'
                },
                {
                    label: 'MVVM',
                    destination: 'https://msdn.microsoft.com/en-us/library/hh848246.aspx',
                    trigger: 'k'
                },
                {
                    label: 'Webpack',
                    destination: 'https://webpack.js.org',
                    trigger: 'l'
                },
                {
                    label: 'ESLint',
                    destination: 'https://eslint.org',
                    trigger: ';'
                }],
                [{
                    label: 'TypeScript',
                    destination: 'http://www.typescriptlang.org',
                    trigger: 'm'
                },
                {
                    label: 'Sass',
                    destination: 'http://sass-lang.com/guide',
                    trigger: ','
                },
                {
                    label: 'Mocha',
                    destination: 'https://mochajs.org',
                    trigger: '.'
                },
                {
                    label: 'Sanity',
                    destination: 'https://en.wikipedia.org/wiki/Exposure_therapy',
                    trigger: '/'
                }]
            ]
        }
    });
})();
