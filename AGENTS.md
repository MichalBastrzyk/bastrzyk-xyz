# Agent Guidelines for bastrzyk-xyz

## Build/Lint/Test Commands

### Primary Commands

- **Development**: `npm run dev` - Start development server on port 3000
- **Build**: `npm run build` - Run type checking (`astro check`) and build project
- **Format**: `npm run prettier` - Format all files with Prettier
- **Preview**: `npm run preview` - Preview the built project

### Type Checking

- Run `npm run build` which includes `astro check` for TypeScript validation
- No separate lint command exists - rely on Astro's built-in type checking

### Testing

- No test framework configured - focus on type checking and manual testing
- For component testing, manually verify in browser during development

## Code Style Guidelines

### TypeScript Configuration

- **Strict mode**: Enabled with `astro/tsconfigs/strict`
- **Path aliases**: Use `@/*` for `./src/*` imports
- **JSX**: Use `react-jsx` transform (no React import needed)
- **Null checks**: `strictNullChecks` enabled - handle null/undefined explicitly

### Formatting (Prettier)

- **Quotes**: Double quotes (`"`)
- **Semicolons**: Disabled
- **Plugins**:
  - `prettier-plugin-astro`
  - `prettier-plugin-tailwindcss`
  - `prettier-plugin-astro-organize-imports`

### Import Organization

```typescript
// 1. React imports
import * as React from "react"

// 2. Third-party libraries
import { cva, type VariantProps } from "class-variance-authority"

// 3. Local imports with @ alias
import { cn } from "@/lib/utils"

// 4. Type imports
import type { ComponentProps } from "react"
```

### Naming Conventions

- **Files**: kebab-case (`blog-card.astro`, `utils.ts`)
- **React Components**: PascalCase (`BlogCard`, `ThemeToggle`)
- **Functions/Variables**: camelCase (`formatDate`, `calculateWordCount`)
- **CSS Classes**: kebab-case in Tailwind utilities
- **Constants**: UPPER_SNAKE_CASE in `consts.ts`

### Component Patterns

#### React Components (shadcn/ui style)

```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva("base-classes", {
  variants: {
    variant: { default: "default-styles", variant: "variant-styles" },
    size: { default: "default-size", sm: "small-size" }
  },
  defaultVariants: { variant: "default", size: "default" }
})

function Component({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"element"> & VariantProps<typeof componentVariants>) {
  return (
    <element className={cn(componentVariants({ variant, size, className }))} {...props} />
  )
}
```

#### Astro Components

```astro
---
// Frontmatter imports
---

<!-- HTML with Tailwind classes -->
<div class="mx-auto max-w-3xl px-4">
  <Component />
</div>
```

### Error Handling

- Use TypeScript's strict null checks
- Handle optional props with default values
- Use proper error boundaries for React components
- Validate content schemas with Zod (for MDX frontmatter)

### File Structure

```
src/
  components/     # Reusable components
    ui/          # shadcn/ui components
  content/       # MDX content files
  lib/          # Utility functions
  pages/        # Astro pages
  styles/       # Global styles
  types.ts      # TypeScript type definitions
```

### Content Management

- **Blog posts**: MDX files in `src/content/blog/` with frontmatter
- **Authors**: Markdown files in `src/content/authors/`
- **Projects**: Markdown files in `src/content/projects/`
- Use Zod schemas for content validation (defined in `content.config.ts`)

### Styling Guidelines

- **Tailwind CSS**: Primary styling approach
- **shadcn/ui**: Use established design system components
- **CSS Variables**: OKLCH color format for theme support
- **Dark Mode**: Automatic theme switching with `[data-theme]` selectors
- **Responsive**: Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints

### Performance Considerations

- Use Astro's Islands architecture for selective hydration
- Optimize images with Astro's Image component
- Implement proper loading strategies (`loading="eager"` for above-fold)
- Use `client:load` sparingly for interactive components

### Deployment

- Built for static site generation
- Configured for Vercel deployment
- RSS feed and sitemap generation included
- SEO optimization with Open Graph tags
