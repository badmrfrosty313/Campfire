import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const camperOptions = ['2', '3–4', '5–8', '9+'];
const timeOptions = ['5 MIN', '15 MIN', '30 MIN', 'KEEP IT BURNING'];

export default function CreateCampfireScreen() {
  const [campers, setCampers] = useState<string | null>(null);
  const [timeNeeded, setTimeNeeded] = useState<string | null>(null);

  const canContinue = campers !== null && timeNeeded !== null;

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>START A CAMPFIRE</Text>

      <Text style={styles.title}>Who’s gathering around?</Text>

      <Text style={styles.sectionLabel}>Campers</Text>

      <View style={styles.optionGrid}>
        {camperOptions.map((option) => {
          const selected = campers === option;

          return (
            <Pressable
              key={option}
              style={[
                styles.optionButton,
                selected && styles.optionButtonSelected,
              ]}
              onPress={() => setCampers(option)}
            >
              <Text
                style={[
                  styles.optionText,
                  selected && styles.optionTextSelected,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.sectionLabel}>How long have you got?</Text>

      <View style={styles.optionGrid}>
        {timeOptions.map((option) => {
          const selected = timeNeeded === option;

          return (
            <Pressable
              key={option}
              style={[
                styles.optionButton,
                selected && styles.optionButtonSelected,
              ]}
              onPress={() => setTimeNeeded(option)}
            >
              <Text
                style={[
                  styles.optionText,
                  selected && styles.optionTextSelected,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        disabled={!canContinue}
        style={[
          styles.primaryButton,
          !canContinue && styles.primaryButtonDisabled,
        ]}
        onPress={() => {
          console.log({
            campers,
            timeNeeded,
          });
        }}
      >
        <Text style={styles.primaryButtonText}>LIGHT THE FIRE 🔥</Text>
      </Pressable>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>BACK</Text>
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
    marginBottom: 36,
  },

  sectionLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFF4E6',
    marginBottom: 14,
  },

  optionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },

  optionButton: {
    minWidth: 120,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#5D4637',
    alignItems: 'center',
  },

  optionButtonSelected: {
    backgroundColor: '#E85D24',
    borderColor: '#E85D24',
  },

  optionText: {
    color: '#C9B9A8',
    fontSize: 16,
    fontWeight: '800',
  },

  optionTextSelected: {
    color: '#FFFFFF',
  },

  primaryButton: {
    backgroundColor: '#E85D24',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },

  primaryButtonDisabled: {
    opacity: 0.35,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 1,
  },

  backButton: {
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 10,
  },

  backButtonText: {
    color: '#C9B9A8',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
  },
});