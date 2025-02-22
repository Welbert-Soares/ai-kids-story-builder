import {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
} from "@google/generative-ai";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
});

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: "application/json",
};

export const chatSession = model.startChat({
	generationConfig,
	history: [
		{
			role: "user",
			parts: [
				{
					text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School , give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name , all in JSON field format",
				},
			],
		},
		{
			role: "model",
			parts: [
				{
					text: '```json\n{\n  "storyTitle": "Leo and the Magic School",\n  "coverImagePrompt": "Paper cut style illustration: A boy, Leo, with bright, curious eyes, wearing a backpack overflowing with colorful pencils and a spellbook, stands in front of a whimsical, floating school made of swirling candy clouds and gingerbread houses.  Stars twinkle around the school.  The title \'Leo and the Magic School\' is written in a playful, handwritten font.",\n  "chapters": [\n    {\n      "chapterTitle": "A Mysterious Invitation",\n      "text": "Leo loved drawing.  He filled notebooks with fantastical creatures and swirling galaxies. One day, he received a strange, shimmering envelope. Inside was an invitation to the Magic School, a place where ordinary children learned extraordinary things!  The invitation was sealed with a tiny, winking star.",\n      "imagePrompt": "Paper cut style illustration: Leo, eyes wide with wonder, holding a shimmering, star-sealed invitation. The background features swirling paper cut stars and a glimpse of a fantastical, distant castle – the Magic School."\n    },\n    {\n      "chapterTitle": "Flying Lessons",\n      "text": "At the Magic School, Leo met other children with amazing abilities.  His first lesson was flying!  He learned to use a magic broom that zipped and zoomed through the sky. It wasn\'t easy at first, but with practice, he soared above the candy-cloud landscape.",\n      "imagePrompt": "Paper cut style illustration: Leo, grinning, astride a magical broom made of twigs and vibrant paper cut leaves, flying above a landscape of candy clouds and lollipop trees. Other children on brooms are flying nearby."\n    },\n    {\n      "chapterTitle": "Potion Making 101",\n      "text": "Next, Leo learned about potion making.  He carefully measured glowing ingredients – sparkling dust, rainbow drops, and giggling bubbles – following the instructions in his spellbook. His first potion fizzed and popped, creating a cloud of colorful smoke that smelled like strawberries!",\n      "imagePrompt": "Paper cut style illustration: Leo in a magical laboratory, surrounded by bubbling potions in glass beakers. He is carefully measuring ingredients using tiny paper cut scales and spoons.  The background shows various whimsical potion ingredients."\n    },\n    {\n      "chapterTitle": "The Whispering Woods",\n      "text": "One day, the children had to venture into the Whispering Woods, a magical forest filled with talking trees and mischievous sprites.  Leo used his new potion-making skills to create a calming brew to soothe a grumpy troll guarding a secret passage.  He learned that kindness and cleverness were just as important as magic.",\n      "imagePrompt": "Paper cut style illustration: Leo, surrounded by whimsical, talking trees and playful sprites made of paper cut leaves and branches, using his potion to calm a grumpy, paper cut troll. The path winds through a paper cut forest."\n    },\n    {\n      "chapterTitle": "Graduation Day",\n      "text": "After many exciting lessons, it was graduation day!  Leo had learned so much – not just magic, but also friendship, courage, and the importance of using his powers for good.  He received a diploma made of shimmering stardust and promised to use his magic to help others.",\n      "imagePrompt": "Paper cut style illustration: Leo, beaming, receiving a diploma made of glittering stardust from a wise, paper cut owl teacher.  Other children are celebrating around him.  A celebratory banner with \'Graduation Day!\' is in the background."\n    }\n  ]\n}\n```\n',
				},
			],
		},
	],
});
