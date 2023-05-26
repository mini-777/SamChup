import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  VStack,
  HStack,
  Divider,
  Button,
  Center,
  Image,
} from 'native-base';

const Receipt = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box safeAreaTop backgroundColor='white' />

      <VStack space={5} alignItems='center' pt='6' pb='4' px='4' flex={1}>
        <Text fontSize='2xl' color='black' fontWeight='bold'>
          BARP
        </Text>

        <HStack justifyContent='space-between' width='100%'>
          <Text fontSize='3xl' color='black' fontWeight='bold'>
            출고정보
          </Text>
          <Button borderRadius='full' px='4' backgroundColor='coolGray.200'>
            <Text fontSize='sm' color='black'>
              출고서 작성
            </Text>
          </Button>
        </HStack>

        <Divider my='2' />

        <HStack justifyContent='space-between' width='100%'>
          <Text fontSize='xl' color='black' fontWeight='bold'>
            출고처
          </Text>
          <Text fontSize='lg' color='black'>
            곽두팔사무서
          </Text>
        </HStack>

        <Divider my='2' />

        <HStack justifyContent='space-between' width='100%'>
          <Text fontSize='xl' color='black' fontWeight='bold'>
            제품
          </Text>
          <Text fontSize='lg' color='black'>
            1개 항목 {'>'}
          </Text>
        </HStack>

        <HStack justifyContent='flex-start' width='100%'>
          <Box
            backgroundColor='coolGray.200'
            borderRadius='lg'
            width={20}
            height={20}
            mt={2}
          >
            <Image
              source={{
                uri: 'https://sitem.ssgcdn.com/01/92/76/item/1000047769201_i1_1100.jpg',
              }}
              alt='itemImage'
              w='20'
              h='20'
              rounded='md'
            />
          </Box>
          <VStack ml={2} justifyContent='center'>
            <Text fontSize='lg' color='black'>
              여리여리 봄 맞이 스커드
            </Text>
            <Text fontSize='sm' color='coolGray.400'>
              3개 출고 완료
            </Text>
          </VStack>
        </HStack>

        <Divider my='2' />

        <HStack justifyContent='space-between' width='100%'>
          <Text fontSize='xl' color='black' fontWeight='bold'>
            메모
          </Text>
          <Text fontSize='lg' color='black'>
            작성{' '}
          </Text>
        </HStack>
      </VStack>
      <Center marginBottom={50}>
        <Button
          borderRadius='full'
          px='20'
          backgroundColor='coolGray.200'
          onPress={() => navigation.navigate('Main')}
        >
          <Text fontSize='xl' color='black'>
            완료
          </Text>
        </Button>
      </Center>
    </NativeBaseProvider>
  );
};

export default Receipt;
