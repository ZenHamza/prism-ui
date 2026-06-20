Live demo: **[prism.zenxhamza.xyz](https://prism.zenxhamza.xyz)**

<div align="center">
  <br/>
  <h1>Prism UI</h1>
  <p><strong>Lightweight React Component Library</strong></p>
  <p>TypeScript · Framer Motion · Accessible · Dark-Mode-First</p>
  <br/>

  [![npm](https://img.shields.io/npm/v/prism-ui)](https://www.npmjs.com/package/prism-ui)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?logo=framer)](https://www.framer.com/motion)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

  <br/>
</div>

## Overview

**Prism UI** is a lightweight, accessible React component library with a dark-mode-first neon aesthetic. Built with TypeScript and Framer Motion, every component ships with production-ready animations, ARIA attributes, keyboard navigation, and focus management.

## Components

| Component | Description |
|---|---|
| `Button` | 4 variants · 3 sizes · loading state · link mode |
| `GlassPanel` | 3 glassmorphism variants (premium/neon/subtle) |
| `Modal` | Accessible modal with focus trap, escape key, backdrop click |
| `Toast` | Toast notification system with 3 types and auto-dismiss |
| `Input` | Styled input with label, error state, focus ring |
| `Badge` | 4 color variants for tags and labels |
| `Spinner` | CSS-only animated spinner with configurable size |

## Installation

```bash
npm install prism-ui
# or
pnpm add prism-ui
```

Peer dependencies: `react@18`, `react-dom@18`, `framer-motion@11`

## Usage

### Button

```tsx
import { Button } from "prism-ui";

function App() {
  return (
    <>
      <Button variant="cyan" onClick={() => alert("Clicked!")}>
        Click Me
      </Button>
      <Button variant="amber" size="lg" loading>
        Loading
      </Button>
      <Button variant="purple" href="https://example.com">
        Link
      </Button>
    </>
  );
}
```

### GlassPanel

```tsx
import { GlassPanel } from "prism-ui";

function Card() {
  return (
    <GlassPanel variant="neon" className="p-6">
      <h2>Neon Card</h2>
      <p>Glassmorphism with cyan glow.</p>
    </GlassPanel>
  );
}
```

### Modal

```tsx
import { Modal } from "prism-ui";

function Dialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Confirm">
        <p>Are you sure?</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal>
    </>
  );
}
```

### Toast

```tsx
import { ToastProvider, useToast } from "prism-ui";

function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const toast = useToast();
  return <Button onClick={() => toast("Saved!", "success")}>Save</Button>;
}
```

### Input

```tsx
import { Input } from "prism-ui";

function Form() {
  return (
    <Input
      label="Email"
      type="email"
      placeholder="you@example.com"
      error="Required"
    />
  );
}
```

### Badge

```tsx
import { Badge } from "prism-ui";

<Tags>
  <Badge variant="cyan">TypeScript</Badge>
  <Badge variant="amber">React</Badge>
  <Badge variant="purple">Next.js</Badge>
  <Badge variant="gray">Rust</Badge>
</Tags>
```

### Spinner

```tsx
import { Spinner } from "prism-ui";

<Spinner size={24} />
```

## Component API

### Button

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"cyan" | "amber" | "purple" | "ghost"` | `"cyan"` | Color variant |
| `size` | `"sm" | "md" | "lg"` | `"md"` | Size preset |
| `loading` | `boolean` | `false` | Shows spinner, disables |
| `disabled` | `boolean` | `false` | Grays out, no interaction |
| `href` | `string` | — | Renders as `<a>` link |
| `className` | `string` | — | Additional classes |
| `children` | `ReactNode` | required | Content |

### GlassPanel

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"premium" | "neon" | "subtle"` | `"premium"` | Glass style |
| `className` | `string` | — | Additional classes |
| `children` | `ReactNode` | required | Content |

### Modal

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | required | Show/hide |
| `onClose` | `() => void` | required | Close handler |
| `title` | `string` | — | Optional heading |
| `children` | `ReactNode` | required | Content |

### Toast

| Function | Signature | Description |
|---|---|---|
| `useToast()` | `() => (message: string, type?: ToastType) => void` | Returns show function |
| `ToastProvider` | Component | Wrap root to enable toasts |

| `ToastType` | Values |
|---|
| `"success"` | Green |
| `"error"` | Red |
| `"info"` | Cyan |

### Input

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Floating label |
| `error` | `string` | — | Error message |
| All HTML input props | — | — | Forwarded to `<input>` |

### Badge

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"cyan" | "amber" | "purple" | "gray"` | `"gray"` | Color |
| `children` | `ReactNode` | required | Content |

### Spinner

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `16` | Width/height in pixels |

## Styling

Prism UI uses Tailwind CSS utility classes internally. Components are unstyled by default aside from built-in classes — bring your own Tailwind config or override via `className`.

## License

MIT — see [LICENSE](LICENSE).

---

<div align="center">
  <sub>Built with ❄️ by <a href="https://github.com/ZenHamza">ZenHamza</a></sub>
</div>
