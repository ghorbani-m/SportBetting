import React from "react";
import { StyleSheet} from "react-native";
export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50
  },
  header: {
    width: "100%",
    padding:25,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerItem: {
    justifyContent: "center",
    alignItems: "center"
  },
  statisticsText: {
    fontWeight: "800"
  },
  followBtn: {
    elevation: 0,
    borderRadius: 25,
    width: "95%",
  },
  detialTitle:{
    fontWeight: "800",
    //paddingBottom:10
  },
  historyDetailContainer:{
      flex:1,
      width:"100%",
      marginTop:20,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding:10

  },
  detailContainer:{
      width:"100%",
      flexDirection: "row",
      paddingTop:30,
      //paddingBottom:15,
  },
  detailDate:{
      flex:1,
  },
  detailNumberContainer:{
      flex:2,
      flexDirection:"row",
      //justifyContent: "space-around",
  },
  disableText:{
      color:"grey"
  },
  activeText:{
      color:"green"
  },
  nextIcon:{
    color:"grey",
    alignSelf: "flex-end"
  },
  numberContainer:{
    flex:2,
    justifyContent: "center",
    alignContent: "center",
  },
  iconContainer:{
    flex:1,
    justifyContent: "flex-end",
    alignContent: "flex-end",
   
  },
  number:{
    fontSize: 12,
    alignSelf: "center",
    fontWeight:"600"
  }
}));
