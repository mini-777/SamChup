import React from 'react';
import {
  Container,
  Text,
  Heading,
  Center,
  NativeBaseProvider,
  Box,
  HStack,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Order({ navigation }) {
  const handlePress = () => {
    // Handle box click event
    console.log('Box clicked!');
  };

  const handleBox1Press = () => {
    console.log('Box 1 clicked!');
  };

  const handleBox2Press = () => {
    console.log('Box 2 clicked!');
  };

  return (
    <Center flex={1} px='3'>
      <Container>
        <Box
          borderWidth={1}
          borderColor='white'
          p={2}
          rounded='md'
          alignItems='center'
          mt={270}
          justifyContent='center'
          width={230}
          height={300}
          alignSelf='center'
          mx='auto'
        >
          <Ionicons
            name='checkmark-circle-outline'
            justifyContent='center'
            alignItems='center'
            size={130}
            color='black'
          />
          <Heading textAlign='center' mb={5} fontSize='20' rounded='md'>
            발주가 완료되었습니다
          </Heading>

          <Box>
            <TouchableOpacity onPress={handlePress}>
              <Box
                flexDirection='row'
                alignSelf='center'
                borderWidth={1}
                borderColor='white'
                borderRadius='md'
                px={2}
                py={1}
                justifyContent='center'
                alignItems='center'
                bg={'gray.100'}
              >
                <MaterialIcons name='mail' size={30} color='black' />
                <Text ml={2}>메일 보내기</Text>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>

        <Box flex={1} justifyContent='flex-end'>
          <HStack
            space={2}
            justifyContent='center'
            mb={4}
            width={260}
            height={20}
          >
            <TouchableOpacity onPress={handleBox1Press}>
              <Box
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
                borderWidth={2}
                borderColor='white'
                borderRadius='md'
                px={4}
                py={2}
                width={180}
                height={70}
                bg={'gray.100'}
              >
                <Text fontSize='2xl'>상세 내역</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Main');
              }}
            >
              <Box
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
                borderWidth={2}
                borderColor='white'
                borderRadius='md'
                px={4}
                py={2}
                width={180}
                height={70}
                bg={'gray.100'}
              >
                <Text fontSize='2xl'>확인</Text>
              </Box>
            </TouchableOpacity>
          </HStack>
        </Box>
      </Container>
    </Center>
  );
}
