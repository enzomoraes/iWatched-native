import { FlatList, Image, Text, View } from 'react-native';

const topSeries = [
  {
    id: '1',
    title: 'Breaking Bad',
    description: 'O professor que virou chefe do crime.',
    image: 'https://linkparaimagem.com/breakingbad.jpg',
  },
  {
    id: '2',
    title: 'Stranger Things',
    description: 'A aventura sobrenatural em Hawkins.',
    image: 'https://linkparaimagem.com/strangerthings.jpg',
  },
  {
    id: '3',
    title: 'The Crown',
    description: 'O drama por trás da família real.',
    image: 'https://linkparaimagem.com/thecrown.jpg',
  },
];

const recentActivity = [
  {
    id: '1',
    series: 'Game of Thrones',
    episode: 'S08E06',
    comment: 'Final um pouco decepcionante, mas com momentos épicos!',
  },
  {
    id: '2',
    series: 'The Mandalorian',
    episode: 'S02E08',
    comment: 'Esse episódio foi incrível!',
  },
  {
    id: '3',
    series: 'The flash',
    episode: 'S06E10',
    comment: 'Final satisfatório. Sentirei falta!',
  },
];

// Exemplo de série atual
const currentSeries = {
  title: 'The Witcher',
  episode: 'S03E05',
  image: 'https://linkparaimagem.com/thewitcher.jpg',
};

// Exemplo de horas assistidas e gênero predominante
const totalHoursWatched = 120; // Total de horas assistidas
const userPersona = 'Aventureiro'; // Frase gerada com base nos gêneros assistidos

const Profile = () => {
  const renderTopSeries = ({ item }: { item: (typeof topSeries)[0] }) => (
    <View className='flex-row items-center mb-4'>
      <Image
        source={{ uri: item.image }}
        className='w-16 h-16 rounded-lg mr-4'
      />
      <View>
        <Text className='font-bold text-lg'>{item.title}</Text>
        <Text className='text-gray-500'>{item.description}</Text>
      </View>
    </View>
  );

  const renderActivity = ({ item }: { item: (typeof recentActivity)[0] }) => (
    <View className='mb-4'>
      <Text className='text-lg font-semibold'>{item.series}</Text>
      <Text className='text-gray-600'>Episódio: {item.episode}</Text>
      <Text className='text-gray-700'>{item.comment}</Text>
    </View>
  );

  return (
    <View className='flex-1 bg-gray-100 p-4'>
      {/* Frase e Horas Assistidas */}
      <View className='mb-6'>
        <Text className='text-xl font-bold'>{userPersona}</Text>
        <Text className='text-gray-700'>
          Você já assistiu um total de {totalHoursWatched} horas de séries!
        </Text>
      </View>

      {/* Série Atual */}
      <View className='mb-6'>
        <Text className='text-xl font-bold mb-2'>Assistindo Atualmente</Text>
        <View className='flex-row items-center'>
          <Image
            source={{ uri: currentSeries.image }}
            className='w-20 h-20 rounded-lg mr-4'
          />
          <View>
            <Text className='font-bold text-lg'>{currentSeries.title}</Text>
            <Text className='text-gray-600'>
              Episódio: {currentSeries.episode}
            </Text>
          </View>
        </View>
      </View>

      {/* Top 3 Séries */}
      <Text className='text-xl font-bold mb-2'>Top 3 Séries</Text>
      <FlatList
        data={topSeries}
        renderItem={renderTopSeries}
        keyExtractor={item => item.id}
      />

      {/* Atividades Recentes */}
      <Text className='text-xl font-bold mt-6 mb-2'>Atividades Recentes</Text>
      <FlatList
        data={recentActivity}
        renderItem={renderActivity}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Profile;
