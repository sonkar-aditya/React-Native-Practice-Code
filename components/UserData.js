import {Text, View, StyleSheet} from 'react-native';
export default UserData = (props) => {
  const item = props.item;  //here props name is item
  return (
    <View style={styles.box}>
      <Text style={styles.items}>{item.name}</Text>
      <Text style={styles.items}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    fontSize: 20,
    color: 'black',
    flex: 1,
    margin: 2,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'orange',
    marginBottom: 5,
  },
});