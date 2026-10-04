import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Profile, ThemeColors } from '../types';
import { Avatar } from './Avatar';

type Props = {
  profile: Profile;
  colors: ThemeColors;
};

export function ProfileHeader({ profile, colors }: Props) {
  return (
    <View style={styles.wrap}>
      <Avatar initials={profile.initials} colors={colors} />
      <Text style={[styles.name, { color: colors.text }]}>{profile.name}</Text>
      <Text style={[styles.role, { color: colors.textSecondary }]}>{profile.role}</Text>
      <Text style={[styles.location, { color: colors.textSecondary }]}>
        {profile.location}
      </Text>
      <Text style={[styles.bio, { color: colors.textSecondary }]}>{profile.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  name: {
    marginTop: 16,
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  role: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: '500',
  },
  location: {
    marginTop: 2,
    fontSize: 14,
  },
  bio: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});
