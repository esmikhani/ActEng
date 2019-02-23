import React, { Component } from 'react';
import { Container, Content, Text, Button, Left, Right, Body } from 'native-base';
import { StyleSheet, Image } from 'react-native'
export default class Sidebar extends Component {

    render() {
        return (
            <Container style={styles.stycont}>
                <Content>
                    <Image  style={{ alignSelf: 'center', borderColor: '#449', borderRadius: 20, borderWidth: 1, margin: 5 }} source={require('./book.jpg')}  />
                    <Text>insert here</Text>
                    <Left>

                    </Left>
                    <Body>
                    <Text> مخمال </Text>
                    </Body>
                    <Right>
                        <Text>نحوه آموزش </Text>
                    </Right>
                </Content>
            </Container>



        );



    }
}
const styles = StyleSheet.create({
    stycont: {
        flexDirection:'column',
        flex: 1,
        width:'100%',
        paddingHorizontal: 10,
        backgroundColor: '#eef'

    }
})