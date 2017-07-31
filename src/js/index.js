// Entry point
(function() {
    // handle reading from the locale storage, or using a default value in 
    // matrix format

    // register components
    Vue.component('start-button', {
        template: '#start-button',
        props: ['label', 'destination', 'breach'],
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
                    breach: 'u'
                },
                {
                    label: 'Vue JS',
                    destination: 'http://vuejs.org/',
                    breach: 'i'
                },
                {
                    label: 'Flexbox',
                    destination: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex',
                    breach: 'o'
                },
                {
                    label: 'CSS Grid',
                    destination: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
                    breach: 'p'
                }],
                [{
                    label: 'resp. flex',
                    destination: 'http://blog.teamtreehouse.com/responsive-design-of-the-future-with-flexbox',
                    breach: 'j'
                },
                {
                    label: 'MVVM',
                    destination: 'https://msdn.microsoft.com/en-us/library/hh848246.aspx',
                    breach: 'k'
                },
                {
                    label: 'Webpack',
                    destination: 'https://webpack.js.org',
                    breach: 'l'
                },
                {
                    label: 'ESLint',
                    destination: 'https://eslint.org',
                    breach: ';'
                }],
                [{
                    label: 'TypeScript',
                    destination: 'http://www.typescriptlang.org',
                    breach: 'm'
                },
                {
                    label: 'Sass',
                    destination: 'http://sass-lang.com/guide',
                    breach: ','
                },
                {
                    label: 'Mocha',
                    destination: 'https://mochajs.org',
                    breach: '.'
                },
                {
                    label: 'Sanity',
                    destination: 'https://en.wikipedia.org/wiki/Exposure_therapy',
                    breach: '/'
                }]
            ]
        }
    });
})();
