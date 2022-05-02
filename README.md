# General Data

- isCatched → true / false
  - Indicates if fish is catched (true) or not (false)
-

# #APP

- Render a Header component.
- Render the actual ROUTE.
- Render a Footer component.

# #Header

- Render a h1 with "Fishypedia" or a "go back" button depending of the ACTUAL ROUTE.
- Render a h2 text with the GIVEN sub-page name.
- Render a fish icon in DESKTOP view.
- Render a button component GIVING the text “Aquarium” and it’s action in DESKTOP view.
- Render a button component GIVING the text “Fish Tank” and it’s action in DESKTOP view.
- Render a filter component in DESKTOP view.

## ##Desktop Filter

- Show a datalist when user clicks on it.
- Refresh list STATUS (main or local list)

# #Aquarium Page

- REQUEST a list from Acnhapi API.
- Render a list with as many fishes in the API list.
- Render a button component GIVING the text “Load more” and it’s action.

## ##Fish

- Render a fish component.
- Show an h3 with the RECEIVED name.
- Show a label with a calendar icon and the RECEIVED spawn months.
- Show a label with a clock icon and the RECEIVED spawn time.
- Show a label with the RECEIVED spawn location.
- Show a label with the RECEIVED rarity.
- Render a button component GIVING the text “Catch it!” and it’s action.
- When user clicks on it, it CHANGES the view to FishDetail

# #FishDetail Page

- Render a container with the RECEIVED image
- Render a container with:
  - An h3 with the RECEIVED name,
  - A text with a globe icon and “Northern hemisphere” text,
  - A label with a calendar icon and the RECEIVED spawn months,
  - A text with a globe icon and “Southern hemisphere” text,
  - A label with a calendar icon and the RECEIVED spawn month.
- Render a container with:
  - The “money bag” icon.
  - An h4 with the text “Price”.
  - A text with “C.J. Price (50% MORE)”.
  - A label with a star icon and the RECEIVED price.
  - A text with “Box price (20% LESS)”.
  - A label with a star icon and the RECEIVED price.
- Render a container with:
  - The Blathers icon
  - An h4 with the text “Blathers has this to tell about the” and the RECEIVED fishname.
  - A p with the RECEIVED description text.
- Render a button component GIVING the text “Catch it!” and it’s action.

# #Footer

- Render a home icon button GIVING the link to the main page Aquarium action or render a button GIVING the text “Previous” and it’s action depending on Mobile or Desktop view.
- Render a fish icon button GIVING the link to the fish-tank page or render a button GIVING the text “Next” and it’s action depending on Mobile or Desktop view.
- Render a span with text “Showing” and the RECEIVED numbers.

# #Fish Tank Page

- REQUEST a list from the local API.
- Render a list as many fishes in the local API list.
- _Render + icon to add fish_

## ##FishTank Fish

- Render a fish component.
- Show an h3 with the RECEIVED name.
- Show a label with a calendar icon and the RECEIVED spawn months.
- Show a label with a clock icon and the RECEIVED spawn time.
- Show a label with the RECEIVED spawn location.
- Show a label with the RECEIVED rarity.
- Render a button component GIVING the text “Release” and it’s action.
- Render a button component GIVING the text “Edit” and it’s action.
- When user clicks on it, it CHANGES the view to FishTankDetail

# #FishTank Detail Page

- Render a container with the RECEIVED image
- Render a container with:
  - An h3 with the RECEIVED name,
  - A text with a globe icon and “Northern hemisphere” text,
  - A label with a calendar icon and the RECEIVED spawn months,
  - A text with a globe icon and “Southern hemisphere” text,
  - A label with a calendar icon and the RECEIVED spawn month.
- Render a container with:
  - The “money bag” icon.
  - An h4 with the text “Price”.
  - A text with “C.J. Price (50% MORE)”.
  - A label with a star icon and the RECEIVED price.
  - A text with “Box price (20% LESS)”.
  - A label with a star icon and the RECEIVED price.
- Render a container with:
  - The Blathers icon
  - An h4 with the text “Blathers has this to tell about the” and the RECEIVED fishname.
  - A p with the RECEIVED description text.
- Render a button component GIVING the text “Release” and it’s action.
- Render a button component GIVING the text “Edit” and it’s action.

# ##Button addButton

- Render a button Component
- Render a received text “Catch it !”
- Request action to PUT item into the fish tank

# ##Button deleteButton

- Render a button Component
- Render a received text “release ”
- Request action to delete/release item back into the main aquarium

# ##Button EditButton

- Render a button Component
- Render a received text “Edit”
- Request action to edit fish item

# ##Button searchButton

- Render a button Component
- Render a received text “Search”
- Request action filter public API

# ##Button error messageButton

- Render a button Component
- Render a received text “Back to aquarium”
- Renders button link to main page aquarium

# #Modal CreateFishMessage component

- Render a toast advising of the creation of a new fish
- Render button with the received text “Back to the aquarium” and received action “delete”
- Render button with the received text “See the fish tank” and received action “add”

# #Modal ReleaseFishMessage component

- Render a toast advising of inminent fish release
- Render button with the received text “I want to keep it” and received action “add”
- Render button with the received text “Sea ya, little fella” and received action “delete”

# #Modal CatchedFishMessage component

- Render a toast advising of fish catched
- Render button with the received text “see the fishTank” and received action “add”
- Render button with the received text “Back to aquarium” and received action “delete”

# #Modal ErrorMessage component

- Render a “toast” advising the user of temporal unavailability
- Render a errorMessageButton
