const AuthContext = createContext()

function AuthProvider({ children }) {
  const [state, setState] = React.useState({
    status: 'pending',
    error: null,
    user: null
  })
  React.useEffect(() => {
    getUser().then(
      (user) => setState({ status: 'success', error: null, user }),
      (error) => setState({ status: 'error', error, user: null })
    )
  }, [])

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        'Loading...'
      ) : state.status === 'error' ? (
        <div>
          Oh no
          <div>
            <pre>{state.error.message}</pre>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}
