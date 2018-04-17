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
<<<<<<< HEAD
  var current = document.querySelector('div#grand-node');
  var firstChild = current.querySelector('div')
 
  while (current) {
    if (firstChild === null) {
      return current
    }
 
    current = firstChild
    firstChild = current.querySelector('div')
=======
  const divs = document.querySelectorAll('div#grand-node');
  return divs[0].querySelector('div').querySelector('div').querySelector('div');

}

function deepestChild01() {
  const divs = document.querySelectorAll('div#grand-node');

  var current = divs
  var children = current[0].innerHTML
 
  while (current) {
    if (children === undefined) {
      return current
    }
 
    current = children
    children = current[0].innerHTML
>>>>>>> 7a7fdf71ab5fb1db7f89170424b119ce62e5f920
  }
 
  return null
}