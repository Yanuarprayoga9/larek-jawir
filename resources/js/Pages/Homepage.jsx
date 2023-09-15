import React from 'react'

export default function Homepage(props) {
    // console.log(props);
    const {title,description} = props;
  return (
    <div>
        <h1>{title}</h1>
        <h1>{description}</h1>
    </div>
  )
}
