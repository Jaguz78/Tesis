import e from 'cors'
import '../style.css'
import {useState} from 'react'
import {moveUp, moveDown, deleteSection} from '../api/documento.api'


export default function Section({children, format, sections, setSections, id}) {

    const [active, setActive] = useState(false)

    const getFormat = f => {
        switch (f) {
            case 1:
                return 'title'
            case 2:
                return 'title2'
            case 3:
                return 'title3'
            case 4:
                return 'title4'
            case 5:
                return 'paragraph'
        }
    }

    const arrowUp = async _ => {
        let newSections = sections
        for (let i=0; i<newSections.length; i++) {
            if (newSections[i].id_seccion == id) {
                if (newSections[i-1] !== undefined){
                    newSections[i].posicion--
                    newSections[i-1].posicion++
                    newSections.sort((a,b) => a.posicion - b.posicion)
                    try {
                        const response = await moveUp(newSections[i], newSections[i-1])
                        if (response.status == 200) {
                            setSections([...newSections])
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        }
    }

    const arrowDown = async _ => {
        let newSections = sections
        for (let i=0; i<newSections.length; i++) {
            if (newSections[i].id_seccion == id) {
                if (newSections[i+1] !== undefined){
                    newSections[i].posicion++
                    newSections[i+1].posicion--
                    newSections.sort((a,b) => a.posicion - b.posicion)
                    try {
                        const response = await moveDown(newSections[i], newSections[i+1])
                        if (response.status == 200) {
                            setSections([...newSections])
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        }
    }

    const handleDelete = async _ => {
        let newSections = sections
        for (let i=0; i<newSections.length; i++) {
            if (newSections[i].id_seccion == id) {
                try {
                    const response = await deleteSection(newSections[i])
                    if (response.status == 200) {
                        newSections.splice(i, 1)
                        setSections([...newSections])
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

  return (
    <div className={`w-full p-2 flex hover:border-2 rounded-xl`} >
        <div className={`${active ? '' : 'hidden'} flex flex-col gap-1`}>
            <button className='w-6 h-6 flex justify-center align-middle bg-my-green rounded-md text-white rotate-90'
            onClick={arrowUp}>&lt;-</button>
            <button className='w-6 h-6 flex justify-center align-middle bg-my-green rounded-md text-white rotate-90'
            onClick={arrowDown}>-&gt;</button>
        </div>
        <div onClick={_ => setActive(!active)} className={`flex ${getFormat(format) == 'title' ? 'justify-center': ''} w-full`} >
            <span className={`${getFormat(format)} px-4`}>{children}</span>
        </div>
        <div className={`${active ? '' : 'hidden'}`}>
            <button className='w-6 h-6 flex justify-center align-middle bg-red-500 rounded-md text-white'
            onClick={handleDelete}>x</button>
        </div>
    </div>
  )
}

