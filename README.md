# 🎤 TALENT — The College Chaos Quiz

> **No correct answers. Only consequences. 💀**

Welcome to **TALENT** — a fun, interactive React-based college quiz where your everyday student decisions reveal your **true college personality**. 😎

Built as a **mini React project for college workshops**, TALENT is intentionally simple enough to build in a couple of hours while still demonstrating the core concepts of React + Tailwind CSS.

---

## 🎭 What is TALENT?

Imagine someone asks:

> **"Teacher says: Ye bahut important hai. Tum kya karoge?"**

And you have four choices:

- 📚 Actually study
- 📸 Take a photo
- 😎 Ask your friend later
- 💀 Assume it's optional

There is **no correct answer**.

There is only...

# CONSEQUENCES. 💀

At the end, TALENT gives you a completely unnecessary but surprisingly accurate **college personality result**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎤 **Interactive Quiz** | Answer funny college-life situations |
| 😂 **Random Reactions** | Get a reaction after every answer |
| 📊 **Progress Bar** | See how close you are to your fate |
| 🎯 **10 Questions** | Quick and chaotic |
| 🧠 **Personality Result** | Discover your college character |
| 🔥 **Latent Score** | A completely serious score for a completely unserious quiz |
| 📤 **Share Result** | Share your result with friends |
| 🔄 **Try Again** | Because apparently one attempt wasn't enough |
| 📱 **Responsive UI** | Works across desktop and mobile |
| ⚡ **No Backend** | Everything runs in the browser |

---

# 🧪 The Experience

### 01 — Enter TALENT

You are welcomed with:

```text
🎤 THE COLLEGE EDITION

YOU'RE
ON TALENT

No correct answers.
Only consequences. 💀
```

Click:

> **START THE TEST →**

And your academic career takes a completely unnecessary turn.

---

### 02 — Answer Questions

You get situations every college student understands.

For example:

> **Friend says: "5 minute mein aa raha hoon." Actually?**

Choose wisely.

Or don't.

Nobody knows.

😂

---

### 03 — Get Judged

After selecting an option, TALENT gives you a random reaction:

```text
Interesting choice 👀
```

or

```text
Bhai ye kya choose kar diya 💀
```

or

```text
Faculty ko mat batana 🤫
```

Because every decision deserves unnecessary commentary.

---

### 04 — Discover Your TALENT

At the end, you receive your college personality.

Possible personalities include:

### 😎 THE MAIN CHARACTER

> You think your life is a movie.  
> Honestly... sometimes it is.

### 💀 THE LAST-MINUTE LEGEND

> Deadline isn't pressure.  
> Deadline is your productivity engine.

### 🧠 THE OVERTHINKER

> The question had four options.  
> You imagined seventeen possible scenarios.

### 🔥 THE CHAOTIC MAJORITY

> Somehow you always choose the most chaotic option...  
> and somehow it works.

---

# 🛠️ Tech Stack

Built intentionally with beginner-friendly technologies:

```text
⚛️ React
🎨 Tailwind CSS
🟨 JavaScript
🌐 HTML
```

No:

```text
❌ Backend
❌ Database
❌ Authentication
❌ API
❌ AI API
❌ Complex state management
```

Just React doing React things. 😎

---

# 🧠 React Concepts Used

TALENT is small, but it demonstrates several important React concepts.

### `useState`

Used to manage:

```js
started
current
selected
score
finished
reaction
```

---

### `.map()`

Questions and options are rendered dynamically:

```jsx
{question.options.map((option, index) => (
  <button>
    {option}
  </button>
))}
```

---

### Conditional Rendering

Different screens are displayed based on state:

```text
Landing
   ↓
Quiz
   ↓
Result
```

---

### Event Handling

Buttons trigger functions such as:

```js
onClick={() => handleAnswer(index)}
```

---

### Dynamic Styling

Tailwind classes change depending on the selected answer.

```jsx
selected === index
  ? "bg-purple-600"
  : "bg-zinc-950"
```

---

### JavaScript Array Methods

The project also uses familiar JavaScript concepts such as:

```text
.map()
Math.random()
Math.floor()
```

---

# 📁 Project Structure

The project intentionally keeps the structure simple:

```text
talent/
│
├── src/
│   ├── App.jsx
│   └── App.css
│
├── public/
│
├── package.json
└── README.md
```

Most of the application logic lives inside:

```text
src/App.jsx
```

That's intentional.

This project is designed to be understandable during a **college workshop** rather than being unnecessarily enterprise-level.

---

# 🚀 Getting Started

## 1️⃣ Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

## 2️⃣ Move into the project

```bash
cd talent
```

## 3️⃣ Install dependencies

```bash
npm install
```

## 4️⃣ Start the development server

```bash
npm run dev
```

Then open the local URL shown by Vite.

---

# 🎨 Customization

Want to make TALENT your own?

Easy.

### Add a question

Go to the `questions` array:

```js
{
  question: "Your question here?",
  options: [
    "Option A 😎",
    "Option B 😂",
    "Option C 👀",
    "Option D 💀"
  ]
}
```

That's it.

---

### Add a reaction

Add your own reaction to:

```js
const reactions = [
  "Interesting choice 👀",
  "Respect bro 😎",
  "Bhai ye kya choose kar diya 💀",
  "Faculty ko mat batana 🤫"
];
```

Imagine the possibilities. 😂

---

# 🎓 Why This Project?

TALENT was designed specifically as a **short React workshop project**.

Instead of building another:

```text
Todo App ❌
Counter App ❌
Calculator ❌
Weather App ❌
```

students build something they actually want to interact with.

The project demonstrates:

```text
UI
 ↓
State
 ↓
Events
 ↓
Arrays
 ↓
Conditional Rendering
 ↓
Dynamic UI
 ↓
Result
```

All without drowning beginners in unnecessary complexity.

---

# 💡 Workshop Idea

TALENT can be built live in approximately **2 hours**.

### Suggested Workshop Flow

```text
00:00 – 15:00
React basics

15:00 – 30:00
Create quiz data

30:00 – 50:00
Build question UI

50:00 – 70:00
useState + answer handling

70:00 – 90:00
Progress + reactions

90:00 – 110:00
Result screen

110:00 – 120:00
Customize + test
```

Then let students modify the questions.

And that's where the real chaos begins. 💀

---

# 🧑‍💻 Built By

## **Prajjal Dhar**

**Technological Evangelist • Developer • Trainer**

I build and teach technology by turning complicated concepts into things people can actually understand and build.

This project was created as a **fun React workshop project** to demonstrate that learning React doesn't always have to start with a boring Todo App. 😎

---

# 🤝 Made for Students

TALENT is especially suitable for:

- 🎓 College workshops
- 👨‍💻 React beginners
- ⚛️ Frontend practice
- 🧑‍🏫 Live coding sessions
- 🎤 Tech events
- 🚀 Hackathon warm-ups

---

# ⭐ If You Like It

If TALENT made you laugh, learn, or question your life choices:

**⭐ Star the repository**

**🍴 Fork it**

**🛠️ Modify the questions**

**📢 Share it with your friends**

And most importantly...

> **Don't overthink the answer.**

> **It's TALENT. 💀**

---

## 📜 License

This project is open for learning, experimentation, and educational use.

---

<div align="center">

### 🎤 TALENT

**No correct answers. Only consequences.**

Made with ⚛️ + 🎨 + 😂 by **Prajjal Dhar**

</div>