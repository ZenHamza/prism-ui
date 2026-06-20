# prism-ui

A lightweight React component library focused on accessibility, animation, and dark-mode-first design.

## Installation

```bash
pnpm add prism-ui
```

> **Note:** `framer-motion` is a peer dependency.

## Usage

### Button

```tsx
import { Button } from "prism-ui";

<Button variant="cyan" size="md">Click me</Button>
<Button variant="amber" loading>Saving...</Button>
<Button variant="ghost" href="https://example.com">Link</Button>
```

### GlassPanel

```tsx
import { GlassPanel } from "prism-ui";

<GlassPanel variant="premium">
  <p>Frosted glass container</p>
</GlassPanel>
```

### Modal

```tsx
import { Modal } from "prism-ui";

<Modal open={isOpen} onClose={() => setIsOpen(false)} title="Hello">
  <p>Modal content</p>
</Modal>
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
  const addToast = useToast();
  return <button onClick={() => addToast("Saved!", "success")}>Save</button>;
}
```

### Input

```tsx
import { Input } from "prism-ui";

<Input label="Email" placeholder="you@example.com" />
<Input label="Password" type="password" error="Required" />
```

### Badge

```tsx
import { Badge } from "prism-ui";

<Badge variant="cyan">New</Badge>
<Badge variant="amber">Beta</Badge>
```

### Spinner

```tsx
import { Spinner } from "prism-ui";

<Spinner size={24} />
```

## GitHub

https://github.com/ZenHamza/prism-ui
