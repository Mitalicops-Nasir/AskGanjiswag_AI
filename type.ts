export type results = {
  episode: number;
  timestamp: string; // "00:03:21"
  question: string;
  videoUrl: string; // with &t=seconds already included
}[];

export type resultsInUI = {
  results: {
    episode: number;
    timestamp: string; // "00:03:21"
    question: string;
    videoUrl: string; // with &t=seconds already included
  }[]
};

// the above is array
