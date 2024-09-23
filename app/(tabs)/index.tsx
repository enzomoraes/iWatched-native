import { Ionicons } from '@expo/vector-icons'; // Para ícones de curtir e comentar
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

// Definição do tipo de dados do feed
interface FeedItem {
  id: number;
  user: string;
  series: string;
  episode: string;
  comment: string;
  time: Date;
  avatar: string;
  comments: number;
  likes: number;
  shares: number;
}

const feedData: FeedItem[] = [
  {
    id: 1,
    user: 'John Doe',
    series: 'Breaking Bad',
    episode: 'S05E14',
    comment: 'Que episódio incrível! O desfecho está cada vez mais insano.',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
  {
    id: 2,
    user: 'Jane Smith',
    series: 'Game of Thrones',
    episode: 'S08E06',
    comment: 'Final decepcionante, mas gostei de alguns momentos.',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
  {
    id: 3,
    user: 'Lucas Pereira',
    series: 'Stranger Things',
    episode: 'S03E08',
    comment: 'Não consigo esperar pela próxima temporada!',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
  {
    id: 4,
    user: 'Emily Johnson',
    series: 'The Crown',
    episode: 'S04E10',
    comment: 'A atuação da Olivia Colman está impecável.',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
  {
    id: 5,
    user: 'Carlos Silva',
    series: 'The Mandalorian',
    episode: 'S02E08',
    comment: 'O melhor episódio da série até agora! Que reviravolta.',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
  {
    id: 6,
    user: 'Sophie Turner',
    series: 'The Witcher',
    episode: 'S01E08',
    comment: 'Geralt é incrível, mas a linha do tempo confunde um pouco.',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
  {
    id: 7,
    user: 'Miguel Oliveira',
    series: 'Money Heist',
    episode: 'S05E10',
    comment: 'O final me deixou sem palavras. Mal posso esperar por mais.',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
  {
    id: 8,
    user: 'Laura Martins',
    series: 'Lucifer',
    episode: 'S06E10',
    comment: 'O final foi satisfatório, mas vou sentir saudades do show.',
    comments: 6,
    likes: 33,
    shares: 2,
    time: new Date(),
    avatar: '',
  },
];

const Feed = () => {
  const renderItem = ({ item }: { item: FeedItem }) => (
    <View className='p-4 mb-8 rounded-b-lg shadow-md'>
      {/* Cabeçalho com foto de perfil, nome do usuário e hora */}
      <View className='flex-row items-center mb-2'>
        <Image
          /* source={{ uri: item.avatar }} */
          source={
            item.id % 2 === 0
              ? require('../../assets/images/female.png')
              : require('../../assets/images/male.png')
          }
          className='w-10 h-10 rounded-full mr-3'
        />
        <View className='flex-1 flex-row items-center justify-between'>
          <View>
            <Text className='text font-bold'>{item.user}</Text>
            <Text className='text-subtext text-xs'>
              {formatDate(item.time)}
            </Text>
          </View>
          <View>
            <Text className='text font-bold'>{item.series}</Text>
            <Text className='text-subtext font-bold text-right'>
              {item.episode}
            </Text>
          </View>
        </View>
      </View>

      {/* Comentário do usuário */}
      <Text className='text-text mb-4'>{item.comment}</Text>

      {/* Ícones de interação */}
      <View className='flex-row justify-left gap-4'>
        <TouchableOpacity className='flex-row items-center'>
          <Ionicons name='heart-outline' size={20} className='text-icon' />
          <Text className='ml-1 text-icon'>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row items-center'>
          <Ionicons name='chatbubble-outline' size={20} className='text-icon' />
          <Text className='ml-1 text-icon'>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex-row items-center'>
          <Ionicons name='share-outline' size={20} className='text-icon' />
          <Text className='ml-1 text-icon'>{item.shares}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className='flex-1 bg-background'>
      <View className='items-center justify-center p-4'>
        <Text className='text-lg font-bold'>Feed</Text>
      </View>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export default Feed;
