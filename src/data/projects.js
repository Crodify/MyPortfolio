export const projects = [
    {
        id: 0,
        title: 'BerserkLifts',
        description: 'Full-featured workout & habit tracker with RPG progression, cloud sync, XP system, leaderboards, and challenges. Built with React Native, Expo, TypeScript, Zustand, and Supabase.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Supabase', 'Node.js'],
        live: 'https://berserklifts.vercel.app',
        github: 'https://github.com/Crodify/BerserkLifts-workout-habit-tracker',
        featured: true,
        icon: '⚔️'
    },
    {
        id: 101,
        title: 'GoodDollar PR #41 — EIP-712 Auth Verification',
        description: 'Critical Security Finding: Enforced buyer cryptographic signature and nonce verification for channel close and withdraw routes on Cloudflare Worker backend.',
        tech: ['EIP-712', 'TypeScript', 'Web3 / EVM', 'Cloudflare Workers', 'Foundry'],
        category: 'GitHub Contributions',
        status: '🟣 Merged by Founder @sirpy (Nov 22, 2026)',
        live: 'https://github.com/GoodDollar/antseed-integration/pull/41',
        github: 'https://github.com/GoodDollar/antseed-integration/pull/41',
        featured: false,
        icon: '🔒'
    },
    {
        id: 102,
        title: 'GoodDollar PR #40 — Keyset Cursor Pagination',
        description: 'Scalability Finding: Replaced offset skip pagination with keyset cursor pagination on id_gt, eliminating the 5,000-entity graph query ceiling.',
        tech: ['GraphQL', 'TypeScript', 'Pagination', 'Cloudflare Workers'],
        category: 'GitHub Contributions',
        status: '🟣 Merged by Founder @sirpy (Nov 22, 2026)',
        live: 'https://github.com/GoodDollar/antseed-integration/pull/40',
        github: 'https://github.com/GoodDollar/antseed-integration/pull/40',
        featured: false,
        icon: '⚡'
    },
    {
        id: 103,
        title: 'GoodDollar PR #36 — Micro-USD Config & Precision',
        description: 'Precision Alignment: Parsed MAX_BONUS_CAP_USD in 6-decimal micro-USD units to align Cloudflare Worker with Foundry vault smart contracts.',
        tech: ['TypeScript', 'Unit Testing', 'Foundry', 'EVM / Celo'],
        category: 'GitHub Contributions',
        status: '🟣 Merged by Founder @sirpy (Nov 22, 2026)',
        live: 'https://github.com/GoodDollar/antseed-integration/pull/36',
        github: 'https://github.com/GoodDollar/antseed-integration/pull/36',
        featured: false,
        icon: '💰'
    },
    {
        id: 104,
        title: 'Algorand Official SDKs & Tooling',
        description: 'Authored 5+ pull requests across official Algorand SDKs (py-algorand-sdk, js-algorand-sdk, algokit-utils-py): added async algod endpoints, BigInt microalgo lossless precision, and deterministic resource ordering in composers.',
        tech: ['Python', 'TypeScript', 'SDK', 'Algorand', 'Web3'],
        category: 'GitHub Contributions',
        status: '🟢 5+ Pull Requests Open • 100% CI Passing',
        live: 'https://github.com/algorand/js-algorand-sdk/pull/1151',
        github: 'https://github.com/algorand/js-algorand-sdk/pulls?q=is%3Apr+author%3ACrodify',
        featured: false,
        icon: '🔗'
    },
    {
        id: 105,
        title: 'Tenstorrent Compiler Kernel Fixes',
        description: 'Kernel and compiler operator optimizations in tt-metal (low-level kernel programming model): sharded scale_mask_softmax mask handling and offset core grids.',
        tech: ['C++', 'Python', 'Compiler', 'Kernels', 'AI Acceleration'],
        category: 'GitHub Contributions',
        status: '🟢 Cash Bounty PR Under Review',
        live: 'https://github.com/tenstorrent/tt-metal/pull/64659',
        github: 'https://github.com/tenstorrent/tt-metal/pulls?q=is%3Apr+author%3ACrodify',
        featured: false,
        icon: '⚙️'
    },
    {
        id: 13,
        title: 'Tenzies',
        description: 'Classic dice game — roll until all 10 dice match, freeze the keepers between rolls, win with confetti. State management with React hooks and unique IDs via nanoid.',
        tech: ['React', 'Vite', 'JavaScript'],
        live: 'https://tenzies-react-js.vercel.app',
        github: 'https://github.com/Crodify/Tenzies-ReactJS',
        featured: false,
        icon: '🎲'
    },
    {
        id: 12,
        title: 'Chef Claude',
        description: 'AI recipe generator that turns your ingredients into full recipes. Secured with a Vercel serverless proxy so API keys never reach the browser.',
        tech: ['React', 'Vite', 'Vercel Functions', 'HuggingFace API'],
        live: 'https://chef-claude-chi-two.vercel.app',
        github: 'https://github.com/Crodify/Chef-Claude',
        featured: false,
        icon: '👨‍🍳'
    },
    {
        id: 1,
        title: 'Weather Dashboard',
        description: 'Real-time weather app with Pinterest-style UI, auto-location detection, hourly/7-day forecasts, and ambient weather sounds. PWA installable on iPhone.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'PWA', 'REST API'],
        live: 'https://weathercrodify.netlify.app',
        github: 'https://github.com/Crodify/weather-dashboard',
        featured: false,
        icon: '🌤️'
    },
    {
        id: 2,
        title: 'Myntra Clone',
        description: 'Full-stack Myntra e-commerce clone with React Native, backend API, authentication, and real-time features.',
        tech: ['React Native', 'TypeScript', 'Node.js', 'Expo'],
        live: 'https://crodifymyclone1.netlify.app',
        github: 'https://github.com/Crodify/Myntra-Clone',
        featured: false,
        icon: '🛍️'
    },
    {
        id: 3,
        title: 'Leads Tracker',
        description: 'Mobile-first leads tracking app with Firebase backend. Save, view, and delete leads from any device.',
        tech: ['JavaScript', 'Firebase', 'HTML5', 'CSS3'],
        live: 'https://leadstrackercrodify.netlify.app',
        github: '#',
        featured: false,
        icon: '📱'
    },
    {
        id: 4,
        title: 'Chrome Extension',
        description: 'Browser extension to save and manage tabs. One-click save all open tabs and restore them later.',
        tech: ['JavaScript', 'Chrome API', 'HTML5'],
        live: null,
        github: '#',
        featured: false,
        icon: '🧩'
    },
    {
        id: 5,
        title: 'Blackjack Game',
        description: 'Full Blackjack card game with betting system, card animations, and score tracking.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        live: 'https://crodify-blackjack.netlify.app',
        github: 'https://github.com/Crodify/Blackjack---Javascript',
        featured: false,
        icon: '🃏'
    },
    {
        id: 6,
        title: 'SpaceX Clone',
        description: 'Responsive clone of SpaceX website with animations and modern design.',
        tech: ['HTML5', 'CSS3'],
        live: 'https://crodifyspacex.netlify.app',
        github: '#',
        featured: false,
        icon: '🚀'
    },
    {
        id: 7,
        title: 'Unit Converter',
        description: 'Convert between metric and imperial units. Clean UI with instant results.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        live: 'https://uniconvertcrodify.netlify.app',
        github: '#',
        featured: false,
        icon: '⚖️'
    },
    {
        id: 8,
        title: 'Password Generator',
        description: 'Generate secure random passwords with customizable length and character options.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        live: 'https://crodifypsgen.netlify.app',
        github: '#',
        featured: false,
        icon: '🔐'
    },
    {
        id: 9,
        title: 'Dream Place',
        description: 'Tourist website with beautiful imagery, responsive layout, and smooth scrolling.',
        tech: ['HTML5', 'CSS3'],
        live: 'https://dreamplacecro.netlify.app',
        github: '#',
        featured: false,
        icon: '🏝️'
    },
    {
        id: 10,
        title: 'Increment Counter',
        description: 'Animated counter component with smooth number transitions and gradient backgrounds.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        live: 'https://crodifycounter.netlify.app',
        github: '#',
        featured: false,
        icon: '🔢'
    },
    {
        id: 11,
        title: 'Birthday Card',
        description: 'Animated birthday greeting card with confetti effects and music.',
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        live: 'https://crodifybday.netlify.app',
        github: '#',
        featured: false,
        icon: '🎂'
    }
];
