export type QuestionCategory =
  | 'funny'
  | 'story'
  | 'hypothetical'
  | 'opinion'
  | 'group'
  | 'personal';

export type CampfireQuestion = {
  id: number;
  category: QuestionCategory;
  prompt: string;
};

export const questions: CampfireQuestion[] = [
  // FUNNY
  {
    id: 1,
    category: 'funny',
    prompt: 'What is the dumbest way you have ever injured yourself?',
  },
  {
    id: 2,
    category: 'funny',
    prompt: 'What is something you believed as a kid that was completely wrong?',
  },
  {
    id: 3,
    category: 'funny',
    prompt: 'What is the worst haircut you have ever had?',
  },
  {
    id: 4,
    category: 'funny',
    prompt: 'What is the weirdest thing you have ever eaten?',
  },
  {
    id: 5,
    category: 'funny',
    prompt: 'What is your most useless talent?',
  },
  {
    id: 6,
    category: 'funny',
    prompt: 'What is the most embarrassing song you know all the words to?',
  },
  {
    id: 7,
    category: 'funny',
    prompt: 'What is the strangest thing you have ever bought?',
  },
  {
    id: 8,
    category: 'funny',
    prompt: 'What fictional character would be the absolute worst roommate?',
  },
  {
    id: 9,
    category: 'funny',
    prompt: 'What is the weirdest excuse you have ever used to get out of something?',
  },
  {
    id: 10,
    category: 'funny',
    prompt: 'If your life had a warning label, what would it say?',
  },
  {
    id: 11,
    category: 'funny',
    prompt: 'What food do you irrationally hate?',
  },
  {
    id: 12,
    category: 'funny',
    prompt: 'What would your wrestling entrance song be?',
  },
  {
    id: 13,
    category: 'funny',
    prompt: 'What is the worst fashion trend that needs to stay dead forever?',
  },
  {
    id: 14,
    category: 'funny',
    prompt: 'If animals could talk, which species would be the biggest asshole?',
  },
  {
    id: 15,
    category: 'funny',
    prompt: 'What everyday activity would you be embarrassingly bad at if it became an Olympic sport?',
  },
  {
    id: 16,
    category: 'funny',
    prompt: 'What is the funniest thing you have ever seen happen in public?',
  },
  {
    id: 17,
    category: 'funny',
    prompt: 'What is something you are way too competitive about?',
  },
  {
    id: 18,
    category: 'funny',
    prompt: 'What is the dumbest purchase you would absolutely make if you were rich?',
  },
  {
    id: 19,
    category: 'funny',
    prompt: 'If you had to replace your hands with two household objects, what would you choose?',
  },
  {
    id: 20,
    category: 'funny',
    prompt: 'What conspiracy theory could you invent right now and almost convince us is real?',
  },

  // STORIES
  {
    id: 21,
    category: 'story',
    prompt: 'What is a vacation story you still tell people?',
  },
  {
    id: 22,
    category: 'story',
    prompt: 'Tell us about a time you got completely lost.',
  },
  {
    id: 23,
    category: 'story',
    prompt: 'What was your first job like?',
  },
  {
    id: 24,
    category: 'story',
    prompt: 'What is the most trouble you ever got into at school?',
  },
  {
    id: 25,
    category: 'story',
    prompt: 'What is a moment that seemed terrible at the time but is hilarious now?',
  },
  {
    id: 26,
    category: 'story',
    prompt: 'What is the best surprise anyone has ever given you?',
  },
  {
    id: 27,
    category: 'story',
    prompt: 'Tell us about a time you met someone famous or almost famous.',
  },
  {
    id: 28,
    category: 'story',
    prompt: 'What is a childhood memory you can still picture perfectly?',
  },
  {
    id: 29,
    category: 'story',
    prompt: 'What is the weirdest place you have ever fallen asleep?',
  },
  {
    id: 30,
    category: 'story',
    prompt: 'Tell us about a time your plans went completely off the rails.',
  },
  {
    id: 31,
    category: 'story',
    prompt: 'What was your favorite birthday?',
  },
  {
    id: 32,
    category: 'story',
    prompt: 'What is the nicest thing a stranger has ever done for you?',
  },
  {
    id: 33,
    category: 'story',
    prompt: 'What is something you did once and immediately knew you would never do again?',
  },
  {
    id: 34,
    category: 'story',
    prompt: 'Tell us about the best meal you can remember.',
  },
  {
    id: 35,
    category: 'story',
    prompt: 'What is your funniest family story?',
  },
  {
    id: 36,
    category: 'story',
    prompt: 'What is the closest you have ever come to missing a flight, train, event, or reservation?',
  },
  {
    id: 37,
    category: 'story',
    prompt: 'What is something you got away with that you probably should not have?',
  },
  {
    id: 38,
    category: 'story',
    prompt: 'What is the strangest coincidence that has ever happened to you?',
  },
  {
    id: 39,
    category: 'story',
    prompt: 'What is one day from your past you would happily relive exactly as it happened?',
  },
  {
    id: 40,
    category: 'story',
    prompt: 'What is the hardest you have ever laughed?',
  },

  // HYPOTHETICAL
  {
    id: 41,
    category: 'hypothetical',
    prompt: 'If you could instantly master one skill, what would it be?',
  },
  {
    id: 42,
    category: 'hypothetical',
    prompt: 'If you could live in any fictional world for one year, which would you choose?',
  },
  {
    id: 43,
    category: 'hypothetical',
    prompt: 'If you won ten million dollars tomorrow, what is the first ridiculous thing you would buy?',
  },
  {
    id: 44,
    category: 'hypothetical',
    prompt: 'If you could have dinner with any person from history, who would it be?',
  },
  {
    id: 45,
    category: 'hypothetical',
    prompt: 'If you had to eat one cuisine for the rest of your life, which one survives?',
  },
  {
    id: 46,
    category: 'hypothetical',
    prompt: 'If you could teleport anywhere right now, where would we find you?',
  },
  {
    id: 47,
    category: 'hypothetical',
    prompt: 'If you could erase one minor inconvenience from existence, what would it be?',
  },
  {
    id: 48,
    category: 'hypothetical',
    prompt: 'If you could bring back one discontinued product, restaurant item, or attraction, what would it be?',
  },
  {
    id: 49,
    category: 'hypothetical',
    prompt: 'If you had to survive a zombie apocalypse with one person here, who are you choosing?',
  },
  {
    id: 50,
    category: 'hypothetical',
    prompt: 'If someone paid you enough money to switch careers tomorrow, what would you try?',
  },
  {
    id: 51,
    category: 'hypothetical',
    prompt: 'If you could watch one historical event in person without changing anything, what would you watch?',
  },
  {
    id: 52,
    category: 'hypothetical',
    prompt: 'If you could permanently eliminate one chore from your life, which one is gone?',
  },
  {
    id: 53,
    category: 'hypothetical',
    prompt: 'If your group had to open a business together, what would it be?',
  },
  {
    id: 54,
    category: 'hypothetical',
    prompt: 'If you had one extra hour every day that nobody else got, how would you use it?',
  },
  {
    id: 55,
    category: 'hypothetical',
    prompt: 'If aliens arrived tomorrow and asked you to explain humanity with one movie, what would you show them?',
  },
  {
    id: 56,
    category: 'hypothetical',
    prompt: 'If you could swap lives with anyone for one week, who would you choose?',
  },
  {
    id: 57,
    category: 'hypothetical',
    prompt: 'If you had to delete every app from your phone except three, which three survive?',
  },
  {
    id: 58,
    category: 'hypothetical',
    prompt: 'If you could know the absolute truth about one mystery, what would you ask?',
  },
  {
    id: 59,
    category: 'hypothetical',
    prompt: 'If money and skill were irrelevant, what would you spend your days doing?',
  },
  {
    id: 60,
    category: 'hypothetical',
    prompt: 'If you could design your perfect day from wake-up to bedtime, what happens?',
  },

  // OPINIONS
  {
    id: 61,
    category: 'opinion',
    prompt: 'What movie is wildly overrated?',
  },
  {
    id: 62,
    category: 'opinion',
    prompt: 'What food deserves more respect than it gets?',
  },
  {
    id: 63,
    category: 'opinion',
    prompt: 'What is something expensive that is absolutely worth the money?',
  },
  {
    id: 64,
    category: 'opinion',
    prompt: 'What is something cheap that is better than the expensive version?',
  },
  {
    id: 65,
    category: 'opinion',
    prompt: 'What is the best smell in the world?',
  },
  {
    id: 66,
    category: 'opinion',
    prompt: 'What is the best decade for music?',
  },
  {
    id: 67,
    category: 'opinion',
    prompt: 'What restaurant chain would you defend harder than you probably should?',
  },
  {
    id: 68,
    category: 'opinion',
    prompt: 'What common social rule makes absolutely no sense?',
  },
  {
    id: 69,
    category: 'opinion',
    prompt: 'What technology has made life noticeably worse?',
  },
  {
    id: 70,
    category: 'opinion',
    prompt: 'What technology would you never willingly give up?',
  },
  {
    id: 71,
    category: 'opinion',
    prompt: 'What is the greatest snack ever created?',
  },
  {
    id: 72,
    category: 'opinion',
    prompt: 'What place should everybody visit at least once?',
  },
  {
    id: 73,
    category: 'opinion',
    prompt: 'What job do you think is much harder than people realize?',
  },
  {
    id: 74,
    category: 'opinion',
    prompt: 'What is something everybody should learn how to do?',
  },
  {
    id: 75,
    category: 'opinion',
    prompt: 'What fictional villain actually had a decent point?',
  },

  // GROUP
  {
    id: 76,
    category: 'group',
    prompt: 'Who here would survive the longest in a zombie apocalypse, and why?',
  },
  {
    id: 77,
    category: 'group',
    prompt: 'Who here would be the best contestant on a reality show?',
  },
  {
    id: 78,
    category: 'group',
    prompt: 'Who here is most likely to accidentally become famous?',
  },
  {
    id: 79,
    category: 'group',
    prompt: 'Who here would be the worst person to share a hotel room with?',
  },
  {
    id: 80,
    category: 'group',
    prompt: 'Who here would you trust most to plan a vacation for everyone?',
  },
  {
    id: 81,
    category: 'group',
    prompt: 'Who here is most likely to survive being stranded on a deserted island?',
  },
  {
    id: 82,
    category: 'group',
    prompt: 'Who here would make the best game-show host?',
  },
  {
    id: 83,
    category: 'group',
    prompt: 'Who here is most likely to accidentally start an international incident?',
  },
  {
    id: 84,
    category: 'group',
    prompt: 'If this group formed a band, who would do what?',
  },
  {
    id: 85,
    category: 'group',
    prompt: 'If this group were a heist crew, what role would everyone have?',
  },

  // PERSONAL / CONNECTION
  {
    id: 86,
    category: 'personal',
    prompt: 'What is something you are looking forward to right now?',
  },
  {
    id: 87,
    category: 'personal',
    prompt: 'What hobby would you love to have more time for?',
  },
  {
    id: 88,
    category: 'personal',
    prompt: 'What is one small thing that reliably makes your day better?',
  },
  {
    id: 89,
    category: 'personal',
    prompt: 'Who taught you something you still use all the time?',
  },
  {
    id: 90,
    category: 'personal',
    prompt: 'What is something you are proud of that rarely comes up in conversation?',
  },
  {
    id: 91,
    category: 'personal',
    prompt: 'What is one place that immediately feels like home to you?',
  },
  {
    id: 92,
    category: 'personal',
    prompt: 'What is something you wish you had started doing earlier?',
  },
  {
    id: 93,
    category: 'personal',
    prompt: 'What is one thing you hope you are still doing when you are eighty?',
  },
  {
    id: 94,
    category: 'personal',
    prompt: 'What person has had a bigger impact on your life than they probably realize?',
  },
  {
    id: 95,
    category: 'personal',
    prompt: 'What is a compliment you still remember receiving?',
  },
  {
    id: 96,
    category: 'personal',
    prompt: 'What is something you have changed your mind about in the last few years?',
  },
  {
    id: 97,
    category: 'personal',
    prompt: 'What ordinary moment from your life do you think you will someday miss?',
  },
  {
    id: 98,
    category: 'personal',
    prompt: 'What is something you want to learn before the end of your life?',
  },
  {
    id: 99,
    category: 'personal',
    prompt: 'What is something somebody here does that you genuinely appreciate?',
  },
  {
    id: 100,
    category: 'personal',
    prompt: 'What would make tonight memorable enough that you would still talk about it a year from now?',
  },
];