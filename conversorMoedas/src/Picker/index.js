import { Picker } from "@react-native-picker/picker"

export default function PickerItem(props) {

    let moedasItem = props.moedas.map( (item,index) => {
        return <Picker.Item value={item.key} key={index} label={item.key}/>
    })
    return (
        <Picker 
         selectedValue={props.moedaSelecionado}
         onValueChange={ (value) => props.onchange(value)}>
           {moedasItem}
        </Picker>
    )
}