# UI Components Library

A comprehensive collection of reusable React components for the portfolio website.

## Installation

Import components from the barrel export:

```tsx
import { Button, Card, GradientHeading, Badge } from '@/components/ui';
```

Or import individually:

```tsx
import { Button } from '@/components/ui/Button';
```

---

## Components

### GradientHeading

A heading component with gradient text effect.

**Props:**
- `children` - The heading text
- `as` - HTML heading tag (h1-h6, default: h2)
- `className` - Additional CSS classes
- `variant` - Color variant: 'default' | 'primary' | 'secondary'

**Example:**
```tsx
<GradientHeading as="h1" variant="primary" className="text-5xl">
  Welcome to My Portfolio
</GradientHeading>
```

---

### Card

Flexible card component with multiple sub-components.

**Variants:**
- `default` - Basic card with shadow
- `hover` - Card with hover lift effect
- `interactive` - Clickable card with keyboard support
- `gradient` - Card with gradient background

**Sub-components:**
- `CardHeader` - Top section of card
- `CardTitle` - Bold title text
- `CardDescription` - Subtitle/description text
- `CardContent` - Main content area
- `CardFooter` - Bottom section

**Example:**
```tsx
<Card variant="hover">
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
    <CardDescription>A cool project description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content here</p>
  </CardContent>
  <CardFooter>
    <Button>View More</Button>
  </CardFooter>
</Card>
```

**Interactive Card:**
```tsx
<Card variant="interactive" onClick={() => openModal()}>
  <CardTitle>Click me!</CardTitle>
</Card>
```

---

### Button

Button component with multiple variants and icon support.

**Variants:**
- `primary` - Blue solid button
- `secondary` - Gray solid button
- `outline` - Outlined button
- `ghost` - Minimal button
- `gradient` - Gradient background button

**Sizes:** `sm` | `md` | `lg`

**Props:**
- `icon` - Lucide icon component
- `iconPosition` - 'left' | 'right'
- `href` - Render as link
- `disabled` - Disabled state

**Examples:**
```tsx
import { Download } from 'lucide-react';

// Basic button
<Button variant="primary" size="md">
  Click Me
</Button>

// Button with icon
<Button variant="gradient" icon={Download} iconPosition="left">
  Download Resume
</Button>

// Link button
<Button href="/contact" variant="outline">
  Get in Touch
</Button>
```

**IconButton:**
```tsx
import { X } from 'lucide-react';

<IconButton
  icon={X}
  onClick={handleClose}
  aria-label="Close modal"
  variant="ghost"
/>
```

---

### Badge

Small label component for tags, status, and metrics.

**Variants:**
- `default` - Gray badge
- `primary` - Blue badge
- `secondary` - Purple badge
- `success` - Green badge
- `warning` - Yellow badge
- `danger` - Red badge
- `info` - Cyan badge
- `outline` - Bordered badge

**Sizes:** `sm` | `md` | `lg`

**Examples:**
```tsx
// Basic badge
<Badge variant="primary">React</Badge>

// Tech badge with icon
<TechBadge icon={<ReactIcon />}>
  React
</TechBadge>

// Status badge
<StatusBadge status="in-progress" />

// Metric badge
<MetricBadge
  label="Coverage"
  value="85%"
  variant="success"
/>
```

---

### SocialLinks

Pre-configured social media links component.

**Variants:**
- `default` - Simple icon links
- `large` - Large cards with labels
- `minimal` - Subtle icons

**Props:**
- `variant` - Display style
- `showLabels` - Show text labels
- `iconSize` - 'sm' | 'md' | 'lg'

**Examples:**
```tsx
// Default social links
<SocialLinks />

// Large cards with labels
<SocialLinks variant="large" />

// Minimal with custom size
<SocialLinks variant="minimal" iconSize="lg" />
```

**Individual Platform Button:**
```tsx
<SocialLinkButton
  platform="github"
  variant="gradient"
  size="lg"
/>
```

---

### SectionHeader

Page section header with icon, title, and description.

**Props:**
- `icon` - Lucide icon component
- `title` - Section title (required)
- `subtitle` - Small text above title
- `description` - Paragraph below title
- `centered` - Center align content
- `gradientVariant` - Gradient color variant

**Examples:**
```tsx
import { Code } from 'lucide-react';

<SectionHeader
  icon={Code}
  subtitle="What I Do"
  title="My Projects"
  description="Here are some of my recent projects and work"
  centered
/>
```

**Simple version:**
```tsx
<SimpleSectionHeader title="About Me" />
```

---

### Modal

Modal dialog components with animations.

**Components:**
- `Modal` - Wrapper component
- `ModalHeader` - Header with title and close button
- `ModalContent` - Main content area
- `ModalFooter` - Footer for actions
- `ModalSection` - Content section with optional title

**Max Widths:** `sm` | `md` | `lg` | `xl` | `2xl` | `4xl`

**Example:**
```tsx
<Modal isOpen={isOpen} onClose={closeModal} maxWidth="2xl">
  <ModalContent>
    <ModalHeader title="Project Details" onClose={closeModal} />

    <ModalSection title="Overview">
      <p>Project description here</p>
    </ModalSection>

    <ModalSection title="Technologies">
      <div className="flex gap-2">
        <Badge>React</Badge>
        <Badge>TypeScript</Badge>
      </div>
    </ModalSection>
  </ModalContent>

  <ModalFooter>
    <Button variant="outline" onClick={closeModal}>Close</Button>
    <Button variant="gradient">View Project</Button>
  </ModalFooter>
</Modal>
```

---

## Hooks

### useBodyScrollLock

Lock/unlock body scroll (useful for modals and mobile menus).

**Examples:**
```tsx
import { useBodyScrollLock } from '@/hooks';

function MobileMenu({ isOpen }) {
  useBodyScrollLock(isOpen);
  return <nav>...</nav>;
}
```

**Auto-lock on mount:**
```tsx
import { useLockBodyScroll } from '@/hooks';

function Modal() {
  useLockBodyScroll(); // Locks when mounted, unlocks when unmounted
  return <div>Modal content</div>;
}
```

---

## Migration Examples

### Before (repeated code):
```tsx
// Old way - duplicated across files
<h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
  My Projects
</h2>
```

### After (reusable component):
```tsx
<GradientHeading as="h2" className="text-4xl font-bold">
  My Projects
</GradientHeading>
```

---

### Before (repeated card structure):
```tsx
<div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6">
  <h3 className="text-xl font-bold text-slate-900">Title</h3>
  <p className="text-slate-600">Description</p>
</div>
```

### After (Card component):
```tsx
<Card variant="hover">
  <CardTitle>Title</CardTitle>
  <CardDescription>Description</CardDescription>
</Card>
```

---

## Best Practices

1. **Use semantic HTML** - GradientHeading accepts `as` prop for proper heading hierarchy
2. **Accessibility** - All interactive components include proper ARIA labels
3. **Keyboard navigation** - Interactive cards support Enter/Space keys
4. **Consistent styling** - Use variants instead of custom classes when possible
5. **TypeScript** - All components are fully typed

## Component Composition

These components are designed to work together:

```tsx
import { Card, CardContent, Badge, Button, GradientHeading } from '@/components/ui';

<Card variant="hover">
  <CardContent>
    <GradientHeading as="h3" variant="primary">
      Project Title
    </GradientHeading>

    <div className="flex gap-2 mt-4">
      <Badge variant="primary">React</Badge>
      <Badge variant="secondary">TypeScript</Badge>
    </div>

    <Button variant="gradient" className="mt-6">
      View Details
    </Button>
  </CardContent>
</Card>
```
