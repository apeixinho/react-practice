import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import './stylesheets/app.css';
import { monjit } from './components/test';

console.info('In the index!', monjit);
const index = 'This is index file.';
document.getElementById('app').appendChild(monjit[0]);