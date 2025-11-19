# Next Transcriber

A modern Next.js application for transcribing YouTube videos using local transcription libraries.

[![PR Verification](https://github.com/leantechniques/next-transcriber/actions/workflows/pr-verify.yml/badge.svg)](https://github.com/leantechniques/next-transcriber/actions/workflows/pr-verify.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-2.x-green)](https://vitest.dev/)

## What is this?

Next Transcriber converts YouTube videos to text transcriptions using local processing (no data sent to external services). Built with Next.js 15, React 19, and TypeScript.

> **Note:** This project is currently in active development. Not all features are implemented yet.

## Quick Start

### Prerequisites

- **Node.js 20+** (we recommend using [nvm](https://github.com/nvm-sh/nvm))
- **npm** (comes with Node.js)
- **Git**

### Get Started in 3 Steps

1. **Clone and install**
   ```bash
   git clone git@github.com:leantechniques/next-transcriber.git
   cd next-transcriber
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

That's it! The app is now running locally.

## Available Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run type-check` | Check TypeScript types without emitting files |
| `npm run ci:test` | Run complete CI pipeline (type-check, tests, build) |

## Features

- 🎥 **YouTube Video Transcription** - Convert YouTube videos to text
- 🔒 **Local Processing** - Your data stays private
- ✅ **Fully Tested** - Comprehensive test coverage
- ⚡ **Modern Stack** - Latest Next.js, React, and TypeScript
- 📱 **Responsive** - Works on desktop and mobile

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library with Server Components
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vitest 2](https://vitest.dev/) - Fast unit testing
- [Node.js 20+](https://nodejs.org/) - JavaScript runtime

## Project Structure

```
next-transcriber/
├── app/              # Next.js App Router
│   ├── api/         # API routes
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page
├── tests/           # Test files
├── backlog/         # User stories and planning
└── public/          # Static assets
```

## Development

### Environment Setup

If you're using nvm for Node version management:
```bash
nvm use 22
```

### Environment Variables

Copy the example file and configure as needed:
```bash
cp .env.local.example .env.local
```

### Running Tests

```bash
# Run all tests
npm test

# Watch mode during development
npm run test:watch

# With coverage report
npm run test:coverage
```

## API

### Health Check

Check if the application is running:

```bash
curl http://localhost:3000/api/health
```

Returns:
```json
{
  "status": "ok",
  "timestamp": "2025-11-19T12:00:00.000Z"
}
```

## Contributing

We welcome contributions! Check the `/backlog` directory for current user stories and planned work.

### Development Workflow

1. Check the backlog for current work
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes with tests
4. Run `npm test` to verify
5. Commit: `git commit -m "feat: your feature description"`
6. Push and create a Pull Request

### Code Standards

- Use TypeScript with strict mode
- Write tests for new features
- Follow existing code style
- Keep components small and focused

## Roadmap

### Current Phase: Scaffolding ✅
- Next.js 15 with App Router
- Vitest testing setup
- TypeScript strict mode
- Basic API health check

### Upcoming Features
- YouTube URL input and validation
- Local transcription library integration
- Transcription processing
- Results display and export (TXT, SRT, VTT)

See `/backlog` for detailed user stories.

## CI/CD Pipeline

This project includes automated quality checks through a GitHub Actions CI/CD pipeline.

### Running Checks Locally

Before pushing your code, run the complete CI pipeline locally:

```bash
npm run ci:test
```

This command runs in sequence:
1. **Type checking** - TypeScript validation
2. **Unit tests** - All Vitest tests
3. **Build** - Production build verification

### Individual Checks

Run checks individually during development:

```bash
# Type checking only
npm run type-check

# Tests only
npm test

# Build only
npm run build
```

### GitHub Actions Workflow

The PR Verification workflow automatically runs on pull requests and ensures:
- ✓ TypeScript compiles without errors
- ✓ All unit tests pass
- ✓ Production build succeeds

View workflow details: `.github/workflows/pr-verify.yml`

## Troubleshooting

### Port 3000 Already in Use

Next.js will automatically suggest an alternative port.

### Node Version Issues

This project requires Node.js 20 or higher. Check your current version:
```bash
node --version
```

If you're using nvm, switch to the correct version:
```bash
nvm use 22
```

### TypeScript Errors

If you see TypeScript errors when running `npm run type-check`:

1. **Verify correct Node version** (20 or higher)
2. **Try a clean install:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run type-check
   ```

3. **Clear TypeScript cache:**
   ```bash
   rm -rf .next
   npm run type-check
   ```

### CI Pipeline Failures

If `npm run ci:test` fails locally but passes in CI, try:

1. **Clean install with fresh lockfile:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run ci:test
   ```

2. **Verify Node version matches CI environment** (20 or higher)

3. **Check for uncommitted changes** that might affect tests:
   ```bash
   git status
   ```

### Test Failures

If tests fail locally:

1. **Check if tests pass individually:**
   ```bash
   npm test
   npm run test:watch
   ```

2. **Verify dependencies are installed:**
   ```bash
   npm install
   ```

3. **Clear test cache:**
   ```bash
   npm test -- --clearCache
   npm test
   ```

### Build Errors

If the production build fails:

1. **Verify TypeScript compiles:**
   ```bash
   npm run type-check
   ```

2. **Try a clean build:**
   ```bash
   rm -rf .next
   npm run build
   ```

3. **Check for API/runtime errors** in the build output

## Support

- **Issues**: [GitHub Issues](https://github.com/leantechniques/next-transcriber/issues)
- **Project Planning**: Check `/backlog` directory
- **Development Context**: See `CLAUDE.md`

## License

MIT License - see LICENSE file for details.

---

**Made with ❤️ by Lean Techniques**
