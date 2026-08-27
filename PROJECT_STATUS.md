# Campfire Project Status

## Current Milestone

**Campfire v0.1.0 — MVP complete**

This file exists so the project can be reopened later without reconstructing the development history from memory.

---

## Product Scope

Campfire is currently a **single-device social app** whose purpose is to get a group talking and then get the phone out of the way.

The MVP intentionally does **not** include multiplayer.

Multiplayer was considered early, but removed from v0.1 because a one-device experience:

- validates the core idea faster
- removes backend and realtime complexity
- eliminates ongoing infrastructure cost for the MVP
- makes the app deployable much sooner
- keeps the product focused enough to finish

Do not re-add multiplayer unless beginning a deliberate post-MVP version.

---

## Current User Flow

Home
→ Start a Campfire
→ Select campers
→ Select session duration
→ Fire-lit intro
→ Draw shuffled question
→ Read question
→ Put phone down
→ Discussion timer
→ Success OR touch-triggered failure
→ Retry / draw another / end
→ Session complete

Available session durations:

- 5 minutes
- 15 minutes
- 30 minutes
- Keep It Burning (no overall session limit)

Normal discussion round duration: **2 minutes**.

If less than two minutes remain in a timed Campfire, the final discussion uses only the remaining session time.

---

## Question Deck

Location: `src/data/questions.ts`

Current deck size: **100 questions**.

Categories:

- funny
- story
- hypothetical
- opinion
- group
- personal

The deck is shuffled once at the start of a Campfire using Fisher-Yates and then consumed sequentially, preventing repeats during a normal session.

---

## Important Files

### `src/app/index.tsx`
Home screen. Current MVP has one primary action: **Start a Campfire**. The old Join a Campfire option was removed until multiplayer exists.

### `src/app/create.tsx`
Session configuration screen. Selects campers and overall session duration. This screen was updated to be scroll-safe on shorter phones.

### `src/app/campfire.tsx`
Main Campfire experience. Handles UI phases:

- intro
- question
- discussion
- failed
- success
- finished

The discussion screen intentionally hides the question and becomes a minimal timer so users do not keep looking at the phone.

Touching the discussion screen triggers the failure state.

### `src/utils/campfire.ts`
Core session/business logic extracted from the UI so it can be tested independently.

### `src/data/questions.test.ts`
Validates the question deck.

### `src/utils/campfire.test.ts`
Validates core Campfire rules and session logic.

### `assets/images/campfire-scene.png`
Pixel-art Campfire scene used on the fire-lit session screen.

---

## Testing Checkpoint

Testing framework: **Vitest**

Run:

```bash
npm test
```

Last verified result:

```text
Test Files  2 passed (2)
Tests       13 passed (13)
```

The tests cover:

- exactly 100 questions
- unique question IDs
- unique prompts
- no blank prompts
- valid categories
- session duration conversion
- timer formatting
- discussion length clipping
- session completion logic
- next-question eligibility
- shuffle behavior

If future work breaks these tests, fix the behavior or intentionally update the test contract before considering the change complete.

---

## Responsive QA Completed

A simulated layout review was performed for common mobile sizes, including small iPhone-style and Android-style viewports.

Two risks were found and fixed:

1. `create.tsx` could become cramped on short displays → converted to a scroll-safe layout.
2. Discussion view used a hard `minHeight: 600` → changed to adapt to the device window height.

Automated tests remained green after both changes.

---

## Known Non-Goals / Deferred Work

These are **not missing MVP requirements**. They belong to a future version:

- multiplayer
- Join a Campfire
- Supabase/backend
- accounts/authentication
- cloud saves
- realtime rooms
- secret missions/player roles
- app analytics
- native haptics/audio cues
- screen keep-awake behavior
- dedicated Android/iOS development build
- App Store / Google Play deployment

Do not let these turn a completed MVP back into an endless active project unless there is a clear reason to begin v0.2 or v1.0.

---

## Portfolio Positioning

Campfire is **Portfolio Project #1 / Creation #1**.

Useful interview story:

- Started with a larger multiplayer concept.
- Identified that multiplayer did not need to exist to validate the core product idea.
- Reduced scope to a single-device architecture.
- Built the full user loop in React Native / Expo / TypeScript.
- Separated testable business logic from screen components.
- Added automated tests.
- Performed simulated mobile QA and fixed responsive issues.
- Froze a finished MVP rather than endlessly expanding scope.

Suggested short description:

> Campfire is a React Native/Expo social app designed to encourage in-person conversation by giving groups randomized prompts and then asking them to put the phone down for timed discussion rounds. The MVP includes shuffled local content, session state management, success/failure states, responsive layouts, and automated Vitest coverage.

---

## When Returning to This Project

Before changing anything:

```bash
git pull
npm install
npm test
```

Confirm all tests are green.

Then decide whether the work is:

- a bug fix to the frozen MVP, or
- the intentional beginning of a new Campfire version.

Do not casually expand v0.1 scope.
