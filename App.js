import * as React from 'react';
import { TouchableOpacity,Image } from 'react-native';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import {Header} from 'react-native-elements';
import db from './localdb';


export default class App extends React.Component {
  constructor(){
   super();
   this.state={
   text:"",
   chunks:[]
  }
}
  render() {
    return (
      <View style={styles.container}>
       <Header
       backgroundColor={'#9c8219'}
       centerComponent={{text:'Monkey Chunkey',style:{color:'#fff',fontSize:20}}}
       />
        <Image
        style={styles.ImageIcon}
        source={{
          uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'
        }}
        />
        <TextInput
         style={styles.inputBox}
         onChangeText={(text)=>{
           this.setState({
             text:text
           })
         }}
         value={this.state.text}
        />
        <TouchableOpacity 
        style={styles.goButton}
        onPress={() => {
          this.setState({ chunks: db[this.state.text].chunks });
        }}>
        <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
         <View>
           {this.state.chunks.map(item =>{
             return <Text style={styles.displayText}>{item}</Text>
           })}
         </View>
         <View>
          {this.state.chunks.map(item => {
            return (
              <TouchableOpacity
              style={styles.chunkButton}
              >
              <Text style={styles.displayText}>{item}</Text>
              </TouchableOpacity>
              );
          })}
        </View>
        
     </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox:{
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
  },
  goButton:{
    width:'50%',
    height:55,
    alignSelf:'center',
    padding:10,
    margin:10
  },
  buttonText:{
    textAlign:'center',
    fontSize:38,
    fontWeight:'bold'
  },
  displayText:{
    textAlign:'center',
    fontSize:38,
  },
  ImageIcon:{
    width:150,
    height:150,
    marginLeft:130
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});
