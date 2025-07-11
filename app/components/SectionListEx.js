import React from 'react';
import { SafeAreaView, SectionList, Text, View } from 'react-native';
const SectionListEx = (props) => {
    const sectionListDummyData = [
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
        {
            title: 'Vegetables',
            data: ['Carrot', 'Broccoli', 'Spinach'],
        },
    ];

    const Item = ({itemData}) => {
        // console.log("items data : ",itemData)
        return (
            <View>
                <Text>{itemData}</Text>
            </View>
        )
    };
    
    return (
        <SafeAreaView>
            <SectionList
                style={[{marginTop: 20, height: 200}]}
                scrollEnabled={true}
                sections={sectionListDummyData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => ( 
                    <Item itemData={item} />
                    // <Text>{item}</Text>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <View style={[{backgroundColor: 'green'}]}>
                        <Text>{title}</Text>
                    </View>
                )}
                renderSectionFooter={({section: {title}}) => (
                    <View style={[{backgroundColor: 'orange'}]}>
                        <Text>{title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default SectionListEx;