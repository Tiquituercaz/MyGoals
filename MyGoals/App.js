import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, scrollView, flatList } from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInnput from "./components/GoalInput"

export default function App() {
  const [goals, setGoals] = useState([])

  function handleInputGoal(enteredGoalText) {
    //
    //
    setGoals(() => [...goals,
    {text: enteredGoalText, key: Math.random().toString()}])
  }

function handleDeleteGoal(){
  console.log("DELETE")
}

  return (
    <View style={styles.container}>
     <flatList
      data={goals}
      renderItem={(itemData)=> {
        return(
          <GoalItem itemData={itemData} OnDeleteItem={handleDeleteGoal}
          />
        )
      }}
  keyExtractor={(item)=>{
    return item.id
  }}
  />
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontañ:20,
  },
  goalsContainer: {
    flex:5
  }
});
