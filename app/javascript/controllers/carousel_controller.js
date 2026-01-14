import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  rotateLeft() {
    this.containerTarget.scrollBy({ left: -300, behavior: "smooth" })
  }

  rotateRight() {
    this.containerTarget.scrollBy({ left: 300, behavior: "smooth" })
  }
}
