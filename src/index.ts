import * as _ from 'lodash';
import './style.css';
import bom from './bom.png';

function component() {
  const element = document.createElement('div');
  const myImg = new Image();

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  myImg.src = bom;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
