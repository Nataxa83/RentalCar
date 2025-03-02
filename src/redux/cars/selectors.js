export const selectCars = state => state.carsData?.cars || [];
export const selectTotalPages = state => state.carsData?.totalPages