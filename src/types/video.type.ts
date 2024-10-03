export default interface Video {
	// Define the structure of video data here if known
	id: string;
	title: string;
	channel: object;
	views: number;
	postedAt: string;
	duration: number;
	thumbnailUrl: string;
	videoUrl: string;
}
