import React, { Component } from 'react';
import { Platform, StyleSheet, View, ToastAndroid } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text, List, ListItem,Thumbnail} from 'native-base';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


export default class wordshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acten: true,
            actfa: true,
            ew: ['', '', ''],
            fw: ['', '', '','','','',''],
        }
    }



    render() {
        const {navigate} = this.props.navigation;


        if (this.state.acten == true) {
            this.state.ew[0] = 'book'
            this.state.ew[1] = 'abundant'
            this.state.ew[2] = 'unruly'
            this.state.ew[3] = 'comprehensive'
            this.state.ew[4] = 'keg'
            this.state.ew[5] = 'sinister'
            this.state.ew[6] = 'Conceal'
            this.state.ew[7] = 'Calculate'
            this.state.ew[8] = 'Abolish'
            this.state.ew[9] = 'Deceive'
        } else {
            this.state.ew[0] =   ''
            this.state.ew[1] = ''
            this.state.ew[2] = ''
            this.state.ew[3] = ''
            this.state.ew[4] = ''
            this.state.ew[5] = ''
            this.state.ew[6] = ''
            this.state.ew[7] = ''
            this.state.ew[8] = ''
            this.state.ew[9] = ''

 
        }
        if (this.state.actfa == true) {
            
            this.state.fw[0] = 'فصل، کتاب، دفتر، سفر، فصل یاقسمتی از کتاب، رزرو کردن، در کتاب یادفتر ثبت کردن، توقیف کردن'
            this.state.fw[1] = 'فراوان، وافر، بسیار'
            this.state.fw[2] = ' متلاطم، یاغی، متمرد'
            this.state.fw[3] = ' وسیع، فرا گیرنده، جامع، محیط، مشروح، بسیط'
            this.state.fw[4] = '(بشکه ی کوچک که معمولا گنجایش آن از ده گالن کمتر است) چلیک، چلیک کوچک، پیپ'
            this.state.fw[5] = 'کج، فاسد، نا درست، گمراه کننده، شیطانی، بدشگون، نامیمون، بدخواه، بدیمن، منحوس'
            this.state.fw[6] = 'پوشاندن، پنهان کردن، مخفی کردن، نهفتن، نهان کردن'
            this.state.fw[7] = 'حساب کردن، بر اورد کردن، محاسبه کردن'
            this.state.fw[8] = 'منسوخ کردن، از میان بردن، بر انداختن، موقوف کردن'
            this.state.fw[9] = ' گول زدن، اغفال کردن، فریفتن، فریب دادن، مغبون کردن، پا زدن'
        }
        else{
            this.state.fw[0] = ''
            this.state.fw[1] = ''
            this.state.fw[2] = ''
            this.state.fw[3] = ''
            this.state.fw[4] = ''
            this.state.fw[5] = ''
            this.state.fw[6] = ''
            this.state.fw[7] = ''
            this.state.fw[8] = ''
            this.state.fw[9] = ''
        }
        return (

            <Container>
                <Header hasSegment>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Right>
                        <Title> لیست لغات</Title>
                    </Right>

                </Header>
                <Segment>

                    <Button first active={this.state.actfa} onPress={() => {
                        this.setState({
                            actfa: !this.state.actfa
                        })

                        var df = this.state.actfa;
                        var de = this.state.acten;
                        // ToastAndroid.show(String(de), ToastAndroid.SHORT)
                        if (de == false & df == true) {
                            this.setState({
                                acten: true
                            })
                        }
                    }}>
                        <Text>فارسی </Text>
                    </Button>
                    <Button last active={this.state.acten} onPress={() => {
                        this.setState({
                            acten: !this.state.acten
                        })
                        var df = this.state.actfa;
                        var de = this.state.acten;
                        // ToastAndroid.show(String(de), ToastAndroid.SHORT)
                        if (de == true & df == false) {
                            this.setState({
                                acten: true
                            })
                        }




                    }}>
                        <Text>انگلیسی</Text>
                    </Button>
                </Segment>

                <Content padder>


                    <List>
                           
                    <ListItem avatar onPress={() => navigate('Det', {name: 'Jane'})}><Thumbnail source={ require('../image/conceal.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[6]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[6]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/abundant.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[1]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[1]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/unruly.png') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[2]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[2]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/comprehensive.png') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[3]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[3]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/keg.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[4]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[4]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/sinister.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[5]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[5]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/book.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[0]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[0]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/calculate.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[7]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[7]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/abolish.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[8]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[8]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                        <ListItem thumbnail><Thumbnail source={ require('../image/deceive.jpg') } />
                            <Body><Text style={{fontSize:20}}>{this.state.ew[9]}</Text>
                                <Text note numberOfLines={1}>{this.state.fw[9]}</Text></Body><Right><Button transparent></Button></Right>
                        </ListItem>
                    </List>

                 
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

