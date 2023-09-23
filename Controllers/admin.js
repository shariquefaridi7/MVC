const rootDir = require('../util/path');
 const products = [];
 const  adminGet=(req,res)=>{
   
        res.render('add-product', {
          pageTitle: 'Add Product',
          path: '/admin/add-product',
          formsCSS: true,
          productCSS: true,
          activeAddProduct: true
        });
      
}

 const adminPost=(req,res)=>{
   
        products.push({ title: req.body.title });
        res.redirect('/');
      
}
module.exports = { adminGet ,adminPost,products}
