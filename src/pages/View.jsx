import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAppContext } from '../store/Store';

export const View = () => {
  const [item, setItem] = useState([])
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem((params.bookId))
    setItem(book)
  }, [])
  if(!item){
    return <Layout>Item not found</Layout>
  }

  
  return (
    <Layout>
      <div className='container'>
        <div className='index'>
          <div className='view__main'>
            <div className='view__container'>
              <h2>{item?.title}</h2>
              <div>{item?.cover? <img src={item.cover}/> : ''}</div>
              <div className='spanContainer'>
                <h4><span className='span__view'>Author: </span>{item?.author}</h4>
                <h4><span className='span__view'>Introduction: </span>{item?.intro}</h4>
                <h4><span className='span__view'>State: </span>{item?.completed? 'Readed' : 'In progress'}</h4>
                <h4><span className='span__view'>Review: </span>{item?.review}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
