const Author = require('./Author')
const julio = new Author('julio')
const post = julio.createPost('Receitas todo dia', 'receitas de vovô')
post.addComments('Juliana', 'Eu amo asrecietas dele!')
post.addComments('João', 'Eu odeio as receitas dele!')

console.log(julio)
console.log(post)
