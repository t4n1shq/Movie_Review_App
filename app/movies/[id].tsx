import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const MovieDetails = () => {
    const { id } = useLocalSearchParams();
    return(
        <View>
            <Text>MovieDetails</Text>
        </View>
    )
}

export default MovieDetails;