# Angular 21 · Signal Forms Demo

Demo didattica per le **nuove feature di Angular 21**: Signal Forms, Zoneless, Angular Aria, Tailwind CSS e control flow. Ogni sezione spiega un aspetto e permette di provarlo dal vivo.

**Repository:** [github.com/jurilucci/signal-forms-demo](https://github.com/jurilucci/signal-forms-demo)

---

## Cosa trovi nell'app

### Signal Forms (sperimentale)

- **Intro e form model** — `signal()` come model, `form(model)`, FieldTree, `[formField]`, `value()` e sincronizzazione con il model.
- **Validazione** — `required`, `email`, `minLength` (e altri) nella funzione schema; messaggi custom; `valid()`, `touched()`, `errors()`.
- **Validatori custom** — `validate(path, (ctx) => ...)` con `value()` e `valueOf(altroCampo)`; reattività automatica.
- **Schema e riuso** — `schema<T>()` e `apply(path, schema)` per riusare le stesse regole (es. indirizzo fatturazione/spedizione).
- **Submit e reset** — `submit(form, async () => ...)`, `submitting()`, `reset()` e reset con nuovo valore.
- **Custom control** — `FormValueControl<T>` con `value = model()`, uso con `[formField]`.
- **compatForm** — model misto (valori + `FormControl`), `compatForm(model)` per migrare gradualmente da Reactive Forms.

### Altre feature Angular 21

- **Zoneless** — Change detection senza Zone.js (default in v21), demo con signal e OnPush.
- **Angular Aria** — Esempi con direttive headless accessibili: Toolbar, Tabs, Accordion, Menu, Listbox.
- **Angular MCP** — Introduzione all'Angular CLI MCP Server per tooling AI/IDE.
- **Tailwind** — Uso di Tailwind CSS nell'app (utility, badge, card).
- **Control flow** — `@if`, `@for`, `@switch` e contenuto differito nel template.

Nella sezione **Control flow** puoi cambiare il tema dell'app (chiaro / scuro / sistema); la preferenza viene salvata in `localStorage`.

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

Apri [http://localhost:4200](http://localhost:4200) e usa il menu laterale per spostarti tra le sezioni. Su mobile il menu è disponibile tramite il pulsante hamburger.

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
