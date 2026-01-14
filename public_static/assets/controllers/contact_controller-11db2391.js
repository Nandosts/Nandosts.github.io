import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form", "message", "button"]

  async submit(event) {
    event.preventDefault()
    
    const form = this.formTarget
    const formData = new FormData(form)
    const button = this.buttonTarget
    const originalButtonText = button.value
    
    button.disabled = true
    button.value = "..." 

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        this.messageTarget.innerHTML = `<div class="alert alert-success">${form.dataset.successText}</div>`
        form.reset()
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      this.messageTarget.innerHTML = `<div class="alert alert-error">${form.dataset.errorText}</div>`
    } finally {
      button.disabled = false
      button.value = originalButtonText
    }
  }
}
