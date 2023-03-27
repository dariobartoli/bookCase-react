import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'


const AppContext = createContext({
    items: [],
    createItem: (item) => {},
    getItem: (id) => {},
    updateItem: (item) => {}
});

export const Store = ({children}) => {
    const [items, setItems] = useState([
        {
            id: '2ad6b5e2-9c2b-4959-b740-9335c85eed74',
            title: 'Harry Potter and The chamber of secrets',
            author: 'J.K. Rowling',
            cover: '/assets/image/hp.jpg',
            intro: 'Harry Potter and the Chamber of Secrets begins when Harry is spending a miserable summer with his only remaining family, the Dursleys. During a dinner party hosted by his uncle and aunt, Harry is visited by Dobby, a house-elf.',
            completed: true,
            review: 'Very nice'
        },
        {
            id: '9942219d-eecc-42b5-a421-2d9b12736b76',
            title: 'Lord of the rings',
            author: 'Tolkien',
            cover: '/assets/image/lord.webp',
            intro: 'A fellowship of hobbits, elves, dwarfs, and men is formed to destroy the ring by casting it into the volcanic fires of the Crack of Doom, where it was forged. They are opposed on their harrowing mission by the evil Sauron and his Black Riders.',
            completed: true,
            review: 'Good, recommended'
        },
        {
            id: '9942219d-eecc-42b5-a421-2d9b12736b72',
            title: 'Hunger games',
            author: 'Suzanne Collins',
            cover: '/assets/image/hg.jpg',
            intro: 'Synopsis. The nation of Panem is divided into 12 districts, ruled from the Capitol. As punishment for a failed revolt, each district is forced to select two tributes, one boy and one girl between the ages of 12 and 18, to fight to the death in the annual Hunger Games until there is only one survivor.',
            completed: false,
            review: 'no completed'
        },
    ])
    
    const createItem = (item) => {
        setItems([...items, item])
    }

    const getItem = (id) => {
        const item = items.find((item) => item.id === id)
        return item
    }

    const updateItem = (item) => {
        const index = items.findIndex((elem) => elem.id === item.id)
        const temp = [...items];
        temp[index] = {...item}
    }



  return (
    <AppContext.Provider value={{
        items,
        createItem,
        getItem,
        updateItem,
    }}>
        {children}
    </AppContext.Provider>
  )
}

export function useAppContext(){
    return useContext(AppContext);
}