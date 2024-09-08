export interface PaginatedResponseDto<TResponse> {
    page: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
    data: TResponse[];  
}

export interface PaginatedRequestDto<TFilter> {
    page: number;
    pageSize: number;
    values?: TFilter;
}