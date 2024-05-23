import { Course } from "./course";

export interface Coach {
    id: string;
    courses: Course[];
    displayName: string;
    title: string;
    firstName: string;
    lastName: string;
    companyName: string;
    taxNumber: string;
    addressPart1: string;
    addressPart2: string;
    postalCode: string;
    city: string;
    country: string;
    biography: string;
    emailAddress: string;
    telephoneNumber: string;
    profilePictureLink: string;
}