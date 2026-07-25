import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form", "message", "button"]

  async submit(evento) {
    evento.preventDefault()
    
    const formulario = this.formTarget
    const dadosFormulario = new FormData(formulario)
    const botao = this.buttonTarget
    const textoOriginalBotao = botao.value
    
    botao.disabled = true
    botao.value = "..." 

    try {
      const resposta = await fetch(formulario.action, {
        method: "POST",
        body: dadosFormulario,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (resposta.ok) {
        const dados = await resposta.json()
        if (dados.success === "true" || dados.success === true) {
          this.messageTarget.innerHTML = `<div class="alert alert-success">${formulario.dataset.successText}</div>`
          formulario.reset()
        } else {
          console.error("Erro do FormSubmit:", dados.message)
          throw new Error(dados.message || "Falha no envio")
        }
      } else {
        throw new Error("Falha na requisição")
      }
    } catch (erro) {
      this.messageTarget.innerHTML = `<div class="alert alert-error">${formulario.dataset.errorText}</div>`
    } finally {
      botao.disabled = false
      botao.value = textoOriginalBotao
    }
  }
}
