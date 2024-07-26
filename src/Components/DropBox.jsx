import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { dropdown } from "../utils/Data";
import { FontAwesome } from "@expo/vector-icons";
import mycolors from "../utils/mycolors";

const DropBox = () => {
  const [myIndex, setMyIndex] = useState();
  const [toggle, settoggle] = useState();

  return (
    <ScrollView>
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={dropdown}
          keyExtractor={(item, index) => index.toString()} // Ensure a unique key
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setMyIndex(index);
                  settoggle(!toggle);
                }}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomWidth: 2,
                  borderBottomColor: "#e3e3e3",
                  marginBottom: 10,
                  paddingVertical: 20,
                }}
              >
                <Text>{item.title}</Text>
                <FontAwesome
                  name={
                    myIndex === index && toggle ? "angle-down" : "angle-right"
                  }
                  size={20}
                  color="grey"
                />
              </TouchableOpacity>
              {myIndex === index && toggle ? <Text>{item.content}</Text> : null}
            </View>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: "#5fc342",
            marginTop: 10,
            height: 70,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 19,
              color: mycolors.secondary,
              fontWeight: "500",
            }}
          >
            Add To Basket
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DropBox;
