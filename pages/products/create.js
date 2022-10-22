import { useRouter } from 'next/router';
import { useState ,  useRef} from 'react'
import { useAuth } from '../../Hooks/auth';
import { useAuthProduct } from '../../Hooks/productCreate';
import { Label , Input ,InputError ,InputSuccess} from '../../components/Tools/Tools';
export default function Create() {
    const {client} = useAuth({middleware : '' } )

    const [name , setName] = useState('');
    const [price , setPrice] = useState('');
    const [category , setCategory] = useState('');
    const [brand , setBrand] = useState('');
    const [image , setImage] = useState('');
    const [count_in_stock , setCount_in_stock] = useState('');
    const [description , setDescription] = useState('');
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState('')
    const {create} = useAuthProduct({middleware : 'auth:client' } )
    const client_id = client?.id

    const submitForm = async (e) => {
        e.preventDefault()
        create({name, price, category ,brand ,image, count_in_stock , description ,client_id , setErrors})
        if(errors?.length == 0){
          setSuccess('One product added')
          setName('');setPrice('');setCategory("");setBrand("");setImage('');
          setCount_in_stock("");setDescription("")
        }
    }
    console.log("errors" , errors)
    
    if(! client){
      return "401 unauthorized"
    }
    return (
        <div className='container' style={{paddingTop:"50px"}}>
          <h3 style={{color:"#a82d49"}}>Create Product</h3>
          <form className="row g-3" onSubmit={submitForm} method="POST" encType="multipart/form-data">
            <div style={{textAlign:"center"}}><InputSuccess success={success} className="mt-2" /></div>
            <div className="col-md-6">
              <Label htmlFor="inputName" className="form-Label">Name</Label>
              <Input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" id="InputName" placeholder="Enter productName" required />
              <InputError messages={errors.name} className="mt-2" />
            </div>
            <div className="col-md-6">
              <Label htmlFor="category" className="form-Label">Category</Label>
              <Input type="text" value={category} onChange={e => setCategory(e.target.value)} className="form-control" id="category" placeholder="Enter category" required/>
              <InputError messages={errors.category} className="mt-2" />
            </div>
            <div className="col-md-6">
              <Label htmlFor="brand" className="form-Label">Brand</Label>
              <Input type="text" value={brand} onChange={e => setBrand(e.target.value)} className="form-control" id="brand" placeholder="Enter brand" required/>
              <InputError messages={errors.brand} className="mt-2" />
            </div>
            <div className="col-6">
              <Label htmlFor="price" className="form-Label">Price</Label>
              <Input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" id="price" placeholder="Enter price" required/>
              <InputError messages={errors.price} className="mt-2" />
            </div>
            <div className="col-6">
              <Label htmlFor="count" className="form-Label">CountInStock</Label>
              <Input type="number" value={count_in_stock} onChange={e => setCount_in_stock(e.target.value)} className="form-control" id="count" placeholder="Enter count in stock" required />
              <InputError messages={errors.count_in_stock} className="mt-2" />
            </div>
            <div className="col-md-6">
              <Label htmlFor="image" className="form-Label">Image</Label>
              <Input type="file"  name="image"  onChange={(e) => setImage(e.currentTarget.files[0])}  className="form-control" id="image" required />
              <InputError messages={errors.image} className="mt-2" />
            </div>
            <div className="col-md-12">
              <Label htmlFor="description" className="form-Label">Description</Label>
              <Input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" id="image" placeholder='Enter description' required />
              <InputError messages={errors.description} className="mt-2" />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </form>
       </div>
  )
}
