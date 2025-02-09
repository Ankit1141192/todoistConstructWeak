document.addEventListener("alpine:init", () => {
  Alpine.data("activeTab", () => [
    {
      name: "Getting Things Done (GTD)",
      image: "./images/gtd.png",
      description: "Systematize the clutter in your brain and get things done.",
      categories: ["popular", "task-management"],
    },
    {
      name: "Kanban",
      image: "./images/kanban.png",
      description:
        "Move your project through a visual pipeline from start to finish.",
      categories: [
        "popular",
        "task-management",
        "teamwork",
        "prioritization",
        "time-management",
      ],
    },
    {
      name: "Time Blocking",
      image: "./images/timeblo.png",
      description: "Control your schedule so it doesn’t control you.",
      categories: ["time-management", "task-management"],
    },
    {
      name: "Eat the Frog",
      image: "./images/timeblo.png",
      description:
        "If it's your job to eat a frog, it's best to do it first thing in the morning",
      categories: ["focus", "time-management", "procrastination"],
    },
    {
      name: "The Pomodoro Technique",
      image: "./images/timeblo.png",
      description:
        "Beat procrastination and improve your focus one pomodoro at a time",
      categories: ["popular", "focus", "time-management", "procrastination"],
    },
    {
      name: "The Eisenhower Matrix",
      image: "./images/timeblo.png",
      description:
        'Avoid the "Urgency Trap" with Dwight D. Eisenhower\'s famous prioritization framework',
      categories: ["prioritization", "time-management"],
    },
    {
      name: "Systemist",
      image: "./images/timeblo.png",
      description: "Follow Todoist's founder's personal productivity system.",
      categories: ["task-management", "prioritization"],
    },
    {
      name: "The Medium Method",
      image: "./images/timeblo.png",
      description:
        "Want to be more productive? Don't go (completely) paperless",
      categories: ["focus", "prioritization"],
    },
    {
      name: "Objectives & Key Results (OKRs)",
      image: "./images/timeblo.png",
      description:
        "Set rigorous goals that align big-picture priorities with day-to-day actions",
      categories: ["goal-tracking", "teamwork", "prioritization"],
    },
    {
      name: "The Weekly Review",
      image: "./images/timeblo.png",
      description: "10x your productivity with just one hour a week",
      categories: ["time-management", "goal-tracking", "prioritization"],
    },
    {
      name: "The Commitment Inventory",
      image: "./images/timeblo.png",
      description:
        "Make sure every area of your life gets the time and energy it deserves",
      categories: ["prioritization"],
    },
    {
      name: "Another Eisenhower Matrix Example",
      image: "./images/timeblo.png",
      description: "Another description for Eisenhower Matrix",
      categories: ["prioritization", "time-management"],
    },
    {
      name: "Procrastination Technique 1",
      image: "./images/timeblo.png",
      description: "Technique to beat procrastination",
      categories: ["procrastination"],
    },
    {
      name: "Procrastination Technique 2",
      image: "./images/timeblo.png",
      description: "Another technique to beat procrastination",
      categories: ["procrastination"],
    },
  ]);
});
