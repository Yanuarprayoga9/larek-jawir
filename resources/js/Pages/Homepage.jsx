import React from 'react'

export default function Homepage(props) {
    console.log(props);
    const {title,description,news} = props;
  return (
    <div>
      <h1>test</h1>
        <h1>{title}</h1>
        <h1>{description}</h1>
        {news.map((item,index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p></p>
          </div>
        ))}
    </div>
  )
}
