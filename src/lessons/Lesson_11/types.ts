// import { University } from './../__check_11/types';
export enum SEARCH_FORM_VALUES {
    "COUNTRY" = "country",
}

export interface University {
    name: string;
    country: string;
    alpha_two_code: string;
    domains: string[];
    web_pages: string[];
    "state-province": string | null;
}

export interface UniversityInList extends University {
    uid: string;
}