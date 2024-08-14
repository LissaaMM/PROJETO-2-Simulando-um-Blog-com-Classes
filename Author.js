class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    createPost(title, content) {
        const publicacao= new Post(title, content, this)
        this.posts.push(publicacao)
        return post
    }
}

module.exports = Author
