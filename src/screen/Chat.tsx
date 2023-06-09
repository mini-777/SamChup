import React, { useState } from 'react';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';

import axios from 'axios';
import { StyleSheet } from 'react-native';

const item = [
  {
    itemName: '여리여리 봄 맞이 스커커트',
    itemPurchase: '18,000',
    itemSell: '10,000',
    itemQuantity: '100',
    itemDetails: '하의류',
    itemBarcode: '203205651',
  },
  {
    itemName: '칼단발 머리띠',
    itemPurchase: '12,000',
    itemSell: '1,000',
    itemQuantity: '30',
    itemDetails: '악세사리류',
    itemBarcode: '2165466',
  },
  {
    itemName: '고당도 수박',
    itemPurchase: '18,000',
    itemSell: '10,000',
    itemQuantity: '100',
    itemDetails: '식품류',
    itemBarcode: '9160651',
  },
  {
    itemName: '꿀참외',
    itemPurchase: '18,000',
    itemSell: '10,000',
    itemQuantity: '100',
    itemDetails: '식품류',
    itemBarcode: '74156465',
  },
];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const CHAT_GPT_API_KEY = '';
  const sendMessage = async (message: string) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [
            {
              role: 'user',
              content: message,
            },
          ],
          model: 'gpt-3.5-turbo',
        },
        {
          headers: {
            Authorization: `Bearer ${CHAT_GPT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (err) {
      console.log(err, 'api call error');
    }
  };

  const onSend = async (newMessages = []) => {
    setMessages((prev) => GiftedChat.append(prev, newMessages));

    const response = await sendMessage(
      newMessages[0].text + JSON.stringify(item)
    );
    const chatMessage = [
      {
        _id: Math.random().toString(36).substring(7),
        text: response,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'GPT-3.5-turbo',
          avatar: 'https://cdn-icons-png.flaticon.com/512/2883/2883826.png',
        },
      },
    ];

    setMessages((prev) => GiftedChat.append(prev, chatMessage));
  };

  const user = {
    _id: 1,
    name: 'Developer',
    avatar: 'https://icons.veryicon.com/png/o/internet--web/truckhome/me-6.png',
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.input}
        primaryStyle={styles.primary}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={user}
      placeholder={'재고에 관련해서 질문하세요'}
      showUserAvatar={false}
      showAvatarForEveryMessage={false}
      renderInputToolbar={renderInputToolbar}
      messagesContainerStyle={styles.messageContainer}
    />
  );
};

export default Chat;

const styles = StyleSheet.create({
  messageContainer: {
    paddingBottom: 30,
  },
  input: {
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 4,
  },
  primary: {
    paddingBottom: 30,
  },
});
