import axios from 'axios';

const baseEndpoint = 'https://misc-tasks.herokuapp.com/';

export interface JobInfo {
	role: string,
	company: string,
	duration: string,
	description: string[]
}

export const getResume = async (): Promise<string> => {
	const res = await axios.get(`${baseEndpoint}/resume`, { responseType: 'arraybuffer' });
	return res.data;
};


export const getJobs = async (): Promise<JobInfo[]> => {
	const res = await axios.get(`${baseEndpoint}/resume/jobs`);
	return res.data;
};