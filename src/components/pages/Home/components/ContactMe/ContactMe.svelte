<script lang="ts">
  import * as emailjs from "@emailjs/browser";
  import {
    Form, Input, Textarea, Button, Dialog,
} from "szot-ui-experimental";

  type TFormValues = {
    email: string;
    name: string;
    message: string;
  };

  let values: TFormValues;

  function emailValidation(value: string | undefined): string | boolean {
    if (!value || value.length === 0) return true;
    if (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)) return true;
    return "Por favor, insira um email válido";
  }

  function nameValidation(value: string | undefined): string | boolean {
    if (!value || value.length === 0) return true;
    if (/[a-zA-Z\u00C0-\u00FF ]+/i.test(value)) return true;
    return "Por favor, insira um nome válido";
  }

  export async function sendEmail(formValues: TFormValues) {
    // assuming top-level await for brevity

    try {
      const message = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: formValues.name,
          from_email: formValues.email,
          message: formValues.message,
        },
        process.env.EMAILJS_PUBLIC_KEY,
      );
      Dialog.success({
        title: "Email enviado!",
        content:
          "Seu email foi enviado com sucesso para mim, muito obrigado pelo contato",
      });
    } catch (err) {
      Dialog.error({
        title: "Email não enviado!",
        content:
          "Ocorreu um erro, peço desculpas o inconveniente,"
        + " tenho outros meios de contato no footer do site caso seja necessário",
      });
    }
  }
</script>

<Form saveOnStorage on:submit={() => sendEmail(values)} bind:values>
  <section id="contact-me">
    <div class="contact-me-container">
      <div class="contact-me-card">
        <h3 class="contact-title">Formulário de contato</h3>
        <Input
          name="email"
          label="Email"
          inputStyle="dark"
          type="email"
          validationFn={emailValidation}
          required={true}
          border="outline"
        />
        <Input
          label="Nome / Nome fantasia"
          name="name"
          type="text"
          inputStyle="dark"
          validationFn={nameValidation}
          required={true}
          border="outline"
        />

        <Textarea
          name="message"
          label="Mensagem"
          textareaStyle="dark"
          placeholder="Escreva alguma mensagem"
        />
        <div class="button">
          <Button type="submit" size="large">Entrar em contato</Button>
        </div>
      </div>
    </div>
  </section>
</Form>

<style lang="scss">
  section {
    min-height: 100vh;
    width: 100vw;
    padding-top: 5rem;
  }

  .contact-me-container {
    display: grid;
    place-content: center;
    place-items: center;
    height: 100%;
    width: 100vw;

    .contact-me-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: start;

      width: 35vw;
      min-width: 20rem;
      height: 30rem;
      overflow-y: auto;

      padding: 2rem;
      background: #fff;

      --szot-fields-max-width: "100%";

      .contact-title {
        text-align: center;
      }
    }

    .button {
      margin: 0 0 0 auto;
      float: right;
      --szot-button-background-color: linear-gradient(90deg, #354b45, #308472);
      --szot-button-color: white;
      --szot-button-border-radius: 15px;
    }
  }
</style>
