import {add, count} from './index2.js';
console.log(count)
add(2,4)
console.log(count)
// count +=1 es6中的模块导出为值的映射 只能观察 不能直接改变

// async function getComponent() { 动态引入
//   const element = document.createElement('div');

//   const {default: _} = await import('lodash')
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// })
