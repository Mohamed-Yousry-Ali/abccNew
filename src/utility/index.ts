export function capitalizeEachWord(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const sentence = "make a capital letter at the beginning of each word.";
const capitalizedSentence = capitalizeEachWord(sentence);

console.log(capitalizedSentence); // Output: "Make A Capital Letter At The Beginning Of Each Word."
