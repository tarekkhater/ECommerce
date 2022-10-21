<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    
    
    
    <form class="row g-3" method="POST" enctype="multipart/form-data" action="{{route('createProduct')}}">
        @csrf
            
        <label for="name">Name</label>
            <input  id="name" name='name' placeholder="Enter Name"  /><br><br>
            @error('name')
            <small>{{$message}}</small><br>
            @enderror
        <label for="category">Password</label>
            <input type="category" id="category" name="category" placeholder="Enter Category"  /><br><br>
            @error('category')
            <small>{{$message}}</small><br>
            @enderror
        <label for="price">Email</label>
            <input  id="price" name='price' placeholder="Enter Price"  /><br><br>
            @error('price')
            <small>{{$message}}</small><br>
            @enderror
        <label for="image">Password</label>
            <input type="file" id="image" name="image"   /><br><br>
            @error('image')
            <small>{{$message}}</small><br>
            @enderror
        <label for="count_in_stock">Email</label>
            <input  id="count_in_stock" name='count_in_stock' placeholder="Enter count in stock"  /><br><br>
            @error('count_in_stock')
            <small>{{$message}}</small><br>
            @enderror
        <label for="description">Password</label>
            <input type="text" id="description" name="description" placeholder="Enter Description"  /><br><br>
            @error('description')
            <small>{{$message}}</small><br>
            @enderror
        
        <button type="submit" class="btn btn-primary">Create</button>
    </form>
</body>
</html>