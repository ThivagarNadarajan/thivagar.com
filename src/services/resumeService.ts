import axios from 'axios';

// const endpoint = 'https://script-server.herokuapp.com';
const baseEndpoint = 'http://localhost:5000';

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