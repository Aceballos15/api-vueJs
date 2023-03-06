<template>
    <div class="alert alert-success mt-2">
      <h1 class="text-center">Conoce aqui los personajes con vida</h1>
    </div>
    <div class="row">
    <div class="mt-5 col-sm-3 mb-3" v-for="dato in datos.results" v-bind:key="dato">
      <div class="card" >
        <a @click="open_modal(dato)" data-bs-toggle="modal" data-bs-target="#1">
          <img :src="dato.image" class="card-img-top" alt="..." />
        </a>
    <div class="card-body">
      <h5 class="card-title" style="color:green" >{{ dato.name }}</h5>
      <small><b>Ultima locacion:</b></small>
      <p class="card-text">{{ dato.location.name }}</p>
      <small><b>Genero: </b></small>
      <p class="card-text" style="color:blue">{{ dato.gender }}</p>
  
      <small><b>Estado de vida:</b></small>
      <p class="card-text" style="color:red">{{ dato.status }}</p>
  
      <small><b>Especie:</b></small>
      <p class="card-text" style="color:red">{{ dato.species }}</p>
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

  <!-- Modal -->
<div v-if="show" class="modal fade" id="1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Capitulos de {{ dato.name }} <br> {{ dato.episode.length }} episodios</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Episodio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="d in dato.episode" v-bind:key="d">
              <th scope="row">
               <a :href=" d "> {{ d}} </a> 
              </th>
            </tr>
            </tbody>
            </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </template>
  
  <script>
export default {
      data () {
        return {
          datos : [], 
          dato: [],
          pages: "",
          current_page: 1, 
          show: false,
        }
      }, 
      methods: { 
        async get_data(page){
          await this.axios.get(`/character?page=${page}&status=alive`)
          .then(response=>{
            this.datos = response.data
            this.pages = response.data.info.pages
            this.current_page = page;
            console.log(response.data)
            })
            .catch(error=>{
              console.log(error)
          })
        }, 
        open_modal(dato){
          this.dato = dato
          this.show = true
        }
      }, 
      mounted(){
        this.get_data(1)
      }
    }
  
  </script>