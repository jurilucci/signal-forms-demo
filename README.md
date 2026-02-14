# Angular 21 · Signal Forms Demo

Demo didattica per le **nuove feature di Angular 21**: Signal Forms, Zoneless, Angular Aria, Tailwind CSS e control flow. Ogni sezione spiega un aspetto e permette di provarlo dal vivo.

**Repository:** [github.com/jurilucci/signal-forms-demo](https://github.com/jurilucci/signal-forms-demo)

---

## Cosa trovi nell’app

### Signal Forms (sperimentale)

- **1. Intro / Form Model** — `signal()` come model, `form(model)`, FieldTree, `[formField]`, `value()` e sincronizzazione con il model.
- **2. Validazione** — `required`, `email`, `minLength` (e altri) nella funzione schema; messaggi custom; `valid()`, `touched()`, `errors()`.
- **3. Validatori custom** — `validate(path, (ctx) => ...)` con `value()` e `valueOf(altroCampo)`; reattività automatica.
- **4. Schema e riuso** — `schema<T>()` e `apply(path, schema)` per riusare le stesse regole (es. indirizzo fatturazione/spedizione).
- **5. Submit e Reset** — `submit(form, async () => ...)`, `submitting()`, `reset()` e reset con nuovo valore.
- **6. Custom control** — `FormValueControl<T>` con `value = model()`, uso con `[formField]`.
- **7. compatForm** — model misto (valori + `FormControl`), `compatForm(model)` per migrare gradualmente da Reactive Forms.

### Altre feature Angular 21

- **8. Zoneless** — Change detection senza Zone.js (default in v21), demo con signal e OnPush.
- **9. Angular Aria** — Esempi con direttive headless accessibili: Toolbar, Tabs, Accordion, Menu, Listbox.
- **10. Angular MCP** — Introduzione all’Angular CLI MCP Server per tooling AI/IDE.
- **11. Tailwind** — Uso di Tailwind CSS nell’app (utility, badge, alert, card).
- **12. Control flow** — `@if`, `@for`, `@switch` e contenuto differito nel template.

---

## Tecnologie

- **Angular 21** (standalone, signals, zoneless)
- **Signal Forms** (`@angular/forms/signals`)
- **Angular Aria** (`@angular/aria`) — Toolbar, Tabs, Accordion, Menu, Listbox
- **Tailwind CSS v4** (PostCSS, utility-first)
- **SCSS** (solo `styles.scss` con `@use 'tailwindcss'`)

---

## Avvio

```bash
npm install
npm start
```

Apri [http://localhost:4200](http://localhost:4200) e usa il menu laterale per spostarti tra le sezioni.

---

## Build

```bash
npm run build
```

Output in `dist/signal-forms-demo/` (configurazione production di default).

---

## Riferimenti

- [Forms with signals (Angular)](https://angular.dev/essentials/signal-forms)
- [Angular without Zone.js (Zoneless)](https://angular.dev/guide/zoneless)
- [Angular Aria](https://angular.dev/guide/aria/overview)
- [Tailwind con Angular](https://angular.dev/guide/tailwind)
- [Angular v21 Release](https://angular.dev/events/v21)

---

*Progetto generato con [Angular CLI](https://github.com/angular/angular-cli) 21.1.4.*
