import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Teacher bolte hain: 'Ye bahut important hai.' Tum?",
    options: [
      "Notebook kholunga 📚",
      "Photo le lunga 📸",
      "Friend ko bolunga baad mein bhej dena 😎",
      "Important hai matlab optional hai 💀",
    ],
  },
  {
    question: "Friend bolta hai: '5 minute mein aa raha hoon.' Actually?",
    options: [
      "Chai ki thaddi par baitha hoga ⏱️",
      "Abhi to utha hoga 🙂",
      "Sacchi mai aa raha hai 5 min mai 😭",
      "Abhi naha raha hai 💀",
    ],
  },
  {
    question: "Teacher poochte hain: 'Any doubts?'",
    options: [
      "Yes sir, ek doubt hai 🙋",
      "Doubt hai but chup rahunga 😶",
      "Dusre se puchunga 👀",
      "Sir attendance laga dijiye 😭",
    ],
  },
  {
    question: "Group project meeting 7 PM. 7:20 PM pe?",
    options: [
      "Traffic tha late ho gaya 🫡",
      "Aa raha hoon bro 🚶",
      "Koi meeting start hui kya abhi? 🤔",
      "Bhai Bandi ki call aaa gaya tha 💀",
    ],
  },
  {
    question: "Sir: Assignment deadline TODAY 11:59 PM. Progress?",
    options: [
      "Already submitted 😎",
      "Itne ped inhi logo ke karan kam ho raha hai 💀",
      "Abhi start karunga",
      "File ka naam bhi decide nahi kiya 💀",
    ],
  },
  {
    question: "Friend bolta hai: 'Bhai phone de, bas ek minute.'",
    options: [
      "Le bhai 📱",
      "Kyu tere pass phone nahi hai kya garib? 👀",
      "Gallery lock karke dene wale tum 😌",
      "Pehle bata phone kyun chahiye 💀",
    ],
  },
  {
    question: "Placement season starts. First move?",
    options: [
      "DSA start karunga aaj se hi 🚀",
      "Resume update kar leta hoon 📄",
      "LinkedIn open karke Coding thinker wale bhaiya ko msg kar deta hoon 😎",
      "Humein kya college mai hi rehna hai😂",
    ],
  },
  {
    question: "Exam ke ek din pehle syllabus dekha...",
    options: [
      "Easy hai kar lunga,So jaata hoon thodi der 😎",
      "Fail to ho nahi sakta, Back Harsh bhaiya clear karwa denge",
      "Arreh Ye Laplace kon hai? 😭",
      "Syllabus dekhna hi pap hai 💀",
    ],
  },
  {
    question: "Canteen mein friend bolta hai: 'Aaj meri treat.'",
    options: [
      "Bhai ke liye dil se Respect bro ❤️",
      "Bhai tu na hota to iss anath ko kon palta",
      "Pakka gunde bitha rakhe honge",
      "Bhai sach bol raha hai na? Zher mila diya too 👀",
    ],
  },
  {
    question: "Teacher suddenly: 'Presentation aaj hi hai.'",
    options: [
      "Ready since yesterday 🎤",
      "Hey bhagwan aj Bhukamp laa do😇",
      "Sir, Wo Dadi abhi hi guzar gai 😭",
      "Presentation? Aaj? Kyu? Aaaj aaisa kya hai💀",
    ],
  },
];

const results = [
  {
    title: "THE CHAOTIC MAJORITY 💀",
    text: "Tum mostly wahi choose karte ho jo sab karte hain... but somehow tumhari life phir bhi chaotic hai.",
    emoji: "🔥",
  },
  {
    title: "THE MAIN CHARACTER 😎",
    text: "Tumhe lagta hai tumhari life ek movie hai. Honestly... thoda sahi bhi hai.",
    emoji: "👑",
  },
  {
    title: "THE OVERTHINKER 🧠",
    text: "Question simple tha. Tumne uske 17 possible scenarios imagine kar liye.",
    emoji: "🧠",
  },
  {
    title: "THE LAST-MINUTE LEGEND 💀",
    text: "Deadline tumhare liye pressure nahi, motivation ka source hai.",
    emoji: "⏰",
  },
];

function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [reaction, setReaction] = useState("");

  const handleAnswer = (index) => {
    if (selected !== null) return;

    setSelected(index);

    const reactions = [
      "Bhai ye kya choose kar diya 💀",
      "Interesting choice 👀",
      "Respect bro 😎",
      "Ye answer unexpected tha 😂",
      "Faculty ko mat batana 🤫",
      "Hmmm... noted 🧐",
      "Bro is cooking 🔥",
    ];

    setReaction(reactions[Math.floor(Math.random() * reactions.length)]);

    const points = Math.floor(Math.random() * 10) + 1;

    setScore((prev) => prev + points);

    setTimeout(() => {
      if (current === questions.length - 1) {
        setFinished(true);
      } else {
        setCurrent((prev) => prev + 1);
        setSelected(null);
        setReaction("");
      }
    }, 1000);
  };

  const restart = () => {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const getResult = () => {
    if (score < 25) return results[3];
    if (score < 45) return results[2];
    if (score < 60) return results[0];

    return results[1];
  };

  const shareResult = async () => {
    const result = getResult();

    const text = `I got "${result.title}" on TALENT College Edition 💀🔥`;

    if (navigator.share) {
      await navigator.share({
        title: "My TALENT Result",
        text,
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert("Result copied! 🔥");
    }
  };

  // ---------------- LANDING ----------------

  if (!started) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 overflow-hidden relative">
        {/* Glow */}
        <div className="absolute w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full top-10 left-10" />
        <div className="absolute w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full bottom-10 right-10" />

        <div className="relative text-center max-w-3xl">
          <div className="inline-block border border-zinc-700 rounded-full px-5 py-2 text-xs tracking-[4px] text-zinc-400 mb-8">
            🎤 THE COLLEGE EDITION
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8]">
            Are You
            <span className="block text-purple-500 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              TALENTED?
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-10 leading-relaxed">
            No correct answers.
            <br />
            Only consequences. 💀
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-10 bg-white text-black px-8 py-4 rounded-full font-black hover:scale-105 transition"
          >
            START THE TEST →
          </button>

          <p className="text-zinc-600 text-xs mt-5">
            10 questions • 2 minutes • 100% unnecessary
          </p>
        </div>
      </div>
    );
  }

  // ---------------- RESULT ----------------

  if (finished) {
    const result = getResult();

    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <p className="text-purple-500 tracking-[5px] text-xs font-bold">
            YOUR TALENT RESULT
          </p>

          <div className="text-8xl my-8">{result.emoji}</div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            {result.title}
          </h1>

          <p className="text-zinc-400 max-w-xl mx-auto mt-6 leading-relaxed">
            {result.text}
          </p>

          {/* Stats */}

          <div className="grid grid-cols-3 bg-zinc-900 border border-zinc-800 rounded-2xl mt-10 p-6">
            <div>
              <p className="text-3xl font-black">{score}</p>
              <p className="text-[10px] tracking-widest text-zinc-500 mt-2">
                TALENT SCORE
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">10</p>
              <p className="text-[10px] tracking-widest text-zinc-500 mt-2">
                QUESTIONS
              </p>
            </div>

            <div>
              <p className="text-3xl font-black">100%</p>
              <p className="text-[10px] tracking-widest text-zinc-500 mt-2">
                CHAOS
              </p>
            </div>
          </div>

          {/* Quote */}

          <div className="border-l-4 border-purple-500 bg-zinc-900 p-5 mt-8 text-zinc-300 italic">
            "Bhai dekh lenge."
          </div>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <button
              onClick={shareResult}
              className="bg-white text-black px-7 py-4 rounded-full font-black hover:scale-105 transition"
            >
              📤 SHARE MY RESULT
            </button>

            <button
              onClick={restart}
              className="bg-zinc-900 border border-zinc-700 px-7 py-4 rounded-full font-bold hover:bg-zinc-800 transition"
            >
              TRY AGAIN
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- QUIZ ----------------

  const question = questions[current];

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-5">
      <div className="max-w-4xl w-full">
        {/* Header */}

        <div className="flex justify-between items-center mb-4">
          <div className="font-black text-2xl">
            TALENT<span className="text-purple-500">?</span>
          </div>

          <div className="text-zinc-500 text-sm">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(questions.length).padStart(2, "0")}
          </div>
        </div>

        {/* Progress */}

        <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}

        <div className="mt-16">
          <p className="text-purple-500 text-xs font-bold tracking-[4px]">
            QUESTION {String(current + 1).padStart(2, "0")}
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mt-5 mb-10">
            {question.question}
          </h2>

          {reaction && (
            <p className="text-purple-400 font-bold mb-5 animate-pulse">
              {reaction}
            </p>
          )}

          {/* Options */}

          <div className="grid gap-3">
            {question.options.map((option, index) => (
              <button
                key={option}
                onClick={() => handleAnswer(index)}
                className={`
                  w-full text-left p-5 rounded-2xl
                  border transition-all duration-200
                  flex items-center gap-5
                  ${
                    selected === index
                      ? "bg-purple-600 border-purple-500 translate-x-2"
                      : "bg-zinc-950 border-zinc-800 hover:border-purple-500 hover:bg-zinc-900 hover:translate-x-2"
                  }
                `}
              >
                <span
                  className={`
                    w-9 h-9 rounded-full
                    flex items-center justify-center
                    text-xs font-black
                    border
                    ${selected === index ? "border-white" : "border-zinc-700"}
                  `}
                >
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="text-base md:text-lg">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-between mt-12 text-[10px] tracking-[3px] text-zinc-700">
          <span>DON'T THINK TOO MUCH.</span>
          <span>JUST PICK ONE.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
