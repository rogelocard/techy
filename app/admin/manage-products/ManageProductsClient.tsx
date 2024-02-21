'use client'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { formatPrice } from '../../../utils/formatPrice';
import { products } from "@/utils/products";
import Heading from '@/app/components/Heading';
import ActionBtn from '@/app/components/ActionBtn';
import { MdCached, MdDelete, MdRemoveRedEye } from 'react-icons/md';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

// interface ManageProductClientProps {
//   products: any
// }

const ManageProductsClient = () => {

  // const router = useRouter();

  let rows: any = []

  console.log("productos: ", products)

  if(products){
    rows = products.map((product)=>{
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock, 
        images: product.images,
      }
    })
  }

  const columns: GridColDef[] = [
    {field: "id", headerName: "ID", width: 220},
    {field: "name", headerName: "NOMBRE", width: 220},
    {
      field: "price", 
      headerName: "PRECIO", 
      width: 100,
      renderCell: (params) => {
        return(
          <div className='font-bold text-slate-800'>{params.row.price}</div>
        )
      }
    },
    {field: "category", headerName: "CATEGORIA", width: 100},
    {field: "brand", headerName: "MARCA", width: 100},
    {
      field: "actions", 
      headerName: "ACCIONES", 
      width: 200,
      renderCell: (params) => {
        return(
          <div className='flex justify-between gap-4 w-full'>
            {/* <ActionBtn icon={MdCached} onClick={()=> {}}/> */}
            <ActionBtn icon={MdDelete} onClick={handleDelete}/>
            <ActionBtn icon={MdRemoveRedEye} onClick={handleSeeProduct}/>
          </div>
        )
      }
  
    },
  ]

  const handleDelete = useCallback(() => {
      alert('Logica para eliminar producto a través de una API DELETE')
      
  }, [])
  const handleSeeProduct = useCallback(() => {
      alert('Logica para ver Item')
      
  }, [])


  return (
    <div className='max-w-[1150px] m-auto text-xl'>
      <div className='mb-4 mt-8'>
        <Heading tittle='Manejar Productos' center/>
      </div>
      <div style={{height: 600, width: "100%"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  )
}

export default ManageProductsClient