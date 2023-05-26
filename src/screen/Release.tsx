import React, { useState } from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  VStack,
  HStack,
  IconButton,
  Button,
} from 'native-base';
import { ArrowBackIcon, AddIcon, MinusIcon, HamburgerIcon } from 'native-base';

const Release = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <NativeBaseProvider>
      <Box safeAreaTop backgroundColor='white' />
      <HStack px='2' py='4' justifyContent='space-between' alignItems='center'>
        <Text fontSize='2xl' color='black' fontWeight='bold'>
          BARP
        </Text>
      </HStack>

      <VStack space={5} align='center' justifyContent='flex-start' flex={1}>
        <Box
          py={6}
          px={5}
          rounded='lg'
          width='100%'
          bg='white'
          shadow={2}
          mx='0'
        >
          <Text fontSize='3xl' color='coolGray.800' textAlign='center'>
            출고 수량을 입력하세요.
          </Text>
          <Text fontSize='sm' color='coolGray.400' textAlign='center'>
            여리여리 봄 맞이 스커드
          </Text>

          <HStack
            justifyContent='space-between'
            alignItems='center'
            mt={5}
            marginBottom={30}
          >
            <IconButton
              variant='rounded'
              backgroundColor='coolGray.200'
              icon={<MinusIcon size='8' color='coolGray.800' />}
              onPress={decrementQuantity}
            />
            <Text fontSize='5xl' color='coolGray.800'>
              {quantity}
            </Text>
            <IconButton
              variant='rounded'
              backgroundColor='coolGray.200'
              icon={<AddIcon size='8' color='coolGray.800' />}
              onPress={incrementQuantity}
            />
          </HStack>

          <HStack space={3} mt={5}>
            <Button flex={1} colorScheme='coolGray' rounded='full'>
              취소
            </Button>
            <Button
              flex={1}
              colorScheme='coolGray'
              rounded='full'
              onPress={() => {
                navigation.navigate('Receipt');
              }}
            >
              출고
            </Button>
          </HStack>
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
};

export default Release;
