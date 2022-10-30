export {}

type person = {
  name: string
  age: number
  sayhi: fn
}
type fn = (this: person, myname: string) => void
const sayhi: fn = function (myname) {
  console.log(this, myname)
}

const x: person = {
  name: 'hi',
  age: 18,
  sayhi: sayhi
}

x.sayhi('jack')
