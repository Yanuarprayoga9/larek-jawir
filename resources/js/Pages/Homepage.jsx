import React from 'react'
import NavbarComponent from '../Components/hompage/NavbarComponent'
import NewsList from '../Components/hompage/NewsList'
import Paginator from '@/Components/hompage/Paginator';
export default function Homepage(props) {
  console.log(props);

  return (
    <div className='w-full my-5'>
      <NavbarComponent />
      <div className="flex justify-center flex-col  lg:flex-row lg:flex-wrap items-center gap-5">
        <NewsList news={props.news} />
      </div>
      <div className="flex my-3 justify-center items-center">
        <Paginator meta={props.news.meta}/>
      </div>
    </div>
  )
}
