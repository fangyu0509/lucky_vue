// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
   plugins: { 
     'postcss-pxtorem': 
     { rootValue: 32, 
      propList: ['*'], minPixelValue: 2 } 
    }
  };
