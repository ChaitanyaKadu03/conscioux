// Bellow are related to home page

export interface INavLinks { id: string, value: string, link: string };

export interface IHeroConst {
    headline: string,
    subHeadline: string,
    primaryCTA: string,
    secondaryCTA: string
}

export interface IFeaturesConst {
    id: string,
    title: string,
    body: string
}

export interface IWorkConst {
    id: string,
    title: string,
    body: string
}

export interface ITestimonialConst {
    id: string,
    username: string,
    message: string
}

export interface IDevelopersConst {
    title: string,
    body: string,
    cta: string
    link: string
}

// Bellow are related to about page

export interface ICtaConst {
    title: string,
    body: string,
    cta: string,
    link: string
}

export interface ISocialMediaConst {
    id: string,
    name: string,
    link: string,
    logo: string
}

export interface ICoreValueConst {
    id: string,
    title: string;
    description: string;
}

export interface IWhyConsciouxConst {
    id: string,
    messgae: string
}

// button inputs

export interface IBtnInput {
    type: EIBtnInType,
    input: string,
    arrow: boolean,
    link: string,
    background: boolean
}

export enum EIBtnInType {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

