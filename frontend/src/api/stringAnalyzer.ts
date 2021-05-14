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
  return axios.post('https://string-analyzer-dream-broker.herokuapp.com/analyze', { text: stringToAnalyse });
};
