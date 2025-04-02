/**
 * DoublyNode.js
 * @author: zhencanhua
 * @date: 2025-03-26
 * @description: 创建双向链表的节点的类
 */

import Node from './Node.js'

export default class DoublyNode extends Node {
  constructor(value) {
    super(value)
    this.prev = null // 指向上一个节点的指针
  }
}
