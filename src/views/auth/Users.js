import { useState, useEffect } from 'react'
import axios from 'api/axios'
const Users = () => {
  const [ users, setUsers ] = useState();

  useEffect(()=>{
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axios.get('/users', {
          signal: controller.signal
        });
        console.log(response.data);
        isMounted && setUsers(response.data);

      } catch (error) {
        console.error(error);
      }
    }

    getUsers();
    return () => {
      isMounted=false;
      controller.abort();
    }
  }, [])
  return (
    <article>
      <h2>Users List</h2>
      { users?.lenght
        ?(
          <ul>
            {users.map((user, i)=> <li key={i}>{user?.username}</li>)}
          </ul>
        ): <p>No users to display</p>
<<<<<<< HEAD

=======
      
>>>>>>> fa5bb244d20c5f5b8e55d4afde21994d841e7dc7
      }
    </article>
  )
}

<<<<<<< HEAD
export default Users;
=======
export default Users
>>>>>>> fa5bb244d20c5f5b8e55d4afde21994d841e7dc7
