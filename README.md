# Ndi-Fi

Ndi-Fi is a modern DeFi (Decentralized Finance) platform built with Next.js, providing users with comprehensive financial tools including vault management, staking, borrowing, and deposit functionalities. The application features a sleek dark theme UI with smooth animations powered by Framer Motion.

## Features

- **Dashboard**: Overview of your DeFi portfolio and activities
- **Deposit**: Deposit assets into secure vaults with competitive yields
- **Borrow**: Borrow assets against collateral with flexible terms
- **Stake**: Stake tokens to earn rewards and participate in network security
- **Vault Management**: Browse and interact with various DeFi vaults
- **Wallet Integration**: Connect popular crypto wallets for seamless transactions
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Enhanced user experience with Framer Motion animations

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm, npm, or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ndi-fi
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

- `dev` - Start the development server
- `build` - Build the application for production
- `start` - Start the production server
- `lint` - Run ESLint for code quality checks

## Project Structure

```
ndi-fi/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard page
│   ├── deposit/           # Deposit page
│   ├── borrow/            # Borrow page
│   └── stake/             # Staking page
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   └── shared/           # Shared components
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

The application can be easily deployed to Vercel, Netlify, or any other platform supporting Next.js applications.

For Vercel deployment:

```bash
vercel --prod
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
