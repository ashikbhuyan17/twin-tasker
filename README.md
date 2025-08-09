# TwinTasker — React Developer Assignment

## 🚀 Live Links

- **Home:** [https://twin-tasker.vercel.app/](https://twin-tasker.vercel.app/)
- **Assignment-1 (Tic-Tac-Toe — Player Setup):** [https://twin-tasker.vercel.app/assignment-1/tic-tac-toe/setup](https://twin-tasker.vercel.app/assignment-1/tic-tac-toe/setup)
- **Assignment-2 (Products List / CRUD):** [https://twin-tasker.vercel.app/assignment-2/products](https://twin-tasker.vercel.app/assignment-2/products)

---


### This project is built as part of a React Developer assessment. It contains **two independent assignments** accessible via a navigation bar:


## 🎮 Assignment-1: Tic-Tac-Toe Game

A multi-page Tic-Tac-Toe game with:

- **Two-player turn-based gameplay**
- **Scoring system:**
  - Win → 2 points
  - Loss → 1 point
  - Draw → 0 points
- **Best of 5 rounds** (first to 3 wins is the final winner)
- **Session-based leaderboard** (persisted on reload)
- Pages:
  1. **Player Setup** — Form to enter player names (validation included)
  2. **Game Page** — 3×3 interactive board, current turn indicator, live scores, round reset
  3. **Leaderboard** — Session scores with clear/reset option
  4. **Victory Screen** — Final results with restart/new match options

---

## 🛍 Assignment-2: CRUD Product App

A product management application with:

- **Product List Page**
  - Pagination
  - Real-time search by name
  - Category-based filtering (fixed sidebar)
  - Product deletion with confirmation
- **Create & Edit Page**
  - Full form validations:
    - Required fields
    - Length limits
    - Data type checks
- **Details Page**
  - Full product information display

**API Used:** [Platzi Fake Store API](https://fakeapi.platzi.com/en)

---

## 🛠 Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/ashikbhuyan17/twin-tasker.git

# Navigate to project folder
cd twin-tasker

# Install dependencies
npm install

# Run development server
npm run dev


