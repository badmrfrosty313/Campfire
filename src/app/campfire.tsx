import { useLocalSearchParams } from 'expo-router';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

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
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>YOUR FIRE</Text>
          <Text style={styles.titleAccent}>IS LIT</Text>
        </View>

        <View style={styles.scene}>
          <Image
            source={require('../../assets/images/campfire-scene.png')}
            style={styles.campfireImage}
            resizeMode="contain"
          />
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

  challengeButton: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#F15A24',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
  },

  challengeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },
});