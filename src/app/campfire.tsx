import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    questions,
    type CampfireQuestion,
} from '../data/questions';

const DISCUSSION_SECONDS = 2 * 60;

type CampfirePhase =
  | 'intro'
  | 'question'
  | 'discussion'
  | 'failed'
  | 'success'
  | 'finished';

function shuffleQuestions(items: CampfireQuestion[]) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}

function getSessionSeconds(timeNeeded: string | undefined) {
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

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
}

export default function CampfireScreen() {
  const { campers, timeNeeded } = useLocalSearchParams<{
    campers: string;
    timeNeeded: string;
  }>();

  /*
   * Shuffle the complete question deck once when this
   * Campfire session is created.
   *
   * The deck will not reshuffle every time React renders.
   */
  const [questionDeck] = useState(() =>
    shuffleQuestions(questions),
  );

  const [currentIndex, setCurrentIndex] = useState(-1);

  const [phase, setPhase] =
    useState<CampfirePhase>('intro');

  const [sessionRemaining, setSessionRemaining] =
    useState<number | null>(() =>
      getSessionSeconds(timeNeeded),
    );

  const [discussionRemaining, setDiscussionRemaining] =
    useState(DISCUSSION_SECONDS);

  const [discussionLength, setDiscussionLength] =
    useState(DISCUSSION_SECONDS);

  const currentQuestion =
    currentIndex >= 0
      ? questionDeck[currentIndex]
      : null;

  const discussionElapsed =
    discussionLength - discussionRemaining;

  const displayTime =
    timeNeeded === 'KEEP IT BURNING'
      ? '∞'
      : timeNeeded?.replace(' MIN', '');

  const timeLabel =
    timeNeeded === 'KEEP IT BURNING'
      ? 'KEEP IT BURNING'
      : 'MINUTES';

  useEffect(() => {
    if (phase !== 'discussion') {
      return;
    }

    if (discussionRemaining <= 0) {
      if (
        sessionRemaining !== null &&
        sessionRemaining <= 0
      ) {
        setPhase('finished');
      } else {
        setPhase('success');
      }

      return;
    }

    const timer = setInterval(() => {
      setDiscussionRemaining((current) =>
        Math.max(current - 1, 0),
      );

      setSessionRemaining((current) => {
        if (current === null) {
          return null;
        }

        return Math.max(current - 1, 0);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [
    phase,
    discussionRemaining,
    sessionRemaining,
  ]);

  const drawFirstQuestion = () => {
    setCurrentIndex(0);
    setPhase('question');
  };

  const startDiscussion = () => {
    let discussionTime = DISCUSSION_SECONDS;

    /*
     * If there is less time left in the overall Campfire
     * than a normal discussion round, use only the
     * remaining session time.
     */
    if (
      sessionRemaining !== null &&
      sessionRemaining < DISCUSSION_SECONDS
    ) {
      discussionTime = sessionRemaining;
    }

    setDiscussionLength(discussionTime);
    setDiscussionRemaining(discussionTime);
    setPhase('discussion');
  };

  const failDiscussion = () => {
    setPhase('failed');
  };

  const retryQuestion = () => {
    startDiscussion();
  };

  const drawNextQuestion = () => {
    if (
      sessionRemaining !== null &&
      sessionRemaining <= 0
    ) {
      setPhase('finished');
      return;
    }

    if (currentIndex >= questionDeck.length - 1) {
      setPhase('finished');
      return;
    }

    setCurrentIndex((current) => current + 1);
    setPhase('question');
  };

  const endCampfire = () => {
    setPhase('finished');
  };

  const startAnotherCampfire = () => {
    router.replace('/');
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEnabled={phase !== 'discussion'}
    >
      <View style={styles.content}>
        {phase === 'intro' && (
          <>
            <View style={styles.header}>
              <Text style={styles.title}>YOUR FIRE</Text>

              <Text style={styles.titleAccent}>
                IS LIT
              </Text>
            </View>

            <View style={styles.scene}>
              <Image
                source={require(
                  '../../assets/images/campfire-scene.png'
                )}
                style={styles.campfireImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.sessionCard}>
              <View style={styles.sessionItem}>
                <Text style={styles.sessionIcon}>
                  👥
                </Text>

                <Text style={styles.sessionValue}>
                  {campers}
                </Text>

                <Text style={styles.sessionLabel}>
                  CAMPERS
                </Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.sessionItem}>
                <Text style={styles.sessionIcon}>
                  ◷
                </Text>

                <Text style={styles.sessionValue}>
                  {displayTime}
                </Text>

                <Text style={styles.sessionLabel}>
                  {timeLabel}
                </Text>
              </View>
            </View>

            <Pressable
              style={styles.primaryButton}
              onPress={drawFirstQuestion}
            >
              <Text style={styles.primaryButtonText}>
                🔥 DRAW THE FIRST QUESTION
              </Text>
            </Pressable>
          </>
        )}

        {phase === 'question' && currentQuestion && (
          <>
            <Text style={styles.questionEyebrow}>
              CAMPFIRE QUESTION
            </Text>

            <View style={styles.questionCard}>
              <Text style={styles.category}>
                {currentQuestion.category.toUpperCase()}
              </Text>

              <Text style={styles.questionText}>
                {currentQuestion.prompt}
              </Text>
            </View>

            <Text style={styles.instructionText}>
              Read it together.
            </Text>

            <Pressable
              style={styles.primaryButton}
              onPress={startDiscussion}
            >
              <Text style={styles.primaryButtonText}>
                PUT THE PHONE DOWN 🔥
              </Text>
            </Pressable>
          </>
        )}

        {phase === 'discussion' && (
          <Pressable
            style={styles.phoneDownScreen}
            onPress={failDiscussion}
          >
            <Text style={styles.phoneDownFire}>🔥</Text>

            <Text style={styles.discussionTimer}>
              {formatTime(discussionRemaining)}
            </Text>

            <Text style={styles.phoneDownTitle}>
              THE FIRE IS BURNING
            </Text>

            <Text style={styles.phoneDownMessage}>
              Put me down.
            </Text>

            {sessionRemaining !== null && (
              <Text style={styles.sessionRemainingText}>
                {formatTime(sessionRemaining)} left in this
                Campfire
              </Text>
            )}

            <Text style={styles.warningText}>
              Touch the screen and the round ends.
            </Text>
          </Pressable>
        )}

        {phase === 'failed' && (
          <>
            <Text style={styles.failureIcon}>💀</Text>

            <Text style={styles.failureEyebrow}>
              CAMPFIRE FAILED
            </Text>

            <Text style={styles.failureTitle}>
              THE RECTANGLE WON
            </Text>

            <Text style={styles.failureText}>
              You lasted {formatTime(discussionElapsed)}.
            </Text>

            <Text style={styles.failureShame}>
              Incredible restraint.
            </Text>

            <Pressable
              style={styles.primaryButton}
              onPress={retryQuestion}
            >
              <Text style={styles.primaryButtonText}>
                TRY AGAIN
              </Text>
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={drawNextQuestion}
            >
              <Text style={styles.secondaryButtonText}>
                DRAW A NEW QUESTION
              </Text>
            </Pressable>
          </>
        )}

        {phase === 'success' && (
          <>
            <Text style={styles.successFire}>🔥</Text>

            <Text style={styles.successEyebrow}>
              CAMPFIRE COMPLETE
            </Text>

            <Text style={styles.successTitle}>
              NICE. YOU MADE IT.
            </Text>

            <Text style={styles.successText}>
              You made it {formatTime(discussionLength)} without
              feeding the rectangle.
            </Text>

            <Text style={styles.successPrompt}>
              Keep the fire going?
            </Text>

            <Pressable
              style={styles.primaryButton}
              onPress={drawNextQuestion}
            >
              <Text style={styles.primaryButtonText}>
                🔥 DRAW ANOTHER QUESTION
              </Text>
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={endCampfire}
            >
              <Text style={styles.secondaryButtonText}>
                LET IT BURN OUT
              </Text>
            </Pressable>
          </>
        )}

        {phase === 'finished' && (
          <>
            <Text style={styles.finishedEyebrow}>
              CAMPFIRE COMPLETE
            </Text>

            <Text style={styles.finishedFire}>🔥</Text>

            <Text style={styles.finishedTitle}>
              THE FIRE BURNED DOWN
            </Text>

            <Text style={styles.finishedText}>
              You spent that time with the people around
              you instead of staring at your phone.
            </Text>

            <Pressable
              style={styles.primaryButton}
              onPress={startAnotherCampfire}
            >
              <Text style={styles.primaryButtonText}>
                START ANOTHER CAMPFIRE
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#090806',
  },

  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  content: {
    width: '100%',
    maxWidth: 760,
    alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    color: '#FFF4E6',
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 3,
  },

  titleAccent: {
    color: '#F15A24',
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 3,
  },

  scene: {
    width: '100%',
    height: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },

  campfireImage: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },

  sessionCard: {
    width: '100%',
    maxWidth: 600,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#4D392C',
    borderRadius: 18,
    paddingVertical: 18,
    marginBottom: 22,
  },

  sessionItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  divider: {
    width: 1,
    backgroundColor: '#4D392C',
  },

  sessionIcon: {
    fontSize: 26,
    marginBottom: 4,
  },

  sessionValue: {
    color: '#FFF4E6',
    fontSize: 30,
    fontWeight: '900',
  },

  sessionLabel: {
    color: '#A98C75',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 4,
    textAlign: 'center',
  },

  primaryButton: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#F15A24',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },

  secondaryButton: {
    width: '100%',
    maxWidth: 600,
    borderWidth: 2,
    borderColor: '#F15A24',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 14,
  },

  secondaryButtonText: {
    color: '#F6A56F',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },

  questionEyebrow: {
    width: '100%',
    maxWidth: 600,
    color: '#F15A24',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 18,
  },

  questionCard: {
    width: '100%',
    maxWidth: 600,
    minHeight: 300,
    borderWidth: 2,
    borderColor: '#4D392C',
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 36,
    justifyContent: 'center',
    marginBottom: 24,
    backgroundColor: '#12100E',
  },

  category: {
    color: '#F15A24',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 18,
  },

  questionText: {
    color: '#FFF4E6',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 42,
  },

  instructionText: {
    color: '#A98C75',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },

  phoneDownScreen: {
    width: '100%',
    minHeight: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },

  phoneDownFire: {
    fontSize: 54,
    marginBottom: 20,
  },

  discussionTimer: {
    color: '#FFF4E6',
    fontSize: 72,
    fontWeight: '900',
    letterSpacing: 4,
    marginBottom: 18,
  },

  phoneDownTitle: {
    color: '#F15A24',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
    textAlign: 'center',
  },

  phoneDownMessage: {
    color: '#6D5848',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 28,
  },

  sessionRemainingText: {
    color: '#4D392C',
    fontSize: 13,
    fontWeight: '700',
  },

  warningText: {
    color: '#352820',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 24,
  },

  failureIcon: {
    fontSize: 72,
    marginBottom: 20,
  },

  failureEyebrow: {
    color: '#F15A24',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 16,
  },

  failureTitle: {
    color: '#FFF4E6',
    fontSize: 42,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 18,
  },

  failureText: {
    color: '#A98C75',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },

  failureShame: {
    color: '#6D5848',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 32,
  },

  successFire: {
    fontSize: 72,
    marginBottom: 18,
  },

  successEyebrow: {
    color: '#F15A24',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 16,
  },

  successTitle: {
    color: '#FFF4E6',
    fontSize: 42,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 18,
  },

  successText: {
    color: '#A98C75',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },

  successPrompt: {
    color: '#6D5848',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 32,
  },

  finishedEyebrow: {
    color: '#F15A24',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 20,
  },

  finishedFire: {
    fontSize: 72,
    marginBottom: 18,
  },

  finishedTitle: {
    color: '#FFF4E6',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
  },

  finishedText: {
    width: '100%',
    maxWidth: 600,
    color: '#A98C75',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32,
  },
});