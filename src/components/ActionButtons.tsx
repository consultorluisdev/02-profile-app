import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemeColors } from '../types';

type Props = {
  following: boolean;
  colors: ThemeColors;
  onFollow: () => void;
  onMessage: () => void;
};

export function ActionButtons({ following, colors, onFollow, onMessage }: Props) {
  return (
    <View style={styles.row}>
      <Pressable
        onPress={onFollow}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: following ? colors.surface : colors.accent,
            borderWidth: following ? 1 : 0,
            borderColor: colors.border,
            opacity: pressed ? 0.8 : 1,
          },
        ]}
      >
        <Text style={[styles.label, { color: following ? colors.text : colors.accentText }]}>
          {following ? 'Seguindo' : 'Seguir'}
        </Text>
      </Pressable>

      <Pressable
        onPress={onMessage}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.border,
            opacity: pressed ? 0.8 : 1,
          },
        ]}
      >
        <Text style={[styles.label, { color: colors.text }]}>Mensagem</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 400,
    gap: 12,
    marginTop: 20,
  },
  button: {
    flex: 1,
    minHeight: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});
