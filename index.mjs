export default class BaseElement extends HTMLElement {
  constructor() {
    super()
    const id = this.getAttribute('id')
    const authored = document.getElementById(`${id}-template`)
    if (authored) {
      this.replaceChildren(authored.content.cloneNode(true))
    }
    const name = this.tagName.toLowerCase()
    const template = document.getElementById(`${name}-template`)
    if (template) {
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
}