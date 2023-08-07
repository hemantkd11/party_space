export const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  user: null,
  address: {},
  bookinginfo: JSON.parse(localStorage.getItem("bookinginfo")) || [],
  OrderPage: JSON.parse(localStorage.getItem("OrderPage")) || [],
  AboutTime: JSON.parse(localStorage.getItem("AboutTime")) || [],
};
export const getBasketTotal = (basket) =>
  basket.reduce((total, item) => total + item.price, 0);

const reducer = (state = initialState, action) => {
  console.log("action", action);

  switch (action.type) {
    //   case "Add_to_CheckOutPage":
    //     console.log("Adding item to checkout:", action.items)
    //     return {
    //       ...state,
    //       basket: [...state.basket, action.items],

    //     };
    case "Add_to_CheckOutPage":
      console.log("Adding item to checkout:", action.items); //console
      const Place_basket = [...state.basket, action.items];
      localStorage.setItem("basket", JSON.stringify(Place_basket)); // Save the updated basket to localStorage
      return {
        ...state,
        basket: Place_basket,
      };

    case "BookingContact":
      const Booking_Contact = [...state.bookinginfo, action.items];
      console.log("Adding Booking:", action.items); // console
      localStorage.setItem("bookinginfo", JSON.stringify(Booking_Contact)); // Save the updated basket to localStorage
      return {
        ...state,
        bookinginfo: Booking_Contact,
      };

    case "AllDetails":
      const order_details = [...state.OrderPage, action.items];
      console.log("order_Details:", action.items); //console
      localStorage.removeItem("OrderPage");
      localStorage.setItem("OrderPage", JSON.stringify(order_details)); // Save the updated basket to localStorage
      return {
        ...state,
        OrderPage: order_details,
      };
    case "ADD_DETAILS_TIME_DATE":
      const Time_Date_Field = [...state.AboutTime, action.items];
      console.log("Time_Date_Field:", action.items); //console
      localStorage.setItem("AboutTime", JSON.stringify(Time_Date_Field)); // Save the updated basket to localStorage
      return {
        ...state,
        AboutTime: Time_Date_Field,
      };

    case "REMOVE_ITEM":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
        localStorage.setItem("basket", JSON.stringify(newBasket));
      } else {
        console.warn(`cant remove produnt ${index}`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "Set_address":
      return {
        ...state,
        address: { ...action.items },
      };

    default:
      return state;
  }
};
export default reducer;
