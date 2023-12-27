import Image from 'next/image';
import React from 'react'

const fetchProductDetail = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
}
const BlogDetail = async ({ params }) => {
    const { id } = params;
    //console.log(id);
    const dataObj = await fetchProductDetail(id);
    //console.log(dataObj);
    return (
        <div className='mt-5 container d-flex flex-column justify-content-center align-items-center'>
            <div className="card">
                <div className="card-body">
                    <Image src={dataObj.images[0]} width={400} height={100} alt="image"/>
                    <h2>{dataObj.title}</h2>
                    <p>{dataObj.description}</p>
                </div>
            </div>

        </div>
    )
}

export default BlogDetail