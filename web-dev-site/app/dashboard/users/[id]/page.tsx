import React from 'react'

const page = ({ params }: { params : { id: string}}) => {
    const { id } = params;

  return (
    <div>This is user {id}</div>
  )
}

export default page