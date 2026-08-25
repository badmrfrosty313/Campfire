import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.firePlaceholder}>
        <Text style={styles.fireEmoji}>🔥</Text>
      </View>

      <Text style={styles.title}>CAMPFIRE</Text>

      <Text style={styles.subtitle}>
        Less scrolling. More stories.
      </Text>

      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push('/create')}
        >
          <Text style={styles.primaryButtonText}>
            START A CAMPFIRE
          </Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>
            JOIN A CAMPFIRE
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12100E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  firePlaceholder: {
    marginBottom: 18,
  },

  fireEmoji: {
    fontSize: 72,
  },

  title: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 4,
    color: '#FFF4E6',
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 48,
    fontSize: 18,
    color: '#C9B9A8',
    textAlign: 'center',
  },

  buttonGroup: {
    width: '100%',
    maxWidth: 420,
    gap: 16,
  },

  primaryButton: {
    backgroundColor: '#E85D24',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 1,
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: '#E85D24',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 14,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#FFB36B',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 1,
  },
});