<template>
    <!-- Section: Design Block -->
    <section class="background-radial-gradient overflow-hidden">
   

    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            The best offer <br />
            <span style="color: hsl(218, 81%, 75%)">for your business</span>
            </h1>
          
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

            <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">
                <form>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                   
                </div>

                <!-- Email input -->
                <div data-mdb-input-init class="form-outline mb-4">
                    <input v-model="correo" type="email" id="form3Example3" class="form-control" />
                    <label class="form-label" for="form3Example3">Email</label>
                </div>

                <!-- Password input -->
                <div data-mdb-input-init class="form-outline mb-4">
                    <input v-model="password" type="password" id="form3Example4" class="form-control" />
                    <label class="form-label" for="form3Example4">Password</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                    </label>
                </div>

                <h3 class="mb-5">Registro de usuarios</h3>
                <div v-if="mensaje==1" class="alert alert-primary" role="alert">
                    Usuario Registrado con Exito
                </div>

                <!-- Submit button -->
                <button @click.prevent="registro()" type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
                    Sign up
                </button>

                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    <!-- Section: Design Block -->

</template>

<style scoped>
.background-radial-gradient {
background-color: hsl(218, 41%, 15%);
background-image: radial-gradient(650px circle at 0% 0%,
    hsl(218, 41%, 35%) 15%,
    hsl(218, 41%, 30%) 35%,
    hsl(218, 41%, 20%) 75%,
    hsl(218, 41%, 19%) 80%,
    transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
    hsl(218, 41%, 45%) 15%,
    hsl(218, 41%, 30%) 35%,
    hsl(218, 41%, 20%) 75%,
    hsl(218, 41%, 19%) 80%,
    transparent 100%);
}

#radius-shape-1 {
height: 220px;
width: 220px;
top: -60px;
left: -130px;
background: radial-gradient(#44006b, #ad1fff);
overflow: hidden;
}

#radius-shape-2 {
border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
bottom: -60px;
right: -110px;
width: 300px;
height: 300px;
background: radial-gradient(#44006b, #ad1fff);
overflow: hidden;
}

.bg-glass {
background-color: hsla(0, 0%, 100%, 0.9) !important;
backdrop-filter: saturate(200%) blur(25px);
}
</style>

<script>
import{getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
    export default{
        name:"RegistroView",
        data(){
            return{
                correo:'',
                password:'',
                mensaje:0
                
            } 
        },
        methods:{
            registro(){
                createUserWithEmailAndPassword(getAuth(),this.correo,this.password)
                .then((data)=>{
                    this.mensaje=1;
                    this.correo ='';
                    this.password='';
                })
                .catch((error)=>{
                    alert(error.message)
                })
            },
        }
    }

</script>
