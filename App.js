import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    Alert,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!');
    }

    render() {
        let pic = {
            uri:
                'https://assets.bigcartel.com/product_images/162855202/unnamed_%282%29.jpg?auto=format&fit=max&h=1000&w=1000',
        };
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.importantText}>React-Native</Text>

                    <Image source={pic} style={styles.image} />
                </View>

                <View style={styles.horizontalBlock}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Words to pizzas!"
                        onChangeText={text => this.setState({ text })}
                    />
                </View>

                <Text style={styles.pizzas}>
                    {this.state.text
                        .split(' ')
                        .map(word => word && '🍕')
                        .join(' ')}
                </Text>

                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Press Me"
                />

                <FlatList
                    style={sr}
                    data={[
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    importantText: {
        fontWeight: 'bold',
    },
    image: {
        marginTop: 15,
        marginBottom: 15,
        width: 300,
        height: 10,
        borderRadius: 15,
    },
    horizontalBlock: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    pizzas: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
