const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const User = require("../models/User");

router.post("/postArticle", isAuth, (req, res) => {
  console.log(req.body, req.user);
  let article = req.body;
  //article.email = req.user.email
  article.userName = req.user.userName;
  Article.create(article)
    .then(datares => res.json(datares))
    .catch(err => console.log(err));

  //   Recipe.insertMany(data)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
});

router.post("/likeArticle", isAuth, (req, res) => {
  console.log(req.body, req.user);
  let article = req.body;
  article.users = [req.user._id]
  //article.email = req.user.email
  // article.userName = req.user.userName;
  let articleID;
  Article.findOne({ url: article.url }).then(foundArticle => {
    if (foundArticle !== null) {
      console.log(foundArticle)
      Article.findOneAndUpdate(
        { url: article.url },
        {
          $addToSet: { users: req.user._id }
        },
        { new: true }
      ).then(articleUpdated => {
        console.log(articleUpdated)
        User.findByIdAndUpdate(req.body._id, {
           $addToSet: { favorites: articleUpdated._id }
        }).then(user => {
          res.status(200).json(user);
        })
      });
    } else
      Article.create(article)
        .then(articleCreated => {
          User.findByIdAndUpdate(req.body._id, {
            $addToSet: { favorites: articleCreated._id }
         }).then(user => {
           res.status(200).json(user);
         })
        })
        .catch(err => console.log(err));
        // console.log(res)
  });
});

router.get("/findLikedArticles", isAuth, (req, res, next) => {
  let likedArticles = req.user.favorites
  console.log(likedArticles)
  Article.find({userName: req.user.userName})
  .then(datares => res.json(datares))
  .catch(err => console.log(err));
})

router.get('/getAllArticles', (req, res, next) => {//route to the articles collection
  Article.find()
  .sort({"updatedAt": -1})
  .then(allArticles => res.json({allArticles: allArticles}))
  .catch(err => console.log(err));
})

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
