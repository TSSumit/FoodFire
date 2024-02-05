import RestaurantSkeletonCard from "./RestaurantSkeletonCard";
const Shimmer=()=>{
    const shimmerElements = [];

    for (let i = 0; i < 15; i++) {
        shimmerElements.push(<RestaurantSkeletonCard key={i} />);
    }
    console.log("this is the shimmer   +shimmerElements");
    return (
        <div className="body">
            <div className="search-and-filter-skeleton">
                <div className="skeleton search-and-filter-skeleton-box"></div>
                <div className="skeleton search-and-filter-skeleton-box"></div>
            </div>
            <div className="restaurant-containser">
                {
                    shimmerElements
                }
            </div>
        </div>
    )
}

export default Shimmer;