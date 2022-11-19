import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.actions.fetchWorkshops();
  }

  _createWorkshop = () => {
    const {text} = this.state;
    const workshop = {text};
    this.props.actions.createWorkshop(workshop);
    this.setState({text: ''});
  };

  _renderWorkshop(workshop) {
    return <Text>{workshop.text}</Text>;
  }

  _renderWorkshops() {
    const {data, status} = this.props.workshops;
    if (status === 'failure') {
      return <Text>{'Error'}</Text>;
    } else if (status == 'loading') {
      return <Text>{'Loading'}</Text>;
    }
    return <View>{data.map(workshop => this._renderWorkshop(workshop))}</View>;
  }

  _renderCreateForm() {
    return (
      <View>
        <TextInput
          style={styles.textfield}
          placeholder={'Text'}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Button title="Create" onPress={this._createWorkshop} />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderWorkshops()}
        {this._renderCreateForm()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginHorizontal: 16,
  },
  textfield: {
    backgroundColor: '#eee',
    padding: 16,
    marginTop: 8,
  },
});