// Sample mood data
const sampleMoodData = [
  { date: "2023-06-01", mood: 0.5 },
  { date: "2023-06-02", mood: 0.7 },
  { date: "2023-06-03", mood: 0.2 },
  { date: "2023-06-04", mood: -0.1 },
  { date: "2023-06-05", mood: 0.3 },
  { date: "2023-06-06", mood: 0.8 },
  { date: "2023-06-07", mood: 0.6 },
  { date: "2023-06-08", mood: -0.2 },
  { date: "2023-06-09", mood: 0.1 },
  { date: "2023-06-10", mood: 0.4 },
  { date: "2023-06-11", mood: 0.9 },
  { date: "2023-06-12", mood: 0.5 },
  { date: "2023-06-13", mood: -0.3 },
  { date: "2023-06-14", mood: 0.2 },
  { date: "2023-06-15", mood: 0.6 },
  { date: "2023-06-16", mood: 0.7 },
  { date: "2023-06-17", mood: 0.1 },
  { date: "2023-06-18", mood: -0.1 },
  { date: "2023-06-19", mood: 0.3 },
  { date: "2023-06-20", mood: 0.8 },
  { date: "2023-06-21", mood: 0.5 },
  { date: "2023-06-22", mood: 0.2 },
  { date: "2023-06-23", mood: -0.2 },
  { date: "2023-06-24", mood: 0.4 },
  { date: "2023-06-25", mood: 0.6 },
  { date: "2023-06-26", mood: 0.9 },
  { date: "2023-06-27", mood: 0.7 },
  { date: "2023-06-28", mood: 0.3 },
  { date: "2023-06-29", mood: -0.1 },
  { date: "2023-06-30", mood: 0.5 },
];

export async function fetchMoodData() {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleMoodData);
    }, 500); // 500ms delay to simulate network request
  });
}
