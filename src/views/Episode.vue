<template>
    <div class="alert alert-success mt-2">
      <h1 class="text-center">Episodios</h1>
        <input class="form-control me-2" v-model="buscar" type="search" placeholder="Search" aria-label="Search">
    </div>
    <h3>  {{ buscar }}</h3>
    <div class="row">
       
      <div
        class="mt-5 col-sm-3 mb-3"
        v-for="dato in datos.results"
        v-bind:key="dato"
      >
        <div class="card">
          <div class="card-body">
            
            <h5 class="card-title" style="color: green">{{ dato.name }}</h5>
            <small><b>Fecha de lanzamiento:</b></small>
            <p class="card-text">{{ dato.air_date }}</p>
            <small><b>episodio: </b></small>
            <p class="card-text" style="color: blue">{{ dato.episode }}</p>
  
            <small><b>Creado:</b></small>
            <p class="card-text" style="color: red">{{ dato.created }}</p>
  
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination" >
        <li class="page-item">
          <a class="page-link" v-bind:class="{'disabled': current_page == 1}" @click="  get_data(current_page-1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="pag in pages" v-bind:key="pag">
          <a class="page-link" v-if="pag < current_page + 12 && pag > current_page -12 " v-bind:class="{'active': pag == current_page }"  @click="  get_data(pag)">{{ pag }} </a>
        </li>
        <li class="page-item">
          <a class="page-link" v-bind:class="{'disabled': current_page == pages}"  @click="  get_data(current_page+1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul> 
    </nav>
  

  </template>
  
  <script>
export default {
    data() {
      return {
        datos: [],
        pages: "",
        buscar: '',
        current_page: 1, 
      };
    },
    methods: {
      async get_data(page) {
        await this.axios
        .get(`/episode?page=${page}`)
        .then((response) => {
            this.datos = response.data;
            this.pages = response.data.info.pages;
            this.current_page = page;
            console.log(response.data);
          })
        .catch((error) => {
            console.log(error);
          });
      }
    },
    computed: {
      filteredDatos() {
        return this.datos.filter(dato => {
          return dato.name.toLowerCase().includes(this.buscar.toLowerCase())
        })
      }
    },
    mounted() {
      this.get_data(1);
    }
    
  };
  </script>
  