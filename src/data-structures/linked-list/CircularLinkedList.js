/**
 * CircularLinkedList.js
 * @author: zhencanhua
 * @date: 2025-03-26
 * @description: 单向循环链表
 *
 */
// 循环链表可以像单向链表一样只有单向引用，也可以像双向链表一样有双向引用。
// 只有单向引用的循环链表称为单向循环链表，单向循环链表最后一个节点的 next 引用指向头节点 head 而不是 null。
// 具有双向引用的循环列表叫做双向循环链表，双向链表最后一个节点 tail 的 next 引用指向头节点 head ，头节点 head 的 prev 引用则指向尾节点 tail。
// 循环链表每个节点只存储数据和单个指针，内存复杂度是 O(n)。循环引用不会导致内存翻倍，指针只是内存地址引用
// 遍历终止条件	node.next === head

import Node from '../../models/Node.js'
import LinkedList from './LinkedList.js'
import { isEqual } from '../../utils/utils.js'

export default class CircularLinkedList extends LinkedList {
  constructor(options = { isEqual: isEqual }) {
    super(options)
  }
  // push：向尾部添加节点
  push(val) {
    if (arguments.length === 0) return this.size
    const node = new Node(val)
    if (super.isEmpty()) {
      this.head = node
      node.next = this.head
    } else {
      let current = this.head
      while (current.next !== this.head) {
        current = current.next
      }
      current.next = node
      node.next = this.head
    }
    this.size++
    return this.size
  }
  // pop：删除尾部节点
  pop() {
    if (super.isEmpty()) return undefined
    if (this.size === 1) {
      const current = this.head
      this.head = null
      this.size--
      return current.value
    } else {
      let pre = super.getNodeAt(this.size - 2)
      let current = pre.next
      pre.next = this.head
      this.size--
      return current.value
    }
  }
  // unshift：向头部添加节点
  unshift(val) {
    if (arguments.length === 0) return this.size
    const node = new Node(val)
    if (super.isEmpty()) {
      this.head = node
      node.next = this.head
    } else {
      let current = this.head
      const tail = super.getTail()
      tail.next = node
      node.next = current
      this.head = node
    }
    this.size++
    return this.size
  }
  // shift：删除头部节点
  shift() {
    if (super.isEmpty()) return undefined
    const current = this.head
    if (this.size === 1) {
      this.head = null
      this.size--
      return current.value
    } else {
      const tail = super.getTail()
      tail.next = current.next
      this.head = current.next
      this.size--
      return current.value
    }
  }
  // insert：向指定位置插入节点
  insert(index, val) {
    if (arguments.length < 2) return undefined
    if (typeof arguments[0] !== 'number') return undefined
    if (index < 0 || index > this.size) return undefined

    if (index === 0) {
      return this.unshift(val)
    } else if (index === this.size) {
      return this.push(val)
    } else {
      const node = new Node(val)
      const pre = super.getNodeAt(index - 1)
      const current = pre.next
      pre.next = node
      node.next = current
      this.size++
      return this.size
    }
  }
  // remove：删除指定值的节点
  remove(val) {
    if (arguments.length === 0) return undefined
    let index = super.indexOf(val)
    if (index === -1) return this.size
    return this.removeAt(index)
  }
  // removeAt：删除指定位置的节点
  removeAt(index) {
    if (arguments.length === 0) return undefined
    if (typeof arguments[0] !== 'number') return undefined
    if (index < 0 || index >= this.size) return undefined

    if (index === 0) {
      return this.shift()
    } else if (index === this.size - 1) {
      return this.pop()
    } else {
      const pre = super.getNodeAt(index - 1)
      const current = pre.next
      pre.next = current.next
      this.size--
      return current.value
    }
  }

  // reverse：反转链表
  reverse() {
    if (super.isEmpty()) return undefined
    const tail = super.getTail()
    let pre = tail
    let current = this.head
    for (let i = 0; i < this.size; i++) {
      const next = current.next
      current.next = pre
      pre = current
      current = next
    }
    this.head = tail
    return this.head
  }
  // toString：打印链表
  toString() {
    // 循环链表输出要注意最后一个结点的判断
    if (super.isEmpty()) return ''
    let current = this.head
    let result = ''
    do {
      result += current.value + ' -> '
      current = current.next
    } while (current !== this.head)
    result += '[HEAD]'
    return result
  }

  /**
   * 与LinkedList方法一致，直接继承
   */
  // getHead：获取头部节点
  // getTail：获取尾部节点
  // getSize：获取链表长度
  // isEmpty：判断链表是否为空
  // clear：清空链表
  // getNodeAt：获取指定位置的节点
  // indexOf：查找指定值的节点位置

  // values：获取链表所有值
  // LinkedList链表类中values方法使用的是next是否存在，这里使用的是next是否等于头节点
  // 如果LinkedList类中values方法使用size链表长度判断的话，则不需要重新写values方法
  values() {
    if (super.isEmpty()) return []
    let current = this.head
    const values = []
    do {
      values.push(current.value)
      current = current.next
    } while (current !== this.head)
    return values
  }
}
