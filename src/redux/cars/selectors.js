export const selectCars = state => state.carsData?.cars;
export const selectTotalPages = state => state.carsData?.totalPages
export const selectLoading = state => state.carsData?.loading
export const selectError = state => state.carsData?.error