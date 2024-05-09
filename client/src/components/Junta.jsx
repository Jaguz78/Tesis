import React from 'react'
import H3 from './H3'
import P from './P'

export default function Junta() {

    const data=[
        {
            rol:"Rector",
            profesion:"Ing. MSc. ",
            nombre:"Murphy Olympo Paiz Recinos"
        }, 
        {
            rol:"Presidente",
            profesion:"Lic. Zoot. ",
            nombre:"Erwin Gonzalo Eskenasy Morales"
        },
        {
            rol:"Representante De Docentes",
            profesion:"Licda. T.S. ",
            nombre:"Floricelda Chuquin Yoy"
        },  
        {
            rol:"Representante De Egresados",
            profesion:"Lic. Abg. Not. ",
            nombre:"Edwin Alcides Barrios Sosa"
        },
        {
            rol:"Representante Estudiantil",
            profesion:"PEM ",
            nombre:"Disraely Dárin Manfredy Jom Hernandez"
        }, 
        {
            rol:"Coordinador Académico",
            profesion:"M.V. ",
            nombre:"Enrique Armando Juarez Quim"
        }, 
        {
            rol:"Coordinador de la Carrera",
            profesion:"Ing. Electr. ",
            nombre:"Javier Coronado"
        }, 
        {
            rol:"Coordinador",
            profesion:"Ing. ",
            nombre:"Jose Alejandro Guzmán Heinemann"
        }, 
        {
            rol:"Secretario",
            profesion:"Ing. ",
            nombre:"Edgar Anthony Enmanuel Gonzalez Lopez"
        } ,
        {
            rol:"Vocal",
            profesion:"Ing. ",
            nombre:"María de los Angeles Aguilar Santiago"
        },
    ]

  return (
    <div className='w-[100%] h-full border-2 border-gray-600 rounded-2xl p-4 shadow-xl'>
        <H3 name={"Autoridades Universitarias"} />
        <H3 name={"Rector Magnífico"} /><P align ={"text-center"} name={data[0].profesion + data[0].nombre}/>
        <H3 name={"Consejo Directivo"}/>
        <div className='mx-10 flex justify-between'>
            <div className=' w-[40%] '> 
                <P name={"Presidente"} />
                <P name={"Representante De Docentes"} />
                <P name={"Representante De Egresados"} />
                <P name={"Representante Estudiantiles"} />
            </div>
            <div className='text-right w-[60%]'> 
                <P name={data[1].profesion + data[1].nombre} />
                <P name={data[2].profesion +data[2].nombre} />
                <P name={data[3].profesion+data[3].nombre} />
                <P name={data[4].profesion+data[4].nombre} />
            </div>
        </div>
        <H3 name={"Coordinador Académico"} /><P align ={"text-center"} name={data[5].profesion+data[5].nombre}/>
        <H3 name={"Coordinador de la Carrera"} /><P align ={"text-center"} name={data[6].profesion+data[6].nombre}/>
        <H3 name={"Comision de Trabajos de Graduación"}/>
        <div className='mx-10 flex justify-between'>
            <div className='w-[30%]  '> 
                <P name={"Coordinador"} />
                <P name={"Secretario"} />
                <P name={"Vocal"} />
            </div>
            <div className='text-right w-[70%]'> 
                <P name={data[7].profesion+data[7].nombre} />
                <P name={data[8].profesion+data[8].nombre} />
                <P name={data[9].profesion+data[9].nombre} />
            </div>
        </div>

    </div>
  )
}
