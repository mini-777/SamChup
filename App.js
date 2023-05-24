import { NativeBaseProvider, HStack, Center, StatusBar, Pressable, Box, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';

const buttonComponent = (isPressed, isHovered, buttonIndex) => {
  return (
    <Box h="148" w="148" bg={isPressed ? "muted.200" : isHovered ? "muted.200" : "muted.50"} style={{
      transform: [{
        scale: isPressed ? 0.96 : 1
      }]
    }} p="5" rounded="8" shadow={9} borderWidth="1" borderColor="coolGray.300"><Text>재고 관리</Text>
    </Box>
  );
}

export default function App() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <View style={styles.container}>
        <NativeBaseProvider>
          <HStack margin={4} space={8} justifyContent="center">
            <Center>
              <Pressable>
                {({
                  isHovered,
                  isPressed
                }) => {
                  return buttonComponent(isHovered, isPressed)
                }}
              </Pressable>
            </Center>
            <Center>
              <Pressable>
                {({
                  isHovered,
                  isPressed
                }) => {
                  return buttonComponent(isHovered, isPressed)
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
                return buttonComponent(isHovered, isPressed)
              }}
            </Pressable></Center>
            <Center><Pressable>
              {({
                isHovered,
                isPressed
              }) => {
                return buttonComponent(isHovered, isPressed)
              }}
            </Pressable></Center>
          </HStack>
        </NativeBaseProvider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
