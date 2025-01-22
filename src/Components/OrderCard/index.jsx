import { TrashIcon } from '@heroicons/react/24/solid'
const OrderCard= props=>{

    const{id,title,imageUrl,price,handleDelete} = props
    return (
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 shrink-0">
              <img 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                src={imageUrl} 
                alt={title} 
              />
            </div>
            <p className="text-sm font-light max-w-[180px]">{title}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">${price}</span>
            <TrashIcon onClick={()=>handleDelete(id)} className="h-5 w-5 cursor-pointer text-black hover:text-red-500" />
          </div>
        </div>
      );
}
export default OrderCard