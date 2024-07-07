import LocomotiveScroll from 'locomotive-scroll';
import '../../styles/smooth.css';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

console.log('first');
