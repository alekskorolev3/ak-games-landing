<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive<{ name?: string; email?: string; message?: string }>({})
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const validate = (): boolean => {
  errors.name = form.name.trim() ? '' : 'Please enter your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Enter a valid email address.'
  errors.message = form.message.trim() ? '' : 'Please add a short message.'
  return !errors.name && !errors.email && !errors.message
}

const submit = async () => {
  if (!validate()) return
  status.value = 'sending'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() })
    })
    if (!res.ok) throw new Error('bad response')
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container contact-inner">
      <div class="contact-head">
        <h2>Get in touch</h2>
        <p>
          Interested in an investment or a partnership? Tell us a little about
          what you have in mind and we will come back to you.
        </p>
        <p class="contact-email">Direct: <a href="mailto:hello@ak-games.com">hello@ak-games.com</a></p>
      </div>

      <form v-if="status !== 'success'" class="contact-form" novalidate @submit.prevent="submit">
        <div class="form-field" :class="{ 'field-error': errors.name }">
          <label for="contact-name">Name</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            name="name"
            autocomplete="name"
            :aria-invalid="errors.name ? 'true' : undefined"
            :aria-describedby="errors.name ? 'contact-name-error' : undefined"
          />
          <p v-if="errors.name" id="contact-name-error" class="field-error" role="alert">{{ errors.name }}</p>
        </div>

        <div class="form-field" :class="{ 'field-error': errors.email }">
          <label for="contact-email">Email</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            :aria-invalid="errors.email ? 'true' : undefined"
            :aria-describedby="errors.email ? 'contact-email-error' : undefined"
          />
          <p v-if="errors.email" id="contact-email-error" class="field-error" role="alert">{{ errors.email }}</p>
        </div>

        <div class="form-field" :class="{ 'field-error': errors.message }">
          <label for="contact-message">Message</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            name="message"
            rows="5"
            :aria-invalid="errors.message ? 'true' : undefined"
            :aria-describedby="errors.message ? 'contact-message-error' : undefined"
          />
          <p v-if="errors.message" id="contact-message-error" class="field-error" role="alert">{{ errors.message }}</p>
        </div>

        <p v-if="status === 'error'" class="form-status form-status-error" role="alert">
          Something went wrong — please try again.
        </p>

        <button type="submit" class="btn btn-primary" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Sending…' : 'Send message' }}
        </button>
      </form>

      <div v-else class="contact-success" role="status">
        <h3>Message sent</h3>
        <p>Thank you — we will get back to you shortly.</p>
        <button type="button" class="btn btn-ghost" @click="status = 'idle'; form.name = ''; form.email = ''; form.message = ''">
          Send another
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-top: 1px solid var(--line);
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-6);
  align-items: start;
}

.contact-head p {
  color: var(--ink-soft);
}

.contact-email {
  font-size: 0.95rem;
}

.contact-form {
  display: grid;
  gap: var(--space-3);
}

.form-field {
  display: grid;
  gap: 0;
}

.form-status {
  font-weight: 600;
}

.form-status-error {
  color: var(--danger);
}

.contact-success {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-4);
}

.contact-success h3 {
  color: var(--green);
}

@media (max-width: 760px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
</style>
