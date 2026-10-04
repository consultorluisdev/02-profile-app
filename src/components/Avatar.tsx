import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeColors } from '../types';

type Props = {
  initials: string;
  colors: ThemeColors;
};

export function Avatar({ initials, colors }: Props) {
  return (
    <View style={[styles.circle, { backgroundColor: colors.accent }]}>
      <Text style={[styles.initials, { color: colors.accentText }]}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
