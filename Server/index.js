const express=require('express')
const cors=require('cors')
const mongodb=require('mongoose')
const bodyparser=require('body-parser');
// const { useState } = require('react');
// const { type } = require('@testing-library/user-event/dist/type');
const app=express();
const multer = require('multer');
app.use(cors())
app.use(express.json())
const port=process.env.port || 3030;
app.use(bodyparser.urlencoded());


const schemadata=mongodb.Schema({
    username:String,
    pwd:String,
})

const userSchema = mongodb.Schema({
    username: String,
    Productid:Number
});



const FormDataSchema =mongodb.Schema({
  cusname: String,
  cusemail: String,
  cusphone: String,
  dropdis: String,
  custextarea: String,
  file: String // Store file path
});
 const formdat = mongodb.model('Cusformdata', FormDataSchema);

const contact =mongodb.Schema({
  conname: String,
  conemail: String,
  conmessage: String,
  concheck: Boolean,
});
const condata = mongodb.model('contactform', contact);

app.use(bodyparser.json());

const wishlist = mongodb.model('Whislist', userSchema);

const cartList = mongodb.Schema({
  username:String,
  cartitem:Number,
});

const car = mongodb.model('cartItem',cartList);


app.post('/cart/add',async(req,res)=>{
  try {
    const existingData = await car.findOne(req.body); 
    if (existingData) {                              // already in cart code 
      console.log("already in cart");
       res.status(200).json({ message: 'Product already exists in the cart for this user' });
    }
    else{
        const newData =new car(req.body);
            await newData.save();
                res.status(200).json({ message: 'Products added to cart successfully' });
    }
  } 
  catch (error) {
    console.error('Error adding products to wishlist:', error);
    res.status(500).json({ message: 'Failed to add products to cart' });
  }

})


app.post('/cart/wishlist', async (req, res) => {
  try {
    const newData =new wishlist(req.body);
        await newData.save();
            res.status(200).json({ message: 'Products added to wishlist successfully' });
  } 
  catch (error) {
    console.error('Error adding products to wishlist:', error);
    res.status(500).json({ message: 'Failed to add products to wishlist' });
  }
});





// Route to fetch wishlist items by username


// // Route to add an item to the wishlist
// app.post('/addToWishlist', async (req, res) => {
//   try {
//     const { Productid, username } = req.body;
//     // Check if the item already exists in the wishlist
//     const existingItem = await wishlist.findOne({ username, Productid });
//     if (existingItem) {
//       return res.status(400).json({ error: 'Item already exists in the wishlist' });
//     }
//     // Create a new wishlist item
//     const newWishlistItem = new wishlist({
//       Productid,
//       username,
//     });
//     // Save the new wishlist item to the database
//     await newWishlistItem.save();
//     res.status(201).json(newWishlistItem);
//   } catch (error) {
//     console.log("Error adding item to wishlist", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });






app.post('/cartByUsername/:username', async (req, res) => {
  try {
    const cartItemsdis = await car.find({ username: req.params.username }).populate('cartitem');
    res.json(cartItemsdis);
  } catch (error) {
    console.log("Error fetching wishlist items", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Route to remove an item from the wishlist
app.delete('/cart/List/:itemId/:username', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const username = req.params.username;
    // Remove the item from the wishlist based on the username and itemId
    await car.findOneAndDelete({ username, cartitem: itemId });
    res.sendStatus(204); // No content, item removed successfully
  } catch (error) {
    console.log("Error deleting wishlist item", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


































































app.get('/wishlistByUsername/:username', async (req, res) => {
  try {
    const wishlistItems = await wishlist.find({ username: req.params.username }).populate('Productid');
    res.json(wishlistItems);
  } catch (error) {
    console.log("Error fetching wishlist items", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Route to remove an item from the wishlist
app.get('/cart/wishlist/:itemId/:username', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const username = req.params.username;
    // Remove the item from the wishlist based on the username and itemId
    await wishlist.findOneAndDelete({ username, Productid: itemId });
    res.sendStatus(204); // No content, item removed successfully
  } catch (error) {
    console.log("Error deleting wishlist item", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images') // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // Specify the file name
  }
});


const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/upload', upload.single('file'), async (req, res) => {
// app.post('/upload', async (req, res) => {
  // File has been uploaded, you can access it via req.file
  // Save the file path to MongoDB
  const { cusname, cusemail, cusphone, dropdis, custextarea } = req.body;
  const file = req.file.path;
  
  try {
    // const formData = new FormData({ cusname, cusemail, cusphone, dropdis, custextarea, file });
    await formdat.create({ cusname, cusemail, cusphone, dropdis, custextarea, file });
    // await formData.save();
    res.send('Form data submitted successfully');
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).send('Internal Server Error');
  }
});






app.post('/uploadcontact', async (req,res)=>{
    try {
        const newData =new condata(req.body);
            await newData.save();
                res.status(200).json({ message: 'comments added to database successfully' });
      } 
      catch (error) {
        res.status(500).json({ message: 'Failed to add comments to database' });
      }

});

const usermodel=mongodb.model("userSigin",schemadata)
app.post('/validate',async(req,res)=>{
    try{
        const {username,pwd}=req.body;
        console.log(username);
        console.log(pwd);
        const data=await usermodel.find({username:username});
        if((data[0].pwd === pwd)&&(data[0].username === username)){
            res.json({ success: true, message: 'Username is valid.',username:username,pwd:pwd});
        }
    }catch(err){
        res.json({ success: false, message: 'Username is notvalid.' });
    }
});
app.post('/signup',async(req,res)=>{
    const data24=new usermodel(req.body);
    console.log("data signup : ",data24);
    await data24.save();    
    console.log("saved");
    res.send({success:true,message:"data save successfully"})
});

app.put('/update',async(req,res)=>{
    const {id,...rest}=req.body;
    await usermodel.updateOne({_id:id},rest)
    res.json({"meassage":"successfully updated"});

});

mongodb.connect("mongodb://localhost:27017/Fswd")
.then(()=>{
    console.log("db connected")    
    app.listen(port,()=>{console.log(`server running ${port}`)});
}).catch((err)=>{console.log(err)})


