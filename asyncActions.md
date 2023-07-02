## Application

The application we are going to build fetches a list of users from an API end point and stores it in the redux store.
Let's see:

- How our state would look like ?
- What are the different actions ?
- And how the reducer would work ?

### State

---

Typically for data fetching, we will have 3 properties for the state object

```
state = {
  loading: true,
  data: [],
  error: ''
}
```

**loading** - Display a loading spinner in your component.
**data** - List of users
**error** - Display error to the users

### Actions

---

We will have 3 actions in our application

- **FETCH_USERS_REQUEST** - Fetch list of users
- **FETCH_USERS_SUCCESS** - Fetched successfully
- **FETCH_USERS_FAILURE** - Error fetching the data

### Reducers

---

case **FETCH_USERS_REQUEST**
&emsp;&emsp;&nbsp;loading: true

case **FETCH_USERS_SUCCESS**
&emsp;&emsp;&nbsp;loading: false
&emsp;&emsp;&nbsp;users: data (from API)

case **FETCH_USERS_FAILURE**
&emsp;&emsp;&nbsp;loading: false
&emsp;&emsp;&nbsp;error: error (from API)
