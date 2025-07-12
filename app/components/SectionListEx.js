import React from 'react';
import { SafeAreaView, SectionList, StatusBar, Text, View, StyleSheet } from 'react-native';
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
            title: 'Vegetables List 2',
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
                style={[styles.container, {height: 200}]}
                scrollEnabled={true}
                sections={sectionListDummyData}
                keyExtractor={(item, index) => item + index}
                renderItem={(it) => ( 
                    <Item itemData={it.item} />
                    // <Text>{item}</Text>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <View style={[{backgroundColor: 'green'}]}>
                        <Text>{title}</Text>
                    </View>
                )}
                renderSectionFooter={(sectionItems) => (
                    <View style={[{backgroundColor: 'orange'}]}>
                        <Text>{sectionItems.section.title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default SectionListEx;

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    }
})