
const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']

programmerIT = (input) => {
  let count = 0

  for (let i = 0; i < dictionary.length; i++) {
    let output = []
    let word = input
    let find = dictionary[i]
    let verify = ''

    if (find.length <= word.length) {
      verify = word.substring(0, find.length)
    }

    if (find === verify) {
      output.push(verify)
      word = word.substring(find.length)
      for (let j = 0; j < dictionary.length; j++) {
        let nextFind = dictionary[j]
        let nextVerify = ''
        if (nextFind.length <= word.length) {
          nextVerify = word.substring(0, nextFind.length)
        }
        if (nextFind === nextVerify) {
          output.push(nextVerify)
          word = word.substring(nextFind.length)
        }
      }
    }

    if (word === '') {
      console.log(output)
      count++
    }
  }

  if (count <= 1) {
    console.log('<no way>')
  }
}

programmerIT('program')
programmerIT('programit')
programmerIT('programmerit')
programmerIT('programlala')
programmerIT('proletarian')