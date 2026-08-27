import { describe, expect, it } from 'vitest';
import { questions } from './questions';

describe('Campfire question deck', () => {
  it('contains exactly 100 questions', () => {
    expect(questions).toHaveLength(100);
  });

  it('has unique question IDs', () => {
    const ids = questions.map((question) => question.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has unique prompts', () => {
    const prompts = questions.map((question) =>
      question.prompt.trim().toLowerCase(),
    );

    expect(new Set(prompts).size).toBe(prompts.length);
  });

  it('has no blank prompts', () => {
    expect(
      questions.every(
        (question) => question.prompt.trim().length > 0,
      ),
    ).toBe(true);
  });

  it('only uses supported categories', () => {
    const categories = new Set([
      'funny',
      'story',
      'hypothetical',
      'opinion',
      'group',
      'personal',
    ]);

    expect(
      questions.every((question) =>
        categories.has(question.category),
      ),
    ).toBe(true);
  });
});
