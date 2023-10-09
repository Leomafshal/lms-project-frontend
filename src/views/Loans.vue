<template>
  <div class="table-responsive">
	<table class="table">
		<thead>
			<tr class="fw-bold fs-6 text-gray-800">
				<th>Name</th>
				<th>Position</th>
				<th>Office</th>
				<th>Age</th>
				<th>Start date</th>
				<th>Salary</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Tiger Nixon</td>
				<td>System Architect</td>
				<td>Edinburgh</td>
				<td>61</td>
				<td>2011/04/25</td>
				<td>$320,800</td>
			</tr>
			<tr>
				<td>Garrett Winters</td>
				<td>Accountant</td>
				<td>Tokyo</td>
				<td>63</td>
				<td>2011/07/25</td>
				<td>$170,750</td>
			</tr>
		</tbody>
	</table>
</div>


</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted } from 'vue'
import axios from "axios";
import { useLoanStore } from "@/stores/loans";
import Swal from "sweetalert2/dist/sweetalert2.js";
export default defineComponent({
  name: "loans-main",
  components: {
   
  },
	setup() {
    const store = useLoanStore();
		onMounted(async () => {
			console.log(`the component is now mounted.`)
			// await store.getLoans()
			axios.get("http://api.loan.develop/v1/loans/", {
				headers: {
					"authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMzJkMGI3ZWVhYWVkMzI4YWQ2MWQxMjI3OGYxNWFkNWZhM2JhM2M0ODgxMTdjZGVkZmQzYTQwMmMxYTY4MzRjMDFiYjBhOGQyY2U4YTYxNDUiLCJpYXQiOjE2OTY2MTk0MTUuNTE4MTcsIm5iZiI6MTY5NjYxOTQxNS41MTgxNzMsImV4cCI6MTY5NjcwNTgxNS4yMTI0MjIsInN1YiI6IjEiLCJzY29wZXMiOlsiKiJdfQ.jrPJcZpUSkXDr_1PxwKZaxkbODjUWrk4Q23sqTgZlqIBAgfB7iXPwsKXqkJKJ_4JllrsF0l21zuLSgKy6tW9ZtS-kkmhSwz3vJKE1ACOh4uqAqHQuid4wCvZP0y2eVM4snaOVMR4hQIUWqM5BKiVA_rdZNJfFXr8mGEyzXxHh-JoV8yA_b5fmxArFrzFXgwsZh_WQLdTBDPl8tSACi0INe5RODzQlmxvA56Ziyz9O6OL-WlZQwMmkM2s_1mIYN1yUXB4dw9NXNQdDiVaGRhereQfxmrMGaowvuM6G6dHeCFHQLJjyjvJxFGK40UgEeGpssZlrR__-Gk-Pvx2U9qwFiwMcFUmjvx4DbU9G9rQW6a-wzx3CyK1PIgwRZhvRED0iJ7kyAOppM8eitDXgKNqyvLIksnO_p_VCxNu9_5hooKXT_m2jfxIsvhBQHsD1CKgeRBVhuckYDNVOlNS4pxqRNYDrrXmK43AbaPc526qGP-4OCK_eE1DQZa0hnkeaT1O78Y0uJu49ClHFPa8Dop67ZIE7q2e8z49p9Sez8YtzuwZnUCr8nUbe_W8Y90bZu4hQoITvsn6FCAVf596bfZmGxbhs7N6Vl3qIRI05A7E8TMgNuTjWvkgSptkq4aBiiFLXYlx5j5TLomewljDf_Oae-wPsPBj95W8_A_A2Hf-Zl4",
				// 	'Cookie': 'XSRF-TOKEN=eyJpdiI6IjM5NVRRblNldFZRTEVoVUdMVG9zWmc9PSIsInZhbHVlIjoiNGdQMjhkcnNIMjhUMUYrbVdoM2dTeEFnd29nbG44ZWc4UzQ4UXhQdFpyRndUSVVqOWNnekdmaEJvdE11d1UxZ055Y0NVQWtmMG0wU0lSVDdvclkxWDRpUEJtem5FZXBtVkUxMitoNG5WNXpHWUhrZDkzMk82UHcybTQxSG5DQzkiLCJtYWMiOiIyZDE2ZTViYWE3MTM5NmYyZmNmYzc5OTAxMmM1ZDljMDhjZDBjMjExNDAyOTE4YjJlM2VlYzdjNzMxMTFmNGEwIiwidGFnIjoiIn0%3D; apiato=eyJpdiI6Ims4UEZVZFErUkJBaWREWThZaXZhR2c9PSIsInZhbHVlIjoiQ1Y1MmNGY2thUmxUUjh1SXhzaktmZDBYU0l4UjZuejB6ZUJSTlFqTXRCc1BlOERZUGxrM1RMV1BXTElHMGYwSW4ycE5CSlpWT09UWVRZdTZhVTRaaDJxTks1WGJqREk1WVM2L3diRE5mTlBoUHBNcCs1RU96NHE5TjRTOTJLMHkiLCJtYWMiOiJmNGU2MmI3N2Q0NDRiYjA5NjY5MDgzNzcyM2Y5NzJkNGMyMzM1ZDI5ZjBlNzFlMWJlOTRhNWFiYjM2ODQ5YTA2IiwidGFnIjoiIn0%3D'
				}
			}).then(res => console.log("response from loans", res)).catch(err => console.log("error from response", err))
			const error = Object.values(store.errors);
      console.log("value", error)
			if (error.length === 0) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(() => {
          // Go to page after successfully login
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }
		})
    return {
      
    };
  },
});
</script>
