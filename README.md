# 🔥 Campfire

**Less scrolling. More stories.**

Campfire is a cross-platform social app designed to get people off their phones and interacting with the people around them.

The phone starts the experience.

Then the goal is to put it down.

---

## MVP Status

✅ **v0.1.0 MVP complete**

The current version is intentionally single-device. Multiplayer was removed from the MVP to keep the product simple, inexpensive, and finishable.

The complete MVP flow is:

1. Start a Campfire.
2. Choose the number of campers.
3. Choose a session length: 5, 15, 30 minutes, or Keep It Burning.
4. Draw a shuffled conversation question.
5. Read it together.
6. Put the phone down and begin the discussion timer.
7. Touching the phone during the discussion triggers a failure state.
8. Completing the discussion triggers a success state.
9. Draw another question or let the fire burn out.
10. Continue until the selected Campfire session ends.

---

## What Is Implemented

- React Native + Expo application
- Expo Router navigation
- Single-device Campfire session setup
- Camper-count selection
- Multiple session-length options
- 100 built-in conversation questions
- Fisher-Yates question shuffling
- No repeated questions within a session until the deck is exhausted
- Timed discussion rounds
- Overall Campfire session timer
- Phone-touch failure state
- Discussion success state
- Session-complete state
- Responsive and scroll-safe mobile layouts
- Small-screen-safe discussion timer layout
- Pixel-art Campfire scene
- Automated unit testing with Vitest
- 13 passing automated tests covering question integrity and core session logic

---

## Tech Stack

- **React Native**
- **Expo SDK 57**
- **TypeScript**
- **Expo Router**
- **Vitest**

The MVP deliberately does **not** require a backend, accounts, authentication, realtime synchronization, or cloud infrastructure.

---

## Architecture

The application keeps the UI and core Campfire rules separated.

`src/app/`

Contains the Expo Router screens:

- `index.tsx` — home screen
- `create.tsx` — Campfire setup
- `campfire.tsx` — active Campfire experience and state transitions

`src/data/questions.ts`

Contains the 100-question local Campfire deck.

`src/utils/campfire.ts`

Contains testable Campfire business logic including:

- question shuffling
- session-duration conversion
- discussion-duration calculation
- timer formatting
- post-discussion state decisions
- next-question eligibility

Tests live beside the code they validate.

---

## Testing

Install dependencies:

```bash
npm install
```

Run the automated test suite:

```bash
npm test
```

Current checkpoint:

```text
Test Files  2 passed
Tests       13 passed
```

---

## Running Locally

Start Expo:

```bash
npx expo start
```

The MVP has been developed and tested primarily through Expo/web development tooling. A dedicated native development build is a future deployment step, not part of the frozen MVP scope.

---

## Design Philosophy

Campfire has one unusual design constraint:

> **The better the app works, the less you use it.**

Every feature should encourage interaction between people rather than interaction with the screen.

No endless feed. No account grind. No reason to stay glued to the device.

Just enough technology to start something in the real world.

---

## Future Ideas — Not MVP Scope

These are intentionally deferred rather than unfinished requirements:

- Multiplayer / Join a Campfire
- Temporary rooms and group lobbies
- Realtime synchronization
- Player roles or secret missions
- Additional challenge types
- Haptics or audio cues
- Native development builds
- App Store / Google Play deployment
- Analytics

The MVP should remain frozen unless a future version is intentionally started.

---

## Portfolio Note

Campfire is the first completed portfolio project from this development series.

The key engineering story is not just the code: the original concept included multiplayer, but the scope was deliberately reduced to a single-device experience so the core product could be completed, tested, and frozen as a working MVP.
