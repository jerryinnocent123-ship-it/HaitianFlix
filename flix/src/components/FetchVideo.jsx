import React from 'react'

function FetchVideo() {
    const id =[
            "1jjrLgV9yTxcC_Bw5sLaYx-BxIzU3PTU5",
    ]
  return (
    <iframe
      src={`https://drive.google.com/file/d/${id[0]}/preview`}
      width="70%"
      height="500"
      allow="autoplay"
      title="Video"
    />
  
  )
}

export default FetchVideo