// const testDiv = dom.find('#test')[0]
const div = dom.find('#test>.red')[0]
console.log(dom.find('.red', test))

dom.style(div, 'color', 'red')
// dom.style(div, 'color', 'black')

const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))