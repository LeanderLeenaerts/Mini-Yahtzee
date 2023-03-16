import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
  },
  basicText: {
    fontSize: 20,
  },
  rulesText: {
    fontSize: 15,
    textAlign: "center",
    padding: 10,
  },

  miniHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    marginTop: 20,
    backgroundColor: "#e1e1e1",
    fontSize: 30,
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    fontSize: 30,
    backgroundColor: "#47f230",
    flexDirection: "row",
  },
  footer: {
    marginTop: 20,
    backgroundColor: "#47f230",
    flexDirection: "row",
    fontSize: 10,
  },
  title: {
    color: "#000000",
    fontWeight: "bold",
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  author: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    margin: 10,
  },
  gameboard: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gameinfo: {
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    marginTop: 10,
  },
  row: {
    marginTop: 20,
    padding: 10,
  },
  flex: {
    flexDirection: "row",
  },
  button: {
    margin: 20,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#47f230",
    width: 150,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 20,
  },
  points: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 15,
    textAlign: "center",
  },
  dicePoints: {
    flexDirection: "row",
    width: 280,
    alignContent: "center",
  },
  sum: {
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    marginTop: -20,
  },
  bonus: {
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 15,
    marginTop: 10,
  },
});
