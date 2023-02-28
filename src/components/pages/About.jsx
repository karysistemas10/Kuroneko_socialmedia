import React from 'react';

export default function About() {
     return (
          <div>
               <div>
                    <h1 className='text-3xl font-bold mb-2'>Acerca del team 👩🏻‍💻😺 Kuroneko Social Media</h1>
                    <h3 className='text-lg'>Este proyecto fue desarrolado durante el curso impartido por Bedu .</h3>
                    <h3 className='text-lg'>La autora"Kary" 💁🏻‍♀️ amante de los gatos, ha creado este sitio web 🤖 conocido como Kuroneko Social Media 🥳.</h3>
                    <h3 className='text-lg'>Y estos fueron su inspiración y acompañantes en este largo camino de 6 meses...</h3>
               </div>


               {/* Michis y yo: */}
               <div className='flex flex-col mx-auto max-w-lg'>
                    <div className='border-2 border-black rounded p-2 my-2'>
                         <img className='devCats mx-auto rounded' alt='Guera Cat' src='https://i.imgur.com/jxwyygU.png'></img>
                         <br></br>
                         <h1 className='font-bold text-xl'>Güera 🐈</h1>
                         <br></br>
                         <h4>Güera es una michi super dormilona tiene 4 años. Ama dormir en tus piernas o en tu pancita. Es muy cariñosa y calida con todas las personas que nos visitan.Le gusta la música extraña y oscura, las conversaciones profundas sobre filosofía/el estado de la humanidad y el humor inmaduro, aunque irónicamente pretende disfrutar del humor inmaduro. Si un dia me visitas seguro te dejara muchos pelitos de recuerdo en tu ropa 😻..</h4>
                    </div>
                    <div className='border-2 border-black rounded p-2 my-2'>
                         <img className='devCats mx-auto rounded' alt='Hikary Cat' src='https://i.imgur.com/EVHDU62.jpg'></img>
                         <br></br>
                         <h1 className='font-bold text-xl'>Hikary 🐈‍⬛</h1>
                         <br></br>
                         <h4>Hikary la michi darks vampiro 😅! No me preguntes por que. Tiene 3 años. Ella es una gran acompañente siempre te cuida de los peligros que puede haber en el baño o mientras trabajas 💀. Ama dormir enroscada en su nido y sobre todas las cosa ama morder ligas para el cabello, lo siento ya no tengo ninguna 🥹</h4>
                    </div>
                    <div className='border-2 border-black rounded p-2 my-2'>
                         <img className='devCats mx-auto rounded' alt='Gordito Cat' src='https://i.imgur.com/MJAh7ib.jpg'></img>
                         <br></br>
                         <h1 className='font-bold text-xl'>Artemis 😹</h1>
                         <br></br>
                         <h4>Artemis,temis, temistocles alias el Gordito,tiene 3 año. Este michi lo rescate de una venta, valio cada peso, ahora es un michi regordete que me pide amor siempre que estoy trabajando, como diciendo ya hazme caso y amame.Ademas de que es un excelente hermano mayor de crezzy, odia las alturas cuando lo cargas grita como si lo estuvieras matando, algo no normal en un gato pero asi lo amo 🫶🏻 </h4>
                    </div>
                    <div className='border-2 border-black rounded p-2 my-2'>
                         <img className='devCats mx-auto rounded' alt='Crazzy Cat' src='https://i.imgur.com/RXmNDJd.jpg'></img>
                         <br></br>
                         <h1 className='font-bold text-xl'>Crazzy ☠️ 🤡</h1>
                         <br></br>
                         <h4>Bueno esta michi es hija de la gatita que tiene mi mama, tiene 10 meses, y por su nombre Crazzy te imaginaras que no rompe ni un vaso, exacto es todo lo contrario es un desastre, corre como loca, araña todo a su paso, luego te enseñare mis manos 😾. Es una michi muy loca y divertida que siempre me saca una sonrisa con sus ocurrencias y por que no una que otra cana 👵🏻! Ama dormir cerca de la computadora, asi que es mi compañera de oficina 👩🏻‍💻😺</h4>
                    </div>
                    <div className='border-2 border-black rounded p-2 my-2'>
                         <img className='devCats mx-auto rounded' alt='Kary Cat' src='https://i.imgur.com/BtOScCp.png'></img>
                         <br></br>
                         <h1 className='font-bold text-xl'>Kary ✌🏻👩🏻‍💻</h1>
                         <br></br>
                         <h4>Bueno les cuento que tengo 31 años, soy casada 👰🏻‍♀️ y vivo en CDMX desde el 2016, originaria de Ixmiquilpan, Hidalgo,trabajo actualmente como IT Engineer. Estoy muy contenta por terminar esta meta del curso de Bedu como Fullstack Development, y espero seguir cumpliendo esta y muchas mas metas y sueños como desarrolladora. 💋💜Amen 🙌🏻🙏🏻</h4>
                    </div>
               </div>
          </div>
     )
}