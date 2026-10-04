import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeColors } from '../types';

type Stat = {
  label: string;
  value: number;
};

type Props = {
  stats: Stat[];
  colors: ThemeColors;
};

export function StatRow({ stats, colors }: Props) {
  return (
    <View style={[styles.row, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {stats.map((stat, index) => (
        <View
          key={stat.label}
          style={[styles.item, index > 0 && { borderLeftWidth: 1, borderLeftColor: colors.border }]}
        >
          <Text style={[styles.value, { color: colors.text }]}>{stat.value}</Text>
          <Text style={[styles.label, { color: colors.textSecondary }]}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 400,
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 24,
    overflow: 'hidden',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
  },
  label: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
  },
});
