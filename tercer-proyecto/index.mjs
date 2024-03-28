import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: "1aK1xDiYfSONRuVnWsmL6RSEo6efi0CjZ9pnnD7y", // This is your trial API key
});

(async () => {
  const response = await cohere.generate({
    model: "command",
    prompt: "Why are you studying programming?\nWhat\'s languages you programmer?\nWhat would you like doing in the future about programmer?\nDo you have experiences with IT?\n\n",
    maxTokens: 150,
    temperature: 1,
    k: 0,
    stopSequences: [],
    returnLikelihoods: "NONE"
  });
  console.log(`Prediction: ${response.generations[0].text}`);
})();