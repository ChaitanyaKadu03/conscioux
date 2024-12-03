export enum Member {
    FREE = "free",
    PREMIUM = "premium",
    INFINITY = "infinity"
}

export enum SupportedCountries {
    UNITED_STATES = "United States",
    CANADA = "Canada",
    EUROPEAN_UNION = "European Union",
    UNITED_KINGDOM = "United Kingdom",
    JAPAN = "Japan",
    AUSTRALIA = "Australia",
    INDIA = "India",
    CHINA = "China",
    BRAZIL = "Brazil",
    SOUTH_KOREA = "South Korea",
    SOUTH_AFRICA = "South Africa",
    SWITZERLAND = "Switzerland",
}

export enum SupportedCurrencies {
    USD = "US Dollar",
    CAD = "Canadian Dollar",
    EUR = "Euro",
    GBP = "British Pound Sterling",
    JPY = "Japanese Yen",
    AUD = "Australian Dollar",
    INR = "Indian Rupee",
    CNY = "Chinese Yuan Renminbi",
    BRL = "Brazilian Real",
    KRW = "South Korean Won",
    ZAR = "South African Rand",
    CHF = "Swiss Franc",
}

export enum CurrencyCodes {
    USD = "USD",
    CAD = "CAD",
    EUR = "EUR",
    GBP = "GBP",
    JPY = "JPY",
    AUD = "AUD",
    INR = "INR",
    CNY = "CNY",
    BRL = "BRL",
    KRW = "KRW",
    ZAR = "ZAR",
    CHF = "CHF",
}

export enum DeviceTheme {
    DARK = "dark",
    LIGHT = "light"
}

export interface IUser {
    id: string;
    name?: string;
    email: string;
    emailVerified?: Date;
    image?: string;
    accounts?: IAccount[];
    sessions?: ISession[];
    Authenticator?: IAuthenticator[];
    firstName?: string;
    lastName?: string;
    createdAt: Date;
    updatedAt: Date;
    Profile?: IProfile;
}


export interface IProfile {
    id: string;
    contact?: string;
    isPremium: Member;
    stats: number;
    user: IUser;
    userId: string;
    observeId: string;
    observe: IObserve;
    settingsId: string;
    settings: ISettings;
    securityId: string;
    security: ISecurity;
}


export interface IObserve {
    id: string;
    list: string[];
    updatedAt: Date;
    profile?: IProfile;
}


export interface ISettings {
    id: string;
    language: string;
    theme: DeviceTheme;
    currency: CurrencyCodes;
    country: SupportedCurrencies;
    profile?: IProfile;
}


export interface ISecurity {
    id: string;
    two_factor_auth: boolean;
    email_auth: boolean;
    databaseSession: string[];
    loginIps: string[];
    profile?: IProfile;
}


export interface IAccount {
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
    createdAt: Date;
    updatedAt: Date;
    user: IUser;
}


export interface ISession {
    sessionToken: string;
    userId: string;
    expires: Date;
    user: IUser;
    createdAt: Date;
    updatedAt: Date;
}


export interface IVerificationToken {
    identifier: string;
    token: string;
    expires: Date;
}


export interface IAuthenticator {
    credentialID: string;
    userId: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string;
    user: IUser;
}


export interface IResult {
    statusCode: number,
    success: boolean,
    message: string,
    data: any
}