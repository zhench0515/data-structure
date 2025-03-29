import { LinkedList } from '../index.js'
const linkedList = new LinkedList()
console.log(linkedList.push()) // LinkedList {head: null, tail: null, size: 0}
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
console.log(linkedList)
console.log(linkedList.toString()) // 1 -> 2 -> 3 -> 4 -> 5
linkedList.removeAt(2)
console.log(linkedList.toString()) // 1 -> 2 -> 4 -> 5
console.log(linkedList.indexOf(4)) // 2
console.log(linkedList.getHead()) // Node {value: 1, next: Node}
console.log(linkedList.getTail()) // Node {value: 5, next: null}
console.log(linkedList.size) // 4
linkedList.insert(2, 3)
console.log(linkedList.toString()) // 1 -> 2 -> 3 -> 4 -> 5
linkedList.reverse()
console.log(linkedList.toString()) // 5 -> 4 -> 3 -> 2 -> 1
linkedList.reverse()
// linkedList.remove(4)
// console.log(linkedList.toString()) // 1 -> 2 -> 3 -> 5
// linkedList.clear()
// console.log(linkedList.toString()) // ''

// 链表节点互换 m<=n
function switchNode(head, m, n) {
  if (m === n) return head

  let preM = null
  let curM = null
  let preN = null
  let curN = null

  let current = head
  let index = 1
  while (current) {
    if (index === m - 1) {
      preM = current
    }
    if (index === m) {
      curM = current
    }
    if (index === n - 1) {
      preN = current
    }
    if (index === n) {
      curN = current
    }
    index++
    current = current.next
  }
  // 挨着的情况
  if (n - m === 1) {
    if (preM === null) {
      let nextN = curN.next
      head = curN
      curM.next = null
      curN.next = curM
      curM.next = nextN
    } else {
      const nextN = curN.next
      curM.next = null
      preM.next = curN
      curN.next = curM
      curM.next = nextN
    }
  } else {
    // m为第一个
    if (preM === null) {
      let nextM = curM.next
      let nextN = curN.next

      head = curN
      curN.next = nextM

      preN.next = curM
      curM.next = nextN
    } else {
      let nextM = curM.next
      let nextN = curN.next

      preM.next = curN
      curN.next = nextM
      preN.next = curM
      curM.next = nextN
    }
  }
  return head
}
switchNode(linkedList.getHead(), 2, 5)
console.log(linkedList.toString()) // 1 -> 5 -> 3 -> 4 -> 2
