const calcTemp= ()=>{
    const numTemp= document.getElementById('temp').value;
    const tempSelected= document.getElementById('temp_diff');
    const valueTemp= temp_diff.options[tempSelected.selectedIndex].value;

    let result;

    const celToFah = (num)=>{
        let fah= Math.round((num*9/5)+32);
        return fah;
    }
    const fahToCel = (num)=>{
        let cel= Math.round((num-32)*5/9);
        return cel;
    }
    if(valueTemp == 'cel'){
        result= celToFah(numTemp);
        document.getElementById('result').innerHTML=` = ${result}°Fahrenheit`;
    }else{
        result= fahToCel(numTemp);
        document.getElementById('result').innerHTML=` = ${result}°Celsius`;
    }
}