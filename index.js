class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-' ']+/g, '');
  }

  static titleize(string) {
    const prepositions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(' ')
    let titleized = words.map(function(word) {
      if (prepositions.includes(word) && word != words[0]) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    })
    return titleized.join(' ')
  }
}