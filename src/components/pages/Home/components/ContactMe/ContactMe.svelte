<script lang="ts">
  import { _ } from "svelte-i18n";

  import * as emailjs from "@emailjs/browser";
  import {
    Form, Input, Textarea, Button, Dialog,
  } from "szot-ui-experimental";

  type TFormValues = {
    email: string;
    name: string;
    message: string;
  };

  let values: TFormValues = {
    email: "",
    name: "",
    message: "",
  };

  let isAllValid = false;

  const key = process.env.RECAPTCHA_SITE_KEY;
  const State = {
    idle: "idle",
    requesting: "requesting",
    success: "success",
  };
  let token = "";
  let state = State.idle;

  function emailValidation(value: string | undefined): string | boolean {
    if (!value || value.length === 0) return true;
    if (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)) return true;
    return $_("form_email_validation");
  }

  function nameValidation(value: string | undefined): string | boolean {
    if (!value || value.length === 0) return true;
    if (/[a-zA-Z\u00C0-\u00FF ]+/i.test(value)) return true;
    return $_("form_name_validation");
  }

  export async function sendEmail(formValues: TFormValues): Promise<void> {
    // assuming top-level await for brevity

    try {
      if (isAllValid && state === State.success) {
        await emailjs.send(
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
          title: $_("form_success_title"),
          content: $_("form_success_text"),
        });
      }
      localStorage.removeItem("contact-key");
      values = {
        email: "",
        name: "",
        message: "",
      };
    } catch (err) {
      Dialog.error({
        title: $_("form_error_title"),
        content: $_("form_error_text"),
      });
    }
    token = "";
  }

  function doRecaptcha() {
    // eslint-disable-next-line no-undef
    grecaptcha.ready(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises, no-undef
      grecaptcha.execute(key, { action: "submit" }).then((t: string) => {
        token = t;
        state = State.success;
      });
    });

    setTimeout(() => {
      sendEmail(values).catch(() => {
        Dialog.error({
          title: $_("form_error_title"),
          content: $_("form_error_text"),
        });
      });
    }, 1000);
  }

  function onSubmit() {
    state = State.requesting;
    doRecaptcha();
  }
</script>

<svelte:head>
  <script
    src="https://www.google.com/recaptcha/api.js?render={key}"
    async
    defer></script>
</svelte:head>

<Form
  saveOnStorage
  on:submit={() => onSubmit()}
  bind:values
  bind:isAllValid
  storageKey="contact-key"
>
  <section id="contact-me">
    <div class="contact-me-container">
      <div class="contact-me-card">
        <h3 class="contact-title">{$_("form_title")}</h3>
        <Input
          name="email"
          label="Email"
          inputStyle="dark"
          type="email"
          value={values.email}
          validationFn={emailValidation}
          required={true}
          border="outline"
        />
        <Input
          label={$_("form_field_2")}
          name="name"
          type="text"
          value={values.name}
          inputStyle="dark"
          validationFn={nameValidation}
          required={true}
          border="outline"
        />

        <Textarea
          name="message"
          label={$_("form_field_3_title")}
          value={values.message}
          textareaStyle="dark"
          placeholder={$_("form_field_3_placeholder")}
        />
      </div>
      <div class="button">
        <Button type="submit" size="large">{$_("form_submit")}</Button>
      </div>
    </div>
  </section>
</Form>

<style lang="scss">
  #contact-me {
    min-height: 100vh;
    width: 100vw;
    padding-top: 5rem;
    display: grid;
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

      width: 50vw;
      min-width: 20rem;
      height: 50vh;
      min-height: 25rem;
      overflow-y: auto;

      padding: 2rem;
      background: #fff;

      --szot-fields-max-width: "100%";

      .contact-title {
        text-align: center;
      }
    }

    .button {
      margin: 1rem 0 0 auto;
      white-space: nowrap;
      --szot-button-background-color: #354b45;
      --szot-button-color: white;
      --szot-button-border-radius: 15px;
    }
  }
</style>
