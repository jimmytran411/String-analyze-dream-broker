const textAnalyzer = (text) => {
 if (!text.length) {
  return {
   textLength: {
    withSpaces: 0,
    withoutSpaces: 0,
   },
   wordCount: 0,
   characterCount: [],
  };
 } else {
  const withSpaces = text.length;
  const withoutSpaces = text.replace(/ /g, "").length;

  const wordCount = text.toLowerCase().match(/[a-z0-9]+/g).length;

  const textArray = text
   .toLowerCase()
   .match(/[a-z]+/g)
   .flatMap((el) => el.split(""))
   .sort();

  const analyze = textArray
   .reduce((mapObj, letter) => {
    !mapObj.has(letter) && mapObj.set(letter, { [`${letter}`]: 0 });
    const obj = mapObj.get(letter);
    obj[`${letter}`]++;

    return mapObj;
   }, new Map())
   .values();
  const analyzeResult = [...analyze];

  return {
   textLength: { withSpaces, withoutSpaces },
   wordCount,
   characterCount: analyzeResult,
  };
 }
};
module.exports = textAnalyzer;
