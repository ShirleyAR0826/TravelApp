import React, {useState, useEffect} from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';

export default function Hotel({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);

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
                <Icon name="account-circle" size={33} color="#a2a2db" style={{marginRight:10}}
                    onPress={()=>navigation.navigate('Home')}
                /> 
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
                        backgroundColor:"#ffa06c",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                >
                    <Icon name="bus" color="white" size={32} onPress={()=>navigation.navigate('Home')}/>
                </View>
            </View>
            <View style={{
                    flexDirection:"row",
                    paddingHorizontal:40,
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                <Text style={{
                    fontSize:24,
                    fontFamily:"RobotoBold",
                    color:"#FFF"
                }}>
                    Transfers
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
            </View>
            <Text style={{
                paddingHorizontal: 40,
                color: "#a2a2db",
                fontFamily:"RobotoRegular",
            }}>
                20 June, 2021
            </Text>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 50,
                marginTop: 60
            }}>
                <Image 
                    source={require('../images/dots.png')}
                    style={{width:18,height:16}}
                />
                <Image 
                    source={require('../images/filter.png')}
                    style={{marginRight:10,height:18}}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginVertical: 5}}
            >
                <ListCard onPress={()=>setModalVisible(true)}/>
                <ListCard onPress={()=>setModalVisible(true)}/>
                <ListCard onPress={()=>setModalVisible(true)}/>
                <View>
                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal is closed");
                    }}
                    >
                    <ModalCard
                        onPress={() => {setModalVisible(!modalVisible)}}
                    />
                    </Modal>
          </View>
            </ScrollView>
        </ImageBackground>
    )
}
