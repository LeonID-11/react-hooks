const handlers = {
    DEFAULT: (state) => state,
}

export const firebaseReduser = (state, action) => {
    const hander =  handlers.DEFAULT;
    return hander(state, action)
}