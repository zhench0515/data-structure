import { DoublyLinkedList } from '../index.js'

const list = new DoublyLinkedList()
// 添加链表节点
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

console.log(list)
console.log('toString', list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
console.log('getSize', list.getSize()) // 5
console.log('values', list.values()) // [1, 2, 3, 4, 5]

// 反转链表
list.reverse()
console.log('toString', list.toString()) // null <- 5 <-> 4 <-> 3 <-> 2 <-> 1 -> null
console.log('getSize', list.getSize()) // 5
console.log('values', list.values()) // [5, 4, 3, 2, 1]

// 在头部插入节点
list.reverse()
list.unshift(0)
console.log('toString', list.toString()) // null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
console.log('getSize', list.getSize()) // 6
console.log('values', list.values()) //  [0, 1, 2, 3, 4, 5]

// 删除尾部节点
list.pop()
console.log('toString', list.toString()) // null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 -> null
console.log('getSize', list.getSize()) // 5
console.log('values', list.values()) //  [0, 1, 2, 3, 4]

// 从头部删除节点
list.shift()
console.log('toString', list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 -> null
console.log('getSize', list.getSize()) // 4
console.log('values', list.values()) //  [1, 2, 3, 4]

// 插入节点
list.insert(0, 0)
list.insert(5, 6)
list.insert(1, 'a')
console.log('toString', list.toString()) // null <- 0 <-> a <-> 1 <-> 2 <-> 3 <-> 4 <-> 6 -> null
console.log('getSize', list.getSize()) // 7

// 根据节点值删除节点
list.remove('a')
console.log('toString', list.toString()) // null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 6 -> null
console.log('getSize', list.getSize()) // 6
// 根据索引删除节点
list.remove(0)
console.log('toString', list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 <-> 6 -> null
console.log('getSize', list.getSize()) // 5
list.removeAt(5)
console.log('toString', list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 <-> 6 -> null
list.removeAt(4)
console.log('toString', list.toString()) // null <- 1 <-> 2 <-> 3 <-> 4 -> null

// 清空链表
list.clear()
console.log('toString', list.toString()) // ''
console.log('getSize', list.getSize()) // 0
console.log('values', list.values()) // []

const list1 = new DoublyLinkedList()
list1.push(1)
list1.push(2)
list1.push(3)
list1.push(4)
list1.push(5)
list1.push(6)

// 获取链表头
console.log('head', list1.getHead()) // {value: 1, next: {…}, prev: null}
// 获取链表尾
console.log('tail', list1.getTail()) //  {value: 6, next: null, prev: {…}}
