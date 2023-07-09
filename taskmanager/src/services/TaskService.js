import axios from "axios";
import { TASK_URL_PREFIX } from "../constants/ApiServiceConstants.js";

export function saveTask(task) {
  return axios.post(`${TASK_URL_PREFIX}`, task);
}

export function getTasksByUrl(url) {
  return axios.get(`${TASK_URL_PREFIX}/${url}`);
}

export function completeTask(id){
  return axios.put(`${TASK_URL_PREFIX}/${id}/complete`);
}

export function deleteTask(id){
  return axios.delete(`${TASK_URL_PREFIX}/${id}`);
}


