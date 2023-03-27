import React from 'react'
import { Books } from '../components/Books';
import { Layout } from '../components/Layout';
import { useAppContext } from '../store/Store'


export const Index = () => {
  const store = useAppContext();
  return (
    <Layout>
      <div className='container'>
        <div className='index'>
          <div className='books__container'>
            {store.items.map(item => <Books key={item.id} item={item}/>)}
          </div>
        </div>
      </div>
    </Layout>
  )
}
