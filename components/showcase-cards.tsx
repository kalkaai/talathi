import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const websites = [
    {
        title: "KalkaAI.com",
        description:
            "AI-powered platform for intelligent business solutions and automation.",
        image: "/kalkaai.png",
        url: "https://kalkaai.com",
    },
    {
        title: "SuperHeed.com",
        description:
            "Advanced productivity tools and workflow management for modern teams.",
        image: "/superheed.png",
        url: "https://superheed.com",
    },
    {
        title: "AriaTimer.com",
        description:
            "Elegant time tracking and project management solution for professionals.",
        image: "/ariatimer.png",
        url: "https://ariatimer.com",
    },
    {
        title: "GuardHero.app",
        description:
            "Comprehensive security monitoring and protection for your digital assets.",
        image: "/guardhero.png",
        url: "https://guardhero.app",
    },
];

export function ShowcaseCards() {
    return (
        <section className="py-32 px-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {websites.map((website, index) => (
                        <a
                            key={index}
                            href={website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transform transition-all duration-500 hover:scale-[1.02]"
                        >
                            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer overflow-hidden h-full">
                                <div className="relative h-64 w-full overflow-hidden bg-muted/30">
                                    <Image
                                        src={
                                            website.image || "/placeholder.svg"
                                        }
                                        alt={website.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                                        {website.title}
                                    </h3>
                                    <p className="text-base text-muted-foreground leading-relaxed">
                                        {website.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
