import React from 'react'

export default function NewsList({ news }) {

    console.log(news.data)
    return (
        news.data.map((item, index) => (

            <div className="card w-full lg:w-96 bg-base-100 h-80  shadow-xl" key={index}>
                <figure><img src="https://picsum.photos/400/200" alt="Shoes" /></figure>
                <div className="card-body  " >
                    <h2 className="card-title">
                        {item.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>

        ))
    )
}
