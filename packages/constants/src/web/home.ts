import { IHeroConst, INavLinks, IFeaturesConst, IWorkConst, ITestimonialConst, IDevelopersConst, ICtaConst, ISocialMediaConst, ITopHeading } from "@repo/types/web.js";

export const navLinksConst: Array<INavLinks> = [
    { id: "1", value: "Home", link: "/" },
    { id: "2", value: "Market", link: "/market" },
    { id: "3", value: "AI Insights", link: "/ai-insights" },
    { id: "4", value: "About", link: "/about" },
    { id: "5", value: "Developers", link: "/developers" }
]

export const heroConst: IHeroConst = {
    title: `🚀 Latest Pulse`,
    text: `Bitcoin Surges Past $100,000!`,
    headline: `Your Crypto Insights<br/><span class="text-yellow-300">Simplified</span>`,
    subHeadline: "Conscioux is your all-in-one platform for intuitive, AI-driven market analysis so you can trade with confidence.",
    primaryCTA: "Get Started",
    secondaryCTA: "Learn More"
}

export const dashboardConst: ITopHeading = {
    h4: `Market UI`,
    h2: `Explore the Market at a Glance`,
    h6: `Get real-time insights and trends from our intuitive dashboard. Designed for simplicity and power, it’s your ultimate tool to navigate the crypto market with confidence.`
}

export const featuresHeadingConst: ITopHeading = {
    h4: `Features`,
    h2: `Why Choose Conscioux?`,
    h6: `Discover features crafted to simplify your crypto trading journey and enhance your insights.`
}

export const featuresConst: Array<IFeaturesConst> = [
    {
        id: `1`,
        title: `Real- Time Data & Analytics`,
        body: `Stay updated with unbiased, accurate, and real - time market data from top exchanges.`,
        link: `https://i.ibb.co/wd5rG8n/real-time.jpg`
    },
    {
        id: `2`,
        title: `AI - Driven Insights`,
        body: `Leverage next - gen models to predict trends, understand sentiment, and navigate volatility.`,
        link: `https://i.ibb.co/HDqfx6f/ai-driven.jpg`
    },
    // {
    //     id: `3`,
    //     title: `Personalized Experience`,
    //     body: `Tailor your dashboard, adjust preferences, and track your favorite coins effortlessly.`,
    //     link: `https://i.ibb.co/sbX2YNC/personalized.jpg`
    // },
    {
        id: `4`,
        title: `Scalable & Reliable`,
        body: `Powered by microservices, ensuring high performance, robustness, and global availability.`,
        link: `https://i.ibb.co/CWGRzHx/scalable.jpg`
    },
    // {
    //     id: `5`,
    //     title: `Transparent & Secure`,
    //     body: `Enjoy full data transparency and industry - standard security for peace of mind.`,
    //     link: `https://i.ibb.co/GMFzZMS/secure.jpg`
    // }
];

export const workConst: Array<IWorkConst> = [
    {
        id: `1`,
        title: `Connect`,
        body: `Securely link your exchange accounts or simply explore market data without any setup.`,
    },
    {
        id: `2`,
        title: `Analyze`,
        body: `Access curated insights, advanced charts, and intelligent signals to refine your trading strategy.`,
    },
    {
        id: `3`,
        title: `Decide`,
        body: `Make confident, data-backed decisions in a clean, distraction-free interface.`,
    },
    {
        id: `4`,
        title: `Grow`,
        body: `Continuously improve your approach with evolving AI models and regular feature updates.`,
    }
];

export const testimonialsConst: Array<ITestimonialConst> = [
    { id: `1`, username: `Alex R`, message: `Conscioux changed the way I trade—clean data, simple visuals, and insightful AI predictions.` },
    { id: `2`, username: `Priya K`, message: `Finally, a crypto analysis tool that’s both powerful and elegant.` },
];

export const developersConst: IDevelopersConst = {
    title: `For Builders, By Builders`,
    body: `Leverage our documented APIs, integrate data into your own products, and shape the future of crypto insights.`,
    cta: `View Developer Docs`,
    link: ``
};

export const ctaConst: ICtaConst = {
    title: `Ready to Elevate Your Crypto Trading?`,
    body: `Join Conscioux today and discover a minimalistic platform designed around you.`,
    cta: `Create Account`,
    link: ``
};

export const socialMediaConst: Array<ISocialMediaConst> = [
    { id: `1`, name: `X`, link: `https://x.com`, logo: `https://cdn-icons-png.freepik.com/512/5968/5968830.png?ga=GA1.1.1531709200.1733948271` },
    { id: `2`, name: `Instagram`, link: `https://instagram.com`, logo: `https://cdn-icons-png.freepik.com/512/2111/2111463.png?ga=GA1.1.1531709200.1733948271` },
    { id: `3`, name: `Linkedln`, link: `https://linkedln.com`, logo: `https://cdn-icons-png.freepik.com/512/13670/13670350.png?ga=GA1.1.1531709200.1733948271` },
    { id: `4`, name: `Youtube`, link: `https://youtube.com`, logo: `https://cdn-icons-png.freepik.com/512/3992/3992589.png?ga=GA1.1.1531709200.1733948271` },
];

export const copyrightConst: string = `© 2024 Conscioux. All rights reserved.`