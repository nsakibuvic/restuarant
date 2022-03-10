import { Fragment, useContext } from "react";
import Card from "./Card";
import classes from "./Resturants.module.css";
import { Data } from "./Data";
import { CartState } from "../../store/Cart-Context";

const Resturants = (props) => {
  const {
    state: { restaurants },
  } = CartState();
  // console.log(restaurants)

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

  return (
     <Fragment>
        <div className={classes.featureCards}>
          <h2>Featured Resturant</h2>
          {resturantData.map((item) =>
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
          <h2>All Resturants</h2>
          {resturantData.map((item) =>
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
