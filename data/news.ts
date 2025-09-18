export interface LocalizedText {
  uz: string;
  ru: string;
}

export interface NewsItem {
  id: number;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText;
  date: string;
  image: string;
}


import { useEffect, useState } from "react";

export const useNewsData = (): NewsItem[] => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("https://jobexapi.pythonanywhere.com/api/news/") // Django API
        .then((res) => res.json())
        .then((data: NewsItem[]) => {
          if (Array.isArray(data)) {
            setNewsData(data);
          } else {
            setNewsData([]);
          }
        })
        .catch((err) => console.error("API xatosi:", err));
  }, []);

  return newsData;
};
