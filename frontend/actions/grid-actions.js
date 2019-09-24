export const OPEN_GRID = "OPEN_GRID"; 
export const CLOSE_GRID = "CLOSE_GRID"; 


export const openGrid = (grid) => ({
    type: OPEN_GRID, 
})


export const closeGrid = () => ({
    type: CLOSE_GRID
})