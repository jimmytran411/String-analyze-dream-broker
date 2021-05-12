const textAnalyzer = require("../../textAnalizer");

test("TextAnanlyzer function should return expected output with given input", () => {
 const testText1 = " trailing spaces...     ";
 const result1 = textAnalyzer(testText1);
 expect(result1.textLength.withSpaces).toBe(24);
 expect(result1.textLength.withoutSpaces).toBe(17);
 expect(result1.wordCount).toBe(2);
 expect(result1.characterCount.length).toBe(11);

 const testText2 = "";
 const result2 = textAnalyzer(testText2);
 expect(result2.textLength.withSpaces).toBe(0);
 expect(result2.textLength.withoutSpaces).toBe(0);
 expect(result2.wordCount).toBe(0);
 expect(result2.characterCount.length).toBe(0);

 const testText3 = "Hello, world";
 const result3 = textAnalyzer(testText3);
 expect(result3.textLength.withSpaces).toBe(12);
 expect(result3.textLength.withoutSpaces).toBe(11);
 expect(result3.wordCount).toBe(2);
 expect(result3.characterCount.length).toBe(7);
});
