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
<br/>**data** - List of users
<br/>**error** - Display error to the users

### Actions

---

We will have 3 actions in our application

- **FETCH_USERS_REQUEST** - Fetch list of users
- **FETCH_USERS_SUCCESS** - Fetched successfully
- **FETCH_USERS_FAILURE** - Error fetching the data

### Reducers

---

case **FETCH_USERS_REQUEST**
<br/>&emsp;&emsp;&nbsp;loading: true

case **FETCH_USERS_SUCCESS**
<br/>&emsp;&emsp;&nbsp;loading: false
<br/>&emsp;&emsp;&nbsp;users: data (from API)

case **FETCH_USERS_FAILURE**
<br/>&emsp;&emsp;&nbsp;loading: false
<br/>&emsp;&emsp;&nbsp;error: error (from API)

### Async action creators

---

**axios** : Requests and API end point

**redux-think**
<br/>&nbsp; It is the standard way to define async action creators
<br/>&nbsp; It's a Middleware
