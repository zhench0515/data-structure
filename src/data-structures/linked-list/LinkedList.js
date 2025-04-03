/**
 * LinkedList.js
 * @author: zhencanhua
 * @date: 2025-03-26
 * @description: 创建链表的类，实现链表的基本操作：添加节点、删除节点、查找节点、插入节点、打印链表、链表大小、是否为空等
 */

import Node from '../../models/Node.js'
import { isEqual } from '../../utils/utils.js'

export default class LinkedList {
  constructor(options = { isEqual: isEqual }) {
    this.head = null // 头节点
    this.size = 0 // 链表大小
    this.options = options
  }
  // 尾部添加节点
  push(val) {
    if (arguments.length === 0) return this.size
    const node = new Node(val)
    // 如果链表为空
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.size++
    return this.size
  }
  // 头部添加节点
  unshift(val) {
    if (arguments.length === 0) return this.size
    const node = new Node(val)
    node.next = this.head
    this.head = node
    this.size++
    return this.size
  }
  // 头部删除节点
  shift() {
    if (this.isEmpty()) return undefined
    const current = this.head
    this.head = current.next
    this.size--
    return current.value
  }
  // 尾部删除节点
  pop() {
    if (this.isEmpty()) return undefined
    if (this.size === 1) {
      const current = this.head
      this.head = null
      this.size--
      return current.value
    } else {
      let current = this.head
      let previous = null
      while (current.next) {
        previous = current
        current = current.next
      }
      previous.next = null
      this.size--
      return current.value
    }
  }
  // 返回匹配值的第一个位置
  indexOf(val) {
    if (arguments.length === 0) return -1
    let current = this.head
    const { isEqual } = this.options
    for (let i = 0; i < this.size && current; i++) {
      if (isEqual(current.value, val)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  // 删除某个位置的节点
  removeAt(index) {
    if (arguments.length === 0) return undefined
    if (index < 0 || index >= this.size) return undefined
    let current = this.head
    // 删除第一个节点
    if (index === 0) {
      this.head = current.next
    } else {
      // let previous = null
      // for (let i = 0; i < index; i++) {
      //   previous = current
      //   current = current.next
      // }
      // previous.next = current.next

      // 重构
      const previous = this.getNodeAt(index - 1)
      current = previous.next
      previous.next = current.next
    }
    this.size--
    return current.value
  }
  // 删除节点，删除匹配的第一个节点
  remove(val) {
    if (arguments.length === 0) return undefined
    let index = this.indexOf(val)
    if (index === -1) return this.size
    return this.removeAt(index)
  }

  // 插入节点
  insert(index, val) {
    if (arguments.length < 2) return undefined
    if (typeof arguments[0] !== 'number') return undefined
    if (index < 0 || index > this.size) return undefined
    const node = new Node(val)
    // 插入头部
    if (index === 0) {
      const current = this.head
      node.next = current
      this.head = node
    } else {
      const pre = this.getNodeAt(index - 1)
      const current = pre.next
      node.next = current
      pre.next = node
    }
    this.size++
    return this.size
  }
  // 根据位置获取节点
  getNodeAt(index) {
    if (arguments.length === 0) return undefined
    if (index < 0 || index > this.size) return undefined
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }
  // 获取链表大小
  getSize() {
    return this.size
  }
  // 判断链表是否为空
  isEmpty() {
    return this.size === 0
  }
  // 清空链表
  clear() {
    this.head = null
    this.size = 0
  }
  // 打印链表
  toString() {
    if (this.isEmpty()) return ''
    let current = this.head
    let str = ''
    while (current) {
      str += current.value + (current.next ? ' -> ' : ' -> null')
      current = current.next
    }
    return str
  }
  // 获取头节点
  getHead() {
    return this.head
  }
  // 获取尾节点
  getTail() {
    if (this.isEmpty()) return undefined
    return this.getNodeAt(this.size - 1)
  }
  // 链表反转
  reverse() {
    if (this.isEmpty()) return undefined

    let current = this.head
    let pre = null
    for (let i = 0; i < this.size; i++) {
      let next = current.next
      // 当前节点指向前一个节点
      current.next = pre
      pre = current
      current = next
    }
    this.head = pre
    // let current = this.head
    // let pre = null
    // while (current) {
    //   let next = current.next
    //   current.next = pre
    //   pre = current
    //   current = next
    // }
    // this.head = pre
  }
  // 获取链表的值
  values() {
    if (this.isEmpty()) return []
    let current = this.head
    const values = []
    while (current) {
      values.push(current.value)
      current = current.next
    }
    return values
  }
}
