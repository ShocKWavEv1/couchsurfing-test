import { DetailPost } from "@/types/detailPost";

export const detailPosts: DetailPost[] = [
  {
    id: 1,
    title: "Building Performant React Dashboards",
    excerpt:
      "Optimizing React dashboards with memoization, Suspense, and React Query can drastically improve perceived performance.",
    author: {
      name: "Rodrigo Salmerón",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    date: "2025-09-14T12:35:00Z",
    likes: 22,
    comments: 8,
    image: "https://picsum.photos/seed/react-dashboard/400/300",
    content: `
      React dashboards can get heavy as the number of components and data increases.
      Strategies to keep them performant include:
      - Memoization: Avoid unnecessary renders using React.memo and useMemo.
      - React Query: Efficiently fetch, cache, and update data.
      - Suspense: Defer heavy components for better perceived performance.
      - Lazy-loading charts and virtualizing long lists.
    `,
    relatedPosts: [2, 3, 6],
  },
  {
    id: 2,
    title: "Understanding Server Components in Next.js",
    excerpt:
      "Next.js server components allow you to render UI on the server, reduce bundle size, and simplify data fetching.",
    author: { name: "Sofia Reyes", avatar: "https://i.pravatar.cc/150?img=2" },
    date: "2025-08-10T09:42:00Z",
    likes: 35,
    comments: 14,
    image: "https://picsum.photos/seed/server-components/400/300",
    content: `
      Server components reduce client bundle size, improve SEO, and simplify data fetching.
      They allow fetching data securely on the server, combining server and client components
      for interactivity. Best practices include hybrid architecture patterns and selective rendering.
    `,
    relatedPosts: [1, 4, 5],
  },
  {
    id: 3,
    title: "Design Systems with Shadcn UI and Tailwind",
    excerpt:
      "Combining Shadcn UI with Tailwind CSS helps you build scalable, consistent design systems without losing flexibility.",
    author: {
      name: "Marco Hernández",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    date: "2025-09-28T17:10:00Z",
    likes: 12,
    comments: 5,
    image: "https://picsum.photos/seed/shadcn-design/400/300",
    content: `
      Shadcn UI + Tailwind enables consistent, scalable design systems.
      Use utility classes and prebuilt components while keeping flexibility for custom styles.
      Tips include component composition, design tokens, and responsive patterns.
    `,
    relatedPosts: [1, 5, 8],
  },
  {
    id: 4,
    title: "Improving Type Safety with Zod in React Forms",
    excerpt:
      "Zod integrates with React Hook Form to ensure reliable user input validation.",
    author: { name: "Andrea López", avatar: "https://i.pravatar.cc/150?img=4" },
    date: "2025-07-02T08:24:00Z",
    likes: 17,
    comments: 3,
    image: "https://picsum.photos/seed/zod-validation/400/300",
    content: `
      Using Zod with React Hook Form ensures type-safe validation.
      Define schemas to validate inputs, handle errors, and integrate seamlessly with form submission.
      This approach reduces runtime errors and improves UX with immediate feedback.
    `,
    relatedPosts: [2, 6, 14],
  },
  {
    id: 5,
    title: "Optimizing Images in Next.js with Plaiceholder",
    excerpt:
      "Using Plaiceholder for blurred image placeholders reduces layout shifts and improves Core Web Vitals in image-heavy UIs.",
    author: {
      name: "Carlos Méndez",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    date: "2025-09-03T21:50:00Z",
    likes: 45,
    comments: 18,
    image: "https://picsum.photos/seed/plaiceholder/400/300",
    content: `
      Plaiceholder reduces layout shifts by generating blurred placeholders for images.
      Combine it with lazy-loading and Next.js Image component for a smooth UX.
      Helps improve Core Web Vitals and perceived performance.
    `,
    relatedPosts: [3, 8, 10],
  },
  {
    id: 6,
    title: "Managing State with Zustand in Large Applications",
    excerpt:
      "Zustand offers a lightweight and performant way to manage global state in React, ideal for micro-frontends or isolated modules.",
    author: { name: "Lucía Ortega", avatar: "https://i.pravatar.cc/150?img=6" },
    date: "2025-08-18T13:15:00Z",
    likes: 28,
    comments: 9,
    image: "https://picsum.photos/seed/zustand/400/300",
    content: `
      Zustand is a minimal state management library with a simple API.
      Best for isolated modules or micro-frontends.
      Offers hooks-based store access, supports middleware, and avoids unnecessary re-renders.
    `,
    relatedPosts: [1, 4, 7],
  },
  {
    id: 7,
    title: "Micro Frontends with Module Federation",
    excerpt:
      "Webpack’s Module Federation enables true micro-frontend architecture by dynamically loading remote React apps at runtime.",
    author: {
      name: "Jorge Velázquez",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    date: "2025-06-25T10:00:00Z",
    likes: 51,
    comments: 22,
    image: "https://picsum.photos/seed/module-federation/400/300",
    content: `
      Module Federation allows multiple frontends to coexist and share code at runtime.
      You can load remote React apps dynamically, share libraries, and isolate modules.
      Useful for scaling large teams and decoupling deployments.
    `,
    relatedPosts: [6, 12, 15],
  },
  {
    id: 8,
    title: "Building Animations with Framer Motion",
    excerpt:
      "Framer Motion provides a declarative API for animating React components smoothly with spring physics and layout transitions.",
    author: { name: "Isabel Núñez", avatar: "https://i.pravatar.cc/150?img=8" },
    date: "2025-10-01T11:45:00Z",
    likes: 33,
    comments: 7,
    image: "https://picsum.photos/seed/framer-motion/400/300",
    content: `
      Framer Motion enables smooth animations with simple APIs.
      Animate presence, layout transitions, and use physics-based animations.
      Improves UX by giving feedback and making interactions feel lively.
    `,
    relatedPosts: [3, 5, 10],
  },
  {
    id: 9,
    title: "Enhancing SEO with Next.js Metadata API",
    excerpt:
      "The new Metadata API in Next.js simplifies setting up meta tags and Open Graph data for better social and search visibility.",
    author: { name: "Pablo García", avatar: "https://i.pravatar.cc/150?img=9" },
    date: "2025-08-22T15:40:00Z",
    likes: 20,
    comments: 10,
    image: "https://picsum.photos/seed/next-seo/400/300",
    content: `
      Next.js Metadata API allows defining meta tags at component or page level.
      Supports Open Graph, Twitter Cards, and SEO improvements.
      Helps improve search engine visibility and social sharing appearance.
    `,
    relatedPosts: [2, 10, 12],
  },
  {
    id: 10,
    title: "Why You Should Use React Query Over SWR",
    excerpt:
      "React Query offers finer control over caching, revalidation, and background fetching compared to SWR for complex applications.",
    author: {
      name: "Fernanda Ruiz",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    date: "2025-09-07T20:20:00Z",
    likes: 39,
    comments: 12,
    image: "https://picsum.photos/seed/react-query/400/300",
    content: `
      React Query offers more control than SWR in caching strategies.
      Features include background revalidation, paginated queries, and mutations.
      Helps handle complex data fetching scenarios efficiently in React apps.
    `,
    relatedPosts: [5, 8, 9],
  },
  {
    id: 11,
    title: "Creating Accessible Components in React",
    excerpt:
      "Accessibility should be a core part of UI design. Learn how to use semantic HTML, ARIA attributes, and keyboard navigation patterns.",
    author: {
      name: "Diego Torres",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    date: "2025-07-29T09:05:00Z",
    likes: 14,
    comments: 4,
    image: "https://picsum.photos/seed/accessibility/400/300",
    content: `
      Accessibility is essential for inclusive design.
      Use semantic HTML, ARIA attributes, keyboard navigation, and screen reader support.
      Testing accessibility ensures your app reaches all users effectively.
    `,
    relatedPosts: [4, 14, 16],
  },
  {
    id: 12,
    title: "Integrating Payload CMS with Next.js",
    excerpt:
      "Learn how to fetch and display content from Payload CMS using server actions and incremental revalidation in Next.js.",
    author: {
      name: "Laura Gutiérrez",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    date: "2025-08-30T16:25:00Z",
    likes: 47,
    comments: 19,
    image: "https://picsum.photos/seed/payloadcms/400/300",
    content: `
      Payload CMS integration allows you to fetch structured content.
      Use server actions for fetching and incremental revalidation for efficient updates.
      Ideal for building headless CMS-driven Next.js apps.
    `,
    relatedPosts: [7, 9, 15],
  },
  {
    id: 13,
    title: "Reducing Bundle Size in Next.js Projects",
    excerpt:
      "Bundle optimization is key to performance. Learn to use dynamic imports, code splitting, and image optimization effectively.",
    author: {
      name: "Andrés Muñoz",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    date: "2025-09-25T18:00:00Z",
    likes: 31,
    comments: 11,
    image: "https://picsum.photos/seed/bundle-optimization/400/300",
    content: `
      Optimize your Next.js bundle by:
      - Dynamic imports for lazy loading components.
      - Splitting large modules.
      - Optimizing images and dependencies.
      Reduces load times and improves Core Web Vitals.
    `,
    relatedPosts: [1, 5, 10],
  },
  {
    id: 14,
    title: "Handling Errors Gracefully in React",
    excerpt:
      "Error boundaries, try/catch in async code, and Suspense fallbacks make your React app more resilient and user-friendly.",
    author: {
      name: "Natalia Flores",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    date: "2025-08-02T14:12:00Z",
    likes: 19,
    comments: 6,
    image: "https://picsum.photos/seed/react-error/400/300",
    content: `
      React error handling strategies:
      - Error boundaries for catching render errors.
      - Async try/catch for data fetching.
      - Suspense fallbacks to show loading UI.
      Improves resilience and UX.
    `,
    relatedPosts: [4, 11, 16],
  },
  {
    id: 15,
    title: "The Case for Headless Commerce",
    excerpt:
      "Headless commerce enables flexibility and speed by decoupling the frontend and backend layers of your e-commerce app.",
    author: {
      name: "Ricardo Vega",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    date: "2025-09-10T10:05:00Z",
    likes: 26,
    comments: 8,
    image: "https://picsum.photos/seed/headless-commerce/400/300",
    content: `
      Headless commerce decouples frontend and backend.
      Benefits include faster frontend iteration, API-driven content, and flexible integrations.
      Works well with React, Next.js, and modern e-commerce architectures.
    `,
    relatedPosts: [7, 12, 18],
  },
  {
    id: 16,
    title: "Improving UX with Skeleton Screens",
    excerpt:
      "Skeleton screens give users instant visual feedback, making loading states feel faster and smoother.",
    author: {
      name: "Valeria Cruz",
      avatar: "https://i.pravatar.cc/150?img=16",
    },
    date: "2025-07-15T12:18:00Z",
    likes: 42,
    comments: 15,
    image: "https://picsum.photos/seed/skeleton/400/300",
    content: `
      Skeleton screens simulate layout while content loads.
      Reduces perceived wait times.
      Use for lists, images, and complex components for better UX.
    `,
    relatedPosts: [11, 14, 20],
  },
  {
    id: 17,
    title: "Exploring Edge Middleware in Next.js",
    excerpt:
      "Edge Middleware allows you to intercept requests at the edge to handle redirects, rewrites, and authentication faster.",
    author: {
      name: "Luis Ramírez",
      avatar: "https://i.pravatar.cc/150?img=17",
    },
    date: "2025-09-19T09:00:00Z",
    likes: 37,
    comments: 13,
    image: "https://picsum.photos/seed/edge-middleware/400/300",
    content: `
      Edge middleware enables intercepting requests closer to the user.
      Useful for authentication, redirects, rewrites, and A/B testing.
      Improves latency and scalability of Next.js apps.
    `,
    relatedPosts: [2, 9, 18],
  },
  {
    id: 18,
    title: "Deploying Next.js Apps to Vercel",
    excerpt:
      "Vercel offers seamless integration for deploying and scaling Next.js applications with minimal configuration.",
    author: {
      name: "Camila Morales",
      avatar: "https://i.pravatar.cc/150?img=18",
    },
    date: "2025-10-03T15:35:00Z",
    likes: 50,
    comments: 17,
    image: "https://picsum.photos/seed/vercel-deploy/400/300",
    content: `
      Deploy Next.js apps to Vercel for automatic builds and scaling.
      Features include serverless functions, edge caching, and analytics.
      Integrates seamlessly with Git workflows.
    `,
    relatedPosts: [15, 17, 20],
  },
  {
    id: 19,
    title: "Testing React Components with Jest",
    excerpt:
      "Testing ensures code reliability. Learn how to set up Jest for React and measure coverage effectively.",
    author: {
      name: "Miguel Castro",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    date: "2025-09-05T11:22:00Z",
    likes: 23,
    comments: 7,
    image: "https://picsum.photos/seed/react-jest/400/300",
    content: `
      Jest allows testing React components with snapshots and unit tests.
      Combine with React Testing Library for DOM testing.
      Ensures robust code and reduces regression issues.
    `,
    relatedPosts: [10, 13, 14],
  },
  {
    id: 20,
    title: "Improving Lighthouse Scores in Next.js",
    excerpt:
      "Optimizing your Next.js app’s performance, accessibility, and SEO can significantly boost Lighthouse scores.",
    author: {
      name: "Daniela Pérez",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    date: "2025-08-27T22:10:00Z",
    likes: 41,
    comments: 14,
    image: "https://picsum.photos/seed/lighthouse/400/300",
    content: `
      Improve Lighthouse scores by:
      - Optimizing performance with lazy loading and caching.
      - Ensuring accessibility with semantic HTML and ARIA.
      - Improving SEO with metadata and structured data.
    `,
    relatedPosts: [16, 18, 13],
  },
];
