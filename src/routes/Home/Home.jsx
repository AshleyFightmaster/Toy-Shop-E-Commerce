import React from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'

const Home = () => {

    const categories = [
        {
          id: 0,
          title: 'Newborn-6 Months',
          imgUrl: 'https://images.unsplash.com/photo-1609811645795-f72ea07f47e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        },
        {
          id: 1,
          title: '6 Months-12 Months',
          imgUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80'
        },
        {
          id: 2,
          title: 'Tots',
          imgUrl: 'https://images.unsplash.com/photo-1477511614005-61bd8b91d218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: 3,
          title: 'Preschooler',
          imgUrl: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: 4,
          title: 'School-Aged',
          imgUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
      ]
      return (
        <div className="App">
          <CategoryList categories={categories}/>
        </div>
      );
  
}

export default Home