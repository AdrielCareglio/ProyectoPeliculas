<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="register"> <!--Formulario html que evita que la web se recargue al eviar el fomulario-->
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  