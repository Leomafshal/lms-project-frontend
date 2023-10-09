import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export const useLoanStore = defineStore("loan", () => {
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());

  function getLoans() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return ApiService.get("getallstatements/pnwA5dDk9bjPDr31")
      .then(({ data }) => {
        console.log("no error", data)
        
      })
      .catch((error) => {
        console.log("error from loans api", error)
        // setError(response.data.message);
      });
    } else {
      purgeAuth();
    }
    function setError(error: any) {
      errors.value = { ...error };
    }

    function purgeAuth() {
      isAuthenticated.value = false;
      errors.value = [];
      JwtService.destroyToken();
    }
  }
  return {
    errors,
    isAuthenticated,
    getLoans
  };
});
