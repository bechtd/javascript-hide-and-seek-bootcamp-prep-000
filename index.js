function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    var number = parseInt(lis[i].innerHTML)
    lis[i].innerHTML = number + n
  }
}

function deepestChild() {
  var current = document.querySelector('div#grand-node');
  var firstChild = current.querySelector('div')
 
  while (current) {
    if (firstChild === null) {
      return current
    }
 
    current = firstChild
    firstChild = current.querySelector('div')
  }
 
  return null
}