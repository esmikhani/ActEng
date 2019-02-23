import React, { Component } from 'react';
import { Container, Header, Text, Right, Button, Icon, Title, Left, Drawer } from 'native-base';
import { View, Alert } from 'react-native';
import Sidebar  from '../comps/Sidebar'

export class Hdr extends Component {
    closedrw = () => {
        this.Drawer._root.close()
    }
    opendrw = () => {
        this.Drawer._root.open()
    }
    constructor(props) {
        super(props);
        this.state = { navigation: props.navigation };
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
                                <Text style={{ flex: 1, fontSize: 14, color: 'white' }}>مبتدی (0)</Text>

                            </Button>
                            <Button style={{ flex: 1, width: 20 }} onPress={() => navigate('selc', { name: 'Jane' })}>
                                <Icon name='heart' style={{ width: 20 }} />

                            </Button>
                            <Text style={{ flex: 4, fontSize: 18, fontWeight: 'bold', color: 'white', top: 15 }}>{this.props.title}</Text>

                            <Icon style={{ color: 'white', padding: 4, top: 12 }} transparent name={this.props.icon} />



                        </Header>

                </Container>
            </Drawer>
        );
    }

}