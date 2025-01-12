export function hey(message: unknown): string {
  if (typeof message !== "string"){
    return "Whatever."
  }

  const trimmedMessage = message.trim()

  if (!trimmedMessage){
    return "Fine. Be that way!"
  }

  if (isAllUpperCase(trimmedMessage)){
    if (endsWithQuestion(trimmedMessage)){
      return "Calm down, I know what I'm doing!"
    } else{
      return "Whoa, chill out!"
    }
  }

  if (endsWithQuestion(trimmedMessage)){
    return "Sure."
  }

  return "Whatever."

}

function endsWithQuestion(text: string): boolean{
  if (text.endsWith("?")){
   return true
  }

  return false

}

function isAllUpperCase(text: string):boolean{
  return /[A-Z]+/.test(text) && text === text.toUpperCase()
}