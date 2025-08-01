import React from "react";
import { FlatList, Text, View } from "react-native";

const FlatListEx = () => {
    const flatListDummyData = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d9',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d71',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d2',
            title: 'Third Item',
        },

    ];

    const ListUi = ({item}) => (
        <View style={[{marginVertical: 20, height: 50, width: '100%', backgroundColor:'red', justifyContent: 'center'}]}>
            <Text style={[{textAlign: 'center', alignSelf: 'center', alignItems: 'center'}]}>
                {item}
            </Text>
        </View>
    )

    return (
        <View style={[{width: '100%', height: 500, backgroundColor: 'grey'}]}>
            <FlatList 
                data={flatListDummyData}
                renderItem={(d)=>(<ListUi item={d.item.title} />)}
                keyExtractor={(d)=>d.id.toString()}
            />
        </View>
    )
}

export default FlatListEx;