const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');
const Article = require('./models/article');
const methodOverride = require('method-override');


mongoose.connect('mongodb+srv://nkdb:nk000@cluster0-pn0zx.mongodb.net/test?retryWrites=true&w=majority',{
  useUnifiedTopology:true,
  useCreateIndex:true,
  useNewUrlParser:true,
  useFindAndModify:true
  
})
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'));


app.get('/', async (req, res) =>
{
    const articles = await Article.find()

    res.render('articles/index' ,{articles :articles});
}
)

app.use('/articles', articleRouter);

app.listen(5000);