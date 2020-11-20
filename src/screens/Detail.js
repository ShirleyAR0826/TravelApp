import React from 'react';
import { View,
    Text,
    Alert,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Modal,
    Image,
    ImageBackground} from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalCard from "./ModalCard";
import ListCard from "./ListCard";

export default function Detail() {
    return (
        <ImageBackground
            source={require('../images/back2.png')}
            style={{height:"100%",width:"100%"}}
        >
            <View
                style={{
                    flexDirection:"row",
                    marginTop:40,
                    alignItems:"center",
                    justifyContent: "space-between",
                    paddingHorizontal:40
                }}
            >
                <Icon name="menu" size={30} color="#a2a2db" style={{width:20}}/>   
                <Icon name="account-circle" size={33} color="#a2a2db" style={{marginRight:10}}/> 
            </View>
            <View
                style={{
                    width:"100%",
                    marginTop:50,
                    marginBottom:20,
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <View
                    style={{
                        width:80,
                        height:80,
                        borderRadius:40,
                        backgroundColor:"#5facdb",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                >
                    <Image
                        source={require('../images/p.png')}
                        style={{height:26,width:26}}
                    />
                </View>
            </View>
            <View style={{
                    flexDirection:"row",
                    paddingHorizontal:40,
                    alignItems:"center"
                }}>
                <Text style={{
                    fontSize:24,
                    fontFamily:"RobotoBold",
                    color:"#FFF"
                }}>
                    NYC
                </Text>
                <Text style={{
                    fontSize:20,
                    color:"#a2a2db",
                    paddingHorizontal:15
                }}>
                    - - - - - - - - - - - - - - - - -
                </Text>
                <Text style={{
                    fontSize:24,
                    fontFamily:"RobotoBold",
                    color:"#aFFF",
                }}>
                    IDN
                </Text>
            </View>
            <View style={{
                flexDirection:"row",
                paddingHorizontal:40,
                justifyContent:"space-between"
            }}>
                <Text style={{
                    color:"#a2a2db",
                    fontFamily:"RobotoRegular"
                }}>
                    New York
                </Text>
                <Text style={{
                    color:"#a2a2db",
                    fontFamily:"RobotoRegular",
                    paddingRight:10
                }}>
                    Indonesia
                </Text>
            </View>
        </ImageBackground>
    )
}

