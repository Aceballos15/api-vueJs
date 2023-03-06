<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to='/' class="navbar-brand">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/personajes" class="nav-link active">Personajes</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/personajes/vivos' class="nav-link">Personajes Vivos</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/personajes/muertos' class="nav-link">Personajes muertos</router-link>
        </li>
        <li class="nav-item">
            <router-link to='/episodios' class="nav-link">Episodios</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script>

</script>



