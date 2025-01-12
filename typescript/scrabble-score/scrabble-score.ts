
const scoreMap = new Map<string[], number>()
scoreMap.set(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1)
scoreMap.set(['D', 'G'], 2)
scoreMap.set(['B', 'C', 'M', 'P'], 3)
scoreMap.set(['F','H', 'V', 'W', 'Y'], 4)
scoreMap.set(['K'], 5)
scoreMap.set(['J','X'], 8)
scoreMap.set(['Q','Z'], 10)


export function score(word: unknown): number {
  let score = 0

  if (typeof word !== "string"){
    return score
  }

  const trimmedWord = word.trim()

  if (!trimmedWord){
    return score
  }

  for (const letter of word) {
    for (const scoreMapKey of scoreMap.keys()) {
      const letterToCheck = letter.toUpperCase()
      console.log(letterToCheck)
      if (scoreMapKey.includes(letterToCheck)){
        score+= scoreMap.get(scoreMapKey)!
        break
      }
    }
  }

  return score
  


}
