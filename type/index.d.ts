import {BADGE_CRITERIA} from '@/constants';

export interface SidebarLink {
    imgURL:string;
    route:string;
    label:string;
}

export interface Job{
    id?:string;
    employer_name?:string;
    employer_logo?:string | undefined;
    employer_webstei?:string;
    job_employment_type?:string;
    job_title?:string;
    job_description?:string;
    job_apply_link?:string;
    job_city?:string;
    job_state?:string;
    job_country?:string;
}

export interface ParamsProps{
    params:{id:string};
}

export interface searchParamsProps{
    searchParams:{[key:string]:string|undefined}
}

export interface URLProps{
    params:{id:string};
    searchParams:{[key:string]:string|undefined};
}


export interface BadgeCounts {
    GOLD:number;
    SIlVER:number;
    BRONZE:number;
}


export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;