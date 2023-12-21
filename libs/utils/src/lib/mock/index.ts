import {DEFAULT_DAYS, DEFAULT_GROUPS, DEFAULT_SUBJECTS_TEACHERS, DEFAULT_TIMES} from '../constants/index';
import {TGroupObject} from "../types";

export const getGroups = () => DEFAULT_GROUPS.map((name, index) => ({name, id: index + 1}));

export const getGroupsObject = ():TGroupObject => getGroups().reduce((accProperty, property, index) => ({
  ...accProperty,
  [`group-${(index+1).toString().padStart(2,'0')}`]: property
}), {});

export const getSubjects = () => DEFAULT_SUBJECTS_TEACHERS.map((row, index) => ({
  ...row,
  id: index + 1
}));

export const getDays = () => DEFAULT_DAYS.map((name, index) => ({name, id: index + 1}));

export const getTimes = () => DEFAULT_TIMES.map((name, index) => ({name, id: index + 1}));
