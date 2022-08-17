import React from "react";
import Cards from '../Cards';
import './SignUp.css';


function SignUp () {
    return (
      <div className="sign-up-page">
        
        <Cards
        title='BMW'
        body='SEDAN'
        imageurl='https://img.freepik.com/free-photo/silver-metallic-color-sport-sedan-road_114579-5035.jpg?size=626&ext=jpg'
        color='SİLVER'
        model='320i'
        />
        <Cards
        title='AUDİ'
        body='1.6 TDI'
        imageurl= 'https://www.arabavs.com/images/a3-sedan-2021.jpg'
        color='BLACK'
        model='A3 SEDAN'
        />

        <Cards
        title='MINI COOPER'
        body=' 2.0 motor'
        imageurl='https://www.arabafirsatlari.com/wp-content/webp-express/webp-images/uploads/2021/09/2021-mini-cooper-countryman-jcw-103-1590695981.jpg.webp'
        color='GREEN'
        model='COUNTRYMAN'
        />

        <Cards
        title='CHEVROLET'
        body='3.6'
        imageurl='https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?size=626&ext=jpg'
        color='YELLOW'
        model='CAMARO RS'
        />

        <Cards
        title='RANGE ROVER'
        body='2.0'
        imageurl='https://img.freepik.com/free-photo/blue-jeep-parking-public-zone_114579-4042.jpg?size=626&ext=jpg'
        color='NAVY BLUE'
        model='2021'
            />

        <Cards 
        title='VOLVO'
        body='T6 TURBO MOTOR'
        imageurl='https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg'
        color='WHİTE'
        model='XC90'
        />  

        <Cards 
        title='AUDİ'
        body='5.2'
        imageurl='https://img.freepik.com/free-photo/black-sport-coupe-car-drive-highway_114579-4022.jpg?w=1060&t=st=1660566901~exp=1660567501~hmac=7c09fa7bec79bc88c252ad93aacd43d667f3f3a85644b6af223e105fe595e69b'
        color='BLACK'
        model='R8'
        /> 

        <Cards
        title='MERCEDES'
        body=''
        imageurl='https://img.freepik.com/free-photo/grey-metallic-jeep-with-blue-stripe-it_114579-4080.jpg?size=626&ext=jpg'
        color='SİLVER'
        model='E200 D'
        /> 

        <Cards 
        title='PORCHE'
        body='3.8'
        imageurl='https://cdn.motor1.com/images/mgl/VmVwy/s1/4x3/porsche-911-turbo-s.webp'
        color='BLACK'
        model='911 TURBO S'
        />

      </div>

    )

}

export default SignUp;
    


























