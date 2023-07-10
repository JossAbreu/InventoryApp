import {StyleSheet} from 'react-native'
import React  from 'react'






export const styles= StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: "rgba(253, 131, 131, 0.753)",
    borderRadius: 100,
    padding: 5,
    elevation: 500,
    fontWeight: '900',
  },
  FooterText: {
    color:'#000000',
    fontWeight: '400',
  },
  selecteTextFooter: {
    color: 'white',
    fontWeight: '900',
    textShadowRadius:3,
    textShadowColor: '#000000'
  },
  Tittles: {
    color: 'white',
    fontSize: 20,
    textShadowColor: '#000000'
  },
  lightTheme :{
    backgroundColor: 'white',
    color: 'black',
    textColor: 'black',
  },
  darkTheme :{
  backgroundColor: 'black',
  color: 'white',
  textColor: 'white',
  }

});

export const StylesTables = StyleSheet.create({

  head: { width: '100%', height: 40, alignItems: 'center', backgroundColor: '#808B97' },
  text: { margin: 6, textAlign: 'center', alignItems: 'center' },
  row: { flexDirection: 'row', backgroundColor: '#ffffff' },
  btn: { width: 48, height: 20, backgroundColor: '#ff4141d1', borderRadius: 3 },
  btnText: { textAlign: 'center', color: '#ffffff' }
});
