import { useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react'
import { Text, View } from 'react-native';

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string}>();
    const [search, setSearch] = useState(params.query);

    const handleSearch = (text: string) => {
        setSearch();
    }

  return (
    <View >
        <Text>
            Search
        </Text>
    </View>
  )
}

export default Search;