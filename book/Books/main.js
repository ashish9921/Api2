const cityName =document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status= document.getElementById('temp_status')
const temp= document.getElementById('temp')
const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal== ""){
        city_name.innerText = `Please Write the Name before serch`;

    }else{
        try{
            let url =`http://localhost:3000/data/${cityVal}`;
            const response = await fetch(url);
            const data=await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].Name}`
            console.log(arrData[0].Name)
            temp.innerText =arrData[0].aurthor;
            temp_status.innerText = arrData[0].Price;

            

            

        }catch{
            // city_name.innerText = `Please enter City name properly`;
        }

    }

}
submitBtn.addEventListener('click',getInfo);