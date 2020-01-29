import _ from 'lodash';
import printMe from './print';


function commponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click on me to console.log';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(commponent());