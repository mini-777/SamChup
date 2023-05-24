import { HStack, Center, Pressable, Box, Heading, Text, Image, Input, Icon } from 'native-base';
import { Ionicons } from "@expo/vector-icons";








export default function Main({ navigation }) {
    return (
        <Box safeArea>
            <Box ml={5} mb={2}>
                <Heading size='2xl'>
                    BARP
                </Heading>

            </Box>
            <Box alignSelf="center">
                <Input h={10} placeholder="재고 검색" variant="filled" width="90%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
            </Box>
            <Box alignItems="center">



                <Center margin={4}><Pressable onPress={() => navigation.navigate('Scan')}>
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Center h="280" w="330" bg={isPressed ? "muted.200" : isHovered ? "muted.200" : "muted.50"} style={{
                            transform: [{
                                scale: isPressed ? 0.96 : 1
                            }]
                        }} p="5" rounded="20" shadow={9} borderWidth="1" borderColor="coolGray.300"><Text fontWeight='medium' textAlign='center' fontSize='3xl'  >바코드 출고</Text>
                            <Image source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/4396/4396530.png'
                            }} alt="Barcode Image" size="2xl" h={190} />
                        </Center>
                    }}
                </Pressable></Center>
                <HStack margin={4} space={8} justifyContent="center">
                    <Center >
                        <Pressable >
                            {({
                                isHovered,
                                isPressed
                            }) => {
                                return <Center alignItems="center" h="148" w="148" bg={isPressed ? "muted.200" : isHovered ? "muted.200" : "muted.50"} style={{
                                    transform: [{
                                        scale: isPressed ? 0.96 : 1
                                    }]
                                }} p="5" rounded="20" shadow={9} borderWidth="1" borderColor="coolGray.300" _text={{ fontWeight: 'medium', textAlign: 'center', fontSize: '2xl', }}>재고 관리
                                </Center>
                            }}
                        </Pressable>
                    </Center>
                    <Center>
                        <Pressable>
                            {({
                                isHovered,
                                isPressed
                            }) => {
                                return <Center h="148" w="148" bg={isPressed ? "muted.200" : isHovered ? "muted.200" : "muted.50"} _text={{ fontWeight: 'medium', textAlign: 'center', fontSize: '2xl', }} style={{
                                    transform: [{
                                        scale: isPressed ? 0.96 : 1
                                    }]
                                }} p="5" rounded="20" shadow={9} borderWidth="1" borderColor="coolGray.300">재고 내역
                                </Center>
                            }}
                        </Pressable>
                    </Center>
                </HStack>
                <HStack margin={4} space={8} justifyContent="center">
                    <Center><Pressable>
                        {({
                            isHovered,
                            isPressed
                        }) => {
                            return <Center h="148" w="148" bg={isPressed ? "muted.200" : isHovered ? "muted.200" : "muted.50"} style={{
                                transform: [{
                                    scale: isPressed ? 0.96 : 1
                                }]
                            }} p="5" rounded="20" shadow={9} borderWidth="1" borderColor="coolGray.300" _text={{ fontWeight: 'medium', textAlign: 'center', fontSize: '2xl', }}>발주
                            </Center>
                        }}
                    </Pressable></Center>
                    <Center><Pressable onPress={() => navigation.navigate('Chat')}>
                        {({
                            isHovered,
                            isPressed
                        }) => {
                            return <Center h="148" w="148" bg={isPressed ? "muted.200" : isHovered ? "muted.200" : "muted.50"} style={{
                                transform: [{
                                    scale: isPressed ? 0.96 : 1
                                }]
                            }} p="5" rounded="20" shadow={9} borderWidth="1" borderColor="coolGray.300" _text={{ fontWeight: 'medium', textAlign: 'center', fontSize: '2xl', }}>AI 매니저
                            </Center>
                        }}
                    </Pressable></Center>
                </HStack>

            </Box>
        </Box>


    );
}

