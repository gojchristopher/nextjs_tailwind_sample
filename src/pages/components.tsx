import { InputField } from '@/components/InputField'
import Button from '@/components/button'
import React from 'react'

const Components = () => {
  return (
   <div className='h-[100vh] w-full flex justify-center items-center align-middle'>
     <div className="flex items-center border rounded-md w-96 justify-center space-y-5 p-4">
       <div className="flex flex-col w-full items-center justify-center space-y-2">
         <Button size="sm" variant="solid">
           small
         </Button>
         <Button size="sm" variant="outline">
           small
         </Button>
         <Button size="md" variant="solid">
           medium
         </Button>
         <Button size="md" variant="outline">
           medium
         </Button>
    
         <button className="btn-danger btn">custom</button>
       </div>
    
       <div className="flex flex-col w-full items-center justify-center space-y-2">
         <InputField placeholder="outline" />
         <InputField variants="filled" placeholder="filled" />
         <InputField variants="unstyled" placeholder="unstyled" />
         <InputField variants="flushed" placeholder="flushed" />
       </div>
     </div>
   </div>
  )
}

export default Components