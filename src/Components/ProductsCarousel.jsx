import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { vegetables } from "../utils/Data";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AntDesign } from '@expo/vector-icons';

export const ProductsCarousel = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={vegetables}
        renderItem={({ item, index }) => (
          <View
            style={{
              borderWidth: 2,
              borderColor: "#e3e3e3",
              height: responsiveHeight(35),
              width: responsiveWidth(50),
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              style={{ height: responsiveHeight(17) , width: responsiveWidth(47) , marginTop:10, alignSelf:"center"}}
              source={{ uri: item.img }}
            />

            <View style={{paddingHorizontal:10}}>
                <Text style={{fontSize:18, fontWeight:"600", marginTop: 10}}>{item.name}</Text>
                <Text style={{fontSize:18, fontWeight:"400", marginTop: 10}}>{item.quantity}</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{color:"grey", fontSize:17, fontWeight:"600", marginTop: 5}}>₹ {item.price}</Text>
                <AntDesign name="plussquare" size={24} color="green" />
                </View>
                
            </View>
          </View>
        )}
      />
    </View>
    
  );
};

export default ProductsCarousel;
