import React from "react";
import { FlatList, ImageBackground, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import chatsData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import BG from "../assets/images/BG.png";

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
      <FlatList
        data={chatsData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
      />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
