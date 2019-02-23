import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, Button, Icon, Text, Right, Drawer, Header, Container } from 'native-base';
import { Fot } from './comps/Fot'
import { Hdr } from './comps/Hdr'
import Sidebar from './comps/Sidebar'
class mainmenu extends Component {
    closedrw = () => {
        this.Drawer._root.close()
    }
    opendrw = () => {
        this.Drawer._root.open()
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Drawer
                ref={(ref) => { this.Drawer = ref; }}
                content={<Sidebar />}
                onClose={() => this.closedrw()}
            >
                <Container>
                    <Header>

                        <Button transparent style={{ width: 20, height: 35, justifyContent: 'center' }} onPress={() => this.opendrw()}>
                            <Icon name='more' style={{ width: 20, height: 35, justifyContent: 'center' }} />
                        </Button >


                        <Button vertical  >
                            <Icon name='person' style={{ width: 20 }} />
                            <Text style={{ flex: 1, fontSize: 14, color: 'white' }}>مبتدی (1)</Text>

                        </Button>
                        <Button style={{ flex: 1, width: 20 }} onPress={() => navigate('selc', { name: 'Jane' })}>
                            <Icon name='heart' style={{ width: 20 }} />

                        </Button>
                        <Text style={{ flex: 4, fontSize: 18, fontWeight: 'bold', color: 'white', top: 15 }}>{this.props.title}</Text>

                        <Icon style={{ color: 'white', padding: 4, top: 12 }} transparent name={this.props.icon} />



                    </Header>



                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        {/* <View style={{ flex: 1 }}> */}
                        {/* <Hdr icon="home" title="منوی اصلی" navigation={this.props.navigation}></Hdr> */}
                        {/* </View > */}
                        <View style={{ flex: 9 }} >
                            <Content>
                                <Button warning block rounded style={{ marginTop: 5, backgroundColor: '#959' }}>
                                    <Icon name='arrow-back' />
                                    <Right>

                                        <Text>  کلمات روز اول   </Text>
                                    </Right>
                                    <Icon name='eye' />
                                </Button>
                                <Button block rounded style={{ marginTop: 1, backgroundColor: '#859' }} >
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text style={{ color: 'white' }}>  کلمات روز دوم   </Text>
                                    </Right>
                                    <Icon name='eye' />

                                </Button>
                                <Button warning block rounded style={{ marginTop: 1, backgroundColor: '#759' }}>
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text>  کلمات روز سوم   </Text>
                                    </Right>
                                    <Icon name='eye' />

                                </Button>
                                <Button block rounded style={{ marginTop: 1, backgroundColor: '#659' }} onPress={() => navigate('mapx', { name: 'Jane' })}>
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text style={{ color: 'white' }}>  کلمات روز چهارم   </Text>
                                    </Right>
                                    <Icon name='eye' />

                                </Button>
                                <Button warning block rounded style={{ marginTop: 1, backgroundColor: '#669' }} onPress={() => navigate('wordshow', { name: 'Jane' })}>
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text style={{ padding: 10, fontSize: 20 }}>  کلمات روز پنجم   </Text>
                                    </Right>
                                    <Icon style={{ color: 'red' }} name='flame' />

                                </Button>
                                <Button block rounded style={{ marginTop: 1, backgroundColor: '#679' }}>
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text style={{ color: 'white' }}>  کلمات روز ششم   </Text>
                                    </Right>
                                    <Icon name='rocket' />
                                </Button>
                                <Button warning block rounded style={{ marginTop: 1, backgroundColor: '#689' }} >
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text>  کلمات روز هفتم   </Text>
                                    </Right>
                                    <Icon name='rocket' />
                                </Button>
                                <Button block rounded style={{ marginTop: 1, backgroundColor: '#699' }}>
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text style={{ color: 'white' }}>  کلمات روز هشتم   </Text>
                                    </Right>
                                    <Icon name='rocket' />
                                </Button>
                                <Button warning block rounded style={{ marginTop: 1, backgroundColor: '#698' }}>
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text>  کلمات روز نهم   </Text>
                                    </Right>
                                    <Icon name='rocket' />
                                </Button>
                                <Button rounded block style={{ marginTop: 1, backgroundColor: '#797' }}>
                                    <Icon name='arrow-back' />
                                    <Right>
                                        <Text style={{ color: 'white' }}>  کلمات روز دهم   </Text>
                                    </Right>
                                    <Icon name='rocket' />
                                </Button>

                            </Content>

                        </View >
                        <View style={{ flex: 1 }}>
                            <Fot navigation={this.props.navigation}>kk</Fot>
                        </View >
                    </View >
                </Container>
            </Drawer>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 9,
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


export default mainmenu;