import Client from 'react-engine/lib/client';

require('./js/views/**/*.js', { glob: true });

const options = {
    viewResolver: viewName => require('./js/views/' + viewName)
};

document.addEventListener('DOMContentLoaded', () => Client.boot(options));