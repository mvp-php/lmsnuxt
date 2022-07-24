export default function ({ $auth, redirect }) {

  if (typeof window !== 'undefined') {

    // Perform localStorage action
    const user = localStorage.getItem('userData');
    if (user === null) {
      redirect.push('/login');

    }

  }
}