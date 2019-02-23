import React, { Component } from 'react';
import { Alert, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Center, Button, Icon, Badge, Text, Card, CardItem, Body, Right, Form, Item, Picker, CheckBox, ListItem, Accordion } from 'native-base';
import { Fot } from './comps/Fot'
import { Hdr } from './comps/Hdr'


class mapx extends Component {
  bastn() {
    Alert.alert('bast'),
      this.setState({
        roozac: false
      }
      )
  }
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      selected2: undefined,
      roozac: Boolean,
      chk1: false,

    };
  }

  onValueChange2(value: string) {
    this.setState({

      selected2: value,

    });

  }
  onValueChange1(value: string) {
    this.setState({
      selected1: value,


    });
  }
  toggleCheckbox(id) {
    let checkboxes = this.state.checkboxes;

    if (checkboxes && checkboxes.includes(id)) {
      const index = checkboxes.indexOf(id);
      checkboxes.splice(index, 1);
    } else {
      checkboxes = checkboxes.concat(id);
    }

    this.setState({ checkboxes });
    console.log("MS check a4: " + checkboxes && checkboxes.includes(id))
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.selected1 == 'key3') {
      //Alert.alert(this.state.selected1);
      this.state.roozac = true
    } else {
      this.state.roozac = false
    }

    return (

      // <View style={{ flex: 1, flexDirection: 'column' }}>
      <Container>
        <Hdr icon="home" title="منوی اصلی" navigation={this.props.navigation}></Hdr>

        <View style={{ flex: 9 }} >

          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange1.bind(this)}
              >
                <Picker.Item label="کلمات امروز" value="key0" />
                <Picker.Item label="کلمات روز اول تا پنجم" value="key1" />
                <Picker.Item label="کلمات کل دوره" value="key2" />
                <Picker.Item label="روزهای انتخابی:" value="key3" />
              </Picker>
            </Item>
            <Text>roozac:{String(this.state.roozac)}</Text>
            {this.state.roozac == true ? (
              <ListItem style={{ flexDirection: 'column', width: 370 }} >
                <CheckBox checked={this.state.chk1} onPress={() => this.setState({ chk1: !this.state.chk1 })} /><Body><Text>   روز اول</Text></Body>
                <Button block rounded style={{ marginTop: 1, backgroundColor: '#859' }} onPress={() => this.setState({ roozac: false })} >
                  <Icon name='arrow-back' />
                  <Right>
                    <Text style={{ color: 'white' }}>  ثبت   </Text>
                  </Right>
                  <Icon name='arrow-up' />

                </Button>
              </ListItem>
            )
              : (null)

            }
          </Form>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="پخش صدا : فعال" value="keyb0" />
                <Picker.Item label="پخش صدا غیر فعال" value="keyb1" />
              </Picker>
            </Item>
          </Form>
        </View >
        <View style={{ flex: 1 }}>
          <Fot navigation={this.props.navigation}>kk</Fot>
        </View >
        {/* </View > */}
      </Container>
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


export default mapx;