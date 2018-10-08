const users = require('./api/data/users');
const userProject = require('./api/data/user_project');
const cors = require('cors');
const express = require('express');
const app = express();

// upload
const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'public/uploads/images/',
    filename: function ( req, file, cb ) {
        //if((file.mimetype === 'image/jpg') || (file.mimetype === 'image/png') || (file.mimetype === 'image/gif')){
            //cb(null, true);
            var ft = file.mimetype;
            var fileType = ft.split('/');
           // if(fileType[0] === 'image' && (fileType[1] !== '')){
                cb( null, 'sansiri_goodspace_' + Date.now() + '_' + file.originalname);
            //}
       // }else{
        //    cb( null, 'incorrect file type!');
        //}
        //cb( null, file.originalname+ '_goodspace_' + Date.now() +'.' + file.mimetype);
    }
});
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
        cb(null, true);
    }else{
        cb(null, false);
    }
};
const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
});

//const upload = multer({ dest:'public/uploads/images/' });
const port = process.env.port || 3000;
const bodyParser = require('body-parser'); // middleware
// cors -- cross domain config
app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/user', function(req, res){
    //console.log('user page');
    res.json(users.findAll());
});

app.get('/user/:id', function(req, res) {
    //console.log('user page');
    var id = parseInt(req.params.id); // ***var id = parseInt() everytime var type as Integer 
    res.json(users.findById(id));
    //res.send('looking for id '+id);
    //res.send('user ' + req.params.id);
});

app.get('/project', function(req, res) {
    res.json(userProject.findAll());
});
app.get('/project/:id', function(req, res){
    let id = parseInt(req.params.id);
    res.json(userProject.findById(id));
});


app.post('/newuser', function(req, res){
    let name = req.body.name;
    let email = req.body.email;
   // console.log(data);
    let mydata = res.send({"user":name, "email":email});
    console.log(mydata);
});

// send from client profile_avatar_form.vue
app.post('/upload/image', upload.single('imgFile'), function(req, res, next){
    res.json( { message: 'Files Uploaded!', code:200 } );
    console.log(res);

});

app.listen(port, function(){
    console.log('goodspace server running on port '+port);
});