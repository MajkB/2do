import { StyleSheet } from "react-native";

//TODO: divide up "styles" better.
const styles = StyleSheet.create({
  stage: {
    backgroundColor: "#EFEFF4",
    paddingTop: 20,
    paddingBottom: 20
  },
  checkbox: {
    padding: 15
  },
  listHeader: {
    backgroundColor: "#CDDC89",
    fontSize: 20,
    padding: 5,
    color: "#fff"
  },
  listItem: {
    fontSize: 15,
    color: "#000",
    backgroundColor: "#F5F5F5",
    flexDirection: "row"
  },
  listText: {
    flex: 1,
    padding: 15
  },
  listImage: {
    width: 20,
    height: 20,
    padding: 15
  },
  addButton: {
    fontSize: 40,
    fontWeight: "bold"
  },
  checkedTask: {
    textDecorationLine: "line-through",
    color: "grey",
    padding: 20
  },
  uncheckedTask: {
    padding: 20
  },
  addNewTask: {
    padding: 20
  }
});

export default styles;
