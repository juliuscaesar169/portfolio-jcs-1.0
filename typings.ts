interface SanityBody {
    _created: string;   
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'Image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody {
    _type: 'experience',
    companyName: string,
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    location: string;
    description: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    image: Image;
    finishedAt: Date;
    isDeployed: boolean;
    linkToBuild: string;
    summary: string;
    technologies: Technology[]
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}