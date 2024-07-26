import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import DropBox from "../Components/DropBox";

const Details = ({route}) => {
  const {name, quantity, price, img} = route.params.main
  const nav = useNavigation();
  return (
    <SafeAreaView style={{flex:1, gap:20, backgroundColor:"white"}}>
      {/* 1st Box */}
      <View>
        <Image
          style={{
            height: 300,
            borderBottomLeftRadius:30,
            borderBottomRightRadius: 30,
          }}
          source={{
            uri: img,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            position: "absolute",
            width: "100%",
          }}
        >
          <Ionicons
            onPress={() => {
              nav.goBack();
            }}
            name="chevron-back"
            size={28}
            color="grey"
          />
          <Octicons name="share" size={28} color="grey" />
        </View>
      </View>
      {/* 2nd Box */}
      <View style={{paddingHorizontal: 10,backgroundColor:"white", flex:1}}>
      <View
        style={{
          
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <MaterialCommunityIcons name="heart-outline" size={28} color="grey" />
      </View>
        <Text style={{
          fontSize: 18,color: "grey", fontWeight:"500", marginTop:5,
        }}>{quantity}, Price</Text>
        <Text style={{
          fontSize: 25,color: "black", fontWeight:"500", marginTop:25,
        }}>₹{price}</Text>
        <DropBox/>
      </View>
      

    </SafeAreaView>
  );
};

export default Details;
