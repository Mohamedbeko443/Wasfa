



export type SortByType = 'Name' | 'Rating' | 'Cook Time' | 'Servings';

export type SortOrderType = 'Ascending' | 'Descending';

export type FilterByType =
    | 'All Dishes'
    | 'Quick (≤30 min)'
    | 'Medium (31-60 min)'
    | 'Long (>60 min)'
    | 'High Rated (4.5+)';

export type ItemsPerPageType = 6 | 9 | 12 | 18;
