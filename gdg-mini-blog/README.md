# GDG Mini Blogging Platform

A modern, full-stack blogging platform built for the GDG on-campus club task.

**[Live Demo](https://blog.gdg.nithitsuki.com)**

---

## About The Project

This project is a complete mini-blogging platform designed to exceed the requirements of the GDG web development task. It showcases a modern, professional tech stack and a focus on a seamless user experience.

The user interface is heavily inspired by Google's clean and functional design aesthetic, utilizing a familiar color palette and minimalist layout to create an intuitive and welcoming environment, all without using any proprietary assets or infringing on brand identity.

At its core, the application leverages **Supabase** for a robust and secure authentication system. It features email/password sign-up, secure session management via httpOnly cookies, and automated user profile creation using database triggers. The entire authentication flow is built using the latest Next.js App Router patterns, including Server Actions, to ensure reliability and prevent common state synchronization issues.

Every feature, from real-time form validation to server-side rendering, is designed to provide a smooth, professional, and responsive user experience.

### Key Features

-   **Full CRUD Operations:** Users can Create, Read, Update, and Delete their own blog posts.
-   **Secure User Authentication:** Full sign-up, sign-in, and sign-out functionality.
-   **User Profiles:** Support for unique usernames and display names.
-   **Server-Side Rendering (SSR):** Built with the Next.js App Router for fast initial page loads and excellent SEO.
-   **Advanced Form Validation:** Real-time, client-side validation using Zod and React Hook Form for a great UX.
-   **Protected Routes:** Server-side logic prevents unauthorized access to pages like creating or editing posts.
-   **Dynamic UI:** The navigation bar and other components instantly update based on the user's authentication state.
-   **Responsive Design:** A clean and accessible UI that works seamlessly on all devices.

### Tech Stack

-   **Framework:** Next.js (App Router)
-   **Language:** TypeScript
-   **Backend & Database:** Supabase
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Form Management:** React Hook Form & Zod
-   **Deployment:** Vercel

---

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/) (v18 or later)
-   [pnpm](https://pnpm.io/) (You can install it with `npm install -g pnpm`)

### 1. Installation

First, clone the repository to your local machine:
```bash
git clone https://github.com/nithitsuki/gdg.nithitsuki.com
```

Navigate to the project directory:
```bash
cd gdg.nithitsuki.com/gdg-mini-blog
```

Install the necessary dependencies using pnpm:
```bash
pnpm install
```

### 2. Supabase Setup

This project requires a Supabase backend to function.

1.  Go to [supabase.com](https://supabase.com) and create a new project.
2.  Once your project is created, navigate to the **SQL Editor**.
3.  You will need to run the SQL commands used in this project to create the `profiles` and `posts` tables, as well as the database trigger.
(check out the saved SQL schemas in a `supabase/migrations` folder!).

### 3. Environment Variables

You need to connect your local project to your Supabase instance.

1.  In the root of the `gdg-mini-blog` directory, create a new file named `.env.local`.
2.  Copy the contents of `.env.example` (if you have one) or use the template below:

    ```env
    NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```

3.  Find these keys in your Supabase project dashboard under **Settings > API**.
    -   `YOUR_SUPABASE_PROJECT_URL` is the Project URL.
    -   `YOUR_SUPABASE_ANON_KEY` is the `anon` public Project API Key.

### 4. Run the Development Server

Now you are all set! Run the following command to start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the files.
```