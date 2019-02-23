import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Container, Header, Footer, FooterTab, Left, Body, Right, Button, Icon, Segment, Content, Text, View, DeckSwiper, Card, CardItem, Thumbnail } from 'native-base';

const cards = [
    {
        pronan: ' به آمریکایی/kənˈsiːl/ به انگلیسی/kənˈsiːl/',
        text: 'Conceal',
        name: 'One',
        far: 'پوشاندن، پنهان کردن، مخفی کردن، نهفتن، نهان کردن',

        engSen: '1. Tris could not conceal his love for Gloria. ,\n' +
            '2. Count Dracula concealed the corpse in his castle. ,\n' +
            '3. The money was so cleverly concealed that we were forced to abandon our search for it.',
        farSen: ' تریس نمی توانست عشق خود به گلوریا را پنهان کند ,\n' +
            ' کنت دراکولا جنازه را در قلعه خود پنهان کرد ,\n' +
            'پولها آنقدر ماهرانه پنهان شده بود که مجبور شدیم از جستجو دست بکشیم',
        image: require('../image/conceal.jpg'),
    },

];
export default class Det extends Component {
    render() {
        return (
            <Container>

                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row' ,borderBottomWidth:.5}}>

                        <Text style={styles.engword}>Conceal</Text>
                        <Icon style={{ margin: 10 }} name="play" />
                    </View>

                    <View style={{ flex: 8 }}>
                        <ScrollView>


                            <Text style={styles.pron}> به آمریکایی/kənˈsiːl/ به انگلیسی/kənˈsiːl/</Text>
                            <View style={{ margin: 10, padding: 5, flex: 1, backgroundColor: '#559', borderRadius: 5 }}>
                                <Text style={styles.engmean}> Not allow to be seen; hide Not allow to be seen; hide Not allow to be seen; hide.</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                                <View style={{ borderRadius: 5, padding: 5, width: 40, left: 10, backgroundColor: '#500', alignItems: 'center',borderBottomLeftRadius:0,borderTopLeftRadius:0 }}>
                                    <Text style={styles.partof}>فعل</Text>
                                </View>
                                <View style={{flex:10, padding: 2, borderRadius: 5 ,borderWidth:.5,borderColor:'#500',marginRight:5}}>
                                    <Text style={styles.farword}>پوشاندن، پنهان کردن، مخفی کردن، نهفتن، نهان کردن</Text>
                                </View>
                                <View style={{width:10}}>
                                </View>
                            </View>
                            <Image style={{ alignSelf: 'center', borderColor: '#449', borderRadius: 20, borderWidth: 1, margin: 5 }} source={require('../image/conceal.jpg')} />
                            <Text style={styles.esentEN}>1. Tris could not conceal his love for Gloria.</Text>
                            <Text style={styles.esentEN}>2. Count Dracula concealed the corpse in his castle. </Text>
                            <Text style={styles.esentEN}>3. The money was so cleverly concealed that we were forced to abandon our search for it. </Text>
                            <Text style={styles.esentFA}>1 -  تریس نمی توانست عشق خود به گلوریا را پنهان کند </Text>
                            <Text style={styles.esentFA}>2 - کنت دراکولا جنازه را در قلعه خود پنهان کرد </Text>
                            <Text style={styles.esentFA}>3 - پولها آنقدر ماهرانه پنهان شده بود که مجبور شدیم از جستجو دست بکشیم </Text>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Content />

                        <Footer >
                            <FooterTab style={{ backgroundColor: '#333' }}>

                                <Button vertical>
                                    <Icon name="md-arrow-back" />

                                </Button>
                                <Button vertical>
                                    <Icon style={{ color: 'red' }} name="heart" />

                                </Button>
                                <Button vertical>
                                    <Icon name="play" />

                                </Button>
                                <Button vertical>
                                    <Icon active style={{ color: 'yellow' }} name="star" />

                                </Button>

                                <Button vertical>
                                    <Icon name="md-arrow-forward" />

                                </Button>
                            </FooterTab>
                        </Footer>

                    </View>





                </View >
            </Container >
        );
    }
}

const styles = StyleSheet.create({


    farword: {
        fontSize: 20,
        textAlign: 'right',
        margin: 8,

        color: '#666',
    },
    pron: {
        fontSize: 15,
        textAlign: 'left',
        margin: 0,
        color: '#77f',
        left: 25,

    },
    engmean: {
        fontSize: 15,
        textAlign: 'left',
        margin: 0,
        color: '#eef',

        left: 5,

    },
    engword: {
        fontSize: 28,
        textAlign: 'left',
        margin: 3,
        flex: 1,
    },
    esentEN: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
        flex: 1,
    },
    esentFA: {
        fontSize: 20,
        textAlign: 'right',
        margin: 10,
        flex: 1,
    },
    partof: {
        fontSize: 18,
        textAlign: 'center',
        margin: 0,
        flex: 1,
        left: -20,
        color: 'white',
        transform: [{ rotate: '90deg' }]
    },
}
) 