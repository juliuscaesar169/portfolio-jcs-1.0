interface sanityBody {
    _created: string;   
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Social extends sanityBody {
    _title: 'social';
    titlte: string;
    url: string;
}