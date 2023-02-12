Success Component
This component is responsible for displaying the success message when an order is created.

Implementation Details
The component first receives the location from the useLocation hook and destructure the state from it to get the billing details and the cart information. If the state is null, the cart is set to 0, otherwise the cart is set to the state.amount.

The component also makes use of the useAppSelector hook to get the current user from the global state.

The component makes a post request to create an order using the userRequest.post method. The request body includes the userId, products, amount, and address. If the request is successful, the orderId state is set to the returned id.

The component then returns a success message indicating the order has been created and the order number if it is available. It also has a button that takes the user to the homepage.

Styles
The component makes use of styled components to style the success container and success button. The SuccessContainer styles the container to have a height of 100vh, display as a flex container, with flex direction as column, align items and justify content as center. The SuccessButton styles the success button with a padding of 10 and a margin-top of 20.
