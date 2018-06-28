<template>
  <div>
    <h3>Original Value: {{ country }}</h3>
    <h3>Computed Value: {{ changeToUpperCase }}</h3>
    <input v-model="country"
          placeholder="Add a Country"
          @keyup.enter="addCountry">
    <ul>
      <li v-for="item in countries"
      :key="item">{{item}}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      country: '',
      countries: ["Cambodia", "Spain", "France", "Peru", "Germany"],
    }
  },
  computed:{
    changeToUpperCase(){
      return this.country.toUpperCase();
    }
  },
  methods:{
    addCountry(){
      if(!this.countries.includes(this.country)){
        this.countries.push(this.country);
      }
      this.country = '';
    }
  },
  watch:{
    country(newVal, oldVal){
      console.log("Data Changed", newVal, oldVal);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
