import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const fetchProjectById = (projectId: string) => {
  return axios.get(`${BASE_URL}/papi/projects/id?id=${projectId}`);
};
export const fetchProjects = () => {
  return axios.get(`${BASE_URL}/papi/projects`);
};
export const fetchServices = () => {
    return axios.get(`${BASE_URL}/sapi/services`);
};
export const fetchServiceById = (serviceId : string) => {
    return axios.get(`${BASE_URL}/sapi/services/id?id=${serviceId}`);
};
export const fetchTestimonials = () =>{
    return axios.get(`${BASE_URL}/tapi/testimonials`);
};