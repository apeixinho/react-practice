import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import './stylesheets/app.css';
import { monjit } from './components/test';

console.info('In the index!', monjit);
const index = 'This is index file.';
$('#app').append('<h1>Webpack Bundling</h1>');
$('#app').append(monjit[0]);