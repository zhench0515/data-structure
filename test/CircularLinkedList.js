import { CircularLinkedList } from '../index.js'

let list = new CircularLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list)
console.log('----------------------尾部添加节点-------------------------------')
console.log(list.toString()) // 1 -> 2 -> 3 -> 4 -> 5 -> [HEAD]
console.log(list.getHead()) // Node {value: 1, next: Node}
console.log(list.getTail()) // Node {value: 5, next: Node}
console.log(list.values()) // [1, 2, 3, 4, 5]
console.log(list.getSize()) // 5
console.log(list.getNodeAt(0)) // Node {value: 1, next: Node}
console.log(list.getNodeAt(2)) // Node {value: 3, next: Node}
console.log(list.getNodeAt(4)) // Node {value: 5, next: Node}
console.log(list.getNodeAt(5)) // undefined
console.log(list.indexOf(1)) // 0
console.log(list.indexOf(5)) // 4
console.log(list.indexOf(6)) // -1
console.log('----------------------尾部删除节点-------------------------------')
list.pop()
console.log(list.toString()) // 1 -> 2 -> 3 -> 4 -> [HEAD]
console.log(list.getHead()) // Node {value: 1, next: Node}
console.log(list.getTail()) // Node {value: 4, next: Node}
console.log(list.values()) // [1, 2, 3, 4]
console.log(list.getSize()) // 4
console.log(list.getNodeAt(0)) // Node {value: 1, next: Node}
console.log(list.getNodeAt(1)) // Node {value: 2, next: Node}
console.log(list.getNodeAt(3)) // Node {value: 4, next: Node}
console.log(list.getNodeAt(4)) // undefined
console.log(list.indexOf(1)) // 0
console.log(list.indexOf(4)) // 3
console.log(list.indexOf(6)) // -1
console.log('-----------------------头部添加节点----------------------------')
list.unshift(0)
console.log(list.toString()) // 0 -> 1 -> 2 -> 3 -> 4 -> [HEAD]
console.log(list.getHead()) // Node {value: 0, next: Node}
console.log(list.getTail()) // Node {value: 4, next: Node}
console.log(list.values()) // [0, 1, 2, 3, 4]
console.log(list.getSize()) // 5
console.log(list.getNodeAt(0)) // Node {value: 0, next: Node}
console.log(list.getNodeAt(1)) // Node {value: 1, next: Node}
console.log(list.getNodeAt(3)) // Node {value: 3, next: Node}
console.log(list.getNodeAt(5)) // undefined
console.log(list.indexOf(1)) // 1
console.log(list.indexOf(4)) // 4
console.log(list.indexOf(6)) // -1
console.log('-----------------------头部删除节点----------------------------')
list.shift()
list.shift()
console.log(list.toString()) // 2 -> 3 -> 4 -> [HEAD]
console.log(list.getHead()) // Node {value: 2, next: Node}
console.log(list.getTail()) // Node {value: 4, next: Node}
console.log(list.values()) // [2, 3, 4]
console.log(list.getSize()) // 3
console.log(list.getNodeAt(0)) // Node {value: 2, next: Node}
console.log(list.getNodeAt(1)) // Node {value: 3, next: Node}
console.log(list.getNodeAt(3)) // undefined
console.log(list.indexOf(2)) // 0
console.log(list.indexOf(4)) // 2
console.log(list.indexOf(6)) // -1
console.log('------------------------插入节点-----------------------------')
list.insert(0, 1)
list.insert(4, 5)
list.insert(2, 'a')
console.log(list.toString()) // 1 -> 2 -> a -> 3 -> 4 -> 5 -> [HEAD]
console.log(list.getHead()) // Node {value: 1, next: Node}
console.log(list.getTail()) // Node {value: 5, next: Node}
console.log(list.values()) // [1, 2, 'a', 3, 4, 5]
console.log(list.getSize()) // 6
console.log(list.getNodeAt(0)) // Node {value: 1, next: Node}
console.log(list.getNodeAt(5)) // Node {value: 5, next: Node}
console.log(list.getNodeAt(6)) // undefined
console.log(list.indexOf('a')) // 2
console.log(list.indexOf(4)) // 4
console.log(list.indexOf(6)) // -1
console.log('------------------------删除节点-----------------------------')
list.remove('a')
list.removeAt(4)
list.removeAt(4)
console.log(list.toString()) // 1 -> 2 -> 3 -> 4 -> [HEAD]
console.log(list.getHead()) // Node {value: 1, next: Node}
console.log(list.getTail()) // Node {value: 4, next: Node}
console.log(list.values()) // [1, 2, 3, 4]
console.log(list.getSize()) // 4
console.log(list.getNodeAt(0)) // Node {value: 1, next: Node}
console.log(list.getNodeAt(3)) // Node {value: 4, next: Node}
console.log(list.getNodeAt(6)) // undefined
console.log(list.indexOf('a')) // -1
console.log(list.indexOf(1)) // 0
console.log(list.indexOf(3)) // 2
console.log('------------------------反转链表-----------------------------')
list.reverse()
console.log(list.toString()) // 4 -> 3 -> 2 -> 1 -> [HEAD]
console.log(list.values()) // [4, 3, 2, 1]
console.log(list.getSize()) // 4
console.log(list.getNodeAt(0)) // Node {value: 4, next: Node}
console.log(list.getNodeAt(3)) // Node {value: 1, next: Node}
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

// list = null // 此时仍存在循环引用，但现代JS引擎能正确回收
