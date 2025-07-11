import React from 'react';
import { FlatList, Text, View } from 'react-native';
const SectionListEx = (props) => {
    const sectionListDummyData = [
        // title: 'Section List Example',
        // description: 'This example demonstrates how to use a section list in React Native.',
        {
            title: 'Fruits',
            data: ['Apple', 'Banana', 'Orange'],
        },
        {
            title: 'Vegetables',
            data: ['Carrot', 'Broccoli', 'Spinach'],
        },
        {
            title: 'Dairy',
            data: ['Milk', 'Cheese', 'Yogurt'],
        },
    ];


    const flatListData = [
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
    ];

    const Item = (itemData) => (
        <View style={[{marginVertical: 20, height: 50, width: '100%'}]}>
          <Text>{itemData.title}</Text>
        </View>
    );
    
    return (
        <>
            <FlatList
                data={flatListData}
                renderItem={({item}) => {console.log("Render : ",item.title); return <Item title={item.title} />}}
                keyExtractor={(item) => {console.log("Extract : ", item.id); return item.id}}
            />

            {/* <SectionList
                sections={sectionListDummyData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => ( 
                    <View>
                        <Text>{item}</Text>
                    </View> 
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text>{title}</Text>
                )}
            /> */}
        </>
    )
}

export default SectionListEx;