# Datos globales

- isCatched → true / false
  - Indicates if fish is catched (true) or not (false)
- fishes
- fish
- currentPage

# Components

## APP

- Render a Header
- Render a page depending on the GIVEN route
- Render a Footer component

## Header

- En MOVILE, renderiza un titulo "Fishypedia" o una boton de flecha dependiendo de la pagina
- Da al botton flecha una acción para ir a la pagina actual

- Renderiza un subtitulo dependiendo de la pagina actual

- En DESKTOP, renderiza un Navigation

- Render a filter component in DESKTOP view

- Render a fish icon in DESKTOP view

## Footer

- En MOVILE, renderiza un Navigation
- En DESKTOP, renderiza una Pagination

## Pagination

- Renderiza dos botones, uno para ir a la página de antes “Previous” y otro para ir a la página de después “Next”
- Muestra el total de peces y el número de peces actuales en la página

## Navigation

- Renderiza un icono de una casa
- Denderiza un texto "Aquarium"
- Da al conjunto del icono y el texto la acción para navegar a la pagina FishAquariumListPage

- Renderiza un icono de un pez
- Renderiza un texto "Fish Tank"
- Da al conjunto del icono y el texto la acción para navegar a la pagina FishTankListPage

- En DESKTOP, renderiza dos Button con los textos "Aquarium" y "Fish Tank" que naveguen a FishAquariumListPage y FishTankListPage respectivamente

## FishAquariumListPage

- Muestra un listado de Fish traidos de la API pública
- Renderiza tantos Fish como peces haya
- Muestra un Button
- Da al Button un texto “Load more” y una ación para cargar más peces

## FishAquariumDetailPage

- Muestra un FishDetail

## FishTankListPage

- Muestra un listado de Fish traidos desde la API local
- Renderiza tantos Fish como peces haya
- Muestra un Button
- Da al Button un texto “Load more” y una ación para cargar más peces

## FishTankDetailPage

- Muestra un FishDetail

## Fish

- Show an h3 with the RECEIVED name.
- Show a label with a calendar icon and the RECEIVED spawn months.
- Show a label with a clock icon and the RECEIVED spawn time.
- Show a label with the RECEIVED spawn location.
- Show a label with the RECEIVED rarity.
- When user clicks on it, it CHANGES the view to FishAquariumDetailPage or FishTankDetailPage depending on the actual ListPage
- Si la página actual es FishAquariumListPage renderiza un Buton y le da el texto "Catch it!" y la acción de guardar el pez en nuestra API Local
- Si la página actual es FishTankListPage renderiza dos Button
  - Un Button secundario, le da el texto “Release” y la acción de borrar el pez de nuestra API local
  - Un Button primario, le da el texto “Edit” y la acción de editar el pez de nuestra API local

## FishDetail

- Render **FishFoto** with the RECEIVED image
- Render **FishInfo** with:
  - An h3 with the RECEIVED name,
  - A text with a globe icon and “Northern hemisphere” text,
  - A label with a calendar icon and the RECEIVED spawn months,
  - A text with a globe icon and “Southern hemisphere” text,
  - A label with a calendar icon and the RECEIVED spawn month.
- Render **FishPrice** with:
  - The “money bag” icon.
  - An h4 with the text “Price”.
  - A text with “C.J. Price (50% MORE)”.
  - A label with a star icon and the RECEIVED price.
  - A text with “Box price (20% LESS)”.
  - A label with a star icon and the RECEIVED price.
- Render **BlathersQuote** with:
  - The Blathers icon
  - An h4 with the text “Blathers has this to tell about the” and the RECEIVED fishname.
  - A p with the RECEIVED description text.
- Si la página actual es FishAquariumListPage renderiza un Buton y le da el texto "Catch it!" y la acción de guardar el pez en nuestra API Local
- Si la página actual es FishTankListPage renderiza dos Button
  - Un Button secundario, le da el texto “Release” y la acción de borrar el pez de nuestra API local
  - Un Button primario, le da el texto “Edit” y la acción de editar el pez de nuestra API local

## Button

- Renderiza un boton con un texto RECIVIDO
- Dependiendo del estilo RECIVIDO, renderiza un boton con un estilo primary, secondary, alerPrimary o alertSecondary
- Cuando el usuario haga click el boton debe ejecutar la acción que ha RECIVIDO

---

## Modal CreateFishMessage component

- Render a toast advising of the creation of a new fish
- Render button with the received text “Back to the aquarium” and received action “delete”
- Render button with the received text “See the fish tank” and received action “add”

## Modal ReleaseFishMessage component

- Render a toast advising of inminent fish release
- Render button with the received text “I want to keep it” and received action “add”
- Render button with the received text “Sea ya, little fella” and received action “delete”

## Modal CatchedFishMessage component

- Render a toast advising of fish catched
- Render button with the received text “see the fishTank” and received action “add”
- Render button with the received text “Back to aquarium” and received action “delete”

## Modal ErrorMessage component

- Render a “toast” advising the user of temporal unavailability
- Render a errorMessageButton

## Desktop Filter

- Show a datalist when user clicks on it.
- Refresh list STATUS (main or local list)
