interface SubpageHeroProps {
    title: string;
    subtitle: string;
    image?: string;
}

interface ReadMoreButtonProps {
    href: string;
    text: string;
    icon?: React.ReactNode;
    className?: string;
}

interface MediaEngageCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    badge?: string;
}

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    description?: string;
    backup?: string;
}

interface SudokuGridProps {
    background_img?: string;
    background_color?: string;
    title: string;
    link: string;
    icon?: string;
    additional_class?: string;
}

export type { SubpageHeroProps, ReadMoreButtonProps, MediaEngageCardProps, TeamMemberProps, SudokuGridProps };