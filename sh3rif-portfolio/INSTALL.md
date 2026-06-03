# Installation Guide

## If npm install fails due to network issues:

### Option 1: Retry Installation
```bash
npm install --legacy-peer-deps
```

### Option 2: Use Yarn (if available)
```bash
yarn install
```

### Option 3: Install with different registry
```bash
npm install --legacy-peer-deps --registry=https://registry.npmmirror.com
```

### Option 4: Clear cache and retry
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

## Required Dependencies

The project needs:
- next (v16.2.6)
- react (v19.2.4)
- react-dom (v19.2.4)
- lucide-react (v0.263.1)
- tailwindcss (v4)
- typescript (v5)

## After Successful Installation

1. Run development server:
```bash
npm run dev
```

2. Open browser: http://localhost:3000

3. Start customizing!

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors?**
Make sure all dependencies are installed properly.

**Styling not working?**
Check that Tailwind CSS is properly installed.
