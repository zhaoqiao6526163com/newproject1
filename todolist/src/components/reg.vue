<template>
  <div class="reg">
      账号:<input type="text" ref="us"><br>
      密码:<input type="text" ref="ps"><br>
          <button @click="reg">注册</button><button @click="login">登录</button>
  </div>
</template>

<script>
export default {
      methods:{
          reg(){
              this.$axios.post("http://47.95.207.1:8080/v1/user/reg",{us:this.$refs.us.value,ps:this.$refs.ps.value})
              .then((data)=>{
                    console.log(data);
              })
          },
          login(){
            console.log(456)
              this.$axios.post("http://47.95.207.1:8080/v1/user/login",{us:this.$refs.us.value,ps:this.$refs.ps.value})
              .then((data)=>{
                    console.log(data);
                    if(data.data.err ==0){
                          this.$router.push("/about");
                    }
              })
          }

      }
}
</script>


<style scoped>

</style>