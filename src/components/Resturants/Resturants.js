import { Fragment } from "react";
import Card from "./Card";
import classes from "./Resturants.module.css";
import { Data } from "./Data";

const Resturants = (props) => {
 
  const resturantData = [Data];
  // const featuredID = resturantData.map((item) =>
  //   item.featuredRestaurants.map((el) => el.restaurantId)
  // );
  // [Data] => [[71, 22], [12]]

  const featuredRestaurants = resturantData.reduce(
    (prev, curr) => [
      ...prev,
      ...curr.featuredRestaurants.map((el) => el.restaurantId),
    ],
    []
  );

  // x([], ['71', '22']); // [71, 22]
  // x(['71', '22'], ['12']); // [71, 22, 12]

  // [Data] => [71, 22, 12]
  //   console.log(resturantData)
  // console.log(featuredID)
  // console.log(featuredRestaurants)
  // console.log(resturantData)
  // console.log(resturantData.map((item) => item.restaurants.map((el) => el.id)))
  // console.log(resturantData.map((item) => item.restaurants.filter((el) => featuredID.find(item => item === el.id)).map((el) => el.id)))
  // console.log(resturantData.map((item) => item.restaurants.filter((el) => featuredRestaurants.find(item => item === el.id)).map((el) => el.id)))
  // console.log(resturantData.map((item) => item.restaurants.filter((el) => ['71'].includes(el.id)).map((el) => el.id)))
  // console.log(resturantData.map((item) =>item.restaurants.filter(res => featuredID.map(item => item === res.id))));
  // console.log(resturantData.map((item) =>
  // item.restaurants.filter(res => featuredID.find(item => item === res.id))));

  const searchRes = props.restaurants.length > 0

  return (
     <Fragment>
        <div className={classes.featureCards}>
          {!searchRes && <h2>Featured Resturant</h2>}
          {!searchRes && resturantData.map((item) =>
            item.restaurants
              .filter((res) =>
                featuredRestaurants.find((item) => item === res.id)
              )
              .map((res) => (
                <Card
                  key={res.id}
                  heading={res.name}
                  image={res.imageSmallUrl}
                  text={res.description}
                  dataProp={res}
                />
              ))
          )}
        </div> 
        <div className={classes.resCards}>
          {searchRes? <h2>Results</h2>:<h2>All Resturants</h2>}
          {searchRes && props.restaurants.map(res =>
            (
              <Card
                key={res.id}
                heading={res.name}
                image={res.imageSmallUrl}
                text={res.description}
                dataProp={res}
              />
            
          ))}
           {!searchRes && resturantData.map((item) =>
            item.restaurants.map((res) => (
              <Card
                key={res.id}
                heading={res.name}
                image={res.imageSmallUrl}
                text={res.description}
                dataProp={res}
              />
            ))
          )}
        </div>    
        </Fragment>
  );
};

export default Resturants;
