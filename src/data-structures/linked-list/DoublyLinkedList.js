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
}
