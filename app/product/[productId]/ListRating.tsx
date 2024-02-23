"use client"
import Heading from '@/app/components/Heading';
import { Rating } from '@mui/material';
// import { product } from '../../../utils/product';
import Avatar from './Avatar';


interface ListRaitingProps{
    product: any
}

const ListRating: React.FC<ListRaitingProps> = ({product}) => {
  return (
    <div>
        <Heading tittle='Comentarios'/>
        <div className='text-sm mt-2'>
            {product.reviews && product.reviews.map((review: any) => {
                return <div key={review.id} className="max-w-[300px]">
                    <div>
                        <Avatar src={review.user.image}/>
                        <div className='font-semibold'>{review?.user.name}</div>
                        {/* <div>{moment(review.createdDate).fromNow()}</div> */}
                        <div className='font-light'>{review.createdDate}</div>
                    </div>
                    <div className='mt-2'>
                        <Rating value={review.rating} readOnly/>
                        <div className='ml-2'>{review.comment}</div>
                        <hr className='mt-4 mb-4' />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default ListRating