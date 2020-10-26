const db = require('../db/connection')
const Post = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const posts = 
    [
        {
          "title": "Mac's Post",
          "content": "This is Mac's post",
          "author": "Mac"
        },
        {
          "title": "Nick's Post",
          "content": "This is Nick's post",
          "author": "Nick"
        },
        {
          "title": "Edwin's Post",
          "content": "This is Edwin's post",
          "author": "Edwin"
        },
        {
          "title": "Kashiff's Post",
          "content": "This is Kashiff's post",
          "author": "Kashiff"
        }
      ]

    await Post.insertMany(posts)
    console.log("Created posts!")
}
const run = async () => {
    await main()
    db.close()
}

run()