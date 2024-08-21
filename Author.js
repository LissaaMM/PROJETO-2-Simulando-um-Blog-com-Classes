const Post = require('./Post')

class Author {
  constructor(name) {
    this.name = name
    this.publi = []
  }

  createPost(title, content) {
    const publi = new Post(title, content, this)
    this.publi.push(publi)
    return publi
  }
}

module.exports = Author
