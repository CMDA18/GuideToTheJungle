var enzyme = require('enzyme')
var Adapter = require('enzyme-adapter-react-16')
const { jsdom } = require('jsdom')

enzyme.configure({ adapter: new Adapter() })

global.document = jsdom('')
global.window = document.defaultView
global.navigator = {
  userAgent: 'node.js'
}
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop)
    }), {})
  Object.defineProperties(target, props)
}
copyProps(document.defaultView, global)
