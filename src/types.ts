export interface IShortArticle {
	id: string;
	publishedAt: number;
	description: string;
}

export interface IFullTopic {
	id: string;
	category: string;
	title: string;
	description: string;
	articles: IArticle[];
}

export interface IArticle {
	id: string;
	title: string;
	shortDescription: string;
	readingTime: number;
	image: null | string;
}

export interface ITopic {
	id: string;
	name: string;
}


