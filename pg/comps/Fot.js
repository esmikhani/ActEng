import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import { Text, View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
export class Fot extends Component {
    constructor(props) {
        super(props);
        this.state = { navigation: props.navigation };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View >

                <Content />

                <Footer >
                    <FooterTab>

                        <Button active vertical>
                            <Icon name="pulse" />
                            <Text>امتیاز</Text>
                        </Button>
                        <Button active vertical>
                            <Icon active name="bicycle" />
                            <Text>تمرین انگلیسی</Text>
                        </Button>
                        <Button vertical onPress={() => navigate('mapx', { name: 'Jane' })}>
                            <Icon name="paper" />
                            <Text>تمرین فارسی</Text>
                        </Button>
                        <Button vertical onPress={() => navigate('mainmenu', { name: 'Jane' })}>
                            <Icon name="home" />
                            <Text>منوی اصلی</Text>
                        </Button>

                    </FooterTab>
                </Footer>


            </View>
        );
    }

}


