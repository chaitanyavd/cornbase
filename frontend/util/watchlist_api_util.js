export const fetchWatchlists = () => (
    $.ajax({
        method: "GET",
        url: `api/watchlists`
    })
)


export const deleteWatchlist = id => {

    return (
    $.ajax({
        method: "DELETE",
        url: `api/watchlists/${id}`
    })
)}



export const createWatchlist = watchlist => {
    return ($.ajax({
        method: "POST",
        url: `api/watchlists`,
        data: { watchlist }
    }))
}