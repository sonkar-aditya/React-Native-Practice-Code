// Text input and state in react-native
// import React, { useState } from 'react';
// import type {PropsWithChildren} from 'react'
// import { TextInput, Text, View, StyleSheet, Button} from 'react-native'
// function App(): React.JSX.Element {
//    const [name, setName]=useState("");
//   return (
//      <View>
//        <Text style={{fontSize:30}}>Handle text input</Text>
//        <Text style={{fontSize:30}}>Your Name is: {name}</Text>
//        <TextInput
//        style={styles.TextInput}
//        placeholder='Enter your name:'
//        value={name}
//        onChangeText={(text)=>setName(text)}  //write the text both places: placeholder and above that
//        />
//        <Button title='Clear Input Value' onPress={()=>setName('')} />
//      </View>
//   );
// };

//  const styles=StyleSheet.create({
//    TextInput:{fontSize:20,
//       color:'red',
//       borderWidth:2,
//       borderColor:'yellow',
//       margin:10
//     }
//  })
// export default App;

// Basic form in React-Native:~
// import React, { useState } from 'react';
// import type {PropsWithChildren} from 'react'
// import {StyleSheet, Text, TextInput, View, Button} from 'react-native'
// function App(): React.JSX.Element {
//   const [name, setName]=useState("");
//   const [email, setEmail]=useState("");
//   const [password, setPassword]=useState("");
//   const [display, setDisplay]=useState(false)
//   const resetFormData=()=>{
//      setDisplay(false);
//      setEmail("");
//      setName("");
//      setPassword("")
//   }
//  return (
//     <View>
//       <Text style={{fontSize:30}}>Simple form in react-native</Text>
//       <TextInput
//       style={styles.TextInput}
//        placeholder='Enter your text here'
//        onChangeText={(text)=>setName(text)}
//        value={name}
//         />
//       <TextInput
//       style={styles.TextInput}
//        placeholder='Enter your Email here'
//        onChangeText={(text)=>setEmail(text)}
//        value={email}
//         />
//       <TextInput
//       style={styles.TextInput}
//        placeholder='Enter your password here'
//        secureTextEntry={true}
//        onChangeText={(text)=>setPassword(text)}
//        value={password}
//         />
//        <View style={{marginBottom:10}}>
//         <Button color={"green"} title='print detail'
//          onPress={()=>setDisplay(true)}
//          />
//        </View>
//        <Button title='Clear Details' onPress={resetFormData} />
//        <View>
//         {
//           display ?
//           <View>
//             <Text style={{fontSize:20}}>User name is: {name}</Text>
//             <Text style={{fontSize:20}}>User Password is: {password}</Text>
//             <Text style={{fontSize:20}}>User Eamail is: {email}</Text>
//           </View>
//            : null
//         }
//        </View>
//     </View>
//  );
// };

// const styles=StyleSheet.create({
//   TextInput:{
//      fontSize:18,
//      color:'red',
//      borderWidth:2,
//      borderColor: 'blue',
//      margin:10
//   }
// })
// export default App;

// List with flatList::~

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {Text, View, FlatList, StyleSheet} from 'react-native';

// function App(): React.JSX.Element {
//   const users = [
//     {
//       id: 1,
//       name: 'Aditya',
//     },
//     {
//       id: 2,
//       name: 'Sam',
//     },
//     {
//       id: 3,
//       name: 'Sanjay',
//     },
//     {
//       id: 4,
//       name: 'Abhijeet',
//     },
//     {
//       id: 10,
//       name: 'Ram',
//     },
//   ];
//   return (
//     <View>
//       <Text style={{fontSize: 25}}> List with Flat list Components</Text>
//       <FlatList
//         data={users}
//         renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     fontSize: 24,
//     padding: 10,
//     color: 'white',
//     backgroundColor: 'blue',
//     borderColor: 'black',
//     borderWidth: 2,
//     margin: 10,
//   },
// });
// export default App;

// List with map function :without use flatList
// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {Text, View, StyleSheet, ScrollView} from 'react-native';

// function App(): React.JSX.Element {
//   const users = [
//     {
//       id: 1,
//       name: 'Aditya',
//     },
//     {
//       id: 2,
//       name: 'Sam',
//     },
//     {
//       id: 3,
//       name: 'Lakshman',
//     },
//     {
//       id: 4,
//       name: 'Rajiv',
//     },
//     {
//       id: 10,
//       name: 'Ram',
//     },
//     {
//       id: 11,
//       name: 'Raj',
//     },
//     {
//       id: 12,
//       name: 'Ramesh',
//     },
//     {
//       id: 13,
//       name: 'Kamlesh',
//     },
//     {
//       id: 14,
//       name: 'Kallu',
//     },
//     {
//       id: 15,
//       name: 'Ritik',
//     },
//     {
//       id: 16,
//       name: 'Govind',
//     },
//     {
//       id: 17,
//       name: 'Ansh',
//     },
//     {
//       id: 18,
//       name: 'Mritunjay',
//     },
//     {
//       id: 19,
//       name: 'Shubham',
//     },
//   ];
//   return (
//     <View>
//       <Text style={{fontSize: 25}}> List with Map function</Text>
//       <ScrollView>
//         {users.map(item => (
//           <Text style={styles.item}>{item.name}</Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     fontSize: 24,
//     padding: 10,
//     color: 'white',
//     backgroundColor: 'blue',
//     borderColor: 'black',
//     borderWidth: 2,
//     margin: 10,
//   },
// });
// export default App;

// Grid with dynamic data:~

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {Text, View, StyleSheet, ScrollView} from 'react-native';

// function App(): React.JSX.Element {
//   const users = [
//     {
//       id: 1,
//       name: 'Aditya',
//     },
//     {
//       id: 2,
//       name: 'Sam',
//     },
//     {
//       id: 3,
//       name: 'Lakshman',
//     },
//     {
//       id: 4,
//       name: 'Rajiv',
//     },
//     {
//       id: 10,
//       name: 'Ram',
//     },
//     {
//       id: 11,
//       name: 'Raj',
//     },
//     {
//       id: 12,
//       name: 'Ramesh',
//     },
//     {
//       id: 13,
//       name: 'Kamlesh',
//     },
//     {
//       id: 14,
//       name: 'Kallu',
//     },
//     {
//       id: 15,
//       name: 'Ritik',
//     },
//     {
//       id: 16,
//       name: 'Govind',
//     },
//     {
//       id: 17,
//       name: 'Ansh',
//     },
//     {
//       id: 18,
//       name: 'Mritunjay',
//     },
//     {
//       id: 19,
//       name: 'Shubham',
//     },
//   ];

//   return (
//     <View>
//       <Text style={{fontSize: 35}}>Grid with Dynamic data</Text>
//       <ScrollView>
//         <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
//           {users.map(item => (
//             <Text style={styles.item}>{item.name}</Text>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     fontSize: 25,
//     backgroundColor: 'blue',
//     color: '#fff',
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     margin: 5,
//     padding: 5,
//     width: 110,
//     height: 110,
//   },
// });

// export default App;

//Component in Loop with Flatlist:~
// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {Text, View, FlatList} from 'react-native';
// import UserData from './components/UserData';

// function App(): React.JSX.Element {
//   const users = [
//     {
//       id: 1,
//       name: 'Aditya',
//       email: 'abc@gmail.com',
//     },
//     {
//       id: 2,
//       name: 'Sam',
//       email: 'sam@gmail.com',
//     },
//     {
//       id: 3,
//       name: 'Lakshman',
//       email: 'laksham@gmail.com',
//     },
//     {
//       id: 4,
//       name: 'Rajiv',
//       email: 'rajiv@gmail.com',
//     },
//     {
//       id: 10,
//       name: 'Ram',
//       email: 'ram@gmail.com',
//     },
//     {
//       id: 11,
//       name: 'Raj',
//       email: 'raj@gmail.com',
//     },
//   ];

//   return (
//     <View>
//       <Text style={{fontSize: 25}}>Components in loop with FlatList</Text>
//       <FlatList
//         data={users}
//         renderItem={({item}) => <UserData item={item} />} //here we pass the props & also we can pass multiple props
//       />
//     </View>
//   );
// }

// export default App;

// Section list :~
// Make sectionData with array, SectionList means array data within the array

import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View, SectionList} from 'react-native';

function App(): React.JSX.Element {
  const users = [
    {
      id: 1,
      name: 'Aditya',
      data: ['PHP', 'ReactJs', 'Angular', 'C++'],
    },
    {
      id: 2,
      name: 'Ritik',
      data: ['Reactjs', 'Django', 'Angular', 'C++'],
    },
    {
      id: 3,
      name: 'Ramu',
      data: ['Python', 'ReactJs', 'Angular', 'C++'],
    },
    {
      id: 4,
      name: 'Ansh',
      data: ['Sqlite', 'ReactJs', 'Angular', 'C++'],
    },
    {
      id: 5,
      name: 'Govind',
      data: ['MySql', 'ReactJs', 'Angular', 'C++'],
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 25}}>Section list in React Native</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
}

export default App;
