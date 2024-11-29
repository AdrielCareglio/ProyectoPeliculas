
PRESENTACIÓN


INSTRUCCIONES
npm install
npm run serve

-AUTENTICACIÓN
    usuario: 123
    contraseña: 123

BOTONES EXTRAS
    "NOTFLIX" en navbar regresa a Login
    "Cerrar sesión" sale a Login
    "Volver" en pantalla de recomendacion devuelve a la selección de género

-MEJORAS A FUTURO
    Footer: links no funcionales
    En pantalla de inicio, incluir registro para posteriores verificaciones.
    Ampliar el número de géneros y conectar una API para tener acceso a una selección mayor de películas, al igual que más información sobre estas.
    Agregar una posibilidad de calificación numérica, por estrellas o inlcuso una crítica personal.
    Marcar una película como vista, no vista, pendiente de ver.


---------------------------------------------------------------------------------------------
Documentación del Funcionamiento del Programa
1. Uso del JSON y su Propósito
    ¿Por qué se usa un archivo JSON?
    Almacenamiento estructurado: El archivo movies.json sirve para almacenar de manera estructurada la información de las películas, incluyendo su título, género, y carátula.
    Independencia del backend: Al estar ubicado en la carpeta public, el archivo JSON actúa como una base de datos ligera para esta aplicación, sin necesidad de una API o base de datos real.
    Flexibilidad: El archivo JSON es fácilmente editable y escalable, permitiendo agregar o modificar películas sin cambiar el código de la aplicación.
    Interacción del JSON con la Aplicación
    Carga de datos: El archivo JSON se carga mediante fetch en el método loadMovies del componente App.vue.
    Filtrado: Los géneros seleccionados por el usuario determinan qué películas se filtran del JSON y se muestran como recomendaciones.
    Distribución: Los datos del JSON se pasan desde App.vue a los componentes secundarios a través de props.

2. Componentes del Programa y sus Funciones
    App.vue (Componente Principal)
        Coordina la navegación entre pantallas.
        Carga los datos desde movies.json.
        Maneja los géneros seleccionados por el usuario.
        Filtra las películas y pasa los datos a MovieResults.
        Usa props para pasar las películas filtradas a MovieResults.
        Recibe eventos de los componentes secundarios para cambiar de pantalla (screen).

    LoadingScreen.vue
        Muestra un gif animado durante 5 segundos mientras la aplicación se carga.
        Interacción:
        No recibe datos ni emite eventos. Simplemente se muestra en función del estado screen en App.vue.

    LoginForm.vue
        Permite al usuario autenticarse con un nombre de usuario y contraseña (123 / 123).
        Emite el evento authenticated al componente App.vue si las credenciales son correctas, para cambiar el estado screen a "genres".

    GenreSelection.vue
        Presenta una lista de géneros para que el usuario seleccione hasta 3.
        Recibe el listado de géneros desde el JSON cargado en App.vue.
        Emite el evento submit con los géneros seleccionados al componente principal, para que filtre las películas y pase a la pantalla de resultados.

    MovieResults.vue
        Muestra las películas recomendadas según los géneros seleccionados.
        Incluye un botón para regresar a la selección de géneros y un enlace para cerrar sesión.
        Recibe las películas filtradas como props desde App.vue.
        Emite eventos como go-back para volver a GenreSelection o goToLoginForm para cerrar sesión.

3. Flujo Completo del Programa
    Pantalla de Carga (LoadingScreen.vue)
        Muestra un gif animado durante 5 segundos.
        Cambia automáticamente a la pantalla de login (LoginForm.vue).
        Login (LoginForm.vue)

    El usuario introduce sus credenciales.
        Si las credenciales son correctas, emite un evento al componente App.vue para cambiar el estado a "genres".
        Selección de Géneros (GenreSelection.vue)

    El usuario selecciona hasta 3 géneros.
        Emite el evento submit con los géneros seleccionados, que se usan para filtrar las películas desde el JSON.
        Recomendaciones de Películas (MovieResults.vue)

    Muestra hasta 3 películas filtradas del JSON según los géneros seleccionados.
    Incluye un botón para volver a la selección de géneros (go-back).
    Permite cerrar sesión con el enlace "Cerrar sesión".
    Navegación General

    El logo "NOTFLIX" en el header lleva a la selección de géneros si el usuario está en la pantalla de resultados.

    El botón "Cerrar sesión" redirige al formulario de login.

4. Resumen de las Relaciones entre Componentes
    App.vue actúa como el cerebro de la aplicación, gestionando el estado y conectando los datos con los componentes secundarios.
    LoadingScreen.vue, LoginForm.vue, GenreSelection.vue, y MovieResults.vue son pantallas que se muestran de manera condicional según el estado screen.
    El archivo JSON es la fuente de datos central, cuyas películas son cargadas en App.vue y distribuidas a los componentes según las interacciones del usuario.








