const authProvider = {
    // authentication
    login: ({ username, password }) => {
        const request = new Request('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password,admin:true}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                console.log(response)
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                } 
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('token', auth.token);
                localStorage.setItem('auth', JSON.stringify(auth));
                localStorage.setItem('permissions', auth.token);
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { user} = JSON.parse(localStorage.getItem('auth'));
            let userId=user._id;
            let username=user.username
            return Promise.resolve({ userId, username });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    // authorization
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? 
        Promise.resolve() 
        :
         Promise.reject();
    }
};

export default authProvider;
