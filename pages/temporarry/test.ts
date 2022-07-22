import { ref } from '@nuxtjs/composition-api'

function usePost () {
  const post = ref({})

  const fetchPost = async (id) => {
    fetch('https://jsonplaceholder.typicodcom/posts/' + id)
      .then(response => response.json())
      .then(json => post.value = json)
  }

  return {
    post,
    fetchPost
  }  
}