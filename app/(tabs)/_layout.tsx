import { View, Text, ImageBackground, Image } from 'react-native';
import { Tabs } from 'expo-router';
import React from 'react';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const TabIcon = ({focused, title, icon}: any) => {
    if(focused) {
        return (
        <ImageBackground
            source = {images.highlight}
            className = 'flex flex-1 flex-row w-full min-w-[112] min-h-16 mt-4 justify-center items-center overflow-hidden'
        >
            <Image source = {icon} tintColor = "#151312" className = 'size-5' />
            <Text className = 'text-secondary text-base font-semibold ml-2'>{title}</Text>
        </ImageBackground>
        );
    }
    return (
        <View className = 'size-full justify-center items-center mt-4 rounded-full'>
            <Image source = {icon} tintColor = "#A8B5DB" />
        </View>
    );
}

const _layout = () => {
    return(
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 0,
                    borderColor: '0f0d23'
                }
            }}
        >
            <Tabs.Screen
                name = "index"
                options = {{
                    title: 'Home',
                    headerShown: false, // hides the Header of the screen on this route
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused = {focused}
                            title = "Home"
                            icon = {icons.home}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "search"
                options = {{
                    title: 'Search',
                    headerShown: false, // hides the Header of the screen on this route
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused = {focused}
                            title = "Search"
                            icon = {icons.search}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "saved"
                options = {{
                    title: 'Saved',
                    headerShown: false, // hides the Header of the screen on this route
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused = {focused}
                            title = "Saved"
                            icon = {icons.save}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "profile"
                options = {{
                    title: 'Profile',
                    headerShown: false, // hides the Header of the screen on this route
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused = {focused}
                            title = "Profile"
                            icon = {icons.person}
                        />
                    )
                }}
            />
        </Tabs>
    );
}

export default _layout;