var mongoose = require('mongoose');
mongoose.connect('mongod://127.0.0.1:27017/myapp');

//şema oluşturma işlemleri
var Schema = mongoose.Schema;
var userSchema = new Schema({
    ad:String,
    soyad:String,
    dogumTarihi:String,
    email:String
});

//oluşturulan bu şema'yı model için rezerve ediyorum.
mongoose.model('User',userSchema);