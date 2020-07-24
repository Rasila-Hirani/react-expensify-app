const path = require('path');
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports =(env)=>{
    const isProduction = env === 'production';
 //   const cssExtract = new ExtractCSSPlugin({filename:'styles.css'})
    return{
        entry :'./src/app.js',
        output:{
            path:path.join(__dirname,'public'),
            filename:'bundle.js'
        },
        plugins:[new MiniCssExtract()],
        module:{
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },{
                test:/\.s?css$/,
                use:[MiniCssExtract.loader,'css-loader','sass-loader']                
            }]
        },      
        devtool:isProduction?'source-map':'inline-source-map',
        devServer :{
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true   
        }
    }
}

