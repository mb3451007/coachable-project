import { Coach } from "./coach";
import { Course } from "./course";

export interface SearchResult {
    courseResult: Course[];
    coachResult: Coach[];
}