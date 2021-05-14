import axios, { AxiosResponse } from 'axios';

export interface StringAnalyserResult {
  textLength: {
    withSpaces: number;
    withoutSpaces: number;
  };
  wordCount: number;
  characterCount: {
    [key: string]: number;
  }[];
}

export const analyseString = async (stringToAnalyse: string): Promise<AxiosResponse<StringAnalyserResult>> => {
  return await axios.post('/analyser', { text: stringToAnalyse });
};
