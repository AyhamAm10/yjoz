export type categorysType  = {
    category: {
        category: string;
        created_at: string;
        id: string;
        ignore_set_color: boolean;
        image: string;
        sub_categories: {
            category: string;
            created_at: string;
            id: string;
            ignore_set_color: boolean;
            image: string;
            updated_at: string;
        }[];
    }[];
} | null 

