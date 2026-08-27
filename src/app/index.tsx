import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push('/create')}
      >
        <Text style={styles.primaryButtonText}>
          START A CAMPFIRE
        </Text>
      </Pressable>
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

  primaryButton: {
    width: '100%',
    maxWidth: 420,
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
});