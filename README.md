# Linktree Clone

A full-stack clone of [Linktree](https://linktr.ee) — a "link in bio" tool that lets anyone claim a handle and share a single page with all their important links. Built with **Next.js (App Router)**, **React 19**, **Tailwind CSS**, and **MongoDB**.

## Features

- 🔗 **Claim a handle** and generate a personalized link-in-bio page
- ➕ **Add multiple links** (with custom labels) to your page
- 🖼️ **Set a profile picture** via image URL
- 🌐 **Public profile pages** at `/{handle}` displaying all your links
- 🚫 **Handle uniqueness check** — prevents duplicate handles from being created
- 🔔 Toast notifications for success/error feedback (via `react-toastify`)
- 📱 Responsive marketing landing page inspired by Linktree's homepage

## Tech Stack

| Layer          | Technology                          |
| -------------- | ------------------------------------ |
| Framework      | [Next.js](https://nextjs.org) 16 (App Router) |
| UI Library     | [React](https://react.dev) 19       |
| Styling        | [Tailwind CSS](https://tailwindcss.com) 4 |
| Database       | [MongoDB](https://www.mongodb.com) (via the official `mongodb` driver) |
| Notifications  | [react-toastify](https://fkhadra.github.io/react-toastify/) |
| Linting        | ESLint (`eslint-config-next`)       |

## Project Structure

```
Linktree-clone/
├── app/
│   ├── [handle]/
│   │   └── page.js        # Public profile page — renders a user's links by handle
│   ├── api/
│   │   └── add/
│   │       └── route.js   # POST endpoint that creates a new Linktree document
│   ├── components/
│   │   └── Navbar.js      # Site navigation bar
│   ├── generate/
│   │   └── page.js        # Multi-step form to claim a handle and add links/picture
│   ├── layout.js           # Root layout (fonts, Navbar, global styles)
│   ├── page.js              # Landing / marketing page
│   └── globals.css
├── lib/
│   └── mongodb.js          # MongoDB client connection helper
├── public/                  # Static assets (images, icons)
└── package.json
```

## How It Works

1. **Landing page (`/`)** — the user enters a desired handle and clicks "Claim your Linktree", which routes them to `/generate?handle=<handle>`.
2. **Generate page (`/generate`)** — the user adds one or more links (label + URL) and a profile picture URL, then submits the form.
3. **API route (`/api/add`)** — receives the submitted data, checks MongoDB to ensure the handle isn't already taken, and inserts a new document into the `links` collection of the `Linktree` database.
4. **Public profile page (`/[handle]`)** — looks up the handle in MongoDB and renders the profile picture and list of links. Returns a 404 if the handle doesn't exist.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+
- A [MongoDB](https://www.mongodb.com/atlas) database (local instance or a free Atlas cluster)

### 1. Clone the repository

```bash
git clone https://github.com/raghav-05-dev/Linktree-clone.git
cd Linktree-clone
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add your MongoDB connection string:

```env
MONGODB_URI=your-mongodb-connection-string
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## API Reference

### `POST /api/add`

Creates a new Linktree entry.

**Request body:**

```json
{
  "handle": "raghav",
  "pic": "https://example.com/profile.jpg",
  "links": [
    { "link": "https://x.com/username", "linktext": "Twitter/X" }
  ]
}
```

**Response:**

```json
{
  "success": true,
  "error": false,
  "message": "Your Linktree has been generated!",
  "result": { "...": "MongoDB insert result" }
}
```

If the handle is already taken, the API responds with `success: false` and an appropriate error message instead of creating a duplicate.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the development server          |
| `npm run build` | Build the app for production          |
| `npm run start` | Start the production server           |
| `npm run lint`  | Run ESLint                            |

## Deployment

The easiest way to deploy this app is with [Vercel](https://vercel.com/new), the platform from the creators of Next.js. Remember to add the `MONGODB_URI` environment variable in your deployment settings.

## Roadmap Ideas

- [ ] Authentication so users can edit/manage their own page
- [ ] Drag-and-drop link reordering
- [ ] Image upload instead of pasting a picture URL
- [ ] Click analytics per link
- [ ] Custom themes/colors per profile

## License

This project is for educational purposes as a clone of Linktree. No license specified yet — add one (e.g., MIT) if you plan to open-source it further.
