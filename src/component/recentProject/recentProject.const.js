import { usedTechnology1 } from "./usedTech.const.js";

export const projects = [
  {
    projectName: "Daily Dish",
    description:
      "This is a meal service whith some unique feature where user can create a plan or more to maintain a meal from a certain kitchen",
    from: "April 16, 2025",
    to: "Now",
    images: [
      { name: "dailyDishBanner1", path: "/dailyDishBanner-1.webp" },
      { name: "dailyDishBanner2", path: "/dailyDishBanner-2.webp" },
      { name: "dailyDishBanner3", path: "/dailyDishBanner-3.webp" },
    ],
    links: {
      liveLink: "https://mealbx-client.vercel.app/",
      githubClient: "https://github.com/theabsparrow/assignment-six-client.git",
      githubServer: "https://github.com/theabsparrow/assignment-six-server.git",
    },
    usedTechnology: usedTechnology1,
  },
];
