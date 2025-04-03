/**
 * DoublyLinkedList.js
 * @author: zhencanhua
 * @date: 2025-03-26
 * @description: 双向链表
 */

import DoublyNode from '../../models/DoublyNode.js'
import LinkedList from './LinkedList.js'
// import { isEqual } from '../../utils/utils.js'

export default class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    // 双向链表提供了两种迭代方式，从头到尾和从尾到头，因此需要两个指针，一个是指向第一个节点的指针head（继承自单向链表），另一个是指向最后一个节点的指针tail
    this.tail = null // 指向最后一个节点的指针
  }
  // 尾部添加节点
  push(val) {
    if (arguments.length === 0) return this.size
    const node = new DoublyNode(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
    return this.size
  }
  // 头部添加节点
  unshift(val) {
    if (arguments.length === 0) return this.size
    const node = new DoublyNode(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.size++
    return this.size
  }
  // 头部删除节点
  shift() {
    if (this.isEmpty()) return undefined
    const current = this.head
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = current.next
      this.head.prev = null
    }
    this.size--
    return current.value
  }
  // 尾部删除节点
  pop() {
    if (this.isEmpty()) return undefined
    const current = this.tail
    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = current.prev
      this.tail.next = null
    }
    this.size--
    return current.value
  }
  // 返回匹配值的第一个位置
  indexOf(val) {
    if (arguments.length === 0) return -1
    if (this.isEmpty()) return -1

    let current = this.head
    let index = 0
    while (current) {
      if (this.options.isEqual(current.value, val)) return index
      current = current.next
      index++
    }
    return -1
  }
  // 返回匹配值的最后一个位置
  lastIndexOf(val) {
    if (arguments.length === 0) return -1
    if (this.isEmpty()) return -1
    let index = this.size - 1
    let current = this.tail
    while (current) {
      if (this.options.isEqual(current.value, val)) return index
      current = current.prev
      index--
    }
    return -1
  }
  // 获取任意位置的节点
  getNodeAt(index) {
    if (arguments.length === 0) return undefined
    if (index < 0 || index >= this.size) return undefined
    let current = this.head
    let i = 0
    while (current) {
      if (i === index) return current
      current = current.next
      i++
    }
    return undefined
  }
  // 删除某个位置的节点
  removeAt(index) {
    if (arguments.length === 0) return undefined
    if (index < 0 || index >= this.size) return undefined
    if (index === 0) return this.shift()
    if (index === this.size - 1) return this.pop()
    const current = this.getNodeAt(index)
    current.prev.next = current.next
    current.next.prev = current.prev
    this.size--
    return current.value
  }
  // 删除某个值的节点
  remove(val) {
    if (arguments.length === 0) return undefined
    const index = this.indexOf(val)
    return this.removeAt(index)
  }
  // 在某个位置插入节点
  insert(index, val) {
    if (arguments.length < 2) return undefined
    if (typeof arguments[0] !== 'number') return undefined
    if (index < 0 || index > this.size) return undefined
    if (index === 0) return this.unshift(val)
    if (index === this.size) return this.push(val)
    const node = new DoublyNode(val)
    const prev = this.getNodeAt(index - 1)
    const next = prev.next
    prev.next = node
    node.prev = prev
    node.next = next
    next.prev = node
    this.size++
    return this.size
  }
  // 反转链表
  reverse() {
    if (this.isEmpty()) return undefined
    let current = this.head
    this.head = this.tail
    this.tail = current

    let prev = null
    while (current) {
      const next = current.next
      current.next = prev
      current.prev = next
      prev = current
      current = next
    }

    return this.head
  }
  // 判断链表是否为空
  isEmpty() {
    return this.size === 0 || !this.head
  }
  // 返回头部节点
  getHead() {
    return this.head
  }
  // 返回尾部节点
  getTail() {
    return this.tail
  }
  // 清空链表
  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  // 打印链表
  toString() {
    if (this.isEmpty()) return ''
    let current = this.head
    let str = 'null <- '
    while (current) {
      if (current.prev && current.next) {
        str += current.value + ' <-> '
      } else if (!current.next) {
        str += current.value + ' -> null'
      } else if (!current.prev) {
        str += current.value + ' <-> '
      }
      current = current.next
    }
    return str
  }
  // 返回链表大小
  getSize() {
    return this.size
  }
  // 返回链表值
  values() {
    const values = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }
    return values
  }
}
