function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(num) {
  const rankedList = document.querySelectorAll(".ranked-list")
  const rankedList1 = rankedList[0]
  const rankedList2 = rankedList[1]

  let children1 = rankedList1.children
  for (let i = 0; i < children1.length; i++) {
    children1[i].innerHTML = parseInt(children1[i].innerHTML) + num
  }
  let children2 = rankedList2.children
  for (let i = 0; i < children2.length; i++) {
    children2[i].innerHTML = parseInt(children2[i].innerHTML) + num
  }
}
