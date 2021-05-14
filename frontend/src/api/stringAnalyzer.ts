import axios, { AxiosResponse } from 'axios';

export interface StringAnalyzerResult {
  textLength: {
    withSpaces: number;
    withoutSpaces: number;
  };
  wordCount: number;
  characterCount: {
    [key: string]: number;
  }[];
}

export const analyseString = (stringToAnalyse: string): Promise<AxiosResponse<StringAnalyzerResult>> => {
  return axios.post('/analyze', { text: stringToAnalyse });
};
