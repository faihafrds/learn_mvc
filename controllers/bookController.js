const { Book } = require('../models')

module.exports = {
    index: (req, res) => {
      Book.findAll({
          order: [['id', 'DESC']]
      })
      .then(results => res.render('book/index', {title: "Books", books: results}))  
    },
    new: (req, res) => {
        res.render('book/create', {title: "Create New Book"})
    },
    create: (req, res) => {
        const {title, sinopsis, genre} = req.body
        Book.create({
            title: title,
            sinopsis: sinopsis,
            genre: genre
        })
        .then(()=> res.redirect("/books"))
        .catch(err => res.send(`Failed - ${JSON.stringify(err.message)}`))
    }
}