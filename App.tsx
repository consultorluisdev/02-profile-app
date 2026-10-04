import { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { ActionButtons } from './src/components/ActionButtons';
import { ProfileHeader } from './src/components/ProfileHeader';
import { StatRow } from './src/components/StatRow';
import { labProfile } from './src/constants/profile';
import { darkColors, lightColors } from './src/constants/theme';
import { ThemeColors } from './src/types';

export default function App() {
  const colorScheme = useColorScheme();
  const colors: ThemeColors = colorScheme === 'dark' ? darkColors : lightColors;
  const [following, setFollowing] = useState(false);
  const [messageHint, setMessageHint] = useState('Toque em um botao para testar');

  const stats = [
    { label: 'Projetos', value: labProfile.stats.projects },
    { label: 'Seguidores', value: labProfile.stats.followers },
    { label: 'Seguindo', value: labProfile.stats.following },
  ];

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <Text style={[styles.kicker, { color: colors.textSecondary }]}>
          LAB React Native
        </Text>
        <Text style={[styles.project, { color: colors.textSecondary }]}>
          Projeto 02 — Profile App
        </Text>

        <ProfileHeader profile={labProfile} colors={colors} />

        <StatRow stats={stats} colors={colors} />

        <ActionButtons
          following={following}
          colors={colors}
          onFollow={() => {
            setFollowing((value) => !value);
            setMessageHint(
              following ? 'Voce deixou de seguir' : 'Agora voce esta seguindo',
            );
          }}
          onMessage={() =>
            setMessageHint('Mensagem: estado atualizado via props + useState')
          }
        />

        <Text style={[styles.hint, { color: colors.textSecondary }]}>{messageHint}</Text>

        <Text style={[styles.platform, { color: colors.textSecondary }]}>
          Plataforma: {Platform.OS === 'ios' ? 'iOS' : Platform.OS}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  kicker: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  project: {
    marginTop: 4,
    marginBottom: 24,
    fontSize: 14,
    fontWeight: '500',
  },
  hint: {
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  platform: {
    marginTop: 'auto',
    fontSize: 13,
  },
});
