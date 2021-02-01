import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
   
      display:'flex',
      flexWrap:'wrap',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100%'
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    cardContainer:{
        margin:1
    },
    frontCard:{
        backgroundColor:'#D86C70',
    },
    backCard:{
        backgroundColor:'yellow',
    },
    card:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    reset: {
        width:'100%',
        height:50,
        backgroundColor: "#8fa571",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      
        position: 'absolute',
        bottom: 0
    },
    resetText:{
        color:'white',
        fontSize: 30
    },
    scoreText:{
        
        display:'flex',
        height:270,
        justifyContent:'flex-end',
        alignItems:'center',
      
        bottom: 0
    },
    score:{
        fontSize: 40,
    }
  });

export default styles;