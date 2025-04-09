import { DoublyLinkedList } from '../index.js'

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list)
console.log('----------------------尾部添加节点-------------------------------')
console.log(list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
console.log(list.getHead()) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getTail()) // DoublyNode {value: 5, next: null, prev: DoublyNode}
console.log(list.values()) // [1, 2, 3, 4, 5]
console.log(list.getSize()) // 5
console.log(list.getNodeAt(0)) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getNodeAt(2)) // DoublyNode {value: 3, next: DoublyNode, prev: DoublyNode}
console.log(list.getNodeAt(4)) // DoublyNode {value: 5, next: null, prev: DoublyNode}
console.log(list.getNodeAt(5)) // undefined
console.log(list.indexOf(1)) // 0
console.log(list.indexOf(5)) // 4
console.log(list.indexOf(6)) // -1
console.log('----------------------尾部删除节点-------------------------------')
list.pop()
console.log(list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 -> null
console.log(list.getHead()) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getTail()) // DoublyNode {value: 4, next: null, prev: DoublyNode}
console.log(list.values()) // [1, 2, 3, 4]
console.log(list.getSize()) // 4
console.log(list.getNodeAt(0)) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getNodeAt(1)) // DoublyNode {value: 2, next: DoublyNode, prev: DoublyNode}
console.log(list.getNodeAt(3)) // DoublyNode {value: 4, next: null, prev: DoublyNode}
console.log(list.getNodeAt(4)) // undefined
console.log(list.indexOf(1)) // 0
console.log(list.indexOf(4)) // 3
console.log(list.indexOf(6)) // -1
console.log('-----------------------头部添加节点----------------------------')
list.unshift(0)
console.log(list.toString()) // null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 -> null
console.log(list.getHead()) // DoublyNode {value: 0, next: DoublyNode, prev: null}
console.log(list.getTail()) // DoublyNode {value: 4, next: null, prev: DoublyNode}
console.log(list.values()) // [0, 1, 2, 3, 4]
console.log(list.getSize()) // 5
console.log(list.getNodeAt(0)) // DoublyNode {value: 0, next: DoublyNode, prev: null}
console.log(list.getNodeAt(1)) // DoublyNode {value: 1, next: DoublyNode, prev: DoublyNode}
console.log(list.getNodeAt(3)) // DoublyNode {value: 3, next: DoublyNode, prev: DoublyNode}
console.log(list.getNodeAt(5)) // undefined
console.log(list.indexOf(1)) // 1
console.log(list.indexOf(4)) // 4
console.log(list.indexOf(6)) // -1
console.log('-----------------------头部删除节点----------------------------')
list.shift()
list.shift()
console.log(list.toString()) // null <- 2 <-> 3 <-> 4 -> null
console.log(list.getHead()) // DoublyNode {value: 2, next: DoublyNode, prev: null}
console.log(list.getTail()) // DoublyNode {value: 4, next: null, prev: DoublyNode}
console.log(list.values()) // [2, 3, 4]
console.log(list.getSize()) // 3
console.log(list.getNodeAt(0)) // DoublyNode {value: 2, next: DoublyNode, prev: null}
console.log(list.getNodeAt(1)) // DoublyNode {value: 3, next: DoublyNode, prev: DoublyNode}
console.log(list.getNodeAt(3)) // undefined
console.log(list.indexOf(2)) // 0
console.log(list.indexOf(4)) // 2
console.log(list.indexOf(6)) // -1
console.log('------------------------插入节点-----------------------------')
list.insert(0, 1)
list.insert(4, 5)
list.insert(2, 'a')
console.log(list.toString()) // null <- 1 <-> 2 <-> a <-> 3 <-> 4 <-> 5 -> null
console.log(list.getHead()) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getTail()) // DoublyNode {value: 5, next: null, prev: DoublyNode}
console.log(list.values()) // [1, 2, 'a', 3, 4, 5]
console.log(list.getSize()) // 6
console.log(list.getNodeAt(0)) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getNodeAt(5)) // DoublyNode {value: 5, next: null, prev: DoublyNode}
console.log(list.getNodeAt(6)) // undefined
console.log(list.indexOf('a')) // 2
console.log(list.indexOf(4)) // 4
console.log(list.indexOf(6)) // -1
console.log('------------------------删除节点-----------------------------')
list.remove('a')
list.removeAt(4)
list.removeAt(4)
console.log(list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 -> null
console.log(list.getHead()) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getTail()) // DoublyNode {value: 4, next: null, prev: DoublyNode}
console.log(list.values()) // [1, 2, 3, 4]
console.log(list.getSize()) // 4
console.log(list.getNodeAt(0)) // DoublyNode {value: 1, next: DoublyNode, prev: null}
console.log(list.getNodeAt(3)) // DoublyNode {value: 4, next: null, prev: DoublyNode}
console.log(list.getNodeAt(6)) // undefined
console.log(list.indexOf('a')) // -1
console.log(list.indexOf(1)) // 0
console.log(list.indexOf(3)) // 2
console.log('------------------------反转链表-----------------------------')
list.reverse()
console.log(list.toString()) // null <- 4 <-> 3 <-> 2 <-> 1 -> null
console.log(list.values()) // [4, 3, 2, 1]
console.log(list.getSize()) // 4
console.log(list.getNodeAt(0)) // DoublyNode {value: 4, next: DoublyNode, prev: null}
console.log(list.getNodeAt(3)) // DoublyNode {value: 1, next: null, prev: DoublyNode}
console.log(list.getNodeAt(6)) // undefined
console.log(list.indexOf(1)) // 3
console.log(list.indexOf(3)) // 1
console.log('------------------------清空链表-----------------------------')
list.clear()
console.log(list.toString()) // ''
console.log(list.getHead()) // null
console.log(list.getTail()) // null
console.log(list.values()) // []
console.log(list.getSize()) // 0
