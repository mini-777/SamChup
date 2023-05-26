import React, { useState } from 'react';
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Text,
  Divider,
  HStack,
  Modal,
  Button,
  Image,
} from 'native-base';
import {
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const InventoryItem = ({
  itemName,
  itemPurchase,
  itemSell,
  itemQuantity,
  itemDetails,
  itemBarcode,
  itemImg,
  onItemClick,
}) => {
  return (
    <TouchableOpacity onPress={onItemClick}>
      <HStack space={3} alignItems='center'>
        <Box ml='3' mt='2'>
          <Image
            source={{
              uri: itemImg,
            }}
            alt='itemImage'
            w='20'
            h='20'
            rounded='md'
          />
        </Box>
        <VStack>
          <Text fontWeight='bold'>{itemName}</Text>
          <Text fontSize='sm'>
            {itemPurchase} / {itemSell} / {itemQuantity} / {itemDetails}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

const ItemDetailsModal = ({ item, onClose, navigation }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function to close the Modal
  };

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <Modal.Content maxWidth='400px'>
        <Modal.CloseButton onPress={handleClose} />
        <HStack space={2} alignItems='center'>
          <Box ml='3' mt='2'>
            <Image
              source={{
                uri: item.itemImg,
              }}
              alt='itemImage'
              w='10'
              h='10'
              rounded='md'
            />
          </Box>

          <Text justifyContent='center' mt='2' fontWeight='bold'>
            {item.itemName}
          </Text>
        </HStack>
        <Divider mt={2} thickness={2} />
        <Modal.Body>
          <VStack space={2}>
            <Text>바코드: {item.itemBarcode}</Text>
            <Divider />
            <Text>구매가: {item.itemPurchase}</Text>
            <Divider />
            <Text>판매가: {item.itemSell}</Text>
            <Divider />
            <Text>세부사항: {item.itemDetails}</Text>
          </VStack>
        </Modal.Body>
        <Divider mt={2} thickness={2} />
        <Modal.Footer>
          <HStack alignItems='center'>
            <Text fontWeight='bold' mr='130'>
              수량: {item.itemQuantity}
            </Text>
            <Button
              onPress={() => {
                navigation.navigate('OrderCount');
                onClose();
              }}
              colorScheme='coolGray'
            >
              발주
            </Button>
          </HStack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default function StockDetail({ navigation }) {
  const inventoryItems = [
    {
      itemName: '여리여리 봄 맞이 스커커트',
      itemPurchase: '18,000',
      itemSell: '10,000',
      itemQuantity: '100',
      itemDetails: '하의류',
      itemImg:
        'https://sitem.ssgcdn.com/01/92/76/item/1000047769201_i1_1100.jpg',
      itemBarcode: '203205651',
    },
    {
      itemName: '칼단발 머리띠',
      itemPurchase: '12,000',
      itemSell: '1,000',
      itemQuantity: '30',
      itemDetails: '악세사리류',
      itemImg:
        'https://img.ssfshop.com/god_god_evl/23/03/24/119166509013943.jpeg',
      itemBarcode: '2165466',
    },
    {
      itemName: '고당도 수박',
      itemPurchase: '18,000',
      itemSell: '10,000',
      itemQuantity: '100',
      itemDetails: '식품류',
      itemImg:
        'https://th4.tmon.kr/thumbs/image/16e/a26/291/2f8e88218_700x700_95_FIT.jpg',
      itemBarcode: '9160651',
    },
    {
      itemName: '꿀참외',
      itemPurchase: '18,000',
      itemSell: '10,000',
      itemQuantity: '100',
      itemDetails: '식품류',
      itemImg:
        'https://img.wemep.co.kr/deal/9/702/4437029/c61213b08dbc6af9376ceda5a998ab18b1d64788.jpg',
      itemBarcode: '74156465',
    },
  ];

  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState(inventoryItems);
  const [scrollViewHeight, setScrollViewHeight] = useState(
    Dimensions.get('window').height * 0.7
  );
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = inventoryItems.filter((item) =>
      item.itemName.includes(text)
    );
    setFilteredItems(filtered);
  };

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Box margin={5}>
      <Heading size='lg' fontWeight='600' color='coolGray.800'>
        재고내역
      </Heading>
      <FormControl mt='5'>
        <Input
          w='100%'
          placeholder='제품을 검색하세요'
          value={searchText}
          onChangeText={handleSearch}
        />
      </FormControl>

      <Heading size='md' fontWeight='500' color='coolGray.800' mt='5'>
        제품정보
      </Heading>
      <Text fontSize='sm' mt='2'>
        항목, {filteredItems.length}개
      </Text>

      <ScrollView style={{ height: scrollViewHeight }}>
        <VStack space={3} mt='5' divider={<Divider />}>
          {filteredItems.map((item, index) => (
            <InventoryItem
              key={index}
              itemName={item.itemName}
              itemPurchase={item.itemPurchase}
              itemSell={item.itemSell}
              itemQuantity={item.itemQuantity}
              itemDetails={item.itemDetails}
              itemImg={item.itemImg}
              itemBarcode={item.itemBarcode}
              onItemClick={() => handleClick(item)}
            />
          ))}
        </VStack>
      </ScrollView>

      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          navigation={navigation}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </Box>
  );
}
