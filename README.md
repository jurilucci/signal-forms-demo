# Angular 21 – Signal Forms Demo

App didattica per provare e capire i **Signal Forms** di Angular 21. Ogni sezione spiega un aspetto (form model, validazione, schema, submit, custom control, compatForm) e ti permette di provarlo dal vivo.

## Cosa sono i Signal Forms

I Signal Forms sono l’API **sperimentale** (`@experimental 21.0.0`) per gestire i form con **Angular Signals**: il modello del form è un **signal**, e lo stato è sincronizzato con il model. Si usano `form(model)`, la direttiva `[formField]`, validatori in una funzione schema, e opzionalmente `compatForm()` per convivere con i Reactive Forms.

## Sezioni nell’app

1. **Intro / Form Model** – `signal()` come model, `form(model)`, FieldTree, `[formField]`, `value()` e aggiornamento del model.
2. **Validazione** – `required`, `email`, `minLength` (e altri) nella funzione schema; messaggi custom; `valid()`, `touched()`, `errors()`.
3. **Validatori custom** – `validate(path, (ctx) => ...)` con `value()` e `valueOf(altroCampo)`; reattività automatica.
4. **Schema e riuso** – `schema<T>()` e `apply(path, schema)` per riusare le stesse regole (es. indirizzo fatturazione/spedizione).
5. **Submit e Reset** – `submit(form, async () => ...)`, `submitting()`, `reset()` e reset con nuovo valore.
6. **Custom control** – `FormValueControl<T>` con `value = model()`, uso con `[formField]`.
7. **compatForm** – model misto (valori + `FormControl`), uso di `compatForm(model)` per migrare gradualmente.

## Avvio

```bash
npm install
ng serve
```

Poi apri `http://localhost:4200` e usa il menu per spostarti tra le sezioni.

## Riferimenti

- [Forms with signals (Angular v21)](https://v21.angular.dev/essentials/signal-forms)
- [Signal Forms Overview](https://angular.dev/guide/forms/signals/overview)
- Import: `import { form, required, ... } from '@angular/forms/signals'`; per compat: `import { compatForm } from '@angular/forms/signals/compat'`.

---

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
