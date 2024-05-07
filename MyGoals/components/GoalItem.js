import { StyleSheet, View, Text, Pressable} from"react-native"

function GoalItem({itemData, OnDeleteItem}){
return(
    <Pressable onPress={OnDeleteItem}>
        <View style={styles.goalsItem}>
            <Text style={styles.goalText}>{itemData.item}</Text>

        </View>
    </Pressable>
)
}

export default GoalItem

const styles = StyleSheet.create({ 
goalsItem: {
    margin:8,
    padding:8,
    border:6,
    backgroundColor: "#8576FF",
    color: "white"
},
goalText:{
    color:"white"
}
})