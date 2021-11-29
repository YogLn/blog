const devBaseURL = "http://118.31.113.37:8005";
const proBaseURL = "http://118.31.113.37:8005";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
