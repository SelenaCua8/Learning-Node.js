import { CohereClient } from "cohere-ai";
import ora from 'ora';


const cohere = new CohereClient({
  token: "1aK1xDiYfSONRuVnWsmL6RSEo6efi0CjZ9pnnD7y",
});

const spinner = ora ('Generating 5 frontend interview questions').start();

export default cohere;


(async () => {
    const response = await cohere.generate({
        model: "command",
        prompt: 'Generate a list of 5 interviews questions for a Senior Frontend Engineer',
        max_tokens: 100,
        temperature: 1.2, // grado aleatoriedad de las respuestas
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
    });

    spinner.succeed('Done');
    console.log(response); 
})();


