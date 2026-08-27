import type { CampfireQuestion } from '../data/questions';

export const DISCUSSION_SECONDS = 2 * 60;

export function shuffleQuestions(
  items: CampfireQuestion[],
  random: () => number = Math.random,
) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

export function getSessionSeconds(
  timeNeeded: string | undefined,
) {
  if (timeNeeded === '5 MIN') {
    return 5 * 60;
  }

  if (timeNeeded === '15 MIN') {
    return 15 * 60;
  }

  if (timeNeeded === '30 MIN') {
    return 30 * 60;
  }

  return null;
}

export function getDiscussionLength(
  sessionRemaining: number | null,
  normalLength = DISCUSSION_SECONDS,
) {
  if (
    sessionRemaining !== null &&
    sessionRemaining < normalLength
  ) {
    return Math.max(sessionRemaining, 0);
  }

  return normalLength;
}

export function getPhaseAfterDiscussion(
  sessionRemaining: number | null,
): 'success' | 'finished' {
  if (
    sessionRemaining !== null &&
    sessionRemaining <= 0
  ) {
    return 'finished';
  }

  return 'success';
}

export function canDrawNextQuestion(
  sessionRemaining: number | null,
  currentIndex: number,
  deckLength: number,
) {
  if (
    sessionRemaining !== null &&
    sessionRemaining <= 0
  ) {
    return false;
  }

  return currentIndex < deckLength - 1;
}

export function formatTime(seconds: number) {
  const safeSeconds = Math.max(seconds, 0);
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
}
