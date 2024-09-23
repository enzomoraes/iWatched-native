import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View className='flex-row justify-between items-center bg-background px-4 py-2'>
      <Text className='text text-lg font-bold'>iWatched</Text>

      <TouchableOpacity>
        <Ionicons name='notifications-outline' size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
