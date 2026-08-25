import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function CreateCampfireScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>START A CAMPFIRE</Text>

      <Text style={styles.title}>
        Who’s gathering around?
      </Text>

      <Text style={styles.subtitle}>
        We’ll create a temporary room for your group.
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.back()}
      >
        <Text style={styles.primaryButtonText}>BACK FOR NOW</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12100E',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  eyebrow: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#E85D24',
    marginBottom: 14,
  },

  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FFF4E6',
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 26,
    color: '#C9B9A8',
    marginBottom: 40,
  },

  primaryButton: {
    backgroundColor: '#E85D24',
    paddingVertical: 18,
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