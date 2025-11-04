## EduSwap Somalia

EduSwap Somalia is a marketplace that connects students, parents, and educators to buy, sell, or swap educational
resources across Somali regions. The platform prioritizes affordability, safety, and community-driven collaboration.

### ✨ Features

- Firebase-backed authentication with Google sign-in
- Sell flow for posting new listings with delivery and tagging options
- Marketplace browse and detail pages with category filters
- Profile dashboard including seller reputation snapshot
- Community and resource hubs for grassroots educational programs
- Tailwind CSS v4 styling with responsive, accessible components

### 🧱 Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [React 19](https://react.dev/)
- [Firebase Web SDK](https://firebase.google.com/docs/reference) (Auth & Firestore)
- [Tailwind CSS v4](https://tailwindcss.com/)

### 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure Firebase credentials by copying `.env.example` to `.env.local` and populating:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567890
   NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:abcdef123456
   ```

   You can create these values from the Firebase console (`Project settings → General → Your apps`).

3. Run the development server:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to explore EduSwap.

### 🔒 Firebase Setup Notes

- Enable Google authentication in **Firebase Authentication → Sign-in method**.
- Create a Firestore database in **production mode** (rules can be adapted to your launch strategy).
- Optional: set up Firebase Storage for image uploads; the current UI accepts public URLs.

### 🧪 Available Scripts

| Script        | Description                     |
| ------------- | -------------------------------- |
| `npm run dev` | Start the local dev server       |
| `npm run build` | Build the production bundle   |
| `npm start`   | Run the built app with Node.js   |
| `npm run lint` | Run ESLint using Next.js config |

### 🌍 Deployment

The repo is optimized for deployment on [Vercel](https://vercel.com). After setting environment variables in Vercel, run:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-c29ccad1
```

Once deployed, verify the production URL: `https://agentic-c29ccad1.vercel.app`.
