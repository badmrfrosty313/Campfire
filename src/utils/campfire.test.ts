import { describe, expect, it } from 'vitest';
import { questions } from '../data/questions';
import {
  DISCUSSION_SECONDS,
  canDrawNextQuestion,
  formatTime,
  getDiscussionLength,
  getPhaseAfterDiscussion,
  getSessionSeconds,
  shuffleQuestions,
} from './campfire';

describe('Campfire session logic', () => {
  it('maps session choices to the correct number of seconds', () => {
    expect(getSessionSeconds('5 MIN')).toBe(300);
    expect(getSessionSeconds('15 MIN')).toBe(900);
    expect(getSessionSeconds('30 MIN')).toBe(1800);
    expect(getSessionSeconds('KEEP IT BURNING')).toBeNull();
  });

  it('formats countdown time correctly', () => {
    expect(formatTime(120)).toBe('2:00');
    expect(formatTime(65)).toBe('1:05');
    expect(formatTime(5)).toBe('0:05');
    expect(formatTime(0)).toBe('0:00');
    expect(formatTime(-5)).toBe('0:00');
  });

  it('uses a normal two-minute discussion when enough session time remains', () => {
    expect(getDiscussionLength(300)).toBe(DISCUSSION_SECONDS);
    expect(getDiscussionLength(null)).toBe(DISCUSSION_SECONDS);
  });

  it('shortens the final discussion to the remaining session time', () => {
    expect(getDiscussionLength(47)).toBe(47);
    expect(getDiscussionLength(0)).toBe(0);
  });

  it('moves to success when a discussion ends but the Campfire still has time', () => {
    expect(getPhaseAfterDiscussion(180)).toBe('success');
    expect(getPhaseAfterDiscussion(null)).toBe('success');
  });

  it('finishes the Campfire when the overall timer reaches zero', () => {
    expect(getPhaseAfterDiscussion(0)).toBe('finished');
  });

  it('allows another question only while time and deck entries remain', () => {
    expect(canDrawNextQuestion(120, 0, 100)).toBe(true);
    expect(canDrawNextQuestion(null, 98, 100)).toBe(true);
    expect(canDrawNextQuestion(0, 0, 100)).toBe(false);
    expect(canDrawNextQuestion(120, 99, 100)).toBe(false);
  });

  it('shuffles without changing the original question array', () => {
    const originalIds = questions.map((question) => question.id);
    const shuffled = shuffleQuestions(questions, () => 0);

    expect(questions.map((question) => question.id)).toEqual(originalIds);
    expect(shuffled).not.toBe(questions);
    expect(shuffled).toHaveLength(questions.length);
    expect(new Set(shuffled.map((question) => question.id)).size).toBe(
      questions.length,
    );
  });
});
