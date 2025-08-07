import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

const TIME_SECTIONS = [
  { label: 'Morning', subtitle: '6am – 12pm', amount: '$532.64' },
  { label: 'Afternoon', subtitle: '12pm – 6pm', amount: '$842.92' },
  { label: 'Evening', subtitle: '6pm – 12am', amount: '$421.17' },
  { label: 'Night', subtitle: '12am – 6am', amount: '$97.05' },
];

export default function TimeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E7EFE5', dark: '#18231C' }}
      headerImage={<IconSymbol size={300} name="clock.fill" color="#7AA37A" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Time</ThemedText>
        <ThemedText type="subtitle">Last 7 days</ThemedText>
      </ThemedView>

      <View style={styles.list}>
        {TIME_SECTIONS.map((item) => (
          <ThemedView style={styles.row} key={item.label}>
            <View style={styles.rowLeft}>
              <ThemedText type="defaultSemiBold" style={styles.rowTitle}>
                {item.label}
              </ThemedText>
              <ThemedText style={styles.rowSubtitle}>{item.subtitle}</ThemedText>
            </View>
            <ThemedText type="title" style={styles.rowAmount}>
              {item.amount}
            </ThemedText>
          </ThemedView>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -80,
    left: -30,
    position: 'absolute',
  },
  titleContainer: {
    gap: 2,
    marginBottom: 8,
  },
  list: {
    marginTop: 16,
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: 'rgba(127, 140, 141, 0.08)',
  },
  rowLeft: {
    flexDirection: 'column',
  },
  rowTitle: {
    marginBottom: 2,
  },
  rowSubtitle: {
    opacity: 0.7,
  },
  rowAmount: {
    marginLeft: 16,
  },
});