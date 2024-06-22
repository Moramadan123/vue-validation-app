<template>
  <form action="" @click.prevent>
    <div class="row g3 align-items">
      <h1>Sign up</h1>
      <div class="col-auto d-block mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="enter your name"
          v-model="name"
        />
        <span class="error-feedback" v-if="v$.name.$error">{{
          v$.name.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="email"
          class="form-control"
          placeholder="enter your email"
          v-model="email"
        />
        <span class="error-feedback" v-if="v$.email.$error">{{
          v$.email.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          type="password"
          class="form-control"
          placeholder="enter your password"
          v-model="pass"
        />
        <span class="error-feedback" v-if="v$.pass.$error">{{
          v$.pass.$errors[0].$message
        }}</span>
      </div>
    </div>
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button type="submit" @click="signupnow()" class="btn btn-primary">
          Sign Up now
        </button>
        &nbsp; &nbsp; &nbsp;
        <button @click="signinpage()" type="submit" class="btn btn-link">
          Sign in
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "SignUp",
  components: {
    // SignUpForm,
  },
  data() {
    return {
      v$: useValidate(),
      name: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(10) },
      pass: { required },
      email: { required, email },
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
    signinpage() {
      this.$router.push({ name: "Login" });
    },
    signupnow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Form Validate success");
      } else {
        console.log("failed");
      }
    },
  },
};
</script>

<style></style>
