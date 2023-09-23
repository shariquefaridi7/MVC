const {products}= require('./admin.js');
const shopGet=(req,res)=>{
  
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}
module.exports={shopGet};