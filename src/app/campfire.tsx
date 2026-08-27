import { useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CampfireScreen() {
  const { campers, timeNeeded } = useLocalSearchParams<{
    campers: string;
    timeNeeded: string;
  }>();

  const displayTime =
    timeNeeded === 'KEEP IT BURNING'
      ? '∞'
      : timeNeeded?.replace(' MIN', '');

  const timeLabel =
    timeNeeded === 'KEEP IT BURNING'
      ? 'KEEP IT BURNING'
      : 'MINUTES';

  const drawFirstChallenge = () => {
    console.log('Draw first challenge');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>YOUR FIRE</Text>
        <Text style={styles.titleAccent}>IS LIT</Text>
      </View>

      <View style={styles.scene}>
        <Text style={styles.fire}>🔥</Text>
        <Text style={styles.sceneText}>PIXEL CAMPFIRE COMING NEXT</Text>
      </View>

      <View style={styles.sessionCard}>
        <View style={styles.sessionItem}>
          <Text style={styles.sessionIcon}>👥</Text>
          <Text style={styles.sessionValue}>{campers}</Text>
          <Text style={styles.sessionLabel}>CAMPERS</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.sessionItem}>
          <Text style={styles.sessionIcon}>◷</Text>
          <Text style={styles.sessionValue}>{displayTime}</Text>
          <Text style={styles.sessionLabel}>{timeLabel}</Text>
        </View>
      </View>

      <Pressable
        style={styles.challengeButton}
        onPress={drawFirstChallenge}
      >
        <Text style={styles.challengeButtonText}>
          🔥 DRAW THE FIRST CHALLENGE
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090806',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
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
    maxWidth: 600,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  fire: {
    fontSize: 130,
  },

  sceneText: {
    color: '#6D5848',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 12,
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
  },

  challengeButton: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#F15A24',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
  },

  challengeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
  },
});