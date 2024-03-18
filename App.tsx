// React Native Basic code:~

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {Text, View, Button} from 'react-native';
// import CompanyData from './components/CompanyData';

// const name = 'Aditya';
// let age = 39;
// var email = 'aditya@gmail.com';

// function App(): React.JSX.Element {
//   const fruit = () => {
//     console.warn('Function called');
//   };
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>{name}</Text>
//       <Text style={{fontSize: 30}}>{age}</Text>
//       <Text style={{fontSize: 30}}>{email}</Text>
//       <Text style={{fontSize: 30}}>{100 + 32}</Text>
//       <Text style={{fontSize: 30}}>
//         {age === 39 ? 'above 30' : 'Unknown age'}
//       </Text>
//       <Text style={{fontSize: 30}}>Hello text second compone</Text>
//       <Text style={{fontSize: 30}}>Hello text third compone</Text>
//       <Button title="Press Here"></Button>
//       <Button title="Press Me too"></Button>

//       // Use 0f component again and again :~
//       <CompanyData />
//       <UserData />
//       <Text style={{fontSize: 30}}>Button and onPress Event</Text>
//       <Button title="On Press" onPress={() => fruit()} color={'green'} />

//       <Button title="On Press2" onPress={fruit} color={'red'} />
//     </View>
//   );
// }

// function UserData() {
//   return (
//     <View>
//       <Text style={{fontSize: 20}}>Name : Aditya</Text>
//       <Text style={{fontSize: 20}}>age : 55</Text>
//       <Text style={{fontSize: 20}}>email : adityasonkar@gmail.com</Text>
//     </View>
//   );
// }
// export default App;

//Input text:~
// import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
// import {TextInput, Text, View, StyleSheet, Button} from 'react-native';

// function App(): React.JSX.Element {
//   const [name, setName] = useState('');
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>Handle text input</Text>
//       <Text style={{fontSize: 30}}>Your Name is: {name}</Text>
//       <TextInput
//         style={styles.TextInput}
//         placeholder="Enter your name:"
//         value={name}
//         onChangeText={text => setName(text)} //write the text both places: placeholder and above that
//       />
//       <Button title="Clear Input Value" onPress={() => setName('')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   TextInput: {
//     fontSize: 20,
//     color: 'red',
//     borderWidth: 2,
//     borderColor: 'yellow',
//     margin: 10,
//   },
// });
// export default App;

// Props used:~
// import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
// import {Button, Text, View} from 'react-native';

// function App(): React.JSX.Element {
//   const [name, setName] = useState('Bruce');
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>Props in React Js</Text>
//       <Button title="update Props" onPress={() => setName('Peter')} />
//       <User name={name} age={29} />
//     </View>
//   );
// }

// const User = props => {
//   // console.warn(props.name)
//   return (
//     <View style={{backgroundColor: 'green', padding: 5}}>
//       <Text style={{fontSize: 30}}>Name : {props.name}</Text>
//       <Text style={{fontSize: 30}}>Age: {props.age}</Text>
//     </View>
//   );
// };

// export default App;

// Use of state:~
// import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
// import {Text, View, Button} from 'react-native';
// import CompanyData from './components/CompanyData';

// const name="Aditya";
// let age=39;
// var email="aditya@gmail.com";

// function App(): React.JSX.Element {
// Below function for warn or press:~
//   const fruit=(val)=>{
//       console.warn(val)
//   }
// Below function for usestate:~
// const [name, setName] = useState('Aditya');
// let data = 'Sam';
// function testName() {
//   setName('Sidhu');
//   data = 'peter'; //function data is not change during rerender
// }
// return (
//   <View>
//     <UserData/>
//      <Text style={{fontSize:30}}>Button and onPress Event</Text>
//      <Button title='On Press' onPress={()=>fruit("Hello Aditya")} color={'green'}/>

//      <Button title='On Press2' onPress={fruit} color={'red'}/>
/* 
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{data}</Text>
      <Button title="Update Name" onPress={testName}></Button>
    </View>
  );
}

function UserData() {
  return (
    <View>
      <Text style={{fontSize: 20}}>Name : Aditya</Text>
      <Text style={{fontSize: 20}}>age : 55</Text>
      <Text style={{fontSize: 20}}>email : adityasonkar@gmail.com</Text>
    </View>
  );
}

export default App; */

// Style in React native
// import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import ExStyles from './style';

// function App(): React.JSX.Element {
//   return (
//     <View>
//       <Text
//         style={{
//           fontSize: 30,
//           color: 'red',
//           backgroundColor: 'green',
//           textAlign: 'center',
//         }}>
//         Style in React Native
//       </Text>
//       <Text style={styles.textBox}>I am Style in React Native</Text>
//       <Text style={styles.textBox}>Style in React Native</Text>
//       <Text style={styles.textBox}>Style in React Native</Text>
//       <Text style={ExStyles.textBox}>Style in React Native</Text>
//       <Text style={[styles.textBox, ExStyles.textBox, {marginTop: 20}]}>
//         Style in React Native
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   textBox: {
//     color: '#fff',
//     fontSize: 30,
//     backgroundColor: 'blue',
//     margin: 10,
//     // padding: 10,
//     borderRadius: 10,
//     height: 100,
//     textAlignVertical: 'center',
//     textAlign: 'center',
//     borderWidth: 7,
//   },
// });

// export default App;

// Text input and state in react-native:~
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

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {Text, View, SectionList} from 'react-native';

// function App(): React.JSX.Element {
//   const users = [
//     {
//       id: 1,
//       name: 'Aditya',
//       data: ['PHP', 'ReactJs', 'Angular', 'C++'],
//     },
//     {
//       id: 2,
//       name: 'Ritik',
//       data: ['Reactjs', 'Django', 'Angular', 'C++'],
//     },
//     {
//       id: 3,
//       name: 'Ramu',
//       data: ['Python', 'ReactJs', 'Angular', 'C++'],
//     },
//     {
//       id: 4,
//       name: 'Ansh',
//       data: ['Sqlite', 'ReactJs', 'Angular', 'C++'],
//     },
//     {
//       id: 5,
//       name: 'Govind',
//       data: ['MySql', 'ReactJs', 'Angular', 'C++'],
//     },
//   ];

//   return (
//     <View>
//       <Text style={{fontSize: 25}}>Section list in React Native</Text>
//       <SectionList
//         sections={users}
//         renderItem={({item}) => (
//           <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
//         )}
//         renderSectionHeader={({section: {name}}) => (
//           <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
//         )}
//       />
//     </View>
//   );
// }

// export default App;

/*
//  UseEffect in Life cycle method:~
import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //Jab ye mera componenets load ho tabhhi mai ise call karna chahta hu
    console.warn('Hello');
  }, []); //[] black-array:~call during mount not update

  return (
    <View>
      <Text style={{fontSize: 25}}>
        life cycle method with UseEffect Hook {count}
      </Text>
      <Button title="UpdateCount" onPress={() => setCount(count + 1)} />
    </View>
  );
}

*/

/*
// UseEffect in Life cycle method (state & props && Update in useEffect)=>part 2:~
import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  // useEffect(() => {
  //   console.warn('do some animation');
  // }, [count]); //fill the data which do you want to change
  // useEffect(() => {
  //   console.warn('call some API here');
  // }, [data]);
  return (
    <View>
      <Text style={{fontSize: 25}}>
        {data}UseEffect as componentDidUpdate {count}
      </Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
}

//Below code
const User = props => {
  // console.warn(props.info);
  useEffect(() => {
    console.warn('run this code when data props is updated');
  }, [props.info.data]);
  useEffect(() => {
    console.warn('run this code when count props is updated');
  }, [props.info.count]);
  return (
    <View>
      <Text style={{fontSize: 25, color: 'orange'}}>
        data : {props.info.data}
      </Text>
      <Text style={{fontSize: 25, color: 'orange'}}>
        count : {props.info.count}
      </Text>
    </View>
  );
};
*/

/*
// Show hide component
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Button, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text style={{fontSize: 25}}>Show/hide component</Text>
      <Button title="Show components" onPress={() => setShow(true)} />
      <Button title="Toggle components" onPress={() => setShow(!show)} />
      {show == true ? <User /> : null}
    </View>
    // Jaise hi button hide ho raha hai vaise ye unmount ho ja raha hai
  );
}

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: 'blue'}}>User Components</Text>
    </View>
  );
};
export default App;
*/
/*
//UseEffect for Unmount Life cycle && setTimeInterval:~
import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Button, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 25, color: 'red'}}>
        UseEffect for Unmount Life cycle
      </Text>
      <Button title="toggle" onPress={() => setShow(!show)} />
      {show ? <Student /> : null}
    </View>
  );
}

const Student = () => {
  let timer = setInterval(() => {
    console.warn('Timer called');
  }, 2000);
  //useEffect normally does not work on Unmounting
  useEffect(() => {
    return () => clearInterval(timer);
  });
  return (
    <View>
      <Text style={{fontSize: 25, color: 'blue'}}>Students</Text>
    </View>
  );
};
export default App;

*/

/*
//Responsive layout with flex box:~
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={Styles.main}>
      <View style={Styles.box1}>
        <View style={Styles.InnerBox}></View>
        <View style={Styles.InnerBox1}></View>
        <View style={Styles.InnerBox2}></View>
      </View>
      <View style={Styles.box2}></View>
      <View style={Styles.box3}></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: 'row',
  },
  box1: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flex: 1,
  },
  box2: {
    backgroundColor: 'blue',
    flex: 1,
  },
  box3: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  InnerBox: {
    backgroundColor: 'green',
    flex: 1,
    margin: 5,
  },
  InnerBox1: {
    backgroundColor: 'orange',
    flex: 1,
    margin: 5,
  },
  InnerBox2: {
    backgroundColor: 'pink',
    flex: 1,
    margin: 5,
  },
});

export default App;

*/

/*
// Style with Butto & touchablehightlight
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button}> Button </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}> Success </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warning]}> Warning </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}> Error </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}> primary </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: '#bbb',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'blue',
  },
  warning: {
    backgroundColor: 'pink',
  },
  error: {
    backgroundColor: 'red',
  },
});

export default App;

*/

/*
//Radio Button
import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import style from './style';

function App(): React.JSX.Element {
  const skills = [
    {
      id: 1,
      name: 'JAVA',
    },
    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'SQL',
    },
    {
      id: 4,
      name: 'CPP',
    },
    {
      id: 5,
      name: 'Node',
    },
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio == item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: 'skyblue',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});
export default App;

*/

/*
//Activity Indicator (Loader):~
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Button} from 'react-native';

function App(): React.JSX.Element {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);
    //API call in 3 second
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <View style={styles.main}>
     //  <ActivityIndicator size={80} color="white" animating={true} /> 
     // <ActivityIndicator size={100} color="green" animating={show} />

       {show ? <ActivityIndicator size="large" color="red" /> : null} 
      <Button title="show loader" onPress={displayLoader} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
*/

/*
//Modal in React Native (Dialague box):~
import {View, Text, StyleSheet, Modal, Button} from 'react-native';
import React, {useState} from 'react';
import style from './style';

function App(): React.JSX.Element {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.CenterView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>"Hello Code Step by step"</Text>
            <Button title="CloseModal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  CenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 25,
    marginBottom: 20,
  },
});

export default App;

*/

/*
//Pressable in React native:~
import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.main}>
      <Pressable
        // onPress={() => console.warn('normal on Press')}
        // onLongPress={() => console.warn('On long press')}
        onPressIn={() => console.warn('press in')}
        onPressOut={() => console.warn('press out')}>
        <Text style={styles.PressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  PressableBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});

*/

/*
//Status Bar in React Native:~
import {View, Text, StatusBar, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [hide, setHide] = useState(false);
  const [barStyles, setBarStyle] = useState('default');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle={barStyles} hidden={hide} />

      <Button title="Toggle status bar" onPress={() => setHide(!hide)} />
      <Button
        title="Update styles"
        onPress={() => setBarStyle('dark-content')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});
*/

/*
//Platform in react native:~
import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text style={{fontSize: 25}}>Platform : {Platform.OS}</Text>
      {Platform.OS == 'android' ? (
        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View>
      ) : (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      )}
      <Text style={styles.text}>Hello</Text>
      <Text style={{fontSize: 20}}>
        {JSON.stringify(Platform.constants.reactNativeVersion.minor)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Platform.OS == 'android' ? 'orange' : 'blue',
    fontSize: 30,
  },
});

*/

/*
//Webview in react native
import {View, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

export default function () {
  return <WebView source={{uri: 'https://www.youtube.com/'}} />;
}
*/

/*
//Navigation:~stack navigation
import {View, Text, Button, TextInput} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/Home';
import {Login} from './components/login';
const stack = createNativeStackNavigator();

export default function App() {
  const btnAction = () => {
    console.warn('btn pressed');
  };

  return (
    <NavigationContainer>
      <stack.Navigator //apply CSS on both "login & home" page together
        screenOptions={{
          //here you can't write title name
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}>
        <stack.Screen
          name="Login Page"
          component={Login}
          options={{
            headerTitle: () => <Button onPress={btnAction} title="left" />,
            headerRight: () => <Header />,
          }}
        />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const Header = () => {
  //we can do any operation at right/left side at header button as search, button, or api call by just calling this type of components
  return (
    // <TextInput placeholder="name" />
    <Button title="Btn" />
  );
};


*/

/*
//Top tab navigator and buttom tab navigator:~
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Other" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Login = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login</Text>
    </View>
  );
};
const Signup = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Signup</Text>
    </View>
  );
};
const Other = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Other</Text>
    </View>
  );
};

*/

/*
// API call : Fetch Rest API
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

//We need url for API call
export default function App() {
  const [data, setData] = useState(undefined);

  const GetAPIData = async () => {
    //api call
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    setData(result);
  };
  useEffect(() => {
    GetAPIData();
  }, []); //yaha array pass karne se ye sirf ek bar call hoga.
  return (
    <View>
      <Text style={{fontSize: 30}}>API Call</Text>
      {data ? (
        <View>
          <Text style={{fontSize: 30}}>{data.id}</Text>
          <Text style={{fontSize: 30}}>{data.userId}</Text>
          <Text style={{fontSize: 30}}>{data.title}</Text>
          <Text style={{fontSize: 30}}>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
}

*/

/*
//List with API call
import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [data, setData] = useState([]);

  const GetAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    GetAPIData();
  });
  return (
    <ScrollView>
      <Text style={{fontSize: 25}}>List with API call</Text>
      {data.length
        ? data.map(item => (
            <View
              style={{
                padding: 10,
                borderBlockColor: '#ccc',
                borderBottomWidth: 1,
              }}>
              <Text style={{fontSize: 20, backgroundColor: '#ddd'}}>
                Id: {item.id}
              </Text>
              <Text style={{fontSize: 20}}>Title: {item.title}</Text>
              <Text style={{fontSize: 20}}>Body: {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
}


*/

/*
//FlatList with API Data:~
import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const GetAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    // console.warn('called');
    setData(result);
  };

  useEffect(() => {
    GetAPIData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 20}}>FlatList with API Data</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                borderBlockColor: 'orange',
                borderBottomWidth: 1,
                padding: 10,
              }}>
              <Text style={{fontSize: 24, backgroundColor: '#bbb'}}>
                Id : {item.id}
              </Text>
              <Text style={{fontSize: 18}}>Title : {item.title}</Text>
              <Text style={{fontSize: 18}}>Body : {item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}

*/

//Async Storage in react native:~
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [user, setUser] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('user', 'Aditya ');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    setUser(hero);
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('user');
    setUser('');
  };

  return (
    <View style={{marginTop: 100, marginLeft: 30}}>
      <Text style={{fontSize: 30}}>AsyncStorage in React Native | {user}</Text>
      <View style={{padding: 20}}>
        <Button title="Set data" onPress={setData} />
      </View>
      <View style={{padding: 20, margin: 0}}>
        <Button title="Set data" onPress={getData} />
      </View>
      <View style={{padding: 20, margin: 0}}>
        <Button title="Remove Data" onPress={removeData} />
      </View>
    </View>
  );
};

export default App;
